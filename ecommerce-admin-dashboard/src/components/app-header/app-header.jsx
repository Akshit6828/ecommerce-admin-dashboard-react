import { useLocation } from "react-router-dom";
import "../app-header/app-header.scss";
import { useMemo } from "react";
import { useTheme } from "../../context/themeContext";
import { useNotification } from "../../context/notificationContext";
import { useDispatch, useSelector } from "react-redux";
import { menuItemsList } from "../../constants/menuList";
import {
  addFavorite,
  removeFavorite,
} from "../../redux-store/features/favorites/favoritesSlice";

const AppHeader = () => {
  const dispatch = useDispatch();
  const favoritesTabs = useSelector((state) => state?.favorites?.favoritesTabs);

  const location = useLocation();
  const pathname = location?.pathname;

  const { toggleTheme } = useTheme();
  const { togglePanel } = useNotification();

  const rightSideIconsList = [
    {
      id: 1,
      icon: "/assets/icons/global/Light-theme.svg",
      alt: "theme",
      onclick: () => handleThemeChange(),
    },
    {
      id: 2,
      icon: "/assets/icons/global/Clock.svg",
      alt: "Refresh",
      onclick: () => {},
    },
    {
      id: 3,
      icon: "/assets/icons/global/Bell.svg",
      alt: "Notifications",
      onclick: () => handleNotificationClick(),
    },
    {
      id: 4,
      icon: "/assets/icons/global/Sidebar.svg",
      alt: "menu",
      onclick: () => {},
    },
  ];

  const isFavoritePageData = useMemo(() => {
    return favoritesTabs?.find((tab) => tab.route === pathname);
  }, [pathname, favoritesTabs]);

  const navigations = useMemo(() => {
    return pathname?.split("/").slice(1);
  }, [pathname]);

  const handleFavoriteClick = () => {
    const selected = findMenuItem(menuItemsList, pathname);
    if (isFavoritePageData) {
      dispatch(removeFavorite(selected));
    } else {
      dispatch(addFavorite(selected));
    }
  };

  function findMenuItem(items, pathname) {
    for (const item of items) {
      // match directly
      if (pathname === item.route) {
        return item;
      }

      // check children recursively
      if (item.children && item.children.length > 0) {
        const found = findMenuItem(item.children, pathname);
        if (found) return found;
      }
    }
    return null;
  }

  const handleNotificationClick = () => {
    togglePanel();
  };

  const handleThemeChange = () => {
    toggleTheme();
  };

  return (
    <header className="app-header">
      <div className="navigation-container">
        <span className="icon theme-icon">
          <img src="/assets/icons/global/Sidebar.svg" alt="menu" />
        </span>
        <span className="icon " onClick={handleFavoriteClick}>
          <img
            width={16}
            height={16}
            src={
              isFavoritePageData
                ? "/assets/icons/global/YellowStar.png"
                : "/assets/icons/global/Star.svg"
            }
            className={`${isFavoritePageData && "active"}`}
            alt="favorite"
          />
        </span>
        <div className="navigations">
          {navigations?.map((navigationItem, navItemIndex) => {
            return (
              <div className="navigation" key={navItemIndex}>
                <span className="label">{navigationItem}</span>
                {navItemIndex !== navigations?.length - 1 && (
                  <span className="separator">/</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="filters-container">
        <div>{/* Search] */}</div>

        {rightSideIconsList?.map((rightSideIcon) => {
          return (
            <span
              className="icon theme-icon"
              key={`icon-${rightSideIcon.id}`}
              onClick={rightSideIcon.onclick}
            >
              <img src={rightSideIcon.icon} alt={rightSideIcon.alt} />
            </span>
          );
        })}
      </div>
    </header>
  );
};

export default AppHeader;
