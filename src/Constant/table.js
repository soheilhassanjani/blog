const tableProps = (Page, PageSize, total, handlePagination) => ({
  bordered: true,
  scroll: { y: 400 },
  size: "middle",
  pagination: {
    showSizeChanger: true,
    current: Page,
    total: total,
    pageSize: PageSize,
    onChange: (page, pageSize) => {
      handlePagination(page, pageSize);
    },
  },
});

export default tableProps;
