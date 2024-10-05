import {
  CalendarOutlined,
  DashboardOutlined,
  LogoutOutlined,
  MailOutlined,
  // TagOutlined,
  VideoCameraAddOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export default function Sidebar({ isCollapsed, onToggle }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const session = useAuth();

  useEffect(() => {
    if (location.pathname === "/your-mails" && !isCollapsed) {
      onToggle();
    }
  }, [location.pathname]);

  return (
    <div
      className={`border-r border-gray-300 bg-white h-full fixed z-20 transition-all duration-300 ease-linear left-0 top-0 ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      <div className={`p-6 ${isCollapsed ? "px-2" : ""}`}>
        {/* logo */}
        <div
          className={`text-2xl flex items-center font-bold cursor-pointer ${
            isCollapsed ? "justify-center" : "space-x-3"
          }`}
          onClick={() => navigate("/")}
        >
          <img
            src={"/reelog_logo.svg"}
            className="w-[50px] h-[50px]"
            alt="logo"
          />
          {!isCollapsed && <span>ReeLug</span>}
        </div>

        <div className="space-y-4 mt-20">
          {[
            {
              icon: <DashboardOutlined />,
              text: "Dashboard",
              path: "/dashboard",
            },
            { icon: <CalendarOutlined />, text: "Calendar", path: "/calendar" },
            // {
            //   icon: <TagOutlined />,
            //   text: "Applied Jobs",
            //   path: "/applied-jobs",
            // },
            {
              icon: <VideoCameraAddOutlined />,
              text: "Interviews",
              path: "/interviews",
            },
            { icon: <MailOutlined />, text: "Mails", path: "/your-mails" },
          ].map((item, index) => (
            <div
              key={index}
              className={`hover:bg-green-100 hover:text-green-600 hover:font-[500] p-2 rounded flex items-center ${
                isCollapsed ? "justify-center" : ""
              }`}
            >
              <Link to={item.path}>{item.icon}</Link>
              {!isCollapsed && (
                <Link to={item.path} className="ml-4">
                  {item.text}
                </Link>
              )}
            </div>
          ))}
        </div>

        <Button
          className="bottom-20 absolute left-1/2 transform -translate-x-1/2"
          type="primary"
          icon={<LogoutOutlined />}
          onClick={async () => {
            await session.signOut();
            navigate("/");
          }}
        >
          {!isCollapsed && "Logout"}
        </Button>
      </div>

      <Button
        className={`absolute top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
          isCollapsed ? "right-[-20px]" : "right-[-40px]"
        }`}
        onClick={onToggle}
        icon={isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        shape="circle"
      />
    </div>
  );
}
