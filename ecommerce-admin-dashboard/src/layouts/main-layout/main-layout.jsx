import "./main-layout.scss";
import LeftSidePanel from "../../components/left-side-panel/left-side-panel";
import AppHeader from "../../components/app-header/app-header";
import { Outlet } from "react-router-dom";
import { useNotification } from "../../context/notificationContext";
import NotificationSidePanel from "../../components/notification-side-panel/notification-side-panel";

export default function MainLayout(props) {
  const { isOpen } = useNotification();

  return (
    <div className="main-layout">
      {/* left-side-menu (sidebar) starts at top */}
      <LeftSidePanel />

      {/* right container: app-header on top + content below */}
      <div
        className={`main-layout-right-container ${
          isOpen ? "with-notification" : ""
        }`}
      >
        {/* app-header */}
        <AppHeader />

        {/* main content area */}
        <main className={`main-layout-content`}>
          <Outlet />
        </main>
      </div>

      {/* right-side-panel - conditional rendering */}
      {isOpen && <NotificationSidePanel />}
    </div>
  );
}
