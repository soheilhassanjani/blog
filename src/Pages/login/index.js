import { Button, Form, Input, message } from "antd";
import { usePostLogin } from "Hook/api/Users";
import { useLoginCtx } from "Provider/login/login.provider";
import React from "react";
import { useHistory } from "react-router";
import { Container, Title } from "./Styled";

function Index() {
  const { state, actions } = useLoginCtx();
  const PostLogin = usePostLogin();
  const history = useHistory();
  const onFinish = () => {
    PostLogin.mutate(
      {
        username: state.username,
        password: state.password,
      },
      {
        onSuccess: (res) => {
          console.log(res?.data);
          message.success(res?.data?.message);
          localStorage.setItem("AUTH_TOKEN", res?.data?.data?.token);
          history.push("/app");
        },
      }
    );
  };

  const { handleState } = actions;
  return (
    <Container>
      <Title level={4}>به وبلاگ خوش آمدید !!!</Title>
      <Form onFinish={onFinish}>
        <Form.Item
          label="نام کاربری"
          labelCol={{ span: 8 }}
          labelAlign={"left"}
        >
          <Input
            value={state.username}
            onChange={(e) => handleState("username", e.target.value)}
          />
        </Form.Item>

        <Form.Item label="رمز عبور" labelCol={{ span: 8 }} labelAlign={"left"}>
          <Input.Password
            value={state.password}
            onChange={(e) => handleState("password", e.target.value)}
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            type="primary"
            htmlType="submit"
            loading={PostLogin.isLoading}
          >
            ورود
          </Button>
          <Button
            type="default"
            htmlType="button"
            style={{ marginLeft: "10px" }}
            onClick={() => history.push("/register")}
          >
            ثبت نام
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
}

export default Index;
