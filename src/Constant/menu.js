import {
  FileOutlined,
  AppstoreOutlined,
  AppstoreAddOutlined,
  FileAddOutlined,
} from "@ant-design/icons";

const menu = [
  { icon: <FileOutlined />, key: "/app/article", label: "مقاله" },
  { icon: <FileAddOutlined />, key: "/app/add-article", label: "افزودن مقاله" },
  { icon: <AppstoreOutlined />, key: "/app/category", label: "دسته بندی" },
  {
    icon: <AppstoreAddOutlined />,
    key: "/app/add-category",
    label: "افزودن دسته بندی",
  },
];

export default menu;
