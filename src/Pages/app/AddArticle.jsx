import { Button, Col, Form, Input, message, Row } from "antd";
import SelectsCategory from "Components/Selects/SelectsCategory";
import { usePostPosts } from "Hook/api/Posts";
import PageLayout from "Layout/PageLayout";
import { useAddArticleCtx } from "Provider/addArticle/addArticle.provider";
import { useAuthCtx } from "Provider/auth/auth.provider";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { errorHandlerAddArticle, StatusError } from "Utils/errorHandler";
const { TextArea } = Input;

function AddArticle() {
  const { user } = useAuthCtx();
  const { state, actions } = useAddArticleCtx();
  const PostPosts = usePostPosts();
  const onFinish = () => {
    const ERROR = errorHandlerAddArticle(state);
    if (ERROR.length) return handleState("errors", ERROR);
    handleState("errors", []);
    PostPosts.mutate(
      {
        title: state.title,
        description: state.description,
        categoryId: state.categoryId,
        authorId: user?.userId,
      },
      {
        onSuccess: (res) => {
          message.success(res?.data?.message);
          handleResetState();
        },
      }
    );
  };

  const { handleState, handleResetState } = actions;

  useEffect(() => {
    handleResetState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageLayout
      title="افزودن مقاله"
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
                loading={PostPosts.isLoading}
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

export default AddArticle;
