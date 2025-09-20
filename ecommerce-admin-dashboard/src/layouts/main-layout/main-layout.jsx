import React, { useState } from "react";
import "./main-layout.scss";
import LeftSidePanel from "../../components/left-side-panel/left-side-panel";

export default function MainLayout() {
  const [showRightPanel, setShowRightPanel] = useState(true);

  return (
    <div className="main-layout">
      {/* left-side-menu (sidebar) starts at top */}
      <div className="main-layout__side-menu">
        <LeftSidePanel />
      </div>

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
        <div className="main-layout__content">
          {/* main-panel */}
          <div className="main-layout__main-panel">main-panel</div>

          {/* right-side-panel - conditional rendering */}
          {showRightPanel && (
            <div className="main-layout__right-panel">right-side-panel</div>
          )}
        </div>
      </div>
    </div>
  );
}
