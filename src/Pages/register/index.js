import { Button, Form, Input, message } from "antd";
import { useRegisterCtx } from "Provider/register/register.provider";
import React from "react";
import { Container, Title } from "./Styled";
import { usePostRegister } from "Hook/api/Users";
import { useHistory } from "react-router";

const labelCol = { span: 10 };

function Index() {
  const { state, actions } = useRegisterCtx();
  const PostRegister = usePostRegister();
  const history = useHistory();
  const onFinish = () => {
    PostRegister.mutate(
      {
        userName: state.userName,
        email: state.email,
        password: state.password,
        fullName: state.fullName,
        age: state.age,
        gender: state.gender,
      },
      {
        onSuccess: () => {
          message.success("حساب کاربری شما ثبت گردید .");
          history.push("/register");
        },
      }
    );
  };

  const { handleState } = actions;
  return (
    <Container>
      <Title level={4}>عضو وبلاگ شوید !!!</Title>
      <Form onFinish={onFinish}>
        <Form.Item label="نام کاربری" labelCol={labelCol} labelAlign={"left"}>
          <Input
            value={state.userName}
            onChange={(e) => handleState("userName", e.target.value)}
          />
        </Form.Item>

        <Form.Item label="رمز عبور" labelCol={labelCol} labelAlign={"left"}>
          <Input.Password
            value={state.password}
            onChange={(e) => handleState("password", e.target.value)}
          />
        </Form.Item>
        <Form.Item label="ایمیل" labelCol={labelCol} labelAlign={"left"}>
          <Input
            value={state.email}
            onChange={(e) => handleState("email", e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="نام و نام خانوادگی"
          labelCol={labelCol}
          labelAlign={"left"}
        >
          <Input
            value={state.fullName}
            onChange={(e) => handleState("fullName", e.target.value)}
          />
        </Form.Item>
        <Form.Item label="سن" labelCol={labelCol} labelAlign={"left"}>
          <Input
            value={state.age}
            onChange={(e) => handleState("age", e.target.value)}
          />
        </Form.Item>

        <Form.Item label="جنسیت" labelCol={labelCol} labelAlign={"left"}>
          <Input
            value={state.gender}
            onChange={(e) => handleState("gender", e.target.value)}
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
          <Button
            type="primary"
            htmlType="submit"
            loading={PostRegister.isLoading}
          >
            ثبت نام
          </Button>
          <Button
            type="default"
            htmlType="button"
            style={{ marginLeft: "10px" }}
            onClick={() => history.push("/login")}
          >
            ورود
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
}

export default Index;
