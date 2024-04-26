import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: "http://localhost:2368",
  key: "6e9ccf9089db962c0c9903f7df",
  version: "v5.82",
});

const getPosts = async () => {
  return await api.posts.browse({
    include: "authors",
  });
};

export default {
  getPosts,
};
