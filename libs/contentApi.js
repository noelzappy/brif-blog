import GhostContentAPI from "@tryghost/content-api";

export const API_URL = "https://blog.brifhq.com";

const api = new GhostContentAPI({
  url: API_URL,
  key: "1151a00fd722b07dd0b8d4d8a9",
  version: "v5.82",
});

export const getAllPosts = async () => {
  return api.posts.browse({ include: "authors,tags" });
};

export const getPosts = async (page = 1) => {
  return api.posts.browse({
    include: "authors,tags",
    limit: 6,
    page,
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
    include: "authors,tags",
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

export const getRelatedPosts = async (tag) => {
  return api.posts.browse({
    filter: `tags.slug:${tag}`,
    include: "authors",
    sort: "published_at:desc",
    limit: 3,
  });
};

export const getTags = async () => {
  return api.tags.browse();
};

export const getPostsByTag = async (tag, page) => {
  return api.posts.browse({
    filter: `tags.slug:${tag}`,
    include: "authors,tags",
  });
};

export const getTag = async (tag) => {
  return api.tags.read({
    slug: tag,
  });
};

export const getAuthor = async (slug) => {
  return api.authors.read({
    slug,
  });
};

export default api;
