// ./pages/careers/advance-batch-coaching.tsx
import React from "react";
import { Typography, Row, Col, Card } from "antd";
import { motion } from "framer-motion";
import Layout from '../../components/Layout';
import Header from "@/components/Header";

const { Title, Paragraph } = Typography;

const cardStyle: React.CSSProperties = {
  borderRadius: 16,
  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
  overflow: "hidden",
  marginBottom: 24,
  backgroundColor: "#ffffff",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
};

const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const listItems = (items: string[]) => (
  <ul style={{ paddingLeft: 24, color: "#333", fontSize: "18px" }}>
    {items.map((item, idx) => (
      <li key={idx} style={{ marginBottom: 12 }}>{item}</li>
    ))}
  </ul>
);

const AdvanceBatchPage = () => {
  return (
    <Layout>
      <Header/>
      <div style={{ padding: "60px 30px", maxWidth: 1200, margin: "auto", backgroundColor: "#fff", marginTop: '5rem' }}>
        <motion.div initial="hidden" animate="visible" variants={sectionVariant}>
          <Title level={1} style={{ textAlign: 'center', marginBottom: 50, color: '', fontSize: '42px' }}>
            Advance Batch Coaching
            <div style={{
              height: 4,
              width: 120,
              backgroundColor: '#3498db',
              margin: '20px auto 40px',
            }} />
          </Title>

          {/* Gradient Header Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={cardVariant}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Card
              style={{
                ...cardStyle,
                background: 'linear-gradient(135deg, #ff5722, #ff4500, #ff7043)',
                color: '#fff',
                marginBottom: '40px'
              }}
              bodyStyle={{ padding: '30px' }}
            >
              <Title level={2} style={{ color: '#fff', textAlign: 'center' }}>
                Final-Step Prep to Crack Top Design, Architecture & Fine Arts Entrance Exams
              </Title>
              <Paragraph style={{ fontSize: '18px', color: '#fff', textAlign: 'center' }}>
                Already familiar with the basics and looking for the final boost? Our Advance Batch Coaching is specifically designed for students in their final stage of preparation for design, architecture, and fine arts entrance exams.
              </Paragraph>
              <Paragraph style={{ fontSize: '18px', color: '#fff', textAlign: 'center' }}>
                Whether you're attempting NID, NIFT, UCEED, CEED, NATA, JEE Paper 2, JJ School of Art, BHU or other leading colleges—our structured and intensive coaching will help you fine-tune your skills and maximize your performance.
              </Paragraph>
            </Card>
          </motion.div>

          {/* Two Main Content Boxes */}
          <Row gutter={[32, 32]} style={{ marginBottom: '40px' }}>
            <Col xs={24} md={12}>
              <motion.div
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ scale: 1.03 }}
              >
                <Card
                  title={<span style={{ fontSize: "22px" }}>Why Join the Advance Batch?</span>}
                  style={cardStyle}
                  headStyle={{
                    background: 'linear-gradient(135deg, #3498db, #2e86de)',
                    color: "#fff",
                    fontSize: "20px",
                    padding: "20px 24px",
                    border: "none",
                  }}
                  bodyStyle={{ padding: "24px" }}
                >
                  <Paragraph style={{ fontSize: '16px', marginBottom: '20px' }}>
                    Time is limited, competition is tough, and precision is everything. The Advance Batch focuses on:
                  </Paragraph>
                  {listItems([
                    "Exam-specific strategies",
                    "Time-bound mock tests",
                    "Personalized feedback to overcome weak areas",
                    "Smart revision techniques",
                    "Final portfolio & interview polishing"
                  ])}
                  <Paragraph style={{ fontSize: '16px', marginTop: '20px' }}>
                    Ideal for students in Class 12, drop-year aspirants, or final-year grads preparing for entrance tests.
                  </Paragraph>
                </Card>
              </motion.div>
            </Col>
            
            <Col xs={24} md={12}>
              <motion.div
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ scale: 1.03 }}
              >
                <Card
                  title={<span style={{ fontSize: "22px" }}>What Our Advance Coaching Offers</span>}
                  style={cardStyle}
                  headStyle={{
                    background: 'linear-gradient(135deg, #3498db, #2e86de)',
                    color: "#fff",
                    fontSize: "20px",
                    padding: "20px 24px",
                    border: "none",
                  }}
                  bodyStyle={{ padding: "24px" }}
                >
                  {listItems([
                    "Intensive Revision of Complete Syllabus",
                    "Topic-Wise Timed Mock Tests & Past Year Paper Solving",
                    "Portfolio, Studio Test & Situation Test Preparation (NID/NIFT)",
                    "Drawing Speed & Accuracy Sessions (JJ/NATA/CEED)",
                    "Design Aptitude, Logical Reasoning & MCQ Practice (UCEED/CEED)",
                    "Interview Preparation + Presentation Skills",
                    "Error Analysis + Personalized Improvement Plans",
                    "Online & Offline Crash Batch Options",
                    "Daily Practice Material via App + Full-Length Tests",
                    "Live Feedback from Experts + Performance Tracking"
                  ])}
                  <Paragraph style={{ fontSize: '16px', marginTop: '20px' }}>
                    You'll learn how to stay calm, work smart, and approach each exam with clarity and confidence.
                  </Paragraph>
                </Card>
              </motion.div>
            </Col>
          </Row>

          {/* Detailed Sections Below */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={cardVariant}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Card
              title={<span style={{ fontSize: "22px" }}>Focused Coaching For</span>}
              style={cardStyle}
              headStyle={{
                background: 'linear-gradient(135deg, #ff5722, #ff4500, #ff7043)',
                color: "#fff",
                fontSize: "20px",
                padding: "20px 24px",
                border: "none",
              }}
              bodyStyle={{ padding: "24px" }}
            >
              <Row gutter={[24, 24]}>
                <Col xs={24} md={8}>
                  <Title level={4} style={{ color: '#ff5722' }}>Design Exams</Title>
                  <ul style={{ paddingLeft: 20 }}>
                    <li>NID DAT</li>
                    <li>NIFT</li>
                    <li>UCEED</li>
                    <li>CEED</li>
                    <li>MITID</li>
                    <li>UID</li>
                  </ul>
                </Col>
                <Col xs={24} md={8}>
                  <Title level={4} style={{ color: '#ff5722' }}>Architecture Exams</Title>
                  <ul style={{ paddingLeft: 20 }}>
                    <li>NATA</li>
                    <li>JEE Paper 2</li>
                    <li>CEPT</li>
                  </ul>
                </Col>
                <Col xs={24} md={8}>
                  <Title level={4} style={{ color: '#ff5722' }}>Fine Arts Exams</Title>
                  <ul style={{ paddingLeft: 20 }}>
                    <li>JJ School</li>
                    <li>BHU</li>
                    <li>MSU</li>
                    <li>DU College of Art</li>
                  </ul>
                </Col>
              </Row>
            </Card>
          </motion.div>

          <Row gutter={[32, 32]} style={{ marginTop: 40 }}>
            {[
              {
                title: "Who Can Join?",
                items: [
                  "Class 12 students appearing for upcoming entrance exams",
                  "Graduates applying for PG courses (M.Des, MFA, etc.)",
                  "Students who've already done basic or foundation training",
                  "Reattempt students needing strategic revision",
                ],
                footer: "Whether you're a first-timer or looking to improve your rank, we'll help you bring your A-game."
              },
              {
                title: "Our Unique Approach",
                items: [
                  "Each batch is exam-specific",
                  "Mentors tailor strategy to your target college and exam date",
                  "Full-length mocks under real exam conditions",
                  "One-on-one feedback sessions",
                  "Performance tracking and analytics",
                ]
              },
              {
                title: "Let's Finish Strong",
                items: [
                  "Join our Advance Batch for focused preparation",
                  "Full-length mocks and expert strategy",
                  "Demo sessions available",
                  "Flexible crash batch options",
                  "One-on-one feedback available",
                ],
                footer: "It's your last lap—let's sprint towards success!"
              }
            ].map((section, idx) => (
              <Col xs={24} md={8} key={idx}>
                <motion.div
                  variants={cardVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ scale: 1.03 }}
                >
                  <Card
                    title={<span style={{ fontSize: "22px" }}>{section.title}</span>}
                    style={cardStyle}
                    headStyle={{
                      background: 'linear-gradient(135deg, #3498db, #2e86de)',
                      color: "#fff",
                      fontSize: "20px",
                      padding: "20px 24px",
                      border: "none",
                    }}
                    bodyStyle={{ padding: "24px" }}
                  >
                    {listItems(section.items)}
                    {section.footer && (
                      <Paragraph style={{ fontSize: '16px', marginTop: '20px', fontStyle: 'italic' }}>
                        {section.footer}
                      </Paragraph>
                    )}
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </div>
    </Layout>
  );
};

export default AdvanceBatchPage;