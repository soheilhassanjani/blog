import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import LoginProvider from "Provider/login/login.provider";
import { QueryClient, QueryClientProvider } from "react-query";
import RegisterProvider from "Provider/register/register.provider";
import { ConfigProvider } from "antd";
import AddArticleProvider from "Provider/addArticle/addArticle.provider";
import AuthProvider from "Provider/auth/auth.provider";
import EditArticleProvider from "Provider/EditArticle/editArticle.provider";
const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ConfigProvider direction="rtl">
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <LoginProvider>
              <RegisterProvider>
                <AddArticleProvider>
                  <EditArticleProvider>
                    <App />
                  </EditArticleProvider>
                </AddArticleProvider>
              </RegisterProvider>
            </LoginProvider>
          </AuthProvider>
        </QueryClientProvider>
      </ConfigProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
