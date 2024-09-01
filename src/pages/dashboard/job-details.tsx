import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Button, Timeline, Input, Form, message, Select } from "antd";
import { MailOutlined, EditOutlined } from "@ant-design/icons";

const { TextArea } = Input;
const { Option } = Select;

interface JobDetails {
  id: string | undefined;
  jobTitle: string;
  companyName: string;
  jobUrl?: string;
  contactPerson?: string;
  status: string;
  applicationDate?: string;
  notes?: string;
  reminder?: string;
}

const JobDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [jobDetails, setJobDetails] = useState<JobDetails>({
    id,
    jobTitle: "Frontend Developer",
    companyName: "Tech Solutions Ltd.",
    jobUrl: "https://example.com",
    contactPerson: "Jane Doe",
    status: "Interviewing",
    applicationDate: "2024-08-15",
    notes: "Followed up last week. Waiting for the final round of interviews.",
    reminder: "2024-08-25 10:00",
  }); // Mock data for job details

  const [loading, setLoading] = useState(false);
  const [notes, setNotes] = useState(jobDetails.notes || "");

  // Handle status update
  const handleStatusUpdate = (newStatus: string) => {
    setLoading(true);
    // Simulate API call to update status
    setTimeout(() => {
      setJobDetails((prevDetails) => ({ ...prevDetails, status: newStatus }));
      setLoading(false);
      message.success(`Job status updated to ${newStatus}`);
    }, 1000);
  };

  const handleNotesUpdate = () => {
    setLoading(true);
    // Simulate API call to update notes
    setTimeout(() => {
      setJobDetails((prevDetails) => ({ ...prevDetails, notes }));
      setLoading(false);
      message.success("Notes updated successfully!");
    }, 1000);
  };

  const handleSendEmail = () => {
    // Placeholder function to handle sending an email
    message.info("Email template opened for sending...");
  };

  return (
    <div className="max-w-3xl mx-auto p-8 mt-10 bg-white shadow-md rounded-lg">
      <Card
        title={<h2 className="text-2xl font-bold">{jobDetails.jobTitle}</h2>}
        extra={
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => message.info("Edit Job Modal opened.")}
          >
            Edit
          </Button>
        }
        bordered={false}
        className="mb-6"
      >
        <p className="text-lg">
          <strong>Company:</strong> {jobDetails.companyName}
        </p>
        <p className="text-lg">
          <strong>Contact Person:</strong> {jobDetails.contactPerson || "N/A"}
        </p>
        <p className="text-lg">
          <strong>Application Date:</strong> {jobDetails.applicationDate}
        </p>
        <p className="text-lg">
          <strong>Status:</strong>{" "}
          <Select
            defaultValue={jobDetails.status}
            onChange={handleStatusUpdate}
            style={{ width: 150 }}
          >
            <Option value="To Apply">To Apply</Option>
            <Option value="Applied">Applied</Option>
            <Option value="Interviewing">Interviewing</Option>
            <Option value="Offer">Offer</Option>
            <Option value="Rejected">Rejected</Option>
          </Select>
        </p>
        <p className="text-lg">
          <strong>Job URL:</strong>{" "}
          <a
            href={jobDetails.jobUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            {jobDetails.jobUrl}
          </a>
        </p>
      </Card>

      <Timeline className="mb-6">
        <Timeline.Item color="green">
          Applied - {jobDetails.applicationDate}
        </Timeline.Item>
        {jobDetails.status === "Interviewing" && (
          <Timeline.Item color="blue">Interview Scheduled</Timeline.Item>
        )}
        {jobDetails.status === "Offer" && (
          <Timeline.Item color="gold">Offer Received</Timeline.Item>
        )}
        {jobDetails.status === "Rejected" && (
          <Timeline.Item color="red">Application Rejected</Timeline.Item>
        )}
      </Timeline>

      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Notes</h3>
        <Form layout="vertical" onFinish={handleNotesUpdate}>
          <Form.Item>
            <TextArea
              rows={4}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add notes about this job application..."
            />
          </Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Update Notes
          </Button>
        </Form>
      </div>

      <Button
        type="primary"
        icon={<MailOutlined />}
        onClick={handleSendEmail}
        className="w-full"
        style={{ marginTop: "20px" }}
      >
        Send Follow-Up Email
      </Button>
    </div>
  );
};

export default JobDetailsPage;
