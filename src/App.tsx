import React from "react";
import { RouterProvider } from "react-router-dom";
import Router from "./routes";

const App: React.FC = () => {
  return <RouterProvider router={Router} />;
};

export default App;
