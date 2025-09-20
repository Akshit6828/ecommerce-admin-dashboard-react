import React from "react";

const LazyMainLayout = React.lazy(() =>
  import("../layouts/main-layout/main-layout")
);
const LazyLandingPage = React.lazy(() =>
  import("../pages/landing-page/landing-page")
);

export { LazyMainLayout, LazyLandingPage };
