import NoWrapText from "Components/NoWrapText";

const TABLE_ARTICLE = [
  {
    title: "title",
    dataIndex: "title",
    key: "title",
    render: (value) => {
      return <NoWrapText>{value}</NoWrapText>;
    },
  },
  {
    title: "description",
    dataIndex: "description",
    key: "description",
    render: (value) => {
      return <NoWrapText>{value}</NoWrapText>;
    },
  },
  {
    title: "authorId",
    dataIndex: "authorId",
    key: "authorId",
    render: (value) => {
      return <NoWrapText>{value || "بدون داده"}</NoWrapText>;
    },
  },
  {
    title: "categoryId",
    dataIndex: "categoryId",
    key: "categoryId",
    render: (value) => {
      return <NoWrapText>{value || "بدون داده"}</NoWrapText>;
    },
  },
];

export default TABLE_ARTICLE;
