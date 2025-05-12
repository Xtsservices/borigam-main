// import React from 'react';
// import Header from '../components/Header';
// import AppFooter from '../components/Footer';
// import { Form, Input, Button, Card, Row, Col } from 'antd';

// const ContactPage = () => {
//   const onFinish = (values: any) => {
//     console.log('Form Values:', values);
//   };

//   return (
//     <div>
//       <Header />
//       <main style={{ padding: '20px' }}>
//         <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Contact Us</h2>

//         <Row gutter={[24, 24]}>
//           {/* Left Section: Address and Map */}
//           <Col xs={24} md={12}>
//             <Card
//               title="Our Address"
//               hoverable
//               headStyle={{
//                 backgroundColor: '#f5f5f5',
//                 fontWeight: 'bold',
//                 textAlign: 'center',
//               }}
//               bodyStyle={{ padding: '20px' }}
//               style={{
//                 borderRadius: '8px',
//                 boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//                 marginBottom: '20px',
//               }}
//             >
//               <p><strong>Address (Madhapur):</strong> Plot No-62, D.No:1-98/11, Survey No-78, Arunodaya Colony, Madhapur, Telangana 500081<br />
//               Metro Pillar Number: 1762</p>
//               <p><strong>Address (Begumpet):</strong> 1-11-206/8, 2nd Floor, Opp. Seasons Florists, Begumpet, Hyderabad - 500016</p>
//               <p><strong>Phone:</strong> 9390535851 | 9666169555 | 7995297686</p>
//               <p><strong>Email:</strong> borigaminstitute@gmail.com</p>
//             </Card>
//             <Card
//               title="Find Us on the Map"
//               hoverable
//               headStyle={{
//                 backgroundColor: '#f5f5f5',
//                 fontWeight: 'bold',
//                 textAlign: 'center',
//               }}
//               bodyStyle={{ padding: '0' }}
//               style={{
//                 borderRadius: '8px',
//                 boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//               }}
//             >
//               <iframe
//                 src="https://maps.google.com/maps?q=17.445924758911133%2C78.38752746582031&z=17&hl=en"
//                 width="100%"
//                 height="300"
//                 style={{ border: '0', borderRadius: '8px' }}
//                 allowFullScreen={true}
//                 loading="lazy"
//               ></iframe>

//               <iframe
//                 src="https://maps.google.com/maps?q=17.4350%2C78.4486&z=17&hl=en"
//                 width="100%"
//                 height="300"
//                 style={{ border: '0', borderRadius: '8px', marginTop: '20px' }}
//                 allowFullScreen={true}
//                 loading="lazy"
//               ></iframe>
//             </Card>
//           </Col>

//           {/* Right Section: Contact Form */}
//           <Col xs={24} md={12}>
//             <Card
//               title="Contact Form"
//               hoverable
//               headStyle={{
//                 backgroundColor: '#f5f5f5',
//                 fontWeight: 'bold',
//                 textAlign: 'center',
//               }}
//               bodyStyle={{ padding: '20px' }}
//               style={{
//                 borderRadius: '8px',
//                 boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//               }}
//             >
//               <Form
//                 layout="vertical"
//                 onFinish={onFinish}
//                 style={{ maxWidth: '100%' }}
//               >
//                 <Form.Item
//                   label="Name"
//                   name="name"
//                   rules={[{ required: true, message: 'Please enter your name!' }]}
//                 >
//                   <Input placeholder="Enter your name" />
//                 </Form.Item>

//                 <Form.Item
//                   label="Email"
//                   name="email"
//                   rules={[
//                     { required: true, message: 'Please enter your email!' },
//                     { type: 'email', message: 'Please enter a valid email!' },
//                   ]}
//                 >
//                   <Input placeholder="Enter your email" />
//                 </Form.Item>

//                 <Form.Item
//                   label="Message"
//                   name="message"
//                   rules={[{ required: true, message: 'Please enter your message!' }]}
//                 >
//                   <Input.TextArea rows={4} placeholder="Enter your message" />
//                 </Form.Item>

//                 <Form.Item>
//                   <Button type="primary" htmlType="submit" block>
//                     Submit
//                   </Button>
//                 </Form.Item>
//               </Form>
//             </Card>
//           </Col>
//         </Row>
//       </main>
//     </div>
//   );
// };

// export default ContactPage;