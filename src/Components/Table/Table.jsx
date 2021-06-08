import React from "react";
import { Alert, Table as AntTable } from "antd";

function Table({ loading, isError, dataSource, ...props }) {
  if (isError && !loading) {
    return <Alert message="خطا در فرآیند" type="error" />;
  } else if (dataSource.length === 0 && !loading) {
    return <Alert message="داده ای موجود نیست" type="warning" />;
  } else {
    return (
      <AntTable
        loading={loading}
        dataSource={dataSource.map((i, index) => ({ ...i, key: index }))}
        {...props}
      />
    );
  }
}

export default Table;
