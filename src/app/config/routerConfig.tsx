import { createBrowserRouter } from "react-router-dom";

export const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home page</h1>
  },
  {
    path: "/test",
    element: <h1>Test</h1>
  }
]);
