import { message } from "antd";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://185.165.118.211:9074/api/v1",
});

instance.interceptors.request.use(
  function (config) {
    const AUTH_TOKEN = localStorage.getItem("AUTH_TOKEN");
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
    message.error(error.response.data.message);
    return Promise.reject(error);
  }
);

export default instance;
