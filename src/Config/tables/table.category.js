import NoWrapText from "Components/NoWrapText/NoWrapText";

const TABLE_CATEGORY = [
  {
    title: "name",
    dataIndex: "name",
    key: "name",
    render: (value) => {
      return <NoWrapText>{value || "بدون داده"}</NoWrapText>;
    },
  },
  {
    title: "parentCategoryName",
    dataIndex: "parentCategoryName",
    key: "parentCategoryName",
    render: (value) => {
      return <NoWrapText>{value || "بدون داده"}</NoWrapText>;
    },
  },
  {
    title: "parentCategoryId",
    dataIndex: "parentCategoryId",
    key: "parentCategoryId",
    render: (value) => {
      return <NoWrapText>{value || "بدون داده"}</NoWrapText>;
    },
  },
];

export default TABLE_CATEGORY;
