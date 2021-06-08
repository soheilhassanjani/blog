import { PageHeader } from "antd";
import React from "react";

function PageLayout({ children, title, subTitle = null, extra = [] }) {
  return (
    <div>
      <PageHeader title={title} subTitle={subTitle} extra={extra} />
      <div>{children}</div>
    </div>
  );
}

export default PageLayout;
