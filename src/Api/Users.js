import instance from "Config/instanceAxios";

const BASE_URL = "/Users";

const postLogin = async (params) => {
  return await instance.post(BASE_URL + "/Login", params);
};

const postRegister = async (params) => {
  return await instance.post(BASE_URL, params);
};

export { postLogin, postRegister };
