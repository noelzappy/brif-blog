import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: "https://panel.thebrif.com",
  key: "01cbf2d8097444e338131099e5",
  version: "v5.82",
});

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

const dd = {
  service: "Mailgun",
  host: "smtp.mailgun.org",
  secure: true,
  port: 587,
  auth: {
    user: "postmaster@mg.thebrif.com",
    pass: "3b0f62ea60358b5a5025376e4502fa75-86220e6a-708aefe9",
  },
};
