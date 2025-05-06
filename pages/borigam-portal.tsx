import React from 'react';
import { Form, Input, Button, Card, Typography, Image } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Head from 'next/head';
import "public/images/logo2.png";

const { Title, Text } = Typography;

const LoginPage: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <>
      <Head>
        <title>BORIGAM - Login</title>
      </Head>
      <div className="login-container">
        <div className="left-section">
          <div className="image-container">
            {/* Replace this with your actual image */}
            <Image
              src="logo2.png" 
              alt="BORIGAM Logo"
              preview={false}
            />
          </div>
          <div className="exams">
          </div>
        </div>
        <div className="right-section">
          <Card className="login-card">
            <Title level={3} className="login-title">LOGIN</Title>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="email"
                rules={[{ required: true, message: 'Please input your Email!' }]}
              >
                <Input 
                  prefix={<UserOutlined className="site-form-item-icon" />} 
                  placeholder="Enter your email" 
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Enter your Password"
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Sign In
                </Button>
              </Form.Item>
              <div className="forgot-password">
                <Text>Forgot Password ?</Text>
              </div>
            </Form>
          </Card>
        </div>
      </div>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
            sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
        }
      `}</style>
      <style jsx>{`
        .login-container {
          display: flex;
          height: 100vh;
        }
        .left-section {
          flex: 1;
          background-color: #f0f2f5;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }
        .image-container {
          margin-bottom: 30px;
          text-align: center;
        }
        .image-container :global(.ant-image) {
          max-width: 300px;
        }
        .image-container :global(.ant-image-img) {
          object-fit: contain;
          max-height: 150px;
        }
        .institution {
          font-size: 24px;
          font-weight: 500;
          margin-bottom: 40px;
          color: #333;
        }
        .exams {
          font-size: 18px;
          color: #666;
          text-align: center;
        }
        .right-section {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: white;
        }
        .login-card {
          width: 400px;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .login-title {
          text-align: center;
          margin-bottom: 30px;
          color: #333;
        }
        .login-form {
          max-width: 100%;
        }
        .login-form-button {
          width: 100%;
        }
        .forgot-password {
          text-align: center;
          margin-top: 10px;
        }
        .forgot-password:hover {
          color: #1890ff;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .login-container {
            flex-direction: column;
          }
          .left-section {
            padding: 40px 20px;
          }
          .right-section {
            padding: 20px;
          }
          .login-card {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default LoginPage;