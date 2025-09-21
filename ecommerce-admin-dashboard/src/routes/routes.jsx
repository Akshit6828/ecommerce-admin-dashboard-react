import { createBrowserRouter, Navigate } from "react-router-dom";
import {
  LazyLandingPage,
  LazyMainLayout,
  LazyCommingSoon,
} from "./lazy-routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LazyMainLayout />,
    children: [
      { index: true, element: <Navigate to="/dashboard/default" /> },
      {
        path: "dashboard",
        element: <LazyLandingPage />,
        children: [
          { path: "default", index: true, element: <LazyLandingPage /> },
          { path: "ecommerce", element: <LazyCommingSoon /> },
          { path: "projects", element: <LazyCommingSoon /> },
          { path: "online-courses", element: <LazyCommingSoon /> },
        ],
      },
      {
        path: "pages",
        element: <LazyCommingSoon />,
        children: [
          {
            path: "user-profile",
            element: <LazyCommingSoon />,
            children: [
              { index: true, path: "overview", element: <LazyCommingSoon /> },
              { path: "projects", element: <LazyCommingSoon /> },
              { path: "campaigns", element: <LazyCommingSoon /> },
              { path: "documents", element: <LazyCommingSoon /> },
              { path: "followers", element: <LazyCommingSoon /> },
            ],
          },
          { path: "account", element: <LazyCommingSoon /> },
          { path: "corporate", element: <LazyCommingSoon /> },
          { path: "blog", element: <LazyCommingSoon /> },
          { path: "social", element: <LazyCommingSoon /> },
        ],
      },
      { path: "*", element: <Navigate to="/dashboard/default" replace /> },
    ],
  },
]);
