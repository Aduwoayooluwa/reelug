/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Form, Input, Button, Select, Checkbox, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { EmailFormData } from "../../types/email.types";
import { useMutation } from "@tanstack/react-query";
import { TEST_GRANT } from "../../config/env.config";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../config/api.config";

const { TextArea } = Input;

const EmailForm: React.FC = () => {
  const [form] = Form.useForm();

  const router = useNavigate();

  const mutation = useMutation<unknown, unknown, EmailFormData>({
    mutationFn: (newEmail) =>
      axiosInstance.post(`${TEST_GRANT}/messages/send`, newEmail),
    mutationKey: ["emailKey"],
    onSuccess: () => {
      message.success("Email Sent Successfully!");

      router("/dashboard");
      form.resetFields();
    },
    onError: (error: any) => {
      message.error(
        `Failed to send email: ${error.response?.data?.message || error.message}`
      );
    },
  });

  const onFinish = (values: any) => {
    const emailData: EmailFormData = {
      subject: values.subject,
      to: values.to.map((email: string) => ({ email, name: "" })),
      cc: values.cc.map((email: string) => ({ email, name: "" })),
      bcc: values.bcc.map((email: string) => ({ email, name: "" })),
      reply_to: values.reply_to.map((email: string) => ({ email, name: "" })),
      body: values.body,
      tracking_options: {
        opens: values.opens || false,
        links: values.links || false,
        thread_replies: values.thread_replies || false,
        label: values.label || "",
      },
    };

    mutation.mutate(emailData);
    console.log("Email data:", emailData);
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Compose Email</h2>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item
          label="Subject"
          name="subject"
          rules={[{ required: true, message: "Please enter a subject" }]}
        >
          <Input placeholder="Enter email subject" />
        </Form.Item>

        <Form.Item
          label="To"
          name="to"
          rules={[
            { required: true, message: "Please enter at least one recipient" },
          ]}
        >
          <Select
            mode="tags"
            style={{ width: "100%" }}
            placeholder="Add recipients"
          >
            <Select.Option key="dorothy@example.com">
              dorothy@example.com
            </Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="CC" name="cc">
          <Select
            mode="tags"
            style={{ width: "100%" }}
            placeholder="Add CC recipients"
          >
            <Select.Option key="carver@example.com">
              carver@example.com
            </Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="BCC" name="bcc">
          <Select
            mode="tags"
            style={{ width: "100%" }}
            placeholder="Add BCC recipients"
          >
            <Select.Option key="al@example.com">al@example.com</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Reply To" name="reply_to">
          <Select
            mode="tags"
            style={{ width: "100%" }}
            placeholder="Add Reply-To recipients"
          >
            <Select.Option key="skwolek@example.com">
              skwolek@example.com
            </Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Body"
          name="body"
          rules={[{ required: true, message: "Please enter email body" }]}
        >
          <TextArea rows={4} placeholder="Enter email content" />
        </Form.Item>

        <h3 className="text-lg font-bold mb-2">Tracking Options</h3>
        <Form.Item name="opens" valuePropName="checked" initialValue={true}>
          <Checkbox>Track Opens</Checkbox>
        </Form.Item>
        <Form.Item name="links" valuePropName="checked" initialValue={true}>
          <Checkbox>Track Links</Checkbox>
        </Form.Item>
        <Form.Item
          name="thread_replies"
          valuePropName="checked"
          initialValue={true}
        >
          <Checkbox>Track Thread Replies</Checkbox>
        </Form.Item>

        <Form.Item label="Label" name="label">
          <Input placeholder="Enter label for tracking" />
        </Form.Item>

        <Form.Item>
          <Button
            loading={mutation.isPending}
            type="primary"
            htmlType="submit"
            icon={<PlusOutlined />}
            className="w-full"
          >
            Send Email
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EmailForm;
