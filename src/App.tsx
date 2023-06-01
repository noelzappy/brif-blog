import React from "react";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import Router from "./routes";
import { store } from "./store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={Router} />
    </Provider>
  );
};

export default App;
