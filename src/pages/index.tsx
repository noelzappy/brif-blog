import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useGetPostsQuery } from "../services/api";

const Home: React.FC = () => {
  const { data } = useGetPostsQuery({
    page: 1,
  });

  return (
    <div>
      <h1>Home</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/category/45">Category</Link>
        <Link to="/post/23">Post</Link>
      </nav>

      {data?.results?.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <div>{post.content}</div>
        </div>
      ))}

      <Outlet />
    </div>
  );
};

export default Home;
