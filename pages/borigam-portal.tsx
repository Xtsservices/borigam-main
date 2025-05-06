import React from 'react';
import { Form, Input, Button, Card, Typography, Image } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Head from 'next/head';

const { Title, Text, Link } = Typography;

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
        {/* Left: Logo Image */}
        <div className="left-section">
          <Image
            src="/images/logo2.png"
            alt="BORIGAM Logo"
            preview={false}
            className="logo-image"
          />
        </div>

        {/* Right: Login Form */}
        <div className="right-section">
          <Card className="login-card" bordered={false}>
            <Title level={3} className="login-title">Login</Title>
            <Text type="secondary">Please login to your account</Text>
            <Form
              name="login_form"
              className="login-form"
              layout="vertical"
              onFinish={onFinish}
              style={{ marginTop: 24 }}
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: 'Please input your Email!' },
                  { type: 'email', message: 'Please enter a valid email!' },
                ]}
              >
                <Input
                  prefix={<UserOutlined />}
                  placeholder="Enter your email"
                />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
              >
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder="Enter your password"
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Sign In
                </Button>
              </Form.Item>

              <div className="forgot-password">
                <Link>Forgot Password?</Link>
              </div>
            </Form>
          </Card>
        </div>
      </div>

      {/* Global font setup */}
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          background-color: #fff;
        }
      `}</style>

      {/* Component-specific styles */}
      <style jsx>{`
        .login-container {
          display: flex;
          height: 100vh;
        }

        .left-section {
          flex: 1;
          background-color: #f9fafc;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 5px 0 15px rgba(0, 0, 0, 0.05);
        }

        .logo-image {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        .right-section {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 32px;
        }

        .login-card {
          width: 100%;
          max-width: 400px;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
        }

        .login-title {
          text-align: center;
        }

        .forgot-password {
          text-align: center;
          margin-top: 12px;
        }

        @media (max-width: 768px) {
          .login-container {
            flex-direction: column;
          }

          .left-section {
            height: 200px;
            width: 100%;
            box-shadow: none;
          }

          .right-section {
            width: 100%;
            padding: 24px;
          }

          .login-card {
            max-width: 100%;
            box-shadow: none;
            border-radius: 0;
          }
        }
      `}</style>
    </>
  );
};

export default LoginPage;
