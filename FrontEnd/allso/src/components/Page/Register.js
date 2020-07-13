import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import axios from "../../config/axios";
import "../style/register.css";

function Register() {
  const [form] = Form.useForm();
  

  const onFinish = async values => {
    const body = {
      name: values.name,
      email: values.email,
      password: values.password,
    }
    await axios.post("/user/create", body);
    form.setFieldsValue({
    name: "",
    email: "",
    password: "",
    confirm: "",
    });
    alert("Register success");
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 8,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 8,
    },
  };

  return (
    <div className="Register-container">
       <Form
       form={form}
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      
    >
      <Form.Item 
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input allowClear/>
      </Form.Item >

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input allowClear/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input.Password allowClear/>
      </Form.Item>

      <Form.Item
        label="Confirm Password"
        name="confirm"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject('The two passwords that you entered do not match!');
            },
          }),
        ]}
      >
        <Input.Password allowClear/>
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" 
       >
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
  )
}

export default Register
