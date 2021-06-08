import { Spin } from "antd";
import React from "react";
import { Container } from "./Styled";

function Loading() {
  return (
    <Container>
      <Spin />
    </Container>
  );
}

export default Loading;
