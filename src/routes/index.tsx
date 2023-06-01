import { createBrowserRouter } from "react-router-dom";
import Home from "../pages";
import NotFound from "../pages/NotFound";
import SinglePost from "../pages/SinglePost";
import Category from "../pages/Category";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/post/:id",
        element: <SinglePost />,
      },
      {
        path: "/category/:id",
        element: <Category />,
      },
    ],
  },
]);

export default Router;
