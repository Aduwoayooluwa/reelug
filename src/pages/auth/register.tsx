/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Form, Input, Button, Divider, message } from "antd";
import { Link } from "react-router-dom";
import {
  GoogleOutlined,
  LockOutlined,
  MailOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useSignUp } from "@clerk/clerk-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const [form] = Form.useForm();
  const { isLoaded, signUp, setActive } = useSignUp();
  const navigate = useNavigate();

  const onFinish = async (values: {
    email: string;
    password: string;
    username: string;
  }) => {
    if (!isLoaded) {
      return;
    }

    try {
      // Create the new user
      const user = await signUp.create({
        emailAddress: values.email,
        password: values.password,
        username: values.username,
      });

      if (user.status === "complete") {
        // User successfully created, attempt to set active
        await setActive({ session: user.createdSessionId });
        message.success("Registration successful");
        navigate("/dashboard");
      } else {
        console.log(user);
      }
    } catch (err: any) {
      console.error("Error:", err.errors ? err.errors[0].message : err);
      message.error(err.errors ? err.errors[0].message : err.toString());
    }
  };

  const handleGoogleAuth = () => {
    if (isLoaded) {
      signUp.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: "/dashboard",
        redirectUrlComplete: "/dashboard",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center min-h-screen p-6 md:p-0 bg-gradient-to-br from-green-50 to-green-100"
    >
      <div className="w-full max-w-md p-8 space-y-5 bg-white shadow-xl rounded-lg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-green-500 to-green-600"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full transform translate-x-1/2 -translate-y-1/2 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-200 rounded-full transform -translate-x-1/2 translate-y-1/2 opacity-50"></div>
        <div className="w-full grid place-items-center">
          <Link to="/">
            <img src={"/reelog_logo.svg"} alt="logo" className="w-20 h-20" />
          </Link>
        </div>
        <div className="relative">
          <h2 className="text-3xl font-[600] text-center text-gray-800 mb-6">
            Register
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Create your account and start exploring
          </p>

          <Form
            name="register"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            className="space-y-6"
            form={form}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="text-green-500" />}
                placeholder="Username"
                className="rounded-md border-green-300 focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
              />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please input your Email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input
                prefix={<MailOutlined className="text-green-500" />}
                placeholder="Email"
                className="rounded-md border-green-300 focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="text-green-500" />}
                placeholder="Password"
                className="rounded-md border-green-300 focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full">
                Sign Up
              </Button>
            </Form.Item>

            <Divider plain className="text-gray-400">
              Or
            </Divider>

            <Form.Item>
              <Button
                className="w-full flex items-center justify-center space-x-2 py-2 px-4 border border-green-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-200"
                icon={<GoogleOutlined className="text-green-500" />}
                onClick={handleGoogleAuth}
              >
                <span>Sign up with Google</span>
              </Button>
            </Form.Item>
          </Form>

          <p className="mt-8 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-green-600 hover:text-green-500 transition duration-200"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Register;
