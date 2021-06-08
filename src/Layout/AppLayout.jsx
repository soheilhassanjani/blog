import React, { useState } from "react";
import { Layout } from "antd";
import { StyledLayout } from "./Styled";

import MainSider from "Container/MainSider/MainSider";
import MainHeader from "Container/MainHeader/MainHeader";

const { Content } = Layout;

function AppLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => setCollapsed((prevCollapsed) => !prevCollapsed);

  return (
    <StyledLayout>
      <MainSider collapsed={collapsed} />
      <Layout className="site-layout">
        <MainHeader toggle={toggle} collapsed={collapsed} />
        <Content
          style={{
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
