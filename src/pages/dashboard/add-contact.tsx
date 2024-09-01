/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Form, Input, Button, message } from "antd";
import axiosInstance from "../../config/api.config";
import { useMutation } from "@tanstack/react-query";
import { TEST_GRANT } from "../../config/env.config";
import { useNavigate } from "react-router-dom";
import { Contact } from "../../types/add-contact";

const { TextArea } = Input;

const CreateContact: React.FC = () => {
  const [form] = Form.useForm();

  const router = useNavigate();

  const mutation = useMutation<unknown, unknown, Contact>({
    mutationFn: (newContact) =>
      axiosInstance.post(`${TEST_GRANT}/contacts`, newContact),
    mutationKey: ["contactKey"],
    onSuccess: () => {
      message.success("Contact created successfully!");

      router("/dashboard");
      form.resetFields();
    },
    onError: (error: any) => {
      message.error(
        `Failed to add contact: ${error.response?.data?.message || error.message}`
      );
    },
  });

  const onFinish = (values: any) => {
    const newContact: Contact = {
      given_name: values.given_name,
      surname: values.surname,
      emails: values.emails.map((email: string) => ({ email, type: "work" })), // Defaulting type to work
      company_name: values.company_name,
      job_title: values.job_title,
      notes: values.notes,
      phone_numbers: values.phone_numbers,
      physical_addresses: values.physical_addresses,
    };

    // Mock API call or handling of contact creation
    console.log("New Contact Created:", newContact);
    mutation.mutate(newContact);
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Create New Contact</h2>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Given Name"
          name="given_name"
          rules={[{ required: true, message: "Please input the given name!" }]}
        >
          <Input placeholder="Enter given name" />
        </Form.Item>
        <Form.Item
          label="Surname"
          name="surname"
          rules={[{ required: true, message: "Please input the surname!" }]}
        >
          <Input placeholder="Enter surname" />
        </Form.Item>
        <Form.Item
          label="Emails"
          name="emails"
          rules={[
            { required: true, message: "Please input at least one email!" },
          ]}
        >
          <Input.TextArea
            placeholder="Enter emails separated by commas"
            autoSize={{ minRows: 2, maxRows: 4 }}
          />
        </Form.Item>
        <Form.Item label="Company Name" name="company_name">
          <Input placeholder="Enter company name" />
        </Form.Item>
        <Form.Item label="Job Title" name="job_title">
          <Input placeholder="Enter job title" />
        </Form.Item>
        <Form.Item label="Notes" name="notes">
          <TextArea placeholder="Add some notes about the contact" />
        </Form.Item>
        {/* Additional fields for phone numbers and addresses can go here */}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create Contact
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateContact;
