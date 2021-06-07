import { Typography } from "antd";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled(Typography.Title)`
  margin-bottom: 55px !important;
`;

export { Container, Title };
