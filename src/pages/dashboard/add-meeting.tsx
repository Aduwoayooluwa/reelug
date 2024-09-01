/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Form, Input, Button, Select, Switch, DatePicker, message } from "antd";
import axiosInstance from "../../config/api.config";
import { useMutation } from "@tanstack/react-query";
import { TEST_GRANT } from "../../config/env.config";
import { useNavigate } from "react-router-dom";
import {
  MeetingFormData,
  Participant,
  Resource,
} from "../../types/meetings.types";

const { TextArea } = Input;
const { Option } = Select;

const AddMeeting: React.FC = () => {
  const [form] = Form.useForm();
  const router = useNavigate();

  const mutation = useMutation<unknown, unknown, MeetingFormData>({
    mutationFn: (newCalendar) =>
      axiosInstance.post(
        `${TEST_GRANT}/events?calendar_id=primary`,
        newCalendar
      ),
    mutationKey: ["calendarKey"],
    onSuccess: () => {
      message.success("Meeting added successfully!");
      router("/dashboard");
      form.resetFields();
    },
    onError: (error: any) => {
      message.error(
        `Failed to add calendar: ${error.response?.data?.message || error.message}`
      );
    },
  });

  const onFinish = (values: any) => {
    // Transform participants and resources from string array to object array
    const participants: Participant[] = values.participants?.map(
      (email: string) => ({
        name: "",
        email: email,
      })
    );

    const resources: Resource[] = values.resources?.map((email: string) => ({
      name: "",
      email: email,
    }));

    const meetingData: MeetingFormData = {
      ...values,
      participants,
      resources,
      when: {
        time: values.when ? (values.when as any).unix() : undefined,
      },
    };

    console.log("Meeting Data:", meetingData);
    const recurrence = ["RRULE:FREQ=WEEKLY;BYDAY=MO"];
    mutation.mutate({ ...meetingData, recurrence });
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Add New Meeting/Interview</h2>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item label="Title" name="title">
          <Input placeholder="Enter meeting title" />
        </Form.Item>
        <Form.Item label="Status" name="status">
          <Select placeholder="Select status">
            <Option value="confirmed">Confirmed</Option>
            <Option value="tentative">Tentative</Option>
            <Option value="cancelled">Cancelled</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Busy" name="busy" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="Participants" name="participants">
          <Select
            mode="tags"
            style={{ width: "100%" }}
            placeholder="Add participants by email"
          ></Select>
        </Form.Item>
        <Form.Item label="Resources" name="resources">
          <Select
            mode="tags"
            style={{ width: "100%" }}
            placeholder="Add resources by email"
          ></Select>
        </Form.Item>
        <Form.Item label="Description" name="description">
          <TextArea rows={4} placeholder="Enter description" />
        </Form.Item>
        <Form.Item label="When" name="when">
          <DatePicker showTime />
        </Form.Item>
        <Form.Item label="Location" name="location">
          <Input placeholder="Enter location" />
        </Form.Item>
        <Form.Item label="Recurrence Rules" name="recurrence">
          <Select
            mode="tags"
            style={{ width: "100%" }}
            placeholder="Add recurrence rules"
          ></Select>
        </Form.Item>
        <Form.Item>
          <Button loading={mutation.isPending} type="primary" htmlType="submit">
            Add Meeting
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddMeeting;
