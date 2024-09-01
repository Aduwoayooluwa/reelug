import React, { useState } from "react";
import { Button, Modal, Form, Input, List, message } from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";

interface EmailTemplate {
  id: string;
  title: string;
  content: string;
}

const EmailTemplatesPage: React.FC = () => {
  const [templates, setTemplates] = useState<EmailTemplate[]>([
    {
      id: "1",
      title: "Follow-Up After Application",
      content:
        "Dear [Hiring Manager], I am following up on my application for the [Job Title] position...",
    },
    {
      id: "2",
      title: "Thank You After Interview",
      content:
        "Dear [Hiring Manager], Thank you for the opportunity to interview for the [Job Title] position...",
    },
  ]); // Mock data for email templates

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingTemplate, setEditingTemplate] = useState<EmailTemplate | null>(
    null
  );
  const [form] = Form.useForm();

  const showAddTemplateModal = () => {
    setIsEditing(false);
    setEditingTemplate(null);
    form.resetFields();
    setIsModalVisible(true);
  };

  const showEditTemplateModal = (template: EmailTemplate) => {
    setIsEditing(true);
    setEditingTemplate(template);
    form.setFieldsValue(template);
    setIsModalVisible(true);
  };

  const handleDeleteTemplate = (id: string) => {
    setTemplates((prevTemplates) =>
      prevTemplates.filter((template) => template.id !== id)
    );
    message.success("Template deleted successfully!");
  };

  const handleModalOk = () => {
    form.validateFields().then((values) => {
      if (isEditing && editingTemplate) {
        // Edit existing template
        setTemplates((prevTemplates) =>
          prevTemplates.map((template) =>
            template.id === editingTemplate.id
              ? { ...template, ...values }
              : template
          )
        );
        message.success("Template updated successfully!");
      } else {
        // Add new template
        const newTemplate: EmailTemplate = {
          id: (templates.length + 1).toString(),
          ...values,
        };
        setTemplates((prevTemplates) => [...prevTemplates, newTemplate]);
        message.success("Template added successfully!");
      }
      setIsModalVisible(false);
      form.resetFields();
    });
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  return (
    <div className="max-w-3xl mx-auto p-8 mt-20 bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Email Templates</h2>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={showAddTemplateModal}
        >
          Add New Template
        </Button>
      </div>

      <List
        itemLayout="horizontal"
        dataSource={templates}
        renderItem={(template) => (
          <List.Item
            actions={[
              <Button
                icon={<EditOutlined />}
                onClick={() => showEditTemplateModal(template)}
                key="edit"
              >
                Edit
              </Button>,
              <Button
                danger
                icon={<DeleteOutlined />}
                onClick={() => handleDeleteTemplate(template.id)}
                key="delete"
              >
                Delete
              </Button>,
            ]}
          >
            <List.Item.Meta
              title={
                <h3 className="text-lg font-semibold">{template.title}</h3>
              }
              description={
                <p className="text-sm">{template.content.slice(0, 50)}...</p>
              }
            />
          </List.Item>
        )}
      />

      <Modal
        title={isEditing ? "Edit Email Template" : "Add New Email Template"}
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        okText={isEditing ? "Update" : "Add"}
      >
        <Form
          form={form}
          layout="vertical"
          initialValues={{ title: "", content: "" }}
        >
          <Form.Item
            label="Template Title"
            name="title"
            rules={[
              {
                required: true,
                message: "Please enter a title for the template!",
              },
            ]}
          >
            <Input placeholder="Enter template title" />
          </Form.Item>
          <Form.Item
            label="Template Content"
            name="content"
            rules={[
              {
                required: true,
                message: "Please enter the content for the template!",
              },
            ]}
          >
            <Input.TextArea
              rows={4}
              placeholder="Enter email template content"
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default EmailTemplatesPage;
