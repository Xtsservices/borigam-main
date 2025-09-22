import React from "react";
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
  <ul style={{ paddingLeft: 24, color: "#333", fontSize: "18px" }}>
    {items.map((item, idx) => (
      <li key={idx} style={{ marginBottom: 12 }}>{item}</li>
    ))}
  </ul>
);

const AATpage = () => {
  return (
    <>
      <Header />
      <Layout>
        <Head>
          <title>AAT Coaching in Hyderabad – Borigam | Best Architecture Aptitude Test Preparation</title>
          <meta name="description" content="Crack the Architecture Aptitude Test (AAT) with expert coaching at Borigam Hyderabad. Learn freehand & geometrical drawing, 3D perception, creativity, and architectural awareness to secure B.Arch admission in IITs." />
          <meta name="keywords" content="Borigam, Nift Coaching, NID coaching, Nata coaching, Ceed Coaching, Uceed coaching, Nift coaching near me, NID coaching near me, Nata coaching centres" />
          <link rel="canonical" href="https://borigaminstitute.in/entrance/aat/" />
          <meta name="robots" content="index, follow" />
        </Head>
        <div style={{ padding: "60px 30px", maxWidth: 1200, margin: "auto", backgroundColor: "#fff" }}>
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={sectionVariant}
        >
          <Title level={1} style={{ textAlign: 'center', marginBottom: 50, color: '#0a2c64', fontSize: '42px', marginTop: '4.5rem', }}>
            Architecture Aptitude  Test
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
            fontSize: '1.5rem',
            margin: '-80px 0 40px 0',
            letterSpacing: '-0.5px',
            lineHeight: 1.2,
          }}>
