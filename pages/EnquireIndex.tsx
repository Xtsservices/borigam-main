import React, { useEffect } from 'react';
import { Form, Input, Select, Button, message, DatePicker, Modal } from 'antd';
import { MailOutlined, UserOutlined, PhoneOutlined, CalendarOutlined, CloseOutlined } from '@ant-design/icons';
import dayjs, { Dayjs } from 'dayjs';

const { Option } = Select;

const Enquire = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = React.useState(false);
  const [appointmentModalVisible, setAppointmentModalVisible] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(null);
  const [enquiryModalVisible, setEnquiryModalVisible] = React.useState(true);

  useEffect(() => {
    // Show the enquiry modal when component mounts
    setEnquiryModalVisible(true);
  }, []);

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Received values of form: ', values);
      message.success('Enquiry submitted successfully! We will contact you shortly.');
      form.resetFields();
      setEnquiryModalVisible(false);
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

  const handleAppointmentBooking = () => {
    setAppointmentModalVisible(true);
  };

  const handleAppointmentSubmit = () => {
    if (!selectedDate) {
      message.error('Please select a date for your appointment');
      return;
    }
    message.success(`Appointment booked for ${selectedDate.format('MMMM Do, YYYY')}! We will confirm shortly.`);
    setAppointmentModalVisible(false);
    setSelectedDate(null);
  };

  return (
    <div id="enquire-section" style={{
      padding: '40px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      background: 'transparent'
    }}>
      {/* Enquiry Modal that appears on page load */}
      <Modal
        title={null}
        open={enquiryModalVisible}
        onCancel={() => setEnquiryModalVisible(false)}
        footer={null}
        closable={false}
        centered
        width={800}
        bodyStyle={{ padding: 0 }}
        style={{ borderRadius: '12px', overflow: 'hidden' }}
      >
        <div style={{ display: 'flex', height: '500px' }}>
          {/* Image Section */}
          <div style={{ 
            flex: 1,
            background: 'linear-gradient(135deg, #ff5722, #ff4500, #ff7043)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            position: 'relative'
          }}>
            <img 
              src="images/enquire.jpeg" 
              alt="Let's Connect" 
              style={{ 
                position: 'absolute',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                zIndex: -1
              }} 
            />
            <div style={{ 
              position: 'absolute', 
              top: '20px', 
              right: '20px', 
              cursor: 'pointer',
              color: 'white',
              fontSize: '24px'
            }} onClick={() => setEnquiryModalVisible(false)}>
              <CloseOutlined />
            </div>
            <h2 style={{ 
            
              fontSize: '32px', 
              fontWeight: '700', 
              marginBottom: '16px',
              textShadow: '0 2px 4px rgba(0,0,0,0.5)'
            }}>
              Welcome!
            </h2>
            <p style={{ 
              fontSize: '18px', 
              maxWidth: '80%', 
              textAlign: 'center',
              textShadow: '0 1px 3px rgba(0,0,0,0.5)'
            }}>
              Let's get started with your educational journey. Fill out the form and we'll contact you within 24 hours.
            </p>
            <Button 
              type="primary" 
              size="large"
              icon={<CalendarOutlined />}
              onClick={handleAppointmentBooking}
              style={{
                marginTop: '30px',
                background: 'rgba(255,255,255,0.2)',
                border: '2px solid white',
                borderRadius: '8px',
                height: '50px',
                fontWeight: '600',
                fontSize: '16px',
                backdropFilter: 'blur(5px)'
              }}
            >
              Book an Appointment
            </Button>
          </div>

          {/* Form Section */}
          <div style={{ 
            flex: 1, 
            padding: '40px',
            background: 'white',
            overflowY: 'auto',
            marginBottom: '-60px', 


          }}>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <h2 style={{ 
                marginTop:'-50px',
                fontSize: '24px', 
                fontWeight: '700', 
                color: 'black', 
              }}>
                Enquire Now
              </h2>
              <p style={{ color: '#666', fontSize: '14px' }}>
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
                label={<span style={{ fontWeight: '500', fontSize: '14px' }}>Full Name</span>}
                rules={[
                  { required: true, message: 'Please enter your name!' },
                  { min: 3, message: 'Name must be at least 3 characters!' },
                  { max: 50, message: 'Name cannot exceed 50 characters!' }
                ]}
              >
                <Input 
                  placeholder="Enter your full name" 
                  size="middle" 
                  prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                />
              </Form.Item>

              <Form.Item
                name="email"
                label={<span style={{ fontWeight: '500', fontSize: '14px' }}>Email</span>}
                rules={[
                  { required: true, message: 'Please enter your email!' },
                  { type: 'email', message: 'Please enter a valid email!' },
                  { max: 50, message: 'Email cannot exceed 50 characters!' }
                ]}
              >
                <Input 
                  placeholder="Enter your email address" 
                  size="middle" 
                  prefix={<MailOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                />
              </Form.Item>

              <Form.Item
                name="phone"
                label={<span style={{ fontWeight: '500', fontSize: '14px' }}>Phone Number</span>}
                rules={[
                  { validator: validatePhone }
                ]}
              >
                <Input 
                  placeholder="Enter your 10-digit phone number" 
                  size="middle" 
                  prefix={<PhoneOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                  maxLength={10}
                  type="tel"
                />
              </Form.Item>

              <Form.Item
                name="courses"
                label={<span style={{ fontWeight: '500', fontSize: '14px' }}>Choose Entrance Exam(s)</span>}
                rules={[
                  { required: true, message: 'Please select at least one exam!' },
                  { type: 'array', max: 5, message: 'You can select up to 5 exams maximum!' }
                ]}
              >
                <Select 
                  mode="multiple"
                  placeholder="Select your exam(s)" 
                  size="middle"
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
                  size="middle" 
                  block
                  loading={loading}
                  style={{
                    background: 'linear-gradient(90deg, #ff5722, #ff9800)',
                    border: 'none',
                    borderRadius: '8px',
                    height: '40px',
                    fontWeight: '600',
                    fontSize: '14px',
                    boxShadow: '0 4px 8px rgba(255, 87, 34, 0.3)'
                  }}
                >
                  Submit Enquiry
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Modal>

      {/* Appointment Booking Modal */}
      <Modal
        title="Book an Appointment"
        open={appointmentModalVisible}
        onCancel={() => setAppointmentModalVisible(false)}
        footer={[
          <Button key="back" onClick={() => setAppointmentModalVisible(false)}>
            Cancel
          </Button>,
          <Button 
            key="submit" 
            type="primary" 
            onClick={handleAppointmentSubmit}
            style={{
            background: 'linear-gradient(135deg, #ff5722, #ff4500, #ff7043)',
              border: 'none'
            }}
          >
            Confirm Appointment
          </Button>,
        ]}
      >
        <div style={{ marginBottom: '20px' }}>
          <p>Select your preferred date and time:</p>
          <DatePicker 
            style={{ width: '100%' }}
            size="middle"
            value={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            showTime={{
              format: 'HH:mm',
              minuteStep: 30,
              hideDisabledOptions: true,
              defaultValue: dayjs('09:00', 'HH:mm'),
            }}
            format="YYYY-MM-DD HH:mm"
            disabledDate={(current) => {
              return current && current < dayjs().startOf('day');
            }}
          />
        </div>
        <p style={{ color: '#666', fontSize: '14px' }}>
          Our team will confirm your appointment via email or phone call.
        </p>
      </Modal>
    </div>
  );
};

export default Enquire;