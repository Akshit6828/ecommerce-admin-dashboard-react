import React from "react";

const LazyMainLayout = React.lazy(() =>
  import("../layouts/main-layout/main-layout")
);
const LazyLandingPage = React.lazy(() =>
  import("../pages/landing-page/landing-page")
);
const LazyCommingSoon = React.lazy(() =>
  import("../pages/comming-soon/comming-soon")
);
const LazyOrders = React.lazy(() => import("../pages/orders/orders"));
export { LazyMainLayout, LazyLandingPage, LazyCommingSoon, LazyOrders };
