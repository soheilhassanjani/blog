import * as apiPosts from "Api/Posts";
import reactQueryConfig from "Constant/reactQuery";
import { useMutation, useQuery, useQueryClient } from "react-query";

const useGetPosts = (params) => {
  return useQuery(["getPosts", params], apiPosts.getPosts, {
    ...reactQueryConfig,
  });
};

const useGetPostById = (params) => {
  return useQuery(["getPostById", params], apiPosts.getPostById, {
    ...reactQueryConfig,
  });
};

const usePostPosts = () => {
  const queryClient = useQueryClient();
  return useMutation(apiPosts.postPosts, {
    onSuccess: () => {
      queryClient.invalidateQueries("getPosts");
    },
  });
};

const usePutPosts = () => {
  const queryClient = useQueryClient();
  return useMutation(apiPosts.putPosts, {
    onSuccess: () => {
      queryClient.invalidateQueries("getPosts");
      queryClient.invalidateQueries("getPostById");
    },
  });
};

export { useGetPosts, usePostPosts, useGetPostById, usePutPosts };
