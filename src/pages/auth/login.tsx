/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Form, Input, Button, Tag } from "antd";
import { useNavigate } from "react-router-dom";
import { GoogleOutlined, WindowsOutlined } from "@ant-design/icons";
import { CALLBACK_URI, CLIENT_ID, N_BASE_URL } from "../../config/env.config";

const LoginPage: React.FC = () => {
  const [form] = Form.useForm();
  const router = useNavigate();

  const onFinish = (values: any) => {
    console.log("Success:", values);
    router("/dashboard");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const handleGoogleLogin = () => {
    window.location.href = `${N_BASE_URL}/connect/auth?client_id=${CLIENT_ID}&redirect_uri=${CALLBACK_URI}&response_type=code&provider=google`;
  };

  const handleMicrosoftLogin = () => {
    window.location.href = `${N_BASE_URL}/connect/auth?client_id=${CLIENT_ID}&redirect_uri=${CALLBACK_URI}&response_type=code&provider=${"microsoft"}`;
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
          form={form}
        >
          <Tag color="volcano" className="w-full text-center overflow-x-auto">
            Choose Authentication Method
          </Tag>

          {/* Email Input Field */}
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input type="email" placeholder="Email" />
          </Form.Item>

          {/* Password Input Field */}
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full mt-2">
              Login
            </Button>
          </Form.Item>

          <Form.Item className="text-center space-y-4">
            {/* Google Login Button */}
            <Button
              className="w-full mt-2 flex items-center justify-center"
              style={{
                backgroundColor: "#4285F4",
                color: "#fff",
                borderRadius: "4px",
                border: "none",
              }}
              icon={<GoogleOutlined />}
              onClick={handleGoogleLogin}
            >
              Sign in with Google
            </Button>

            {/* Microsoft Login Button */}
            <Button
              className="w-full mt-2 flex items-center justify-center"
              style={{
                backgroundColor: "#2F2F2F",
                color: "#fff",
                borderRadius: "4px",
                border: "none",
              }}
              icon={<WindowsOutlined />}
              onClick={handleMicrosoftLogin}
            >
              Sign in with Microsoft
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
