import { Button, Col, Form, Input, message, Row } from "antd";
import SelectsCategory from "Components/Selects/SelectsCategory";
import { usePostCategories } from "Hook/api/Categories";
import PageLayout from "Layout/PageLayout";
import { useAddCategoryCtx } from "Provider/addCategory/addCategory.provider";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { errorHandlerAddCategory, StatusError } from "Utils/errorHandler";

function AddCategory() {
  const { state, actions } = useAddCategoryCtx();
  const PostCategories = usePostCategories();
  const onFinish = () => {
    const ERROR = errorHandlerAddCategory(state);
    if (ERROR.length) return handleState("errors", ERROR);
    handleState("errors", []);
    PostCategories.mutate(
      {
        name: state.name,
        parentCategoryId: state.parentCategoryId,
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
      title="افزودن دسته بندی"
      extra={[
        <Button type="primary" key={0}>
          <Link to="/app/category">لیست دسته بندی</Link>
        </Button>,
      ]}
    >
      <Row>
        <Col offset={8} xs={8}>
          <Form onFinish={onFinish}>
            <Form.Item
              label="عنوان دسته بندی"
              labelCol={{ span: 8 }}
              validateStatus={StatusError(state.errors, "name") && "error"}
              help={StatusError(state.errors, "name")?.help || null}
            >
              <Input
                value={state.name}
                onChange={(e) => handleState("name", e.target.value)}
              />
            </Form.Item>
            <Form.Item label="دسته بندی والد" labelCol={{ span: 8 }}>
              <SelectsCategory
                value={state.parentCategoryId}
                onChange={(value) => handleState("parentCategoryId", value)}
              />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                type="primary"
                htmlType="submit"
                loading={PostCategories.isLoading}
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

export default AddCategory;
