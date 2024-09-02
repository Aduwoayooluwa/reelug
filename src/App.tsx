import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./layout/nav-bar";

const MainLayout: React.FC = () => (
  <div>
    <Navbar />
    <Outlet />
  </div>
);

export default MainLayout;
