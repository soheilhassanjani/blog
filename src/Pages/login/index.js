import { Button, Form, Input, message } from "antd";
import { usePostLogin } from "Hook/api/Users";
import { useAuthCtx } from "Provider/auth/auth.provider";
import { useLoginCtx } from "Provider/login/login.provider";
import React, { useEffect } from "react";
import { useQueryClient } from "react-query";
import { useHistory } from "react-router";
import { errorHandlerLogin, StatusError } from "Utils/errorHandler";
import { Container, Title } from "./Styled";

function Index() {
  const queryClient = useQueryClient();
  const AuthCtx = useAuthCtx();

  const { state, actions } = useLoginCtx();
  const { handleState, handleResetState } = actions;

  const PostLogin = usePostLogin();
  const history = useHistory();
  const onFinish = () => {
    const { setUser } = AuthCtx?.actions;
    const ERROR = errorHandlerLogin(state);
    if (ERROR.length) return handleState("errors", ERROR);
    handleState("errors", []);
    PostLogin.mutate(
      {
        username: state.username,
        password: state.password,
      },
      {
        onSuccess: (res) => {
          message.success(res?.data?.message);
          setUser(res?.data?.data);
          history.push("/app");
        },
      }
    );
  };

  useEffect(() => {
    queryClient.clear();
    handleResetState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Title level={4}>به وبلاگ خوش آمدید !!!</Title>
      <Form onFinish={onFinish}>
        <Form.Item
          label="نام کاربری"
          labelCol={{ span: 8 }}
          validateStatus={StatusError(state.errors, "username") && "error"}
          help={StatusError(state.errors, "username")?.help || null}
        >
          <Input
            value={state.username}
            onChange={(e) => handleState("username", e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="رمز عبور"
          labelCol={{ span: 8 }}
          validateStatus={StatusError(state.errors, "password") && "error"}
          help={StatusError(state.errors, "password")?.help || null}
        >
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
            style={{ marginRight: "10px" }}
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
