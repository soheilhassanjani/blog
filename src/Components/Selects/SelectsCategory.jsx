import { Alert, Select } from "antd";
import React from "react";
import { useGetCategories } from "Hook/api/Categories";

function SelectsCategory({ value, onChange }) {
  const Categories = useGetCategories({
    Page: 1,
    PageSize: 9999999,
  });
  if (Categories.isError)
    return <Alert message="خطا در بارگذاری..." type="error" />;

  const options = Categories?.data?.data?.data?.results || [];
  return (
    <Select
      loading={Categories.isLoading}
      style={{ width: "100%" }}
      placeholder="موردی را انتخاب کنید ..."
      value={value}
      onChange={onChange}
      options={options.map((i) => ({
        label: i?.name,
        value: i?.id,
      }))}
    />
  );
}

export default SelectsCategory;
