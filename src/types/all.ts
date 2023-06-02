export type Paginated<T> = {
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
};

export type Author = {
  id: string;
  name: string;
  email: string;
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
