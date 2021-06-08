import { Select } from "antd";
import React from "react";

function SelectsGender({ value, onChange }) {
  return (
    <Select
      style={{ width: "100%" }}
      placeholder="موردی را انتخاب کنید ..."
      value={value}
      onChange={onChange}
      options={[
        {
          label: "female",
          value: "female",
        },
        {
          label: "male",
          value: "male",
        },
      ]}
    />
  );
}

export default SelectsGender;
