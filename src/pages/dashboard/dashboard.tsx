import React from "react";
import { Card, Button, List, Statistic, Row, Col } from "antd";
import {
  //   PlusOutlined,
  FileTextOutlined,
  BellOutlined,
  CalendarOutlined,
  SendOutlined,
  UserAddOutlined,
  VideoCameraAddOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import useFetchData from "../../hooks/use-fetch";
import { TEST_GRANT } from "../../config/env.config";
import { CalendarData, EmailData } from "../../types/app.types";
import { EventData } from "../../types/events.types";
import ContactSummaryTable from "./contact-table";

const Email = ({ emailData }: { emailData: EmailData }) => {
  if (!emailData) {
    return <p>No email data available.</p>;
  }

  const { subject, date, folders, starred, unread } = emailData;

  const formattedDate = new Date(date * 1000).toLocaleString();

  return (
    <div className=" my-4">
      <div className="">
        <h2 className="font-semibold text-xl">{subject}</h2>

        <p>Date: {formattedDate}</p>
        <p>Folders: {folders.join(", ")}</p>
        <p>
          Status: {unread ? "Unread" : "Read"},{" "}
          {starred ? "Starred" : "Not Starred"}
        </p>
      </div>
    </div>
  );
};

// interface JobApplication {
//   id: string;
//   jobTitle: string;
//   companyName: string;
//   status: string;
//   applicationDate: string;
// }

// interface Reminder {
//   id: string;
//   title: string;
//   date: string;
//   time: string;
// }

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const {
    data: emailData,
    // isLoading: isLoadingEmailData,
    // error: emailError,
  } = useFetchData(`https://api.us.nylas.com/v3/grants/${TEST_GRANT}/messages`);

  console.log(emailData, "email data");
  const {
    data: calendarData,
    isLoading: isLoadingCalendarData,
    // error: calendarError,
  } = useFetchData(
    `https://api.us.nylas.com/v3/grants/${TEST_GRANT}/calendars?limit=5`
  );
  console.log(calendarData, "calendar");

  const {
    data: eventData,
    isLoading: isLoadingEventData,
    // error: eventError,
  } = useFetchData(
    `https://api.us.nylas.com/v3/grants/${TEST_GRANT}/events?calendar_id=primary&limit=5`
  );

  const {
    data: contactData,
    isLoading: isLoadingContactData,
    // error: contactError,
  } = useFetchData(`https://api.us.nylas.com/v3/grants/${TEST_GRANT}/contacts`);

  //   const [jobApplications] = useState<JobApplication[]>([
  //     {
  //       id: "1",
  //       jobTitle: "Frontend Developer",
  //       companyName: "Tech Solutions Ltd.",
  //       status: "Interviewing",
  //       applicationDate: "2024-08-15",
  //     },
  //     {
  //       id: "2",
  //       jobTitle: "Backend Developer",
  //       companyName: "Innovatech Inc.",
  //       status: "Applied",
  //       applicationDate: "2024-08-10",
  //     },
  //   ]); // Mock data for job applications

  //   const [reminders, setReminders] = useState<Reminder[]>([
  //     {
  //       id: "1",
  //       title: "Follow-up with XYZ Company",
  //       date: "2024-09-15",
  //       time: "10:00 AM",
  //     },
  //     {
  //       id: "2",
  //       title: "Apply for ABC Corp Position",
  //       date: "2024-09-20",
  //       time: "2:00 PM",
  //     },
  //   ]);

  return (
    <div className="max-w-5xl mx-auto p-8 mt-10">
      {/* Quick Stats Section */}
      <Row gutter={16} className="mb-8">
        <Col span={8}>
          <Card>
            <Statistic
              title="Total Applications"
              value={emailData?.data?.length}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Interviews Scheduled"
              value={eventData?.data?.length}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="Offers Received" value={0} />
          </Card>
        </Col>
      </Row>

      {/* Job Applications Overview Section */}
      {/* <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Job Applications</h2>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => navigate("/add-job")}
        >
          Add New Job
        </Button>
      </div>

      <List
        itemLayout="horizontal"
        dataSource={jobApplications}
        loading={true}
        renderItem={(job) => (
          <List.Item
            actions={[
              <Button type="link" onClick={() => navigate(`/job/${job.id}`)}>
                View Details
              </Button>,
              <Button
                type="link"
                onClick={() => message.info("Edit Job Modal opened.")}
              >
                Edit
              </Button>,
              <Button
                type="link"
                danger
                onClick={() => message.info("Job deleted successfully!")}
              >
                Delete
              </Button>,
            ]}
          >
            <List.Item.Meta
              title={<h3 className="text-lg font-semibold">{job.jobTitle}</h3>}
              description={`${job.companyName} - ${job.status}`}
            />
          </List.Item>
        )}
      /> */}

      {/* Interview Overview Section */}
      <div className="mt-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Interviews/Meeting</h2>
          <Button
            type="primary"
            icon={<VideoCameraAddOutlined />}
            onClick={() => navigate("/add-meeting")}
          >
            Add/Create Meeting
          </Button>
        </div>
        <List
          itemLayout="horizontal"
          dataSource={eventData?.data}
          loading={isLoadingEventData}
          renderItem={(event: EventData) => (
            <List.Item>
              <List.Item.Meta
                title={<h3 className="text-lg font-semibold">{event.title}</h3>}
                description={`Start Time: ${new Date(
                  event.when.start_time * 1000
                ).toLocaleString()} | End Time: ${new Date(
                  event.when.end_time * 1000
                ).toLocaleString()}`}
              />
            </List.Item>
          )}
        />
      </div>

      {/* contact */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Your Contacts</h2>
          <Button
            type="primary"
            icon={<UserAddOutlined />}
            onClick={() => navigate("/add-contact")}
          >
            Add New Contacts
          </Button>
        </div>
        <ContactSummaryTable
          isLoading={isLoadingContactData}
          contacts={contactData?.data}
        />
      </div>

      {/* Calendars Overview Section */}
      <div className="mt-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Calendars</h2>
          <Button
            type="primary"
            icon={<CalendarOutlined />}
            onClick={() => navigate("/calendars")}
          >
            Manage Calendars
          </Button>
        </div>

        <List
          itemLayout="horizontal"
          dataSource={calendarData?.data}
          loading={isLoadingCalendarData}
          renderItem={(calendar: CalendarData) => (
            <List.Item>
              <List.Item.Meta
                title={
                  <h3 className="text-lg font-semibold">{calendar.name}</h3>
                }
                description={
                  <>
                    <p>
                      {calendar.description
                        ? calendar.description
                        : "No description provided"}
                    </p>
                    <p>Timezone: {calendar.timezone}</p>
                    <p>Read Only: {calendar.read_only ? "Yes" : "No"}</p>
                  </>
                }
              />
              <div>
                <span
                  className="inline-block w-4 h-4"
                  style={{ backgroundColor: calendar.hex_color }}
                ></span>
              </div>
            </List.Item>
          )}
        />
      </div>

      {/* Reminders Overview Section */}
      {/* <div className="mt-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Upcoming Reminders</h2>
          <Button
            type="primary"
            icon={<BellOutlined />}
            onClick={() => navigate("/reminders")}
          >
            Manage Reminders
          </Button>
        </div>

        <List
          itemLayout="horizontal"
          dataSource={reminders}
          renderItem={(reminder) => (
            <List.Item>
              <List.Item.Meta
                title={
                  <h3 className="text-lg font-semibold">{reminder.title}</h3>
                }
                description={`${reminder.date} at ${reminder.time}`}
              />
            </List.Item>
          )}
        />
      </div> */}

      {/* email */}
      <div className="mt-8 mb-6 space-y-4">
        <h2 className="text-2xl font-bold">Recent Mails</h2>
        {emailData?.data
          ?.slice(0, 4)
          ?.map((email: unknown) => <Email emailData={email} />)}
      </div>

      {/* Navigation to Other Pages */}
      <div className="mt-8 w-full overflow-x-auto flex space-x-4">
        <Button
          type="default"
          icon={<FileTextOutlined />}
          onClick={() => navigate("/email-templates")}
        >
          Manage Email Templates
        </Button>
        <Button
          type="default"
          icon={<BellOutlined />}
          onClick={() => navigate("/reminders")}
        >
          Manage Reminders
        </Button>

        <Button
          type="default"
          icon={<SendOutlined />}
          onClick={() => navigate("/compose-email")}
        >
          Compose Email
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
