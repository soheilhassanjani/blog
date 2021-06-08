import NoWrapText from "Components/NoWrapText/NoWrapText";
import { Link } from "react-router-dom";
import { EditOutlined } from "@ant-design/icons";

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
  {
    title: "",
    key: "action",
    width: "60px",
    render: (_, record) => {
      return (
        <Link to={"/app/category/" + record?.id}>
          <EditOutlined style={{ fontSize: 20 }} />
        </Link>
      );
    },
  },
];

export default TABLE_CATEGORY;
