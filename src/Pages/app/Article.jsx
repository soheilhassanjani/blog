import { Button } from "antd";
import TABLE_ARTICLE from "Config/tables/table.article";
import tableProps from "Constant/table";
import PageLayout from "Layout/PageLayout";
import React, { useEffect, useState } from "react";
import { useGetPosts } from "Hook/api/Posts";
import { Link } from "react-router-dom";
import Table from "Components/Table";

function Article() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(1);
  const Posts = useGetPosts({ Page: page, PageSize: pageSize });

  useEffect(() => {
    if (Posts.data && !Posts.isLoading && !Posts.isError) {
      setTotal(Posts?.data?.data?.data?.total);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Posts.data]);

  const dataSource = Posts?.data?.data?.data?.results || [];

  return (
    <PageLayout
      title="مقالات"
      extra={[
        <Button type="primary" key={0}>
          <Link to="/app/add-article">افزودن مقاله</Link>
        </Button>,
      ]}
    >
      <Table
        {...tableProps(page, pageSize, total, (page, pageSize) => {
          setPage(page);
          setPageSize(pageSize);
        })}
        loading={Posts.isLoading}
        isError={Posts.isError}
        dataSource={dataSource}
        columns={TABLE_ARTICLE}
      />
    </PageLayout>
  );
}

export default Article;
