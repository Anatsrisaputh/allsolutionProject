import React from 'react'
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "../style/login.css";
import {Link, useHistory} from 'react-router-dom'
import axios from "../../config/axios";




export default function Login() {

  const history = useHistory();
  const onFinish = async values => {
    console.log('Received values of form: ', values);
    const body = {
      username: values.username,
      password: values.password
    }

    try {
      const res = await axios.post("/user/login", body);
      console.log(res.data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.user.role);
      history.push("/")
      
    } catch (error) {
      console.log(error.response.status, error.status.message);
    }
  };

  

  return (
    <div className="container">
      Please login 
      <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <p>
          Forgot password
        </p>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <p > <a> <Link to="/register">register now! </Link> </a> </p>
      </Form.Item>
    </Form>
    </div>
  )
}
