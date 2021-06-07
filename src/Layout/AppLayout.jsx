import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Logo, StyledLayout, Trigger, StyledHeader } from "./Styled";
import menu from "Constant/menu";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const { Sider, Content } = Layout;

function AppLayout({ children }) {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => setCollapsed((prevCollapsed) => !prevCollapsed);
  const TriggerIcon = !collapsed ? MenuUnfoldOutlined : MenuFoldOutlined;

  return (
    <StyledLayout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Logo />
        <Menu theme="dark" mode="inline" selectedKeys={[location.pathname]}>
          {menu.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
              <Link to={item.key}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <StyledHeader>
          <Trigger onClick={toggle}>
            <TriggerIcon />
          </Trigger>
        </StyledHeader>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </StyledLayout>
  );
}

export default AppLayout;
