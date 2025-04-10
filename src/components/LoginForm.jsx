import React from "react";
import { Form, Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    if (values.username === "admin" && values.password === "12345678") {
      localStorage.setItem("isLoggedIn", true);
      message.success("Login Successful");
      navigate("/");
    } else {
      message.error("Incorrect Credentials");
    }
  };

  return (
    <Form
      name="login_form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      layout="vertical"
    >
      <h2 className="text-2xl font-bold mb-6 text-black text-center">Login</h2>

      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your Username!" }]}
        label={<span className="text-black">Username</span>}
      >
        <Input
          prefix={<FaUser className="text-gray-500" />}
          placeholder="Username"
          size="large"
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
        label={<span className="text-black">Password</span>}
      >
        <Input.Password
          prefix={<FaLock className="text-gray-500" />}
          placeholder="Password"
          size="large"
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="w-full bg-black hover:bg-gray-800 text-white"
          size="large"
        >
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
