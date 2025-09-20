import { createBrowserRouter } from "react-router-dom";
import {
  LazyLandingPage,
  LazyMainLayout,
  LazyCommingSoon,
} from "./lazy-routes";

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
      {
        path: "/ecommerce",
        index: true,
        Component: LazyCommingSoon,
      },
      {
        path: "/projects",
        Component: LazyCommingSoon,
      },
      {
        path: "/online-courses",
        Component: LazyCommingSoon,
      },
      {
        path: "/profile",
        Component: LazyCommingSoon,
        children: [
          {
            path: "overview",
            index: true,
            Component: LazyCommingSoon,
          },
          {
            path: "projects",
            Component: LazyCommingSoon,
          },
          {
            path: "campaigns",
            Component: LazyCommingSoon,
          },
          {
            path: "documents",
            Component: LazyCommingSoon,
          },
          {
            path: "followers",
            Component: LazyCommingSoon,
          },
        ],
      },
      {
        path: "/account",
        Component: LazyCommingSoon,
      },
      {
        path: "/corporate",
        Component: LazyCommingSoon,
      },
      {
        path: "/corporate",
        Component: LazyCommingSoon,
      },
      {
        path: "/blog",
        Component: LazyCommingSoon,
      },
      {
        path: "/social",
        Component: LazyCommingSoon,
      },
    ],
  },
]);
