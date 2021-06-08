import { Button, Col, Form, Input, message, Row } from "antd";
import SelectsCategory from "Components/Selects/SelectsCategory";
import { usePostPosts } from "Hook/api/Posts";
import PageLayout from "Layout/PageLayout";
import { useAddArticleCtx } from "Provider/addArticle/addArticle.provider";
import { useAuthCtx } from "Provider/auth/auth.provider";
import React from "react";
import { Link } from "react-router-dom";
const { TextArea } = Input;

function AddArticle() {
  const { user } = useAuthCtx();
  const { state, actions } = useAddArticleCtx();
  const PostPosts = usePostPosts();
  const onFinish = () => {
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
        },
      }
    );
  };

  const { handleState } = actions;
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
            <Form.Item label="عنوان مقاله" labelCol={{ span: 8 }}>
              <Input
                value={state.title}
                onChange={(e) => handleState("title", e.target.value)}
              />
            </Form.Item>
            <Form.Item label="دسته بندی" labelCol={{ span: 8 }}>
              <SelectsCategory
                value={state.categoryId}
                onChange={(value) => handleState("categoryId", value)}
              />
            </Form.Item>
            <Form.Item label="متن مقاله" labelCol={{ span: 8 }}>
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
