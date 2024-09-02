import React from "react";
import { Form, Input, Button, Checkbox, Tag } from "antd";
import { useNavigate } from "react-router-dom";
// import "~antd/dist/antd.css";

const LoginPage: React.FC = () => {
  const router = useNavigate();
  const onFinish = (values: unknown) => {
    console.log("Success:", values);
    router("/dashboard");
  };

  const onFinishFailed = (errorInfo: unknown) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen relative w-full bg-cover bg-center bg-gray-100"
      style={{
        backgroundImage: `url('/img_size.webp')`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>{" "}
      <div className="w-full max-w-md p-8 space-y-8 z-10 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="space-y-4"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input size="large" placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input.Password size="large" placeholder="Password" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" className="mb-0">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Tag className="w-full overflow-x-auto">
            Just type in a username and password and login for now. Working on a
            proper auth system
          </Tag>

          <Form.Item className="text-center">
            <Button type="primary" htmlType="submit" className="w-full">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