Best AAT (Architecture Aptitude Test) Coaching in Hyderabad – Borigam          </h1>
           </div>
          <Paragraph style={{ fontSize: 20, lineHeight: 1.8, color: "#333", marginBottom: 40, marginTop: -60 }}>
            The Architecture Aptitude Test (AAT) is conducted by IITs for admission to their B.Arch programs. 
            Only candidates who qualify JEE Advanced are eligible to appear for AAT.
          </Paragraph>

          <Row gutter={[32, 32]}>
            <Col xs={24}>
              <motion.div
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ scale: 1.03 }}
                style={{ cursor: "pointer" }}
              >
                <Card
                  title={<span style={{ fontSize: "24px" }}>About AAT</span>}
                  style={cardStyle}
                  headStyle={{ 
                    backgroundColor: "#FF8C00", 
                    color: "#fff",
                    fontSize: "24px",
                    padding: "20px 24px",
                    border: 'none'
                  }}
                  bodyStyle={{ padding: "24px" }}
                >
                  {listItems([
                    "Full Form: Architecture Aptitude Test",
                    "Conducting Body: Joint Implementation Committee of JEE Advanced",
                    "Courses Offered: Bachelor of Architecture (B.Arch)",
                    "Mode of Exam: Offline (Pen and Paper)",
                    "Duration: 3 Hours",
                    "Eligibility: Only for JEE Advanced qualified candidates",
                    "Participating Institutes: IIT Roorkee, IIT Kharagpur, IIT Varanasi (BHU)"
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
                whileHover={{ scale: 1.03 }}
                style={{ cursor: "pointer" }}
              >
                <Card
                  title={<span style={{ fontSize: "24px" }}>Why Appear for AAT?</span>}
                  style={cardStyle}
                  headStyle={{ 
                    backgroundColor: "#FF8C00", 
                    color: "#fff",
                    fontSize: "24px",
                    padding: "20px 24px",
                    border: 'none'
                  }}
                  bodyStyle={{ padding: "24px" }}
                >
                  {listItems([
                    "Study at Premier Institutes: Get admission to top IITs offering B.Arch programs",
                    "Comprehensive Architectural Training: Gain in-depth knowledge of architectural design",
                    "Lucrative Career Options: Secure high-paying jobs in architecture and construction sectors"
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
                whileHover={{ scale: 1.03 }}
                style={{ cursor: "pointer" }}
              >
                <Card
                  title={<span style={{ fontSize: "24px" }}>Exam Pattern</span>}
                  style={cardStyle}
                  headStyle={{ 
                    backgroundColor: "#FF8C00", 
                    color: "#fff",
                    fontSize: "24px",
                    padding: "20px 24px",
                    border: 'none'
                  }}
                  bodyStyle={{ padding: "24px" }}
                >
                  {listItems([
                    "Freehand Drawing: Draw objects with accurate proportions",
                    "Geometrical Drawing: Assess understanding of geometry",
                    "3D Perception: Visualize and draw 3D objects",
                    "Architectural Awareness: Knowledge of famous structures",
                    "Imagination and Creativity: Display creative problem-solving"
                  ])}
                  <Paragraph style={{ fontSize: 18, marginTop: 16 }}>
                    <strong>Duration:</strong> 3 Hours | <strong>Mode:</strong> Offline (Pen and Paper)
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
                whileHover={{ scale: 1.03 }}
                style={{ cursor: "pointer" }}
              >
                <Card
                  title={<span style={{ fontSize: "24px" }}>Syllabus</span>}
                  style={cardStyle}
                  headStyle={{ 
                    backgroundColor: "#FF8C00", 
                    color: "#fff",
                    fontSize: "24px",
                    padding: "20px 24px",
                    border: 'none'
                  }}
                  bodyStyle={{ padding: "24px" }}
                >
                  <Title level={4} style={{ color: "#0a2c64" }}>Freehand Drawing</Title>
                  {listItems([
                    "Simple objects like household items, furniture, or vehicles",
                    "Proportionate representation using shading and line work",
                    "Perspective drawings"
                  ])}
                  
                  <Title level={4} style={{ color: "#0a2c64", marginTop: 16 }}>Geometrical Drawing</Title>
                  {listItems([
                    "Understanding of 2D and 3D objects",
                    "Scale and proportion concepts",
                    "Geometric transformations and views"
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
                whileHover={{ scale: 1.03 }}
                style={{ cursor: "pointer" }}
              >
                <Card
                  title={<span style={{ fontSize: "24px" }}>Important Dates (Tentative)</span>}
                  style={cardStyle}
                  headStyle={{ 
                    backgroundColor: "#FF8C00", 
                    color: "#fff",
                    fontSize: "24px",
                    padding: "20px 24px",
                    border: 'none'
                  }}
                  bodyStyle={{ padding: "24px" }}
                >
                  <Table 
                    dataSource={[
                      { event: "JEE Advanced Exam Date", date: "June 2025" },
                      { event: "AAT Registration Opens", date: "June 2025 (After JEE Advanced Result)" },
                      { event: "AAT Exam Date", date: "June 2025" },
                      { event: "Result Declaration", date: "June 2025 (Within a week)" },
                    ]} 
                    columns={[
                      { title: 'Event', dataIndex: 'event', key: 'event' },
                      { title: 'Date', dataIndex: 'date', key: 'date' },
                    ]}
                    pagination={false}
                    bordered
                  />
                  <Paragraph style={{ fontSize: 18, marginTop: 16 }}>
                    Check the official website: <a href="https://jeeadv.ac.in" target="_blank" rel="noopener noreferrer" style={{ color: "#FF8C00" }}>https://jeeadv.ac.in</a>
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
                whileHover={{ scale: 1.03 }}
                style={{ cursor: "pointer" }}
              >
                <Card
                  title={<span style={{ fontSize: "24px" }}>Career Opportunities</span>}
                  style={cardStyle}
                  headStyle={{ 
                    backgroundColor: "#FF8C00", 
                    color: "#fff",
                    fontSize: "24px",
                    padding: "20px 24px",
                    border: 'none'
                  }}
                  bodyStyle={{ padding: "24px" }}
                >
                  <Table 
                    dataSource={[
                      { role: "Architect", description: "Design buildings and spaces" },
                      { role: "Urban Planner", description: "Plan and develop urban areas" },
                      { role: "Interior Designer", description: "Design interior spaces and decor" },
                      { role: "Landscape Architect", description: "Design outdoor environments" },
                      { role: "Sustainability Consultant", description: "Focus on eco-friendly solutions" },
                      { role: "Construction Project Manager", description: "Oversee building projects" },
                      { role: "Architectural Visualizer", description: "Create 3D renderings of designs" },
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
          </Row>
        </motion.div>
      </div>
      </Layout>
    </>
  );
}

export default AATpage;