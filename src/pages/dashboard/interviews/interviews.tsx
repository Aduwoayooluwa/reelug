import React, { useState } from "react";
import {
  Table,
  Button,
  Modal,
  DatePicker,
  TimePicker,
  Form,
  Input,
  message,
  Space,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Interview } from "../../../types/interview";
import {
  fetchInterviews,
  scheduleInterview,
  updateInterview,
} from "../../../api/interviews";
import dayjs from "dayjs";

const Interviews: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [editingInterview, setEditingInterview] = useState<Interview | null>(
    null
  );
  const [form] = Form.useForm();
  const [editForm] = Form.useForm();
  const queryClient = useQueryClient();

  const {
    data: interviews,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["interviews"],
    queryFn: fetchInterviews,
  });

  const scheduleMutation = useMutation({
    mutationFn: scheduleInterview,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["interviews"] });
      setIsModalVisible(false);
      form.resetFields();
      message.success("Interview scheduled successfully");
    },
    onError: (error: Error) => {
      message.error(`Failed to schedule interview: ${error.message}`);
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateInterview,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["interviews"] });
      setIsEditModalVisible(false);
      editForm.resetFields();
      message.success("Interview updated successfully");
    },
    onError: (error: Error) => {
      message.error(`Failed to update interview: ${error.message}`);
    },
  });

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Interviewer/Company",
      dataIndex: "candidate",
      key: "candidate",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: unknown, record: Interview) => (
        <Space size="middle">
          <Button onClick={() => handleEditInterview(record)}>Edit</Button>
          <Button danger>Delete</Button>
        </Space>
      ),
    },
  ];

  const handleScheduleInterview = () => {
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    form.validateFields().then((values) => {
      const newInterview: Omit<Interview, "id"> = {
        title: values.title,
        date: values.date.format("YYYY-MM-DD"),
        time: values.time.format("HH:mm"),
        candidate: values.candidate,
      };
      scheduleMutation.mutate(newInterview);
    });
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleEditInterview = (interview: Interview) => {
    setEditingInterview(interview);
    editForm.setFieldsValue({
      ...interview,
      date: dayjs(interview.date),
      time: dayjs(interview.time, "HH:mm"),
    });
    setIsEditModalVisible(true);
  };

  const handleEditModalOk = () => {
    editForm.validateFields().then((values) => {
      if (editingInterview) {
        const updatedInterview: Interview = {
          ...editingInterview,
          title: values.title,
          date: values.date.format("YYYY-MM-DD"),
          time: values.time.format("HH:mm"),
          candidate: values.candidate,
        };
        updateMutation.mutate(updatedInterview);
      }
    });
  };

  const handleEditModalCancel = () => {
    setIsEditModalVisible(false);
    editForm.resetFields();
  };

  if (isLoading) {
    return <div>Loading interviews...</div>;
  }

  if (isError) {
    return <div>Error fetching interviews. Please try again later.</div>;
  }

  return (
    <div className="p-6 mt-20">
      <div className="flex justify-between items-center mb-6">
        <h1 className="font-[500]">Scheduled Interviews</h1>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={handleScheduleInterview}
        >
          Schedule Interview
        </Button>
      </div>
      <Table columns={columns} dataSource={interviews} rowKey="id" />
      <Modal
        title="Schedule Interview"
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        confirmLoading={scheduleMutation.isPending}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="title"
            label="Interview Title"
            rules={[
              { required: true, message: "Please enter the interview title" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="date"
            label="Date"
            rules={[{ required: true, message: "Please select the date" }]}
          >
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            name="time"
            label="Time"
            rules={[{ required: true, message: "Please select the time" }]}
          >
            <TimePicker style={{ width: "100%" }} format="HH:mm" />
          </Form.Item>
          <Form.Item
            name="candidate"
            label="Candidate Name"
            rules={[
              { required: true, message: "Please enter the candidate name" },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        title="Edit Interview"
        visible={isEditModalVisible}
        onOk={handleEditModalOk}
        onCancel={handleEditModalCancel}
        confirmLoading={updateMutation.isPending}
      >
        <Form form={editForm} layout="vertical">
          <Form.Item
            name="title"
            label="Interview Title"
            rules={[
              { required: true, message: "Please enter the interview title" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="date"
            label="Date"
            rules={[{ required: true, message: "Please select the date" }]}
          >
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            name="time"
            label="Time"
            rules={[{ required: true, message: "Please select the time" }]}
          >
            <TimePicker style={{ width: "100%" }} format="HH:mm" />
          </Form.Item>
          <Form.Item
            name="candidate"
            label="Candidate Name"
            rules={[
              { required: true, message: "Please enter the candidate name" },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Interviews;
