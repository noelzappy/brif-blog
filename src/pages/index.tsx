import React from "react";
import { Outlet, Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Home</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/category/45">Category</Link>
        <Link to="/post/23">Post</Link>
      </nav>

      <Outlet />
    </div>
  );
};

export default Home;
