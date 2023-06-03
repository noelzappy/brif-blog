import { type } from "os";

export type QueryResult<T> = {
  results: T[];
  totalResults: number;
  totalPages: number;
  page: number;
  limit: number;
};

export type Post = {
  id: string;
  title: string;
  content: string;
  image: string;
  author: Author;
  datePublished: string;
  status: string;
  slug: string;
  excerpt: string;
  tags: string[];
  slug_history: string[];
  category: Category;
};

export type Author = {
  id: string;
  name: string;
  email: string;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  slug_history: string[];
  image: string;
  description: string;
};

export type GetPostsQuery = {
  status?: string;
  datePublished?: string;
  category?: string;
  tags?: string;

  page?: number;
  limit?: number;
  sortBy?: string;
};

export type UseInfiniteHook<T> = {
  data: T[];
  isLoading: boolean;
  hasNextPage: boolean;
  fetchNextPage: () => void;
  refetch: () => void;
  trigger: (params: any) => void;
  isSuccess: boolean;
  isError: boolean;
  error: any;
};
