import * as apiPosts from "Api/Posts";
import reactQueryConfig from "Constant/reactQuery";
import { useQuery } from "react-query";

const useGetPosts = (params) => {
  return useQuery(["getPosts", params], apiPosts.getPosts, {
    ...reactQueryConfig,
  });
};

export { useGetPosts };
