import * as apiUsers from "Api/Users";
import { useMutation } from "react-query";

const usePostLogin = () => {
  return useMutation(apiUsers.postLogin, {
    onSuccess: () => {
      //   queryCache.clear();
    },
  });
};

const usePostRegister = () => {
  return useMutation(apiUsers.postRegister, {
    onSuccess: () => {
      //   queryCache.clear();
    },
  });
};

export { usePostLogin, usePostRegister };
