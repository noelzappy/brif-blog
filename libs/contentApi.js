import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: "http://localhost:2368",
  key: "6e9ccf9089db962c0c9903f7df",
  version: "v5.82",
});

export const getPosts = async () => {
  return api.posts.browse({
    include: "authors",
  });
};

export const getFeaturedPosts = async () => {
  return api.posts.browse({
    filter: "featured:true",
    include: "authors",
    limit: 6,
  });
};

export const getRecentPosts = async () => {
  return api.posts.browse({
    include: "authors",
    limit: 6,
    published_at: `> '${new Date(
      new Date().setDate(new Date().getDate() - 30)
    )}'`,
  });
};

export const getAuthors = async () => {
  return api.authors.browse();
};

export const getSinglePost = async (slug) => {
  return api.posts.read({
    slug,
    include: "authors,tags",
  });
};

export const getSingleAuthor = async (slug) => {
  return api.authors.read({
    slug,
  });
};

export const getPostsByAuthor = async (slug) => {
  return api.posts.browse({
    filter: `authors.slug:${slug}`,
    include: "authors",
  });
};

export const getSettings = async () => {
  return api.settings.browse();
};

export const getPages = async () => {
  return api.pages.browse();
};

export default api;
