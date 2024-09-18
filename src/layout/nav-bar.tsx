import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Drawer, Button, Avatar, Tooltip } from "antd";
import { N_BASE_URL, CALLBACK_URI, CLIENT_ID } from "../config/env.config";
import { GoogleOutlined, WindowsOutlined, MenuOutlined } from "@ant-design/icons";

const Navbar: React.FC = () => {
  // const navigate = useNavigate();
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const showDrawer = () => {
    setIsDrawerVisible(true);
  };

  const closeDrawer = () => {
    setIsDrawerVisible(false);
  };

  const handleGoogleLogin = () => {
    window.location.href = `${N_BASE_URL}/connect/auth?client_id=${CLIENT_ID}&redirect_uri=${CALLBACK_URI}&response_type=code&provider=google`;
  };

  const handleMicrosoftLogin = () => {
    window.location.href = `${N_BASE_URL}/connect/auth?client_id=${CLIENT_ID}&redirect_uri=${CALLBACK_URI}&response_type=code&provider=${"microsoft"}`;
  };

  return (
    <nav className="bg-white shadow   border-b fixed w-full md:w-[calc(100%-200px)] lg:w-[calc(100%-294px)] ml-0 md:ml-[200px] lg:ml-[294px] z-20 top-0">
      <div className="max-w-6xl px-10 2xl:px-0  mx-auto">
        <div className="flex justify-between items-center py-4">
          {/* screen Name */}
          <div>
            <h2 className="font-[500] text-xl">Dashboard</h2>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {/* <Link to="/dashboard" className="hover:text-blue-500">
              Dashboard
            </Link>
            <Link to="/add-job" className="hover:text-blue-500">
              Add Job
            </Link>
            <Link to="/reminders" className="hover:text-blue-500">
              Reminders
            </Link>
            <Link to="/email-templates" className="hover:text-blue-500">
              Email Templates
            </Link> */}

            <Button
              className=" flex items-center justify-center"
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

            {/* Microsoft Login Button */}
            <Button
              className=" flex items-center justify-center"
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

            <Tooltip className="flex items-center space-x-3">
              <Avatar.Group shape="square">
                <Avatar style={{ backgroundColor: "#f56a00" }}>{"AA"}</Avatar>
              </Avatar.Group>
              <p className="font-[500]">{"Ayooluwa Aduwo"}</p>
            </Tooltip>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button type="text" icon={<MenuOutlined />} onClick={showDrawer} />
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <Drawer
        title="ReeLug"
        placement="right"
        onClose={closeDrawer}
        visible={isDrawerVisible}
        bodyStyle={{ padding: 0 }}
      >
        <div className="flex flex-col space-y-4 p-4">
          <Link to="/" className="hover:text-blue-500" onClick={closeDrawer}>
            Dashboard
          </Link>
          <Link
            to="/add-job"
            className="hover:text-blue-500"
            onClick={closeDrawer}
          >
            Add Job
          </Link>
          <Link
            to="/reminders"
            className="hover:text-blue-500"
            onClick={closeDrawer}
          >
            Reminders
          </Link>
          <Link
            to="/email-templates"
            className="hover:text-blue-500"
            onClick={closeDrawer}
          >
            Email Templates
          </Link>

          <Button
            className="w-full mt-2 flex items-center justify-center"
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

          {/* Microsoft Login Button */}
          <Button
            className="w-full mt-2 flex items-center justify-center"
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
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;
