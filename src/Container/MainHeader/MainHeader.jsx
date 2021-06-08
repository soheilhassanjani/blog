import React from "react";
import { IconStyled, StyledHeader, StyledHeaderBody, UserBox } from "./Styled";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar } from "antd";
import { useAuthCtx } from "Provider/auth/auth.provider";

function MainHeader({ toggle, collapsed }) {
  const { user, actions } = useAuthCtx();
  const TriggerIcon = !collapsed ? MenuUnfoldOutlined : MenuFoldOutlined;

  const { handleLogout } = actions;
  return (
    <StyledHeader>
      <StyledHeaderBody>
        <IconStyled>
          <TriggerIcon onClick={toggle} />
        </IconStyled>
        <UserBox>
          <Avatar
            style={{ backgroundColor: "#87d068", marginLeft: 16 }}
            icon={<UserOutlined />}
          />
          <span style={{ marginLeft: 16 }}>{user?.userName}</span>
          <IconStyled>
            <LogoutOutlined onClick={handleLogout} />
          </IconStyled>
        </UserBox>
      </StyledHeaderBody>
    </StyledHeader>
  );
}

export default React.memo(MainHeader);
