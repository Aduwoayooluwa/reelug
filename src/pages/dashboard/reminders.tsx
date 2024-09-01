// src/pages/RemindersPage.tsx
import React, { useState } from "react";
import {
  Button,
  Modal,
  Form,
  Input,
  List,
  DatePicker,
  TimePicker,
  message,
} from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
  BellOutlined,
} from "@ant-design/icons";
import moment from "moment";

interface Reminder {
  id: string;
  title: string;
  date: string;
  time: string;
}

const RemindersPage: React.FC = () => {
  const [reminders, setReminders] = useState<Reminder[]>([
    {
      id: "1",
      title: "Follow-up with XYZ Company",
      date: "2024-09-15",
      time: "10:00 AM",
    },
    {
      id: "2",
      title: "Apply for ABC Corp Position",
      date: "2024-09-20",
      time: "2:00 PM",
    },
  ]); // Mock data for reminders

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingReminder, setEditingReminder] = useState<Reminder | null>(null);
  const [form] = Form.useForm();

  const showAddReminderModal = () => {
    setIsEditing(false);
    setEditingReminder(null);
    form.resetFields();
    setIsModalVisible(true);
  };

  const showEditReminderModal = (reminder: Reminder) => {
    setIsEditing(true);
    setEditingReminder(reminder);
    form.setFieldsValue({
      ...reminder,
      date: moment(reminder.date),
      time: moment(reminder.time, "h:mm A"),
    });
    setIsModalVisible(true);
  };

  const handleDeleteReminder = (id: string) => {
    setReminders((prevReminders) =>
      prevReminders.filter((reminder) => reminder.id !== id)
    );
    message.success("Reminder deleted successfully!");
  };

  const handleModalOk = () => {
    form.validateFields().then((values) => {
      const formattedValues = {
        ...values,
        date: values.date.format("YYYY-MM-DD"),
        time: values.time.format("h:mm A"),
      };

      if (isEditing && editingReminder) {
        // Edit existing reminder
        setReminders((prevReminders) =>
          prevReminders.map((reminder) =>
            reminder.id === editingReminder.id
              ? { ...reminder, ...formattedValues }
              : reminder
          )
        );
        message.success("Reminder updated successfully!");
      } else {
        // Add new reminder
        const newReminder: Reminder = {
          id: (reminders.length + 1).toString(),
          ...formattedValues,
        };
        setReminders((prevReminders) => [...prevReminders, newReminder]);
        message.success("Reminder added successfully!");
      }
      setIsModalVisible(false);
      form.resetFields();
    });
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleSnoozeReminder = (reminderId: string) => {
    message.info("Reminder snoozed for 10 minutes");
    console.log(reminderId);
    // Logic to snooze reminder (you can adjust the snooze duration and behavior as needed)
  };

  return (
    <div className="max-w-3xl mx-auto p-8 mt-20 bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Reminders & Notifications</h2>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={showAddReminderModal}
        >
          Add New Reminder
        </Button>
      </div>

      <List
        itemLayout="horizontal"
        dataSource={reminders}
        renderItem={(reminder) => (
          <List.Item
            actions={[
              <Button
                icon={<EditOutlined />}
                onClick={() => showEditReminderModal(reminder)}
                key="edit"
              >
                Edit
              </Button>,
              <Button
                danger
                icon={<DeleteOutlined />}
                onClick={() => handleDeleteReminder(reminder.id)}
                key="delete"
              >
                Delete
              </Button>,
              <Button
                type="default"
                icon={<BellOutlined />}
                onClick={() => handleSnoozeReminder(reminder.id)}
                key="snooze"
              >
                Snooze
              </Button>,
            ]}
          >
            <List.Item.Meta
              title={
                <h3 className="text-lg font-semibold">{reminder.title}</h3>
              }
              description={
                <p className="text-sm">
                  {reminder.date} at {reminder.time}
                </p>
              }
            />
          </List.Item>
        )}
      />

      <Modal
        title={isEditing ? "Edit Reminder" : "Add New Reminder"}
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        okText={isEditing ? "Update" : "Add"}
      >
        <Form
          form={form}
          layout="vertical"
          initialValues={{ title: "", date: null, time: null }}
        >
          <Form.Item
            label="Reminder Title"
            name="title"
            rules={[
              {
                required: true,
                message: "Please enter a title for the reminder!",
              },
            ]}
          >
            <Input placeholder="Enter reminder title" />
          </Form.Item>
          <Form.Item
            label="Date"
            name="date"
            rules={[
              {
                required: true,
                message: "Please select a date for the reminder!",
              },
            ]}
          >
            <DatePicker className="w-full" />
          </Form.Item>
          <Form.Item
            label="Time"
            name="time"
            rules={[
              {
                required: true,
                message: "Please select a time for the reminder!",
              },
            ]}
          >
            <TimePicker use12Hours format="h:mm A" className="w-full" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default RemindersPage;
