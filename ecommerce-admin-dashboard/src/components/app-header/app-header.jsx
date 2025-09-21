import { useLocation } from "react-router-dom";
import "../app-header/app-header.scss";
import { useMemo } from "react";
import { useTheme } from "../../context/themeContext";
import { useNotification } from "../../context/notificationContext";

const AppHeader = () => {
  const location = useLocation();
  const pathname = location?.pathname;

  const { toggleTheme } = useTheme();
  const { togglePanel } = useNotification();

  const rightSideIconsList = [
    {
      id: 1,
      icon: "/public/assets/icons/global/Light-theme.svg",
      alt: "theme",
      onclick: () => handleThemeChange(),
    },
    {
      id: 2,
      icon: "/public/assets/icons/global/Clock.svg",
      alt: "Refresh",
      onclick: () => {},
    },
    {
      id: 3,
      icon: "/public/assets/icons/global/Bell.svg",
      alt: "Notifications",
      onclick: () => handleNotificationClick(),
    },
    {
      id: 4,
      icon: "/public/assets/icons/global/Sidebar.svg",
      alt: "menu",
      onclick: () => {},
    },
  ];

  const navigations = useMemo(() => {
    return pathname?.split("/").slice(1);
  }, [pathname]);

  const handleFavoriteClick = () => {
    console.log("handleFavoriteClick");
  };

  const handleNotificationClick = () => {
    console.log("handleNotificationClick");
    togglePanel();
  };

  const handleThemeChange = () => {
    console.log("handleThemeChange");
    toggleTheme();
  };

  return (
    <header className="app-header">
      <div className="navigation-container">
        <span className="icon">
          <img src="/public/assets/icons/global/Sidebar.svg" alt="menu" />
        </span>
        <span className="icon" onClick={handleFavoriteClick}>
          <img src="/public/assets/icons/global/Star.svg" alt="favorite" />
        </span>
        <div className="navigations">
          {navigations?.map((navigationItem, navItemIndex) => {
            return (
              <div className="navigation">
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
              className="icon"
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
