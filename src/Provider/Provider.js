import Compose from "reactjs-compose";
import { BrowserRouter as Router } from "react-router-dom";
import { ConfigProvider } from "antd";
import { QueryClient, QueryClientProvider } from "react-query";
import LoginProvider from "Provider/login/login.provider";
import RegisterProvider from "Provider/register/register.provider";
import AddArticleProvider from "Provider/addArticle/addArticle.provider";
import AuthProvider from "Provider/auth/auth.provider";
import EditArticleProvider from "Provider/EditArticle/editArticle.provider";
import AddCategoryProvider from "Provider/addCategory/addCategory.provider";
import EditCategoryProvider from "Provider/EditCategory/editCategory.provider";

const queryClient = new QueryClient();

const Providers = [
  Router,
  [ConfigProvider, { direction: "rtl" }],
  [QueryClientProvider, { client: queryClient }],
  AuthProvider,
  LoginProvider,
  RegisterProvider,
  AddArticleProvider,
  EditArticleProvider,
  AddCategoryProvider,
  EditCategoryProvider,
];

function Provider({ children }) {
  return <Compose components={Providers}>{children}</Compose>;
}

export default Provider;
