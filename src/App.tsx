import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./layout/nav-bar";
import Sidebar from "./layout/sidebar";
import PageTransition from "./layout/page-transition";

const MainLayout: React.FC = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        />

        <div
          className={`flex-1 overflow-auto transition-all duration-300 ${isSidebarCollapsed ? "ml-16" : "ml-64"}`}
        >
          <Navbar isSidebarCollapsed={isSidebarCollapsed} />
          <PageTransition>
            <Outlet />
          </PageTransition>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
