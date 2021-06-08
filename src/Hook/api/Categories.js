import * as apiCategories from "Api/Categories";
import reactQueryConfig from "Constant/reactQuery";
import { useQuery } from "react-query";

const useGetCategories = (params) => {
  return useQuery(["getCategories", params], apiCategories.getCategories, {
    ...reactQueryConfig,
  });
};

export { useGetCategories };
