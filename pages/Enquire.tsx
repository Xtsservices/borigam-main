import React from 'react';
import { Form, Input, Select, Button, message } from 'antd';
import { MailOutlined, UserOutlined, PhoneOutlined } from '@ant-design/icons';

const { Option } = Select;

const Enquire = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = React.useState(false);

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Received values of form: ', values);
      message.success('Enquiry submitted successfully! We will contact you shortly.');
      form.resetFields();
    } catch (error) {
      message.error('Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const validatePhone = (_: any, value: string) => {
    if (!value) return Promise.reject('Please enter your phone number!');
    if (!/^[0-9]{10}$/.test(value)) {
      return Promise.reject('Please enter a valid 10-digit number!');
    }
    return Promise.resolve();
  };

  return (
    <div id="enquire-section" style={{
      marginTop: '-50px',
      // backgroundColor: '#f8f8f8', 
      padding: '80px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
      }}>
        {/* Main container with centered content */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '40px'
        }}>
          {/* Image container */}
          <div style={{
            flex: '1',
            minWidth: '300px',
            maxWidth: '500px',
            textAlign: 'center'
          }}>
            <img 
              src="images/enquire.jpeg" 
              alt="Let's Connect" 
              style={{ 
                width: '160%',
                height: 'auto',
                maxHeight: '500px',
                objectFit: 'cover',
                borderRadius: '15px', 
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
              }} 
            />
          </div>

          {/* Form container - adjusted to fit perfectly */}
          <div style={{
            flex: '1',
            minWidth: '300px',
            maxWidth: '500px',
            backgroundColor: '#fff',
            borderRadius: '15px',
            padding: '40px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <h2 style={{ 
                fontSize: '32px', 
                fontWeight: '700', 
                marginBottom: '10px', 
                color: '#333',
                background: 'linear-gradient(90deg, #ff5722, #ff9800)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Enquire Now
              </h2>
              <p style={{ color: '#666', fontSize: '16px' }}>
                Fill out the form and our team will get back to you within 24 hours
              </p>
            </div>

            <Form
              form={form}
              name="enquiry"
              onFinish={onFinish}
              layout="vertical"
              scrollToFirstError
            >
              <Form.Item
                name="name"
                label={<span style={{ fontWeight: '500' }}>Full Name</span>}
                rules={[
                  { required: true, message: 'Please enter your name!' },
                  { min: 3, message: 'Name must be at least 3 characters!' },
                  { max: 50, message: 'Name cannot exceed 50 characters!' }
                ]}
              >
                <Input 
                  placeholder="Enter your full name" 
                  size="large" 
                  prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                />
              </Form.Item>

              <Form.Item
                name="email"
                label={<span style={{ fontWeight: '500' }}>Email</span>}
                rules={[
                  { required: true, message: 'Please enter your email!' },
                  { type: 'email', message: 'Please enter a valid email!' },
                  { max: 50, message: 'Email cannot exceed 50 characters!' }
                ]}
              >
                <Input 
                  placeholder="Enter your email address" 
                  size="large" 
                  prefix={<MailOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                />
              </Form.Item>

              <Form.Item
                name="phone"
                label={<span style={{ fontWeight: '500' }}>Phone Number</span>}
                rules={[
                  { validator: validatePhone }
                ]}
              >
                <Input 
                  placeholder="Enter your 10-digit phone number" 
                  size="large" 
                  prefix={<PhoneOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                  maxLength={10}
                  type="tel"
                />
              </Form.Item>

              <Form.Item
                name="courses"
                label={<span style={{ fontWeight: '500' }}>Choose Entrance Exam(s)</span>}
                rules={[
                  { required: true, message: 'Please select at least one exam!' },
                  { type: 'array', max: 5, message: 'You can select up to 5 exams maximum!' }
                ]}
              >
                <Select 
                  mode="multiple"
                  placeholder="Select your exam(s)" 
                  size="large"
                  allowClear
                  showArrow
                  style={{ width: '100%' }}
                  dropdownStyle={{ borderRadius: '8px' }}
                >
                  <Option value="nift">NIFT Entrance</Option>
                  <Option value="bfa">BFA Entrance</Option>
                  <Option value="nid">NID Entrance</Option>
                  <Option value="fddi">FDDI Entrance</Option>
                  <Option value="ceed">CEED Entrance</Option>
                  <Option value="aat">AAT Entrance</Option>
                  <Option value="uceed">UCEED Entrance</Option>
                  <Option value="nata">NATA Entrance</Option>
                  <Option value="barch">B.ARCH Entrance</Option>
                  <Option value="design">Design Entrance Coaching</Option>
                </Select>
              </Form.Item>

              <Form.Item>
                <Button 
                  type="primary" 
                  htmlType="submit" 
                  size="large" 
                  block
                  loading={loading}
                  style={{
                    background: 'linear-gradient(90deg, #ff5722, #ff9800)',
                    border: 'none',
                    borderRadius: '8px',
                    height: '45px',
                    fontWeight: '600',
                    fontSize: '16px',
                    boxShadow: '0 4px 8px rgba(255, 87, 34, 0.3)'
                  }}
                >
                  Submit Enquiry
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enquire;