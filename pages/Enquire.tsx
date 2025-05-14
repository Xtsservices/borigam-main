// import React from 'react';
// import { Form, Input, Select, Button, message, DatePicker, Modal } from 'antd';
// import { MailOutlined, UserOutlined, PhoneOutlined, CalendarOutlined } from '@ant-design/icons';
// import dayjs, { Dayjs } from 'dayjs';

// const { Option } = Select;

// /*************  ✨ Windsurf Command ⭐  *************/
// /**
//  * The Enquire component is a form that allows users to submit an enquiry to Borigam.
//  * It renders a form with fields for the user's name, email, phone number, and
//  * entrance exam(s) they are interested in. The user can select multiple exams.

//  * submission is successful, or an error message if the submission fails.
//  * The component also includes a button to book an appointment with Borigam,
//  * which opens a modal with a date and time picker. The user can select a date
//  * and time for their appointment, and the component will display a confirmation
//  * message after the appointment is booked.
//  */
// const Enquire = () => {
//   const [form] = Form.useForm();
//   const [loading, setLoading] = React.useState(false);
//   const [appointmentModalVisible, setAppointmentModalVisible] = React.useState(false);
//   const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(null);

// /*************  ✨ Windsurf Command ⭐  *************/
//   /**
//    * Handles the form submission. Submits the form, waits for 1.5s and then
//    * displays a success message if the submission is successful, or an error
//    * message if the submission fails. Resets the form after submission.
//    * @param {object} values The form values.
//    */
// /*******  4b36f82a-923a-496c-a748-1e53efeccb25  *******/  const onFinish = async (values: any) => {
//     setLoading(true);
//     try {
//       await new Promise(resolve => setTimeout(resolve, 1500));
//       console.log('Received values of form: ', values);
//       message.success('Enquiry submitted successfully! We will contact you shortly.');
//       form.resetFields();
//     } catch (error) {
//       message.error('Submission failed. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const validatePhone = (_: any, value: string) => {
//     if (!value) return Promise.reject('Please enter your phone number!');
//     if (!/^[0-9]{10}$/.test(value)) {
//       return Promise.reject('Please enter a valid 10-digit number!');
//     }
//     return Promise.resolve();
//   };

//   const handleAppointmentBooking = () => {
//     setAppointmentModalVisible(true);
//   };

//   const handleAppointmentSubmit = () => {
//     if (!selectedDate) {
//       message.error('Please select a date for your appointment');
//       return;
//     }
//     message.success(`Appointment booked for ${selectedDate.format('MMMM Do, YYYY')}! We will confirm shortly.`);
//     setAppointmentModalVisible(false);
//     setSelectedDate(null);
//   };

//   return (
//     <div id="enquire-section" style={{
//       marginTop: '-50px',
//       padding: '80px 20px',
//       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
//     }}>
//       <div style={{ 
//         maxWidth: '1200px', 
//         margin: '0 auto',
//       }}>
//         <div style={{
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           flexWrap: 'wrap',
//           gap: '40px'
//         }}>
//           <div style={{
//             flex: '1',
//             minWidth: '600px',
//             maxWidth: '500px',
//             textAlign: 'center'
//           }}>
//             <img 
//               src="images/enquire.jpeg" 
//               alt="Let's Connect" 
//               style={{ 
//                 width: '160%',
//                 height: 'auto',
//                 maxHeight: '500px',
//                 objectFit: 'cover',
//                 borderRadius: '15px', 
//                 boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//                 marginBottom: '20px'
//               }} 
//             />
//             <Button 
//               type="primary" 
//               size="large"
//               icon={<CalendarOutlined />}
//               onClick={handleAppointmentBooking}
//               style={{
//                     marginLeft: '30px',
//                     marginTop: '-5rem',
//                     background: 'linear-gradient(90deg, #ff5722, #ff9800)',
//                     border: 'none',
//                     borderRadius: '8px',
//                     height: '45px',
//                     fontWeight: '600',
//                     fontSize: '16px',
//                     boxShadow: '0 4px 8px rgba(255, 87, 34, 0.3)'
//                   }}
//             >
//               Book an Appointment
//             </Button>
//           </div>

//           <div style={{
//             flex: '1',
//             minWidth: '300px',
//             maxWidth: '500px',
//             backgroundColor: '#fff',
//             borderRadius: '15px',
//             padding: '40px',
//             boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
//           }}>
//             <div style={{ textAlign: 'center', marginBottom: '30px' }}>
//               <h2 style={{ 
//                 fontSize: '32px', 
//                 fontWeight: '700', 
//                 marginBottom: '10px', 
//                 color: 'black', 
//               }}>
//                 Enquire Now
//               </h2>
//               <p style={{ color: '#666', fontSize: '16px' }}>
//                 Fill out the form and our team will get back to you within 24 hours
//               </p>
//             </div>

