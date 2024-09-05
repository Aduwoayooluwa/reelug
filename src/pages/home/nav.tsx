import React, { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Button, Drawer, Menu } from "antd";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

const Navigation: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleMenuClick = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className="flex items-center bg-white z-30 fixed shadow px-6 md:px-40 top-0 w-full h-[97px] justify-between py-4">
      {/* Logo Section */}
      <div className="flex items-center">
        <div className="mr-1 w-16 h-16 relative">
          <img src={"/reelog_logo.svg"} alt="logo" />
        </div>
        <h1 className="text-3xl font-bold">
          Reelug<span className="text-primary font-bold text-2xl">.</span>
        </h1>
      </div>

      {/* Desktop Menu */}
      <div className="hidden text-[18px]  font-[500] md:flex items-center space-x-10">
        <Link
          className="hover:text-primary transition-all ease-linear duration-300"
          to="/"
        >
          Home
        </Link>

        <Link
          className="hover:text-primary transition-all ease-linear duration-300"
          to="#features"
        >
          Features
        </Link>

        <Link
          className="hover:text-primary transition-all ease-linear duration-300"
          to="/blog"
        >
          Blog
        </Link>
      </div>
      <div className="hidden md:flex space-x-10 text-[18px] font-[500] items-center">
        <Link
          className="hover:text-primary transition-all ease-linear duration-300"
          to="/login"
        >
          Login
        </Link>
        <Button className="w-[171.5px] h-[57px] mt-1 text-[18px] font-[500] text-dark border-dark hover:text-white transition-all duration-300 ease-linear hover:bg-primary">
          Sign Up
        </Button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <Button
          type="text"
          icon={<MenuOutlined size={64} />}
          onClick={handleMenuClick}
        />
      </div>

      {/* Mobile Drawer Menu */}
      <Drawer
        title="Reelug"
        placement="right"
        closable={false}
        onClose={() => setIsDrawerOpen(false)}
        open={isDrawerOpen}
        bodyStyle={{ padding: 0 }}
      >
        <Menu mode="vertical">
          <SubMenu key="home-mobile" title="Home">
            {/* <Menu.Item key="home:1-mobile">Home</Menu.Item>
            <Menu.Item key="home:2-mobile">Feature</Menu.Item> */}
          </SubMenu>
          <Menu.Item key="features-mobile">
            <Link to="#features">Features</Link>
          </Menu.Item>

          <Menu.Item key="blog-mobile">
            <Link to="/blog">Blog</Link>
          </Menu.Item>
        </Menu>
        <div className="px-4 py-4">
          <Button
            type="default"
            className="border-2 h-[53px] border-dark rounded w-full py-2"
          >
            Sign Up
          </Button>
        </div>
      </Drawer>
    </nav>
  );
};

export default Navigation;
