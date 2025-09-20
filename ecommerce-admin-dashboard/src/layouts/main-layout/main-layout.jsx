import React, { useState } from "react";
import "./main-layout.scss";
import LeftSidePanel from "../../components/left-side-panel/left-side-panel";
import { Outlet } from "react-router-dom";

export default function MainLayout(props) {
  const [showRightPanel, setShowRightPanel] = useState(true);

  return (
    <div className="main-layout">
      {/* left-side-menu (sidebar) starts at top */}
      <LeftSidePanel />

      {/* right container: app-header on top + content below */}
      <div className="main-layout__right-container">
        {/* app-header */}
        <div className="main-layout__header">
          app-header
          <button
            onClick={() => setShowRightPanel(!showRightPanel)}
            style={{ marginLeft: "auto", cursor: "pointer" }}
            aria-label="Toggle Right Panel"
          >
            {showRightPanel ? "Hide" : "Show"} Right Panel
          </button>
        </div>

        {/* main content area */}
        <main className="main-layout__content">
          {/* main-panel */}
          <div className="main-layout__main-panel">
            <Outlet />
          </div>

          {/* right-side-panel - conditional rendering */}
          {showRightPanel && (
            <div className="main-layout__right-panel">right-side-panel</div>
          )}
        </main>
      </div>
    </div>
  );
}
