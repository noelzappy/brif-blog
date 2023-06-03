import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetPostsQuery, QueryResult, Post } from "../types/all";
import { Config } from "../config";

export const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({ baseUrl: Config.API_URL }),
  endpoints: (builder) => ({
    getPosts: builder.query<QueryResult<Post>, GetPostsQuery>({
      query: (query) => {
        const params = new URLSearchParams(query as Record<string, string>);
        return {
          url: `/posts?${params.toString()}`,
          method: "GET",
        };
      },
    }),

    getPost: builder.query<Post, string>({
      query: (id) => `/posts/slug/${id}`,
    }),
  }),
});

export const { useGetPostsQuery, useGetPostQuery } = appApi;
