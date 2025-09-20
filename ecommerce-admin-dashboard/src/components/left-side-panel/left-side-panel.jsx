import React from "react";
import "./left-side-panel.scss";

const menuConfig = [
  {
    id: 1,
    label: "Favorites",
    children: [
      { id: 11, route: "/overview", label: "Overview" },
      { id: 12, route: "/projects", label: "Projects" },
    ],
  },
  {
    id: 2,
    label: "Dashboards",
    children: [
      { id: 21, route: "/default", label: "Default" },
      { id: 22, route: "/ecommerce", label: "eCommerce" },
      { id: 23, route: "/projects", label: "Projects" },
      { id: 24, route: "/online-courses", label: "Online Courses" },
    ],
  },
  {
    id: 3,
    label: "Pages",
    children: [
      {
        id: 31,
        label: "User Profile",
        children: [
          { id: 311, route: "/profile/overview", label: "Overview" },
          { id: 312, route: "/profile/projects", label: "Projects" },
          { id: 313, route: "/profile/campaigns", label: "Campaigns" },
          { id: 314, route: "/profile/documents", label: "Documents" },
          { id: 315, route: "/profile/followers", label: "Followers" },
        ],
      },
      { id: 32, route: "/account", label: "Account" },
      { id: 33, route: "/corporate", label: "Corporate" },
      { id: 34, route: "/blog", label: "Blog" },
      { id: 35, route: "/social", label: "Social" },
    ],
  },
];

export default function LeftSidePanel() {
  const renderMenu = (items) => {
    return (
      <ul className="sidebar__list">
        {items.map((item) => (
          <li key={item.id}>
            {item.route ? (
              <a href={item.route} className="sidebar__link">
                {item.label}
              </a>
            ) : (
              <span className="sidebar__label">{item.label}</span>
            )}
            {item.children && renderMenu(item.children)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="sidebar">
      {/* User Info */}
      <div className="sidebar__user">
        <div className="sidebar__avatar">👤</div>
        <span className="sidebar__name">ByeWind</span>
      </div>

      {/* Render Menu */}
      {menuConfig.map((section) => (
        <div className="sidebar__section" key={section.id}>
          <h4 className="sidebar__title">{section.label}</h4>
          {renderMenu(section.children)}
        </div>
      ))}
    </div>
  );
}
