import { Layout, PageHeader } from "antd";
import styled from "styled-components";

const { Header } = Layout;

const StyledLayout = styled(Layout)`
  height: 100vh;
`;

const Trigger = styled.div`
  padding: 0 24px;
  font-size: 18px;
  line-height: 64px;
  cursor: pointer;
  transition: color 0.3s;
  &:hover {
    color: #1890ff;
  }
`;

const Logo = styled.div`
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
`;

const StyledHeader = styled(Header)`
  background: #fff;
  padding: 0;
`;

export { StyledLayout, Trigger, Logo, StyledHeader };
