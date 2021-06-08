import { Button, Form, Input, InputNumber, message } from "antd";
import { useRegisterCtx } from "Provider/register/register.provider";
import React, { useEffect } from "react";
import { Container, Title } from "./Styled";
import { usePostRegister } from "Hook/api/Users";
import { useHistory } from "react-router";
import { useQueryClient } from "react-query";
import { errorHandlerRegister, StatusError } from "Utils/errorHandler";
import SelectsGender from "Components/Selects/SelectsGender";

const labelCol = { span: 10 };

function Index() {
  const queryClient = useQueryClient();

  const { state, actions } = useRegisterCtx();
  const { handleState, handleResetState } = actions;

  const PostRegister = usePostRegister();
  const history = useHistory();
  const onFinish = () => {
    const ERROR = errorHandlerRegister(state);
    if (ERROR.length) return handleState("errors", ERROR);
    handleState("errors", []);
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
          history.push("/login");
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
      <Title level={4}>عضو وبلاگ شوید !!!</Title>
      <Form onFinish={onFinish}>
        <Form.Item
          label="نام کاربری"
          labelCol={labelCol}
          validateStatus={StatusError(state.errors, "userName") && "error"}
          help={StatusError(state.errors, "userName")?.help || null}
        >
          <Input
            value={state.userName}
            onChange={(e) => handleState("userName", e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="رمز عبور"
          labelCol={labelCol}
          validateStatus={StatusError(state.errors, "password") && "error"}
          help={StatusError(state.errors, "password")?.help || null}
        >
          <Input.Password
            value={state.password}
            onChange={(e) => handleState("password", e.target.value)}
          />
        </Form.Item>
        <Form.Item
          label="ایمیل"
          labelCol={labelCol}
          validateStatus={StatusError(state.errors, "email") && "error"}
          help={StatusError(state.errors, "email")?.help || null}
        >
          <Input
            value={state.email}
            onChange={(e) => handleState("email", e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="نام و نام خانوادگی"
          labelCol={labelCol}
          validateStatus={StatusError(state.errors, "fullName") && "error"}
          help={StatusError(state.errors, "fullName")?.help || null}
        >
          <Input
            value={state.fullName}
            onChange={(e) => handleState("fullName", e.target.value)}
          />
        </Form.Item>
        <Form.Item
          label="سن"
          labelCol={labelCol}
          validateStatus={StatusError(state.errors, "age") && "error"}
          help={StatusError(state.errors, "age")?.help || null}
        >
          <InputNumber
            style={{ width: "100%" }}
            min={1}
            value={state.age}
            onChange={(value) => handleState("age", value)}
          />
        </Form.Item>

        <Form.Item
          label="جنسیت"
          labelCol={labelCol}
          validateStatus={StatusError(state.errors, "gender") && "error"}
          help={StatusError(state.errors, "gender")?.help || null}
        >
          <SelectsGender
            value={state.gender}
            onChange={(value) => handleState("gender", value)}
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
            style={{ marginRight: "10px" }}
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
