/* eslint-disable import/no-anonymous-default-export */
import * as API from "@/libs/contentApi";

export default async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const POSTS = await API.getAllPosts();

  const matchedPosts = POSTS.filter((post) => {
    const valuesToMatch =
      `${post.title} ${post.excerpt} ${post.slug} ${post.primary_tag.name} ${post.primary_author.name}`.toLowerCase();
    return valuesToMatch.toLowerCase().indexOf(req.body.q.toLowerCase()) >= 0;
  });

  res.status(200).json({
    posts: matchedPosts,
  });
};
