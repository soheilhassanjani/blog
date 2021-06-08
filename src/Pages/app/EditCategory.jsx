import { Button, Col, Form, Input, message, Row } from "antd";
import SelectsCategory from "Components/Selects/SelectsCategory";
import { useGetCategorieById, usePutCategories } from "Hook/api/Categories";
import PageLayout from "Layout/PageLayout";
import { useEditCategoryCtx } from "Provider/EditCategory/editCategory.provider";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { errorHandlerAddCategory, StatusError } from "Utils/errorHandler";

function EditCategory() {
  const { id } = useParams();
  const GetCategorieById = useGetCategorieById({ id });
  const PutCategories = usePutCategories();
  const { state, actions } = useEditCategoryCtx();
  const onFinish = () => {
    const ERROR = errorHandlerAddCategory(state);
    if (ERROR.length) return handleState("errors", ERROR);
    handleState("errors", []);
    PutCategories.mutate(
      { id, name: state.name, parentCategoryId: state.parentCategoryId },
      {
        onSuccess: (res) => {
          message.success(res?.data?.message);
        },
      }
    );
  };

  const { handleState, handlePrevState } = actions;

  useEffect(() => {
    if (
      GetCategorieById?.data &&
      !GetCategorieById?.isError &&
      !GetCategorieById?.isLoading
    ) {
      const { name, parentCategoryId } = GetCategorieById?.data?.data?.data;
      handlePrevState({ name, parentCategoryId });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [GetCategorieById?.data]);

  return (
    <PageLayout
      title="ویرایش دسته بندی"
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
                filterOption={[+id]}
                value={state.parentCategoryId}
                onChange={(value) => handleState("parentCategoryId", value)}
              />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                type="primary"
                htmlType="submit"
                loading={PutCategories.isLoading}
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

export default EditCategory;
