import { message } from "antd";
import axios from "axios";
import { getToken } from "Utils/auth";

const instance = axios.create({
  baseURL: "http://185.165.118.211:9074/api/v1",
});

export const setupInterceptors = (handleLogout) => {
  instance.interceptors.request.use(
    function (config) {
      const AUTH_TOKEN = getToken();
      if (AUTH_TOKEN) {
        config.headers["Authorization"] = "Bearer " + AUTH_TOKEN;
      }
      config.headers["Content-Type"] = "application/json";
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error?.response?.data?.message)
        message.error(error?.response?.data?.message);
      if (error?.response?.status === 401) handleLogout();
      return Promise.reject(error);
    }
  );
};

export default instance;
