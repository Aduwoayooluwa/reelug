import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const showDrawer = () => {
    setIsDrawerVisible(true);
  };

  const closeDrawer = () => {
    setIsDrawerVisible(false);
  };

  return (
    <nav className="bg-white shadow-sm border-b fixed w-full z-10 top-0">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Brand Name */}
          <div
            className="text-2xl font-bold cursor-pointer"
            onClick={() => navigate("/")}
          >
            ReeLug
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/dashboard" className="hover:text-blue-500">
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
            </Link>
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
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;
