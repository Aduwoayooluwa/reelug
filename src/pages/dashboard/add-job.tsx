import React, { useState } from "react";
import { Form, Input, Button, Select, DatePicker, message } from "antd";
import { ClockCircleOutlined, CloseCircleFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

const AddJob: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const router = useNavigate();

  function onClose() {
    router("/dashboard");
  }
  const onFinish = (values: unknown) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      message.success("Job added successfully!");
      console.log("Form Values:", values);
    }, 1000);
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
        <div className="w-[694px] max-h-[90%] h-[730px] overflow-y-auto modal-scrollbar py-16 px-8 bg-white relative shadow-md rounded-lg">
          <div className="w-full">
            <h1 className="text-2xl font-bold mb-6 text-center">
              {"Add Job Application"}
            </h1>

            <Button
              className="absolute right-8 top-16"
              type="primary"
              danger
              icon={<CloseCircleFilled />}
              onClick={onClose}
            >
              Close
            </Button>
          </div>
          <Form
            layout="vertical"
            onFinish={onFinish}
            className="space-y-4"
            initialValues={{ status: "To Apply" }}
          >
            <Form.Item
              label="Job Title"
              name="jobTitle"
              rules={[
                { required: true, message: "Please enter the job title!" },
              ]}
            >
              <Input placeholder="Enter job title" />
            </Form.Item>

            <Form.Item
              label="Company Name"
              name="companyName"
              rules={[
                { required: true, message: "Please enter the company name!" },
              ]}
            >
              <Input placeholder="Enter company name" />
            </Form.Item>

            <Form.Item
              label="Job URL"
              name="jobUrl"
              rules={[{ required: true, message: "Please enter the job URL!" }]}
            >
              <Input placeholder="Enter job URL" />
            </Form.Item>

            <Form.Item
              label="Contact Person"
              name="contactPerson"
              rules={[{ required: false }]}
            >
              <Input placeholder="Enter contact person (optional)" />
            </Form.Item>

            <Form.Item
              label="Status"
              name="status"
              rules={[
                {
                  required: true,
                  message: "Please select the application status!",
                },
              ]}
            >
              <Select>
                <Option value="To Apply">To Apply</Option>
                <Option value="Applied">Applied</Option>
                <Option value="Interviewing">Interviewing</Option>
                <Option value="Offer">Offer</Option>
                <Option value="Rejected">Rejected</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Application Date"
              name="applicationDate"
              rules={[{ required: false }]}
            >
              <DatePicker className="w-full" />
            </Form.Item>

            <Form.Item label="Notes" name="notes" rules={[{ required: false }]}>
              <Input.TextArea
                rows={4}
                placeholder="Enter any notes or comments"
              />
            </Form.Item>

            <Form.Item
              label="Reminder"
              name="reminder"
              rules={[{ required: false }]}
            >
              <DatePicker
                showTime
                className="w-full"
                suffixIcon={<ClockCircleOutlined />}
                placeholder="Set a reminder (optional)"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                className="w-full"
              >
                Add Job
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default AddJob;
