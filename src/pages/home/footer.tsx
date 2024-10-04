import React from "react";
//import { Input } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white relative border-t px-8 md:px-28 border-dark w-full  h-screen md:h-full py-5 md:py-10">
      <div className="w-full mx-auto px-4 grid place-items-center h-[calc(100%-100px)]">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-start w-full justify-between">
          {/* Branding Section */}
          <div className=" space-y-7">
          <div className="flex  items-center">
        <div className="mr-1 w-16 h-16 relative">
          <img src={"/reelog_logo.svg"} alt="logo" />
        </div>
        <h1 className="text-3xl font-bold">
          Reelug<span className="text-primary font-bold text-2xl">.</span>
        </h1>
      </div>
            <p className="text-dark w-full md:w-[400px] font-[500] mb-4">
              We&apos;ve developed a solution that will streamline your job application process and help you stay organized, giving you the edge to land your dream job faster with ReeLug.
            </p>
            <p className="text-dark mb-4">Email: reelug.co@gmail.com</p>
            <div className="flex space-x-4">
              <FacebookOutlined className="text-xl cursor-pointer" />
              <InstagramOutlined className="text-xl cursor-pointer" />
              <LinkedinOutlined className="text-xl cursor-pointer" />
              <GithubOutlined className="text-xl cursor-pointer" />
            </div>
          </div>

          {/* Main Pages Section */}
          <div className="space-y-7 pt-5">
            <h3 className="text-lg font-bold mb-4">Main Pages</h3>
            <ul className="space-y-2">
              {["Home", "About", "Features", "Pricing", "Career", "Blog"].map(
                (item) => (
                  <li key={item}>
                    <Link to="#" className="text-dark hover:text-black">
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Other Pages Section */}
          <div className="space-y-7 hidden pt-5 text-dark">
            <h3 className="text-lg font-bold mb-4">Other Pages</h3>
            <ul className="space-y-2">
              {[
                "Integration Single",
                "Career Single",
                "Integrations",
                "Blog Single",
                "Contact Us",
                "Our Team",
              ].map((item) => (
                <li key={item}>
                  <Link to="#" className=" text-dark hover:text-black">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Utility Pages Section */}
          <div className="space-y-7 hidden pt-5  text-dark">
            <h3 className="text-lg font-bold mb-4">Utility Pages</h3>
            <ul className="space-y-2">
              {[
                "Password Protected",
                "404 Not Found",
                "Style Guide",
                "Changelog",
                "Licenses",
                "Sign Up",
              ].map((item) => (
                <li key={item}>
                  <Link to="#" className=" text-dark hover:text-black">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-4 md:mt-8 border-t absolute w-full md:w-[calc(100%-14rem)] bottom-10 border-dark pt-4 flex flex-col md:flex-row items-center full justify-center">
          <p className="text-dark font-[500] text-center md:text-left">
            Copyright © Reelug | Designed by{" "}
            <Link to="https://ayooluwa.dev" className="text-dark font-[600] hover:text-primary underline transition-colors ease-linear duration-300 hover:underline">
            Ayọ̀olúwa 💚
            </Link>{" "}
          </p>
    
        </div>
      </div>
    </footer>
  );
};

export default Footer;
