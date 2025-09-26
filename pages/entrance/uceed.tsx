import React, { useState, useEffect } from "react";
import { Typography, Row, Col, Card, Table } from "antd";
import { motion } from "framer-motion";
import Layout from '../../components/Layout';
import Header from "@/components/Header";

import Head from 'next/head';

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
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const listItems = (items: string[]) => (
  <ul style={{ paddingLeft: 24, color: "#333", fontSize: "clamp(0.875rem, 2.5vw, 1rem)" /* Responsive: 14px to 16px */ }}>
    {items.map((item, idx) => (
      <li key={idx} style={{ marginBottom: 12 }}>{item}</li>
    ))}
  </ul>
);

const UCEEDPage = () => {
  // Mobile responsive hooks
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1024);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Header />
      <Layout>
        <Head>
          <title>UCEED Coaching in Hyderabad – Borigam | Best Design Entrance Exam Preparation</title>
          <meta name="description" content="Prepare for the UCEED (Undergraduate Common Entrance Exam for Design) with Borigam’s expert coaching in Hyderabad. Learn from experienced mentors, practice updated syllabus, build creative skills & crack UCEED with confidence." />
          <meta name="keywords" content="Borigam, Nift Coaching, NID coaching, Nata coaching, Ceed Coaching, Uceed coaching, Nift coaching near me, NID coaching near me, Nata coaching centres" />
          <link rel="canonical" href="https://borigaminstitute.in/entrance/uceed/" />
          <meta name="robots" content="index, follow" />
        </Head>
        <div style={{ padding: "60px 30px", maxWidth: 1200, margin: "auto", backgroundColor: "#fff" }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariant}
          >
            <Title level={1} style={{ textAlign: 'center', marginBottom: 50, color: '#0a2c64', fontSize: "clamp(1.5rem, 5vw, 2.375rem)" /* Responsive H1: 24px to 38px */, marginTop: "clamp(4rem, 8vw, 8rem)" /* Responsive top margin */, }}>
              UCEED Entrance Exam
              <div
                style={{
                  height: 4,
                  width: 120,
                  backgroundColor: '#fbb034',
                  margin: '20px auto 40px',
                }}
              ></div>
            </Title>
            <div style={{ padding: "60px 30px", maxWidth: 1200, margin: "auto", backgroundColor: "#fff" }}>

              <h1 style={{
                textAlign: 'center',
                color: '#ff4e18',
                fontWeight: 700,
                fontSize: "clamp(1rem, 3vw, 1.25rem)" /* Responsive: 16px to 20px */,
                margin: '-80px 0 40px 0',
                letterSpacing: '-0.5px',
                lineHeight: 1.2,
              }}>
                Best UCEED Entrance Exam Coaching in Hyderabad – Borigam          </h1>
            </div>
            <Paragraph style={{ fontSize: "clamp(0.875rem, 2.5vw, 1rem)" /* Responsive: 14px to 16px */, lineHeight: 1.8, color: "#333", marginBottom: 40, marginTop: -60 }}>
              The Undergraduate Common Entrance Exam for Design (UCEED) is conducted by IIT Bombay for admission to
              Bachelor of Design (B.Des) programs at premier institutes including IITs and IIITDM Jabalpur.
            </Paragraph>

            <Row gutter={[32, 32]}>
              <Col xs={24}>
                <motion.div
                  variants={cardVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={isMobile ? {} : { scale: 1.03 }}
                  style={{ cursor: "pointer" }}
                >
                  <Card
                    title={<span style={{ fontSize: "clamp(0.875rem, 3vw, 1.375rem)" /* Responsive: 14px to 22px */ }}>About UCEED</span>}
                    style={cardStyle}
                    headStyle={{
                      backgroundColor: "#FF8C00",
                      color: "#fff",
                      fontSize: "clamp(0.875rem, 3vw, 1.375rem)" /* Responsive: 14px to 22px */,
                      padding: "20px 24px",
                      border: 'none'
                    }}
                    bodyStyle={{ padding: "24px" }}
                  >
                    {listItems([
                      "Conducting Body: IIT Bombay",
                      "Course Offered: Bachelor of Design (B.Des)",
                      "Duration: 4 Years",
                      "Mode: Computer-Based Test + Offline Drawing",
                      "Score Validity: 1 Year"
                    ])}
                    <Title level={4} style={{ color: "#0a2c64", marginTop: 16 }}>Participating Institutes</Title>
                    {listItems([
                      "IIT Bombay",
                      "IIT Delhi",
                      "IIT Guwahati",
                      "IIT Hyderabad",
                      "IIITDM Jabalpur"
                    ])}
                  </Card>
                </motion.div>
              </Col>

              <Col xs={24}>
                <motion.div
                  variants={cardVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={isMobile ? {} : { scale: 1.03 }}
                  style={{ cursor: "pointer" }}
                >
                  <Card
                    title={<span style={{ fontSize: "clamp(0.875rem, 3vw, 1.375rem)" /* Responsive: 14px to 22px */ }}>Exam Pattern</span>}
                    style={cardStyle}
                    headStyle={{
                      backgroundColor: "#FF8C00",
                      color: "#fff",
                      fontSize: "clamp(0.875rem, 3vw, 1.375rem)" /* Responsive: 14px to 22px */,
                      padding: "20px 24px",
                      border: 'none'
                    }}
                    bodyStyle={{ padding: "24px" }}
                  >
                    <Title level={4} style={{ color: "#0a2c64" }}>Part A - Computer-Based Test (240 Marks)</Title>
                    {listItems([
                      "Duration: 2 Hours 30 Minutes",
                      "Sections: NAT, MCQ, MSQ",
                      "Tests: Visualization, Observation, Logical Reasoning"
                    ])}

                    <Title level={4} style={{ color: "#0a2c64", marginTop: 16 }}>Part B - Drawing Test (60 Marks)</Title>
                    {listItems([
                      "Duration: 30 Minutes",
                      "Offline - Drawing tasks",
                      "Evaluates creativity and visualization"
                    ])}
                    <Paragraph style={{ fontSize: "clamp(0.875rem, 2.5vw, 1rem)" /* Responsive: 14px to 16px */, marginTop: 16 }}>
                      <strong>Total Duration:</strong> 3 Hours | <strong>Total Marks:</strong> 300
                    </Paragraph>
                  </Card>
                </motion.div>
              </Col>

              <Col xs={24}>
                <motion.div
                  variants={cardVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={isMobile ? {} : { scale: 1.03 }}
                  style={{ cursor: "pointer" }}
                >
                  <Card
                    title={<span style={{ fontSize: "clamp(0.875rem, 3vw, 1.375rem)" /* Responsive: 14px to 22px */ }}>Eligibility Criteria</span>}
                    style={cardStyle}
                    headStyle={{
                      backgroundColor: "#FF8C00",
                      color: "#fff",
                      fontSize: "clamp(0.875rem, 3vw, 1.375rem)" /* Responsive: 14px to 22px */,
                      padding: "20px 24px",
                      border: 'none'
                    }}
                    bodyStyle={{ padding: "24px" }}
                  >
                    <Title level={4} style={{ color: "#0a2c64" }}>Educational Qualification</Title>
                    {listItems([
                      "Class 12 or equivalent in any stream",
                      "Appearing students are also eligible"
                    ])}

                    <Title level={4} style={{ color: "#0a2c64", marginTop: 16 }}>Age Limit</Title>
                    {listItems([
                      "General/EWS/OBC-NCL: Born on or after October 1, 2005",
                      "SC/ST/PwD: Born on or after October 1, 2000"
                    ])}

                    <Title level={4} style={{ color: "#0a2c64", marginTop: 16 }}>Attempts</Title>
                    <Paragraph style={{ fontSize: "clamp(0.875rem, 2.5vw, 1rem)" /* Responsive: 14px to 16px */ }}>
                      Maximum two attempts in consecutive years
                    </Paragraph>
                  </Card>
                </motion.div>
              </Col>

              <Col xs={24}>
                <motion.div
                  variants={cardVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={isMobile ? {} : { scale: 1.03 }}
                  style={{ cursor: "pointer" }}
                >
                  <Card
                    title={<span style={{ fontSize: "clamp(0.875rem, 3vw, 1.375rem)" /* Responsive: 14px to 22px */ }}>Syllabus</span>}
                    style={cardStyle}
                    headStyle={{
                      backgroundColor: "#FF8C00",
                      color: "#fff",
                      fontSize: "clamp(0.875rem, 3vw, 1.375rem)" /* Responsive: 14px to 22px */,
                      padding: "20px 24px",
                      border: 'none'
                    }}
                    bodyStyle={{ padding: "24px" }}
                  >
                    <Title level={4} style={{ color: "#0a2c64" }}>Part A Syllabus</Title>
                    {listItems([
                      "Visualization and Spatial Ability",
                      "Observation and Design Sensitivity",
                      "Environmental and Social Awareness",
                      "Analytical and Logical Reasoning"
                    ])}

                    <Title level={4} style={{ color: "#0a2c64", marginTop: 16 }}>Part B Syllabus</Title>
                    {listItems([
                      "Drawing Skills",
                      "Creativity and Originality",
                      "Visualization and Composition"
                    ])}
                  </Card>
                </motion.div>
              </Col>

              <Col xs={24}>
                <motion.div
                  variants={cardVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={isMobile ? {} : { scale: 1.03 }}
                  style={{ cursor: "pointer" }}
                >
                  <Card
                    title={<span style={{ fontSize: "clamp(0.875rem, 3vw, 1.375rem)" /* Responsive: 14px to 22px */ }}>Important Dates (Tentative)</span>}
                    style={cardStyle}
                    headStyle={{
                      backgroundColor: "#FF8C00",
                      color: "#fff",
                      fontSize: "clamp(0.875rem, 3vw, 1.375rem)" /* Responsive: 14px to 22px */,
                      padding: "20px 24px",
                      border: 'none'
                    }}
                    bodyStyle={{ padding: "24px" }}
                  >
                    <Table
                      dataSource={[
                        { event: "Application Start Date", date: "September 2024" },
                        { event: "Last Date to Apply", date: "November 2024" },
                        { event: "Admit Card Release", date: "January 2025" },
                        { event: "Exam Date", date: "January 2025" },
                        { event: "Result Declaration", date: "March 2025" },
                      ]}
                      columns={[
                        { title: 'Event', dataIndex: 'event', key: 'event' },
                        { title: 'Date', dataIndex: 'date', key: 'date' },
                      ]}
                      pagination={false}
                      bordered
                    />
                  </Card>
                </motion.div>
              </Col>

              <Col xs={24}>
                <motion.div
                  variants={cardVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={isMobile ? {} : { scale: 1.03 }}
                  style={{ cursor: "pointer" }}
                >
                  <Card
                    title={<span style={{ fontSize: "clamp(0.875rem, 3vw, 1.375rem)" /* Responsive: 14px to 22px */ }}>Preparation Tips</span>}
                    style={cardStyle}
                    headStyle={{
                      backgroundColor: "#FF8C00",
                      color: "#fff",
                      fontSize: "clamp(0.875rem, 3vw, 1.375rem)" /* Responsive: 14px to 22px */,
                      padding: "20px 24px",
                      border: 'none'
                    }}
                    bodyStyle={{ padding: "24px" }}
                  >
                    <Row gutter={[16, 16]}>
                      <Col xs={24} md={12}>
                        {listItems([
                          "Practice drawing daily",
                          "Solve previous years' papers",
                          "Enhance visual thinking"
                        ])}
                      </Col>
                      <Col xs={24} md={12}>
                        {listItems([
                          "Stay updated on design trends",
                          "Improve time management",
                          "Develop spatial reasoning"
                        ])}
                      </Col>
                    </Row>
                  </Card>
                </motion.div>
              </Col>

              <Col xs={24}>
                <motion.div
                  variants={cardVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={isMobile ? {} : { scale: 1.03 }}
                  style={{ cursor: "pointer" }}
                >
                  <Card
                    title={<span style={{ fontSize: "clamp(0.875rem, 3vw, 1.375rem)" /* Responsive: 14px to 22px */ }}>Career Opportunities</span>}
                    style={cardStyle}
                    headStyle={{
                      backgroundColor: "#FF8C00",
                      color: "#fff",
                      fontSize: "clamp(0.875rem, 3vw, 1.375rem)" /* Responsive: 14px to 22px */,
                      padding: "20px 24px",
                      border: 'none'
                    }}
                    bodyStyle={{ padding: "24px" }}
                  >
                    <Table
                      dataSource={[
                        { role: "Product Designer", description: "Design consumer products and electronics" },
                        { role: "UI/UX Designer", description: "Create digital interfaces and experiences" },
                        { role: "Visual Communication Designer", description: "Develop branding and visual systems" },
                        { role: "Automobile Designer", description: "Design vehicles and transportation systems" },
                        { role: "Graphic Designer", description: "Create visual content for various media" },
                      ]}
                      columns={[
                        { title: 'Career Role', dataIndex: 'role', key: 'role' },
                        { title: 'Description', dataIndex: 'description', key: 'description' },
                      ]}
                      pagination={false}
                      bordered
                    />
                  </Card>
                </motion.div>
              </Col>

              <Col xs={24}>
                <motion.div
                  variants={cardVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={isMobile ? {} : { scale: 1.03 }}
                  style={{ cursor: "pointer" }}
                >
                  <Card
                    title={<span style={{ fontSize: "clamp(0.875rem, 3vw, 1.375rem)" /* Responsive: 14px to 22px */ }}>How to Apply</span>}
                    style={cardStyle}
                    headStyle={{
                      backgroundColor: "#FF8C00",
                      color: "#fff",
                      fontSize: "clamp(0.875rem, 3vw, 1.375rem)" /* Responsive: 14px to 22px */,
                      padding: "20px 24px",
                      border: 'none'
                    }}
                    bodyStyle={{
                      padding: "24px",
                      background: "linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%)"
                    }}
                  >
                    {listItems([
                      "Visit the official UCEED website",
                      "Register with email and phone number",
                      "Fill the application form completely",
                      "Upload required documents",
                      "Pay application fee online",
                      "Download admit card when released"
                    ])}
                  </Card>
                </motion.div>
              </Col>
            </Row>
          </motion.div>
        </div>
      </Layout>
    </>
  );
}

export default UCEEDPage;