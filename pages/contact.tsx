import React from 'react';
import Header from '../components/Header';
import AppFooter from '../components/Footer';
import { Form, Input, Button, Card, Row, Col } from 'antd';

const ContactPage = () => {
  const onFinish = (values: any) => {
    console.log('Form Values:', values);
  };

  return (
    <div>
      <Header />
      <main style={{ padding: '20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Contact Us</h2>

        <Row gutter={[24, 24]}>
          {/* Left Section: Address and Map */}
          <Col xs={24} md={12}>
            <Card
              title="Our Address"
              hoverable
              headStyle={{
                backgroundColor: '#f5f5f5',
                fontWeight: 'bold',
                textAlign: 'center',
              }}
              bodyStyle={{ padding: '20px' }}
              style={{
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                marginBottom: '20px',
              }}
            >
              <p><strong>Address:</strong> 123 Main Street, Cityville, Country</p>
              <p><strong>Phone:</strong> +1-234-567-890</p>
              <p><strong>Email:</strong> contact@mywebsite.com</p>
            </Card>
            <Card
              title="Find Us on the Map"
              hoverable
              headStyle={{
                backgroundColor: '#f5f5f5',
                fontWeight: 'bold',
                textAlign: 'center',
              }}
              bodyStyle={{ padding: '0' }}
              style={{
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-122.4194154846819!3d37.77492977975933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064dfd8c8d7%3A0x2c0b8c8b8b8b8b8b!2s123%20Main%20Street%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: '0', borderRadius: '8px' }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </Card>
          </Col>

          {/* Right Section: Contact Form */}
          <Col xs={24} md={12}>
            <Card
              title="Contact Form"
              hoverable
              headStyle={{
                backgroundColor: '#f5f5f5',
                fontWeight: 'bold',
                textAlign: 'center',
              }}
              bodyStyle={{ padding: '20px' }}
              style={{
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Form
                layout="vertical"
                onFinish={onFinish}
                style={{ maxWidth: '100%' }}
              >
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[{ required: true, message: 'Please enter your name!' }]}
                >
                  <Input placeholder="Enter your name" />
                </Form.Item>

                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: 'Please enter your email!' },
                    { type: 'email', message: 'Please enter a valid email!' },
                  ]}
                >
                  <Input placeholder="Enter your email" />
                </Form.Item>

                <Form.Item
                  label="Message"
                  name="message"
                  rules={[{ required: true, message: 'Please enter your message!' }]}
                >
                  <Input.TextArea rows={4} placeholder="Enter your message" />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit" block>
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </main>
    </div>
  );
};

export default ContactPage;