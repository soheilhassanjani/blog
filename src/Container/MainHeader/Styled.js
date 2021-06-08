import { Layout } from "antd";
import styled from "styled-components";

const { Header } = Layout;

const IconStyled = styled.div`
  font-size: 18px;
  cursor: pointer;
  transition: color 0.3s;
  &:hover {
    color: #1890ff;
  }
`;

const StyledHeader = styled(Header)`
  background: #fff;
  padding: 0;
`;

const StyledHeaderBody = styled.div`
  background: #fff;
  padding: 0 24px;
  line-height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserBox = styled.div`
  display: flex;
  align-items: center;
`;

export { IconStyled, StyledHeader, StyledHeaderBody, UserBox };
