import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./layout/nav-bar";
import Sidebar from "./layout/sidebar";
import PageTransition from "./layout/page-transition";
const MainLayout: React.FC = () => (
  <div>
    <div className="">
      <Navbar />
    </div>

    <div className="w-full">
      <Sidebar />

      <div className="w-full md:w-[calc(100%-200px)] ml-0 md:ml-[200px] lg:ml-[294px]  lg:w-[calc(100%-294px)]">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </div>
    </div>
  </div>
);

export default MainLayout;
