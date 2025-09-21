import { Avatar } from "@mui/material";
import "./left-side-panel.scss";
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";

const userInfo = {
  firstName: "ByeWind",
  lastName: "",
  avatar: "/public/assets/images/user-avtar-image.png",
};

const menuItemsList = [
  {
    id: 1,
    label: "Dashboards",
    children: [
      {
        id: 11,
        route: "/dashboard/default",
        label: "Default",
        hasChildren: false,
        icon: "/public/assets/icons/left-side-panel/Dashboard.svg",
      },
      {
        id: 12,
        route: "/dashboard/ecommerce",
        label: "eCommerce",
        hasChildren: true,
        icon: "/public/assets/icons/left-side-panel/Ecommerce.svg",
        children: [],
      },
      {
        id: 13,
        route: "/dashboard/projects",
        label: "Projects",
        hasChildren: true,
        icon: "/public/assets/icons/left-side-panel/File.svg",
        children: [],
      },
      {
        id: 14,
        route: "/dashboard/online-courses",
        label: "Online Courses",
        hasChildren: true,
        icon: "/public/assets/icons/left-side-panel/Book-Icon.svg",
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
        icon: "/public/assets/icons/left-side-panel/User-Profile.svg",
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
        icon: "/public/assets/icons/left-side-panel/Account.svg",
        hasChildren: true,
      },
      {
        id: 23,
        route: "/pages/corporate",
        label: "Corporate",
        icon: "/public/assets/icons/left-side-panel/UsersThree.svg",
        hasChildren: true,
      },
      {
        id: 24,
        route: "/pages/blog",
        label: "Blog",
        icon: "/public/assets/icons/left-side-panel/Blog.svg",
        hasChildren: true,
      },
      {
        id: 25,
        route: "/pages/social",
        label: "Social",
        icon: "/public/assets/icons/left-side-panel/Social.svg",
        hasChildren: true,
      },
    ],
  },
];

const recentAndFavoriteMenus = [];

export default function LeftSidePanel() {
  const [selectedNavbar, setSelectedNavbar] = useState(
    menuItemsList?.[0]?.children?.[0]
  );

  const [recentlyOpenedMenu, setRecentlyOpenedMenu] = useState([]);
  const [selectedTab, setSelectedTab] = useState("");

  const handleRecentlyAddedMenu = (item) => {
    if (recentlyOpenedMenu?.some((openitem) => openitem.id === item.id)) {
      return;
    }

    setRecentlyOpenedMenu([...recentlyOpenedMenu, item]);
  };

  const handleNavItemClick = (event, selectedItem) => {
    event.stopPropagation();
    setSelectedNavbar(selectedItem);
    handleRecentlyAddedMenu(selectedItem);
  };

  const navItem = (item, isActive = false, hasParent = false, fromRecent) => {
    return (
      <>
        <span className="selected"></span>
        <span className="arrow">
          {item.hasChildren && (
            <img
              className={isActive ? "active" : ""}
              src="/public/assets/icons/left-side-panel/ArrowLineRight.svg"
              alt="arrow"
            />
          )}
        </span>
        {hasParent && !item.icon && <span className="arrow"></span>}
        <span className="nav-item">
          {item.icon ? (
            <span className="icon">
              <img src={item.icon} alt={item.label} />
            </span>
          ) : (
            fromRecent && <span className="dot"></span>
          )}
          <span className="label">{item.label}</span>
        </span>
      </>
    );
  };

  const renderMenu = (items, hasParent = false, fromRecent = false) => {
    if (items.length === 0) {
      return <></>;
    }

    return (
      <ul className="list">
        {items.map((item) => {
          const isActive =
            item.id.toString().includes(selectedNavbar.id.toString()) ||
            selectedNavbar.id.toString().includes(item.id.toString());

          return (
            <li
              key={item.id}
              onClick={(event) => handleNavItemClick(event, item)}
            >
              {item?.route ? (
                <Link
                  to={item.route}
                  className={`link ${
                    !fromRecent && selectedNavbar.id === item.id ? "active" : ""
                  }`}
                >
                  {navItem(item, isActive, hasParent, fromRecent)}
                </Link>
              ) : (
                navItem(item, isActive, hasParent, fromRecent)
              )}
              {item.children &&
                isActive &&
                !fromRecent &&
                renderMenu(item.children, true, false)}
            </li>
          );
        })}
      </ul>
    );
  };

  const recentTitles = useMemo(() => {
    const list = [];
    if (recentAndFavoriteMenus?.length > 0) {
      list.push("Favorites");
    }

    if (recentlyOpenedMenu?.length > 0) {
      list.push("Recently");
    }

    if (!selectedTab) {
      setSelectedTab(list[0]);
    }
    return list;
  }, [recentlyOpenedMenu.length, recentAndFavoriteMenus.length]);

  console.log({
    recentTitles,
  });

  return (
    <aside className="sidebar">
      {/* User Info */}
      <header className="user">
        <div className="avatar">
          {userInfo?.avatar ? (
            <Avatar
              sx={{ width: 24, height: 24 }}
              alt={`${userInfo.firstName} ${userInfo.lastName} image`}
              src={userInfo?.avatar}
            />
          ) : (
            <Avatar sx={{ width: 24, height: 24 }}>
              {userInfo?.firstName?.charAt(0).toUpperCase()}
            </Avatar>
          )}
        </div>
        <span className="name">
          {userInfo?.firstName} {userInfo?.lastName}
        </span>
      </header>

      {/* Recent and Favorites */}
      {(recentlyOpenedMenu?.length > 0 ||
        recentAndFavoriteMenus?.length > 0) && (
        <section className="recent-and-favorites">
          <div className="title-container">
            {recentTitles?.map((title, titleindex) => {
              return (
                <div
                  className={`title ${selectedTab === title && "active"}`}
                  key={`title-${titleindex}`}
                  onClick={() => setSelectedTab(title)}
                >
                  {title}
                </div>
              );
            })}
          </div>
          <nav aria-label={"recent"}>
            {selectedTab === "Favorites" &&
              renderMenu(recentAndFavoriteMenus, false, true)}
            {selectedTab === "Recently" &&
              renderMenu(recentlyOpenedMenu, false, true)}
          </nav>
        </section>
      )}

      {/* Menu */}
      {menuItemsList?.map((menuItem) => (
        <section className="section" key={`menu-item-${menuItem.id}`}>
          <h2 className="title">{menuItem.label}</h2>
          <nav aria-label={menuItem.label}>{renderMenu(menuItem.children)}</nav>
        </section>
      ))}
    </aside>
  );
}
