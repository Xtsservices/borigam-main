import React from "react";
import { Typography, Row, Col, Card, Table } from "antd";
import { motion } from "framer-motion";
import Layout from '../../components/Layout';
import Head from 'next/head';
import Image from 'next/image';
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const listItems = (items: string[]) => (
  <ul style={{ paddingLeft: 24, color: "#333", fontSize: "18px" }}>
    {items.map((item, idx) => (
      <li key={idx} style={{ marginBottom: 12 }}>{item}</li>
    ))}
  </ul>
);

const NataPage = () => {
  return (
    <Layout>
      <header/>
      <Head>
        <title>NATA Entrance Exam - Complete Guide</title>
      </Head>
      <div style={{ padding: "60px 30px", maxWidth: 1200, margin: "auto", backgroundColor: "#fff" }}>
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={sectionVariant}
        >
          <Title level={1} style={{ textAlign: 'center', marginBottom: 50, color: '#0a2c64', fontSize: '42px' }}>
            National Aptitude Test in Architecture (NATA)
            <div
              style={{
                height: 4,
                width: 120,
                backgroundColor: '#fbb034',
                margin: '20px auto 40px',
              }}
            ></div>
          </Title>
          
          <div style={{ marginBottom: 40, borderRadius: 16, overflow: 'hidden' }}>
            <Image 
              src="/images/nata-banner.jpg" 
              alt="NATA Overview" 
              width={1200}
              height={400}
              layout="responsive"
              priority
            />
          </div>

          <Paragraph style={{ fontSize: 20, lineHeight: 1.8, color: "#333", marginBottom: 40 }}>
            NATA is the national level entrance exam for admission to 5-year B.Arch programs at most architecture colleges across India, 
            conducted by the Council of Architecture (CoA).
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
                  title={<span style={{ fontSize: "24px" }}>About NATA</span>}
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
                    "Conducting Body: Council of Architecture (CoA)",
                    "Course Offered: Bachelor of Architecture (B.Arch)",
                    "Mode: Computer-Based Test + Offline Drawing",
                    "Frequency: Conducted multiple times a year",
                    "Score Validity: 1 Year"
                  ])}
                  <Paragraph style={{ fontSize: 18, marginTop: 16 }}>
                    <strong>Note:</strong> IITs, NITs, and SPAs accept JEE Main Paper 2 scores instead of NATA.
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
                  <Title level={4} style={{ color: "#0a2c64" }}>Part A - Cognitive Skills Test (125 Marks)</Title>
                  {listItems([
                    "Mode: Computer-Based Test",
                    "Duration: 72 Minutes",
                    "Subjects: General Aptitude, Logical Reasoning, Visual Perception"
                  ])}
                  
                  <Title level={4} style={{ color: "#0a2c64", marginTop: 16 }}>Part B - Drawing Test (75 Marks)</Title>
                  {listItems([
                    "Mode: Offline (Pen and Paper)",
                    "Duration: 72 Minutes",
                    "Tasks: Freehand Sketching, Perspective Drawing, Visual Composition"
                  ])}
                  <Paragraph style={{ fontSize: 18, marginTop: 16 }}>
                    <strong>Total Duration:</strong> 3 Hours | <strong>Total Marks:</strong> 200
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
                  title={<span style={{ fontSize: "24px" }}>Eligibility Criteria</span>}
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
                    "10+2 with Mathematics as compulsory subject",
                    "Minimum 50% aggregate marks in PCM",
                    "10+3 Diploma with Mathematics also eligible",
                    "No upper age limit"
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
                  <Title level={4} style={{ color: "#0a2c64" }}>Aptitude Test</Title>
                  {listItems([
                    "Visual and Spatial Ability",
                    "Logical and Analytical Reasoning",
                    "Architectural Awareness",
                    "Mathematics - Algebra, Geometry, Trigonometry"
                  ])}
                  
                  <Title level={4} style={{ color: "#0a2c64", marginTop: 16 }}>Drawing Test</Title>
                  {listItems([
                    "Sketching Objects and Scenes from Memory",
                    "Perspective and Scale Drawing",
                    "Composition using Shapes and Forms",
                    "Understanding of Proportions and Aesthetics"
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
                  title={<span style={{ fontSize: "24px" }}>Exam Fees</span>}
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
                      { attempt: "Single Attempt", general: "₹2,000", scst: "₹1,500" },
                      { attempt: "Double Attempt", general: "₹4,000", scst: "₹3,000" },
                      { attempt: "Triple Attempt", general: "₹5,500", scst: "₹4,000" },
                    ]} 
                    columns={[
                      { title: 'Attempt Type', dataIndex: 'attempt', key: 'attempt' },
                      { title: 'General', dataIndex: 'general', key: 'general' },
                      { title: 'SC/ST', dataIndex: 'scst', key: 'scst' },
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
                      { event: "Application Start", date: "March 2025" },
                      { event: "Last Date to Apply", date: "April 2025" },
                      { event: "Admit Card Release", date: "April 2025" },
                      { event: "Exam Dates", date: "April – July 2025" },
                      { event: "Results", date: "Within 7 Days of Exam" },
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
                whileHover={{ scale: 1.03 }}
                style={{ cursor: "pointer" }}
              >
                <Card
                  title={<span style={{ fontSize: "24px" }}>Top Colleges Accepting NATA</span>}
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
                  <Row gutter={[16, 16]}>
                    <Col xs={24} md={12}>
                      {listItems([
                        "School of Planning and Architecture (SPA), Delhi",
                        "CEPT University, Ahmedabad",
                        "Sir JJ College of Architecture, Mumbai"
                      ])}
                    </Col>
                    <Col xs={24} md={12}>
                      {listItems([
                        "JNAFAU, Hyderabad",
                        "BIT Mesra, Ranchi",
                        "Chandigarh College of Architecture"
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
                      { role: "Architect", description: "Design buildings and structures" },
                      { role: "Urban Planner", description: "Plan and develop urban spaces" },
                      { role: "Interior Designer", description: "Design functional indoor spaces" },
                      { role: "Landscape Architect", description: "Design outdoor environments" },
                      { role: "3D Visualizer", description: "Create architectural renderings" },
                    ]} 
                    columns={[
                      { title: 'Career Role', dataIndex: 'role', key: 'role' },
                      { title: 'Description', dataIndex: 'description', key: 'description' },
                    ]}
                    pagination={false}
                    bordered
                  />
                  <Paragraph style={{ fontSize: 18, marginTop: 16 }}>
                    Graduates may pursue higher studies like M.Arch, Urban Design, or Landscape Architecture.
                  </Paragraph>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </div>
    </Layout>
  );
};

export default NataPage;