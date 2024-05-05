import React from "react";
import { RouterProvider } from "react-router-dom";
import { routerConfig } from "./config/routerConfig";

const App = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={routerConfig} />
    </React.StrictMode>
  );
};

export default App;
