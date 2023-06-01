import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetPostsQuery, Paginated, Post } from "../types/all";

// Define a service using a base URL and expected endpoints

const baseUrl = "http://localhost:3001/v1";

export const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getPosts: builder.query<Paginated<Post>, GetPostsQuery>({
      query: (query) => {
        const params = new URLSearchParams(query as Record<string, string>);
        return {
          url: `/posts?${params.toString()}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetPostsQuery } = appApi;
