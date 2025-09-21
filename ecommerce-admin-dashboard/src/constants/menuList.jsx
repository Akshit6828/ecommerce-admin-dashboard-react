export const menuItemsList = [
  {
    id: 1,
    label: "Dashboards",
    children: [
      {
        id: 11,
        route: "/dashboard/default",
        label: "Default",
        hasChildren: false,
        icon: "/assets/icons/left-side-panel/Dashboard.svg",
      },
      {
        id: 12,
        route: "/dashboard/ecommerce",
        label: "eCommerce",
        hasChildren: true,
        icon: "/assets/icons/left-side-panel/Ecommerce.svg",
      },
      {
        id: 13,
        route: "/dashboard/projects",
        label: "Projects",
        hasChildren: true,
        icon: "/assets/icons/left-side-panel/File.svg",
        children: [],
      },
      {
        id: 14,
        route: "/dashboard/online-courses",
        label: "Online Courses",
        hasChildren: true,
        icon: "/assets/icons/left-side-panel/Book-Icon.svg",
        children: [],
      },
    ],
  },
  {
    id: 2,
    label: "Pages",
    children: [
      {
        id: 21,
        label: "User Profile",
        route: "/pages/user-profile",
        icon: "/assets/icons/left-side-panel/User-Profile.svg",
        hasChildren: true,
        children: [
          { id: 211, route: "/pages/user-profile/overview", label: "Overview" },
          { id: 212, route: "/pages/user-profile/projects", label: "Projects" },
          {
            id: 213,
            route: "/pages/user-profile/campaigns",
            label: "Campaigns",
          },
          {
            id: 214,
            route: "/pages/user-profile/documents",
            label: "Documents",
          },
          {
            id: 215,
            route: "/pages/user-profile/followers",
            label: "Followers",
          },
        ],
      },
      {
        id: 22,
        route: "/pages/account",
        label: "Account",
        icon: "/assets/icons/left-side-panel/Account.svg",
        hasChildren: true,
      },
      {
        id: 23,
        route: "/pages/corporate",
        label: "Corporate",
        icon: "/assets/icons/left-side-panel/UsersThree.svg",
        hasChildren: true,
      },
      {
        id: 24,
        route: "/pages/blog",
        label: "Blog",
        icon: "/assets/icons/left-side-panel/Blog.svg",
        hasChildren: true,
      },
      {
        id: 25,
        route: "/pages/social",
        label: "Social",
        icon: "/assets/icons/left-side-panel/Social.svg",
        hasChildren: true,
      },
    ],
  },
];
