import * as apiCategories from "Api/Categories";
import reactQueryConfig from "Constant/reactQuery";
import { useMutation, useQuery, useQueryClient } from "react-query";

const useGetCategories = (params) => {
  return useQuery(["getCategories", params], apiCategories.getCategories, {
    ...reactQueryConfig,
  });
};

const useGetCategorieById = (params) => {
  return useQuery(
    ["getCategorieById", params],
    apiCategories.getCategorieById,
    {
      ...reactQueryConfig,
    }
  );
};

const usePostCategories = () => {
  const queryClient = useQueryClient();
  return useMutation(apiCategories.postCategories, {
    onSuccess: () => {
      queryClient.invalidateQueries("getCategories");
    },
  });
};

const usePutCategories = () => {
  const queryClient = useQueryClient();
  return useMutation(apiCategories.putCategories, {
    onSuccess: () => {
      queryClient.invalidateQueries("getCategories");
      queryClient.invalidateQueries("getCategorieById");
    },
  });
};

export {
  useGetCategories,
  useGetCategorieById,
  usePostCategories,
  usePutCategories,
};
