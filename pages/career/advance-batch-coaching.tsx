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
  height: "100%", // Ensure all cards have equal height
  display: "flex",
  flexDirection: "column",
};

const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const headingVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const listItems = (items: string[]) => (
  <ul style={{ paddingLeft: 24, color: "#333", fontSize: "16px", marginBottom: 0 }}>
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
              backgroundColor: '#ff5722',
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
                background: 'linear-gradient(90deg, #ff5722, #ff9800)',
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

          {/* Why Join Section Heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={headingVariant}
            viewport={{ once: true, margin: "-100px" }}
            style={{ marginBottom: 30 }}
          >
            <div style={{
              background: 'linear-gradient(90deg, #ff5722, #ff9800)',
              padding: '20px 30px',
              borderRadius: '12px',
              color: 'white',
              textAlign: 'center',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }}>
              <Title level={2} style={{ color: 'white', margin: 0 }}>
                Why Choose Our Advance Batch?
              </Title>
            </div>
          </motion.div>

          {/* Two Main Content Boxes - Equal Height */}
          <Row gutter={[32, 32]} style={{ marginBottom: '40px', alignItems: 'stretch' }}>
            <Col xs={24} md={12} style={{ display: 'flex' }}>
              <motion.div
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ scale: 1.03 }}
                style={{ flex: 1 }}
              >
                <Card
                  title={<span style={{ fontSize: "22px" }}>Why Join the Advance Batch?</span>}
                  style={cardStyle}
                  headStyle={{
                    background: 'linear-gradient(90deg, #ff5722, #ff9800)',
                    color: "#fff",
                    fontSize: "20px",
                    padding: "20px 24px",
                    border: "none",
                  }}
                  bodyStyle={{ padding: "24px", flex: 1 }}
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
                  <Paragraph style={{ fontSize: '16px', marginTop: 'auto', paddingTop: '20px' }}>
                    Ideal for students in Class 12, drop-year aspirants, or final-year grads preparing for entrance tests.
                  </Paragraph>
                </Card>
              </motion.div>
            </Col>
            
            <Col xs={24} md={12} style={{ display: 'flex' }}>
              <motion.div
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ scale: 1.03 }}
                style={{ flex: 1 }}
              >
                <Card
                  title={<span style={{ fontSize: "22px" }}>What Our Advance Coaching Offers</span>}
                  style={cardStyle}
                  headStyle={{
                    background: 'linear-gradient(90deg, #ff5722, #ff9800)',
                    color: "#fff",
                    fontSize: "20px",
                    padding: "20px 24px",
                    border: "none",
                  }}
                  bodyStyle={{ padding: "24px", flex: 1 }}
                >
                  <Paragraph style={{ fontSize: '16px', marginBottom: '20px' }}>
                    Our comprehensive program includes:
                  </Paragraph>
                  {listItems([
                    "Intensive Revision of Complete Syllabus",
                    "Topic-Wise Timed Mock Tests & Past Year Paper Solving",
                    "Portfolio, Studio Test & Situation Test Preparation",
                    "Drawing Speed & Accuracy Sessions",
                    "Design Aptitude, Logical Reasoning & MCQ Practice",
                    "Interview Preparation + Presentation Skills",
                    "Error Analysis + Personalized Improvement Plans"
                  ])}
                  <Paragraph style={{ fontSize: '16px', marginTop: 'auto', paddingTop: '20px' }}>
                    You'll learn how to stay calm, work smart, and approach each exam with clarity and confidence.
                  </Paragraph>
                </Card>
              </motion.div>
            </Col>
          </Row>

          {/* Focused Coaching Heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={headingVariant}
            viewport={{ once: true, margin: "-100px" }}
            style={{ marginBottom: 30, marginTop: 60 }}
          >
            <div style={{
              background: 'linear-gradient(90deg, #ff5722, #ff9800)',
              padding: '20px 30px',
              borderRadius: '12px',
              color: 'white',
              textAlign: 'center',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }}>
              <Title level={2} style={{ color: 'white', margin: 0 }}>
                Focused Coaching For
              </Title>
            </div>
          </motion.div>

          {/* Focused Coaching Content Box */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={cardVariant}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Card
              style={{ ...cardStyle, padding: 0 }}
              bodyStyle={{ padding: "24px", flex: 1 }}
            >
              <Row gutter={[24, 24]} style={{ height: '100%' }}>
                <Col xs={24} md={8} style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ 
                    background: 'linear-gradient(90deg, #ff5722, #ff9800)',
                    color: 'white',
                    padding: '15px',
                    textAlign: 'center',
                    margin: '-24px -24px 20px -24px'
                  }}>
                    <Title level={4} style={{ color: 'white', margin: 0 }}>Design Exams</Title>
                  </div>
                  {listItems([
                    "NID DAT",
                    "NIFT",
                    "UCEED",
                    "CEED",
                    "MITID",
                    "UID"
                  ])}
                </Col>
                <Col xs={24} md={8} style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ 
                    background: 'linear-gradient(90deg, #ff5722, #ff9800)',
                    color: 'white',
                    padding: '15px',
                    textAlign: 'center',
                    margin: '-24px -24px 20px -24px'
                  }}>
                    <Title level={4} style={{ color: 'white', margin: 0 }}>Architecture Exams</Title>
                  </div>
                  {listItems([
                    "NATA",
                    "JEE Paper 2",
                    "CEPT"
                  ])}
                </Col>
                <Col xs={24} md={8} style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ 
                    background: 'linear-gradient(90deg, #ff5722, #ff9800)',
                    color: 'white',
                    padding: '15px',
                    textAlign: 'center',
                    margin: '-24px -24px 20px -24px'
                  }}>
                    <Title level={4} style={{ color: 'white', margin: 0 }}>Fine Arts Exams</Title>
                  </div>
                  {listItems([
                    "JJ School",
                    "BHU",
                    "MSU",
                    "DU College of Art"
                  ])}
                </Col>
              </Row>
            </Card>
          </motion.div>

          {/* Who Can Join Heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={headingVariant}
            viewport={{ once: true, margin: "-100px" }}
            style={{ marginBottom: 30, marginTop: 60 }}
          >
            <div style={{
              background: 'linear-gradient(90deg, #ff5722, #ff9800)',
              padding: '20px 30px',
              borderRadius: '12px',
              color: 'white',
              textAlign: 'center',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }}>
              <Title level={2} style={{ color: 'white', margin: 0 }}>
                Who Should Join?
              </Title>
            </div>
          </motion.div>

          {/* Three Column Section - Equal Height */}
          <Row gutter={[32, 32]} style={{ marginTop: 20, alignItems: 'stretch' }}>
            {[
              {
                title: "Eligibility",
                items: [
                  "Class 12 students appearing for upcoming entrance exams",
                  "Graduates applying for PG courses (M.Des, MFA, etc.)",
                  "Students who've already done basic or foundation training",
                  "Reattempt students needing strategic revision",
                ],
                footer: "Whether you're a first-timer or looking to improve your rank, we'll help you bring your A-game."
              },
              {
                title: "Our Methodology",
                items: [
                  "Each batch is exam-specific",
                  "Mentors tailor strategy to your target college and exam date",
                  "Full-length mocks under real exam conditions",
                  "One-on-one feedback sessions",
                  "Performance tracking and analytics",
                ],
                footer: "We customize our approach to maximize your success."
              },
              {
                title: "Final Push to Success",
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
              <Col xs={24} md={8} key={idx} style={{ display: 'flex' }}>
                <motion.div
                  variants={cardVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ scale: 1.03 }}
                  style={{ flex: 1 }}
                >
                  <Card
                    title={<span style={{ fontSize: "22px" }}>{section.title}</span>}
                    style={cardStyle}
                    headStyle={{
                      background: 'linear-gradient(90deg, #ff5722, #ff9800)',
                      color: "#fff",
                      fontSize: "20px",
                      padding: "20px 24px",
                      border: "none",
                    }}
                    bodyStyle={{ padding: "24px", flex: 1 }}
                  >
                    {listItems(section.items)}
                    {section.footer && (
                      <Paragraph style={{ fontSize: '16px', marginTop: 'auto', paddingTop: '20px', fontStyle: 'italic' }}>
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