import { Layout, Menu } from "antd";
import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import menu from "Constant/menu";
import { Logo } from "./Styled";
const { Sider } = Layout;

function MainSider({ collapsed }) {
  const location = useLocation();
  return (
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
  );
}

export default React.memo(MainSider);
