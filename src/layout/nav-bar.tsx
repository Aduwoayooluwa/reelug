import React from "react";
import { Button, Avatar, Tooltip } from "antd";
import { N_BASE_URL, CALLBACK_URI, CLIENT_ID } from "../config/env.config";
import { GoogleOutlined, WindowsOutlined } from "@ant-design/icons";

interface NavbarProps {
  isSidebarCollapsed: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isSidebarCollapsed }) => {
  const handleGoogleLogin = () => {
    window.location.href = `${N_BASE_URL}/connect/auth?client_id=${CLIENT_ID}&redirect_uri=${CALLBACK_URI}&response_type=code&provider=google`;
  };

  const handleMicrosoftLogin = () => {
    window.location.href = `${N_BASE_URL}/connect/auth?client_id=${CLIENT_ID}&redirect_uri=${CALLBACK_URI}&response_type=code&provider=microsoft`;
  };

  return (
    <nav
      className={`bg-white shadow border-b fixed top-0 right-0 z-20 transition-all duration-300 ${isSidebarCollapsed ? "left-16" : "left-64"}`}
    >
      <div className="max-w-full px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Screen Name */}
          <div>
            <h2 className="font-[500] text-xl">Dashboard</h2>
          </div>

          {/* Desktop Menu */}
          <div className="flex items-center space-x-6">
            <Button
              className="flex items-center justify-center"
              style={{
                backgroundColor: "#4285F4",
                color: "#fff",
                borderRadius: "4px",
                border: "none",
              }}
              icon={<GoogleOutlined />}
              onClick={handleGoogleLogin}
            >
              Connect Google
            </Button>

            <Button
              className="flex items-center justify-center"
              style={{
                backgroundColor: "#2F2F2F",
                color: "#fff",
                borderRadius: "4px",
                border: "none",
              }}
              icon={<WindowsOutlined />}
              onClick={handleMicrosoftLogin}
            >
              Connect Microsoft
            </Button>

            <Tooltip title="Ayooluwa Aduwo">
              <Avatar style={{ backgroundColor: "#f56a00" }}>AA</Avatar>
            </Tooltip>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