//             <Form
//               form={form}
//               name="enquiry"
//               onFinish={onFinish}
//               layout="vertical"
//               scrollToFirstError
//             >
//               <Form.Item
//                 name="name"
//                 label={<span style={{ fontWeight: '500' }}>Full Name</span>}
//                 rules={[
//                   { required: true, message: 'Please enter your name!' },
//                   { min: 3, message: 'Name must be at least 3 characters!' },
//                   { max: 50, message: 'Name cannot exceed 50 characters!' }
//                 ]}
//               >
//                 <Input 
//                   placeholder="Enter your full name" 
//                   size="large" 
//                   prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
//                 />
//               </Form.Item>

//               <Form.Item
//                 name="email"
//                 label={<span style={{ fontWeight: '500' }}>Email</span>}
//                 rules={[
//                   { required: true, message: 'Please enter your email!' },
//                   { type: 'email', message: 'Please enter a valid email!' },
//                   { max: 50, message: 'Email cannot exceed 50 characters!' }
//                 ]}
//               >
//                 <Input 
//                   placeholder="Enter your email address" 
//                   size="large" 
//                   prefix={<MailOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
//                 />
//               </Form.Item>

//               <Form.Item
//                 name="phone"
//                 label={<span style={{ fontWeight: '500' }}>Phone Number</span>}
//                 rules={[
//                   { validator: validatePhone }
//                 ]}
//               >
//                 <Input 
//                   placeholder="Enter your 10-digit phone number" 
//                   size="large" 
//                   prefix={<PhoneOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
//                   maxLength={10}
//                   type="tel"
//                 />
//               </Form.Item>

//               <Form.Item
//                 name="courses"
//                 label={<span style={{ fontWeight: '500' }}>Choose Entrance Exam(s)</span>}
//                 rules={[
//                   { required: true, message: 'Please select at least one exam!' },
//                   { type: 'array', max: 5, message: 'You can select up to 5 exams maximum!' }
//                 ]}
//               >
//                 <Select 
//                   mode="multiple"
//                   placeholder="Select your exam(s)" 
//                   size="large"
//                   allowClear
//                   showArrow
//                   style={{ width: '100%' }}
//                   dropdownStyle={{ borderRadius: '8px' }}
//                 >
//                   <Option value="nift">NIFT Entrance</Option>
//                   <Option value="bfa">BFA Entrance</Option>
//                   <Option value="nid">NID Entrance</Option>
//                   <Option value="fddi">FDDI Entrance</Option>
//                   <Option value="ceed">CEED Entrance</Option>
//                   <Option value="aat">AAT Entrance</Option>
//                   <Option value="uceed">UCEED Entrance</Option>
//                   <Option value="nata">NATA Entrance</Option>
//                   <Option value="barch">B.ARCH Entrance</Option>
//                   <Option value="design">Design Entrance Coaching</Option>
//                 </Select>
//               </Form.Item>

//               <Form.Item>
//                 <Button 
//                   type="primary" 
//                   htmlType="submit" 
//                   size="large" 
//                   block
//                   loading={loading}
//                   style={{
//                     background: 'linear-gradient(90deg, #ff5722, #ff9800)',
//                     border: 'none',
//                     borderRadius: '8px',
//                     height: '45px',
//                     fontWeight: '600',
//                     fontSize: '16px',
//                     boxShadow: '0 4px 8px rgba(255, 87, 34, 0.3)'
//                   }}
//                 >
//                   Submit Enquiry
//                 </Button>
//               </Form.Item>
//             </Form>
//           </div>
//         </div>
//       </div>

//       <Modal
//         title="Book an Appointment"
//         open={appointmentModalVisible}
//         onCancel={() => setAppointmentModalVisible(false)}
//         footer={[
//           <Button key="back" onClick={() => setAppointmentModalVisible(false)}>
//             Cancel
//           </Button>,
//           <Button 
//             key="submit" 
//             type="primary" 
//             onClick={handleAppointmentSubmit}
//             style={{
//               background: 'linear-gradient(90deg, #1890ff, #096dd9)',
//               border: 'none'
//             }}
//           >
//             Confirm Appointment
//           </Button>,
//         ]}
//       >
//         <div style={{ marginBottom: '20px' }}>
//           <p>Select your preferred date and time:</p>
//           <DatePicker 
//             style={{ width: '100%' }}
//             size="large"
//             value={selectedDate}
//             onChange={(date) => setSelectedDate(date)}
//             showTime={{
//               format: 'HH:mm',
//               minuteStep: 30,
//               hideDisabledOptions: true,
//               defaultValue: dayjs('09:00', 'HH:mm'),
//             }}
//             format="YYYY-MM-DD HH:mm"
//             disabledDate={(current) => {
//               return current && current < dayjs().startOf('day');
//             }}
//           />
//         </div>
//         <p style={{ color: '#666', fontSize: '14px' }}>
//           Our team will confirm your appointment via email or phone call.
//         </p>
//       </Modal>
//     </div>
//   );
// };

// export default Enquire;