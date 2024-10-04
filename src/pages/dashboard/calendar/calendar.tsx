import React, { useState } from "react";
import {
  Calendar as AntCalendar,
  Modal,
  Form,
  Input,
  DatePicker,
  TimePicker,
  Button,
} from "antd";
import moment, { Moment } from "moment";
import { PlusOutlined } from "@ant-design/icons";

interface Meeting {
  id: string;
  title: string;
  date: Moment;
  startTime: Moment;
  endTime: Moment;
}

const Calendar: React.FC = () => {
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Moment | null>(null);
  const [form] = Form.useForm();

  const showModal = (date: Moment) => {
    setSelectedDate(date);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleAddMeeting = (values: Omit<Meeting, "id">) => {
    const newMeeting: Meeting = {
      id: Date.now().toString(),
      title: values.title,
      date: values.date,
      startTime: values.startTime,
      endTime: values.endTime,
    };
    setMeetings([...meetings, newMeeting]);
    setIsModalVisible(false);
    form.resetFields();
  };

  const dateCellRender = (value: Moment) => {
    const listData = meetings.filter((meeting) =>
      meeting.date.isSame(value, "day")
    );
    return (
      <ul className="list-none p-0">
        {listData.map((item) => (
          <li key={item.id} className="text-xs mb-1">
            {item.title}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="p-4 mt-20">
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-[500]">Check and Schedule your calendar</h1>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => showModal(selectedDate || moment())}
        >
          Add Meeting
        </Button>
      </div>
      <AntCalendar
        className="bg-white rounded-lg shadow-md"
        cellRender={(date) => dateCellRender(moment(date.toDate()))}
        onSelect={(date) => showModal(moment(date.toDate()))}
      />
      <Modal
        title="Add Meeting"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form form={form} onFinish={handleAddMeeting} layout="vertical">
          <Form.Item
            name="title"
            label="Meeting Title"
            rules={[{ required: true, message: "Please enter a title" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="date"
            label="Date"
            initialValue={selectedDate}
            rules={[{ required: true, message: "Please select a date" }]}
          >
            <DatePicker className="w-full" />
          </Form.Item>
          <Form.Item
            name="time"
            label="Time"
            rules={[{ required: true, message: "Please select a time range" }]}
          >
            <TimePicker.RangePicker className="w-full" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Add Meeting
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Calendar;
