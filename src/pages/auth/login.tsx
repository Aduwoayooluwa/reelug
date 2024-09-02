/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Form, Button, Tag, message } from "antd";
import { useNavigate } from "react-router-dom";
import { GoogleOutlined, WindowsOutlined } from "@ant-design/icons";
import { useMutation } from "@tanstack/react-query";
import { _axios } from "../../config/api.config";
import { CALLBACK_URI, CLIENT_ID, N_BASE_URL } from "../../config/env.config";

const LoginPage: React.FC = () => {
  const [form] = Form.useForm();
  const router = useNavigate();

  const onFinish = (values: unknown) => {
    console.log("Success:", values);
    router("/dashboard");
  };

  const onFinishFailed = (errorInfo: unknown) => {
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
          {/* <Form.Item
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
          </Form.Item> */}

          <Tag color="volcano" className="w-full text-center overflow-x-auto">
            Choose Authentication Method
          </Tag>

          <Form.Item className="text-center space-y-4">
            {/* <Button
              loading={mutation.isPending}
              type="primary"
              htmlType="submit"
              className="w-full"
            >
              Log in
            </Button> */}

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
