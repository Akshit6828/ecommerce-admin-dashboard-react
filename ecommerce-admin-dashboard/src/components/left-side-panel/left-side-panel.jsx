import { Avatar } from "@mui/material";
import "./left-side-panel.scss";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { menuItemsList } from "../../constants/menuList";
import { useSelector } from "react-redux";

const userInfo = {
  firstName: "ByeWind",
  lastName: "",
  avatar: "/assets/images/user-avtar-image.png",
};

export default function LeftSidePanel() {
  const [selectedNavbar, setSelectedNavbar] = useState(
    menuItemsList?.[0]?.children?.[0]
  );

  const [recentlyOpenedMenu, setRecentlyOpenedMenu] = useState([]);
  const [selectedTab, setSelectedTab] = useState("");

  const favoritesTabs = useSelector((state) => state?.favorites?.favoritesTabs);

  const location = useLocation();
  let pathname = location?.pathname;

  useEffect(() => {
    if (pathname === "/") {
      setSelectedNavbar(menuItemsList?.[0]?.children?.[0]);
    } else {
      const selected = findMenuItem(menuItemsList, pathname);
      if (selected) {
        setSelectedNavbar(selected);
      }
    }
  }, [pathname, menuItemsList]);

  // useEffect(() => {
  //   if (favoritesTabs.length > 0) {
  //     setSelectedTab([...favoritesTabs, "Favorites"]);
  //   }
  // }, [favoritesTabs.length]);

  function findMenuItem(items, pathname) {
    for (const item of items) {
      // direct match (route includes pathname or exact match)
      if (item?.route?.includes(pathname) || item?.route === pathname) {
        return item;
      }

      // check in children recursively
      if (item?.children?.length) {
        const found = findMenuItem(item.children, pathname);
        if (found) return found;
      }
    }

    return null;
  }

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
        <span className="arrow theme-icon">
          {item.hasChildren && (
            <img
              className={!fromRecent && isActive ? "active" : ""}
              src="/assets/icons/left-side-panel/ArrowLineRight.svg"
              alt="arrow"
            />
          )}
        </span>
        {hasParent && !item.icon && <span className="arrow"></span>}
        <span className="nav-item">
          {item.icon ? (
            <span className="icon theme-icon">
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
    if (favoritesTabs?.length > 0) {
      list.push("Favorites");
    }

    if (recentlyOpenedMenu?.length > 0) {
      list.push("Recently");
    }

    if (list?.length > 0) {
      setSelectedTab(list[0]);
    } else {
      setSelectedTab("");
    }
    return list;
  }, [recentlyOpenedMenu.length, favoritesTabs.length]);

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
      {(recentlyOpenedMenu?.length > 0 || favoritesTabs?.length > 0) && (
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
              renderMenu(favoritesTabs, false, true)}
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
