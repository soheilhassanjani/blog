import React, { useEffect, useState } from "react";
import { useGetCategories } from "Hook/api/Categories";
import PageLayout from "Layout/PageLayout";
import { Button, Table } from "antd";
import { Link } from "react-router-dom";
import tableProps from "Constant/table";
import TABLE_CATEGORY from "Config/tables/table.category";

function Category() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(1);
  const Categories = useGetCategories({ Page: page, PageSize: pageSize });

  useEffect(() => {
    if (Categories.data && !Categories.isLoading && !Categories.isError) {
      setTotal(Categories?.data?.data?.data?.total);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Categories.data]);

  const dataSource = Categories?.data?.data?.data?.results || [];

  return (
    <PageLayout
      title="مقالات"
      extra={[
        <Button type="primary" key={0}>
          <Link to="/app/add-category">افزودن دسته بندی</Link>
        </Button>,
      ]}
    >
      <Table
        {...tableProps(page, pageSize, total, (page, pageSize) => {
          setPage(page);
          setPageSize(pageSize);
        })}
        loading={Categories.isLoading}
        dataSource={dataSource}
        columns={TABLE_CATEGORY}
      />
    </PageLayout>
  );
}

export default Category;
