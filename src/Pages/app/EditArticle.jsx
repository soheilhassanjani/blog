import { Button, Col, Form, Input, message, Row } from "antd";
import SelectsCategory from "Components/Selects/SelectsCategory";
import { useGetPostById, usePutPosts } from "Hook/api/Posts";
import PageLayout from "Layout/PageLayout";
import { useAuthCtx } from "Provider/auth/auth.provider";
import { useEditArticleCtx } from "Provider/EditArticle/editArticle.provider";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { errorHandlerAddArticle, StatusError } from "Utils/errorHandler";
const { TextArea } = Input;

function EditArticle() {
  const { id } = useParams();
  const GetPostById = useGetPostById({ id });
  const PutPosts = usePutPosts();
  const { user } = useAuthCtx();
  const { state, actions } = useEditArticleCtx();
  const onFinish = () => {
    const ERROR = errorHandlerAddArticle(state);
    if (ERROR.length) return handleState("errors", ERROR);
    handleState("errors", []);
    PutPosts.mutate(
      {
        id,
        title: state.title,
        description: state.description,
        categoryId: state.categoryId,
        authorId: user?.userId,
      },
      {
        onSuccess: (res) => {
          message.success(res?.data?.message);
        },
      }
    );
  };

  const { handleState, handlePrevState } = actions;

  useEffect(() => {
    if (GetPostById?.data && !GetPostById?.isError && !GetPostById?.isLoading) {
      const { title, description, categoryId } = GetPostById?.data?.data?.data;
      handlePrevState({ title, description, categoryId });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [GetPostById?.data]);

  return (
    <PageLayout
      title="ویرایش مقاله"
      extra={[
        <Button type="primary" key={0}>
          <Link to="/app/article">لیست مقالات</Link>
        </Button>,
      ]}
    >
      <Row>
        <Col offset={8} xs={8}>
          <Form onFinish={onFinish}>
            <Form.Item
              label="عنوان مقاله"
              labelCol={{ span: 8 }}
              validateStatus={StatusError(state.errors, "title") && "error"}
              help={StatusError(state.errors, "title")?.help || null}
            >
              <Input
                value={state.title}
                onChange={(e) => handleState("title", e.target.value)}
              />
            </Form.Item>
            <Form.Item
              label="دسته بندی"
              labelCol={{ span: 8 }}
              validateStatus={
                StatusError(state.errors, "categoryId") && "error"
              }
              help={StatusError(state.errors, "categoryId")?.help || null}
            >
              <SelectsCategory
                value={state.categoryId}
                onChange={(value) => handleState("categoryId", value)}
              />
            </Form.Item>
            <Form.Item
              label="متن مقاله"
              labelCol={{ span: 8 }}
              validateStatus={
                StatusError(state.errors, "description") && "error"
              }
              help={StatusError(state.errors, "description")?.help || null}
            >
              <TextArea
                value={state.description}
                onChange={(e) => handleState("description", e.target.value)}
                rows={6}
              />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                type="primary"
                htmlType="submit"
                loading={PutPosts.isLoading}
              >
                ثبت
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </PageLayout>
  );
}

export default EditArticle;
