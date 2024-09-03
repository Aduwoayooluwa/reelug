import {
  CalendarOutlined,
  DashboardOutlined,
  LogoutOutlined,
  MailOutlined,
  TagOutlined,
  VideoCameraAddOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { Link, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="w-[200px] border-r border-gray-300 lg:w-[294px] p-6 bg-white h-screen hidden md:block fixed z-20 transition-all transform ease-linear left-0 top-0">
      {/* logo */}
      <div
        className="text-2xl flex items-center space-x-3 font-bold cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img
          src={"/reelog_logo.svg"}
          className="w-[50px] h-[50px]"
          alt="logo"
        />
        ReeLug
      </div>

      <div className="space-y-4 mt-20">
        <div className="space-x-4 hover:bg-green-100 hover:text-green-600 hover:font-[500] p-2 rounded">
          <DashboardOutlined />
          <Link to="/dashboard">Dashboard</Link>
        </div>

        <div className="space-x-4  hover:bg-green-100 hover:text-green-600 hover:font-[500] p-2 rounded">
          <CalendarOutlined />
          <Link to="/calendar">Calendar</Link>
        </div>

        <div className="space-x-4 hover:bg-green-100 hover:text-green-600 hover:font-[500] p-2 rounded">
          <TagOutlined />
          <Link to="/applied-jobs">Applied Jobs</Link>
        </div>

        <div className="space-x-4 hover:bg-green-100 hover:text-green-600 hover:font-[500] p-2 rounded">
          <VideoCameraAddOutlined />
          <Link to="/interview-schedule">Interviews</Link>
        </div>

        <div className="space-x-4 hover:bg-green-100 hover:text-green-600 hover:font-[500] p-2 rounded">
          <MailOutlined />
          <Link to="/your-mails">Mails</Link>
        </div>
      </div>

      <Button
        className="bottom-10  absolute"
        type="primary"
        icon={<LogoutOutlined />}
      >
        Logout
      </Button>
    </div>
  );
}
