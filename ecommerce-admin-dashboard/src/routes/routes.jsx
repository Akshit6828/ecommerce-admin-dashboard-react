import { createBrowserRouter } from "react-router-dom";
import { LazyLandingPage, LazyMainLayout } from "./lazy-routes";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LazyMainLayout,
    children: [
      {
        path: "/",
        index: true,
        Component: LazyLandingPage,
      },
    ],
  },
]);
