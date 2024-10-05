import React from "react";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  GithubOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white relative border-t px-4 md:px-8 lg:px-28 border-dark w-full py-10">
      <div className="w-full mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Branding Section */}
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="mr-1 w-12 h-12 relative">
              <img src="/reelog_logo.svg" alt="logo" />
            </div>
            <h1 className="text-2xl font-bold">
              Reelug<span className="text-primary font-bold">.</span>
            </h1>
          </div>
          <p className="text-dark font-medium">
            Streamline your job application process and land your dream job
            faster with ReeLug.
          </p>
          <p className="text-dark">Email: reelug.co@gmail.com</p>
          <div className="flex space-x-4">
            <FacebookOutlined className="text-xl cursor-pointer hover:text-primary transition-colors" />
            <InstagramOutlined className="text-xl cursor-pointer hover:text-primary transition-colors" />
            <LinkedinOutlined className="text-xl cursor-pointer hover:text-primary transition-colors" />
            <GithubOutlined className="text-xl cursor-pointer hover:text-primary transition-colors" />
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "About", "Features", "Pricing", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="text-dark hover:text-primary transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Resources</h3>
          <ul className="space-y-2">
            {["Blog", "FAQ", "Privacy Policy", "Terms of Service"].map(
              (item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-dark hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Demo Video Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold">See ReeLug in Action</h3>
          <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="ReeLug Demo Video"
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <Link
            to="/demo"
            className="inline-flex items-center text-primary hover:underline"
          >
            <PlayCircleOutlined className="mr-2" /> Watch Full Demo
          </Link>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 pt-4 border-t border-dark text-center md:text-left">
        <p className="text-dark font-medium">
          © {new Date().getFullYear()} ReeLug. All rights reserved. | Designed
          by{" "}
          <Link
            to="https://ayooluwa.dev"
            className="text-dark font-semibold hover:text-primary underline transition-colors"
          >
            Ayọ̀olúwa 💚
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
