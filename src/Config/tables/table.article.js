import NoWrapText from "Components/NoWrapText/NoWrapText";
import { EditOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

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
  {
    title: "",
    key: "action",
    width: "60px",
    render: (_, record) => {
      return (
        <Link to={"/app/article/" + record?.id}>
          <EditOutlined style={{ fontSize: 20 }} />
        </Link>
      );
    },
  },
];

export default TABLE_ARTICLE;
