import {
  AppstoreOutlined,
  CalendarOutlined,
  MailOutlined,
  BellOutlined,
  AreaChartOutlined,
  FileTextOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { Row, Col } from "antd";
import { PrimaryButton } from "../../components/button.components";

const menuItems = [
  {
    title: "Job Application Tracker",
    content:
      "Keep all your job applications in one organized space. Add details such as job titles, companies, application statuses, deadlines, and notes.",
    bgColor: "bg-[#b8f6b7]",
    icon: <AppstoreOutlined />,
  },
  {
    title: "Interview Scheduler",
    content:
      "Schedule your interviews seamlessly and never miss an important date. Sync with your calendar, set reminders, and get notified about upcoming interviews.",
    bgColor: "bg-[#f5daf6]",
    icon: <CalendarOutlined />,
  },
  {
    title: "Email View",
    content:
      "Automatically link emails to specific job applications, track follow-ups, and maintain a clutter-free inbox focused on your job search.",
    bgColor: "bg-[#fee5cd]",
    icon: <MailOutlined />,
  },
  {
    title: "Custom Reminders",
    content:
      "Set reminders for key dates like application deadlines, follow-ups, or interview preparations. ",
    bgColor: "bg-[#fee5cd]",
    icon: <BellOutlined />,
  },
  {
    title: "Analytics Dashboard",
    content:
      "Track key metrics like application response rates, interview conversion rates, and overall success rates to optimize your job search strategy.",
    bgColor: "bg-[#f9f5da]",
    icon: <AreaChartOutlined />,
  },
  {
    title: "Document Storage",
    content:
      "Keep all your essential documents, such as resumes, cover letters, and certificates, organized in one place.",
    bgColor: "bg-[#e7d8fe]",
    icon: <FileTextOutlined />,
  },
];

export function Features() {
  return (
    <div className="px-6 md:px-28 border-y border-dark bg-[#d7f3fe] min-h-screen py-20 md:py-40">
      <div className="w-full grid place-items-center">
        <h1 className=" w-full md:w-[70%] 2xl:w-[60%] text-2xl md:text3xl leading-normal md:leading-tight text-center lg:text-[64px] font-[600]">
          Making Job Application easy for you
        </h1>
      </div>

      <Row gutter={[24, 24]} className="mt-10 md:mt-20 xl:mt-40">
        {menuItems.map((menu) => (
          <Col className='' xs={24} sm={24} md={12} lg={8} key={menu.title}>
            <div
              className={`${menu.bgColor} border hover:ring-4 hover:scale-[1.01] hover:ring-dark transition-all ease-linear duration-300 border-dark rounded-[10px] p-6  flex flex-col text-dark justify-center h-[378px]`}
            >
              <div className="w-full grid place-items-center">
                <div className="text-3xl bg-white p-6 border rounded-full w-[110px] h-[110px] grid place-items-center mb-4">
                  {menu.icon}
                </div>
                <h2 className="text-xl text-center font-bold mb-4">
                  {menu.title}
                </h2>
                <p className="text-lg text-center">{menu.content}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      <div className="w-full grid place-items-center mt-20">
        <PrimaryButton icon={<RightOutlined />}>All Features</PrimaryButton>
      </div>
    </div>
  );
}
