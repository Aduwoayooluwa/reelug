/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Form, Input, Button, Select, message } from "antd";
import axiosInstance from "../../config/api.config";
import { useMutation } from "@tanstack/react-query";
import { TEST_GRANT } from "../../config/env.config";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

type CalendarFormData = {
  name: string;
  description: string;
  location: string;
  timezone: string;
};

const timezones = [
  "America/Los_Angeles",
  "America/New_York",
  "Europe/London",
  "Asia/Tokyo",
  "Australia/Sydney",
];

const AddCalendarPage: React.FC = () => {
  const [form] = Form.useForm();
  const router = useNavigate();

  const mutation = useMutation<unknown, unknown, CalendarFormData>({
    mutationFn: (newCalendar) =>
      axiosInstance.post(`${TEST_GRANT}/calendars`, newCalendar),
    mutationKey: ["calendarKey"],
    onSuccess: () => {
      message.success("Job added successfully!");
      router("/dashboard");
      form.resetFields();
    },
    onError: (error: any) => {
      message.error(
        `Failed to add calendar: ${error.response?.data?.message || error.message}`
      );
    },
  });

  const onFinish = (values: CalendarFormData) => {
    console.log("Received values from form: ", values);

    const payload = {
      name: values.name,
      description: values.description,
      location: values.location,
      timezone: values.timezone,
    };

    console.log("Payload to be sent: ", payload);
    mutation.mutate(payload);
  };

  const onFinishFailed = (errorInfo: unknown) => {
    console.log("Failed:", errorInfo);
    message.error("Failed to add calendar. Please check the form.");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Add New Job Reminder
        </h2>
        <Form
          form={form}
          layout="vertical"
          name="add_calendar"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              { required: true, message: "Please input the calendar name!" },
            ]}
          >
            <Input placeholder="Enter Job reminder name" />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[
              { required: true, message: "Please input the description!" },
            ]}
          >
            <Input.TextArea rows={4} placeholder="Enter description" />
          </Form.Item>

          <Form.Item
            label="Location"
            name="location"
            rules={[{ required: true, message: "Please input the location!" }]}
          >
            <Input placeholder="Enter location" />
          </Form.Item>

          <Form.Item
            label="Timezone"
            name="timezone"
            rules={[{ required: true, message: "Please select the timezone!" }]}
          >
            <Select placeholder="Select timezone">
              {timezones.map((timezone) => (
                <Option key={timezone} value={timezone}>
                  {timezone}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item>
            <Button
              loading={mutation.isPending}
              type="primary"
              htmlType="submit"
              block
            >
              Add Job reminder
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AddCalendarPage;
