
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

const NIFTPage = () => {
  return (
    <>
      <Header />
      <Layout>
        <Head>
          <title>NIFT Coaching in Hyderabad – Borigam | Best Entrance Exam Preparation</title>
          <meta name="description" content="Join Borigam’s NIFT Coaching in Hyderabad for expert guidance, updated study material & proven results. Learn from NIFT alumni & crack the entrance exam with confidence." />
          <meta name="keywords" content="Borigam, Nift Coaching, NID coaching, Nata coaching, Ceed Coaching, Uceed coaching, Nift coaching near me, NID coaching near me, Nata coaching centres" />
          <link rel="canonical" href="https://borigaminstitute.in/entrance/nift/" />
          <meta name="robots" content="index, follow" />
        </Head>
        <div style={{ padding: "60px 30px", maxWidth: 1200, margin: "auto", backgroundColor: "#fff" }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h1 style={{
              color: '#0a2c64',
              fontFamily: "'Open Sans', sans-serif",
              fontSize: '2.4rem',
              fontWeight: 800,
              marginBottom: '18px',
              letterSpacing: '-0.5px',
              lineHeight: 1.2,
            }}>
              Best NIFT Entrance Exam Coaching in Hyderabad – Borigam
            </h1>
          </div>
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={sectionVariant}
        >
          <Title level={1} style={{ textAlign: 'center', marginBottom: 50, color: '#0a2c64', fontSize: '42px' }}>
            NIFT Entrance Exam
            <div
              style={{
                height: 4,
                width: 120,
                backgroundColor: '#fbb034',
                margin: '20px auto 40px',
              }}
            ></div>
          </Title>
          <Paragraph style={{ fontSize: 20, lineHeight: 1.8, color: "#333", marginBottom: 40 }}>
            The National Institute of Fashion Technology (NIFT) is India's premier institution for fashion education, offering undergraduate and postgraduate programs in design, technology, and management across 18 campuses.
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
                  title={<span style={{ fontSize: "24px" }}>Courses Offered</span>}
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
                  <Title level={4} style={{ color: "#0a2c64" }}>Undergraduate Programs (4 Years)</Title>
                  {listItems([
                    "B.Des: Fashion, Leather, Accessory, Textile, Knitwear Design",
                    "B.FTech: Apparel Production"
                  ])}
                  
                  <Title level={4} style={{ color: "#0a2c64", marginTop: 16 }}>Postgraduate Programs (2 Years)</Title>
                  {listItems([
                    "M.Des: Master of Design",
                    "M.FTech: Master of Fashion Technology",
                    "MFM: Master of Fashion Management"
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
                  title={<span style={{ fontSize: "24px" }}>Exam Structure</span>}
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
                  <Title level={4} style={{ color: "#0a2c64" }}>For B.Des Applicants</Title>
                  {listItems([
                    "General Ability Test (GAT)",
                    "Creative Ability Test (CAT)",
                    "Situation Test"
                  ])}
                  
                  <Title level={4} style={{ color: "#0a2c64", marginTop: 16 }}>For B.FTech Applicants</Title>
                  {listItems([
                    "Only General Ability Test (GAT)"
                  ])}
                  
                  <Title level={4} style={{ color: "#0a2c64", marginTop: 16 }}>For M.Des Applicants</Title>
                  {listItems([
                    "GAT + CAT",
                    "Group Discussion & Personal Interview"
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
                  <Title level={4} style={{ color: "#0a2c64" }}>General Ability Test (GAT)</Title>
                  {listItems([
                    "Quantitative Ability (Class 10 Math)",
                    "Communication Ability & English",
                    "Analytical & Logical Reasoning",
                    "General Knowledge & Current Affairs"
                  ])}
                  
                  <Title level={4} style={{ color: "#0a2c64", marginTop: 16 }}>Creative Ability Test (CAT)</Title>
                  {listItems([
                    "Drawing skills assessment",
                    "Creativity & innovation evaluation",
                    "Visual perception testing"
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
                      { event: "Application Start", date: "November" },
                      { event: "Application Deadline", date: "December" },
                      { event: "Admit Card Release", date: "January" },
                      { event: "Exam Date", date: "February" },
                      { event: "Results", date: "March/April" },
                      { event: "Counselling", date: "May/June" },
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
                      { role: "Fashion Designer", description: "Create original clothing and accessories" },
                      { role: "Textile Designer", description: "Design fabrics and surface patterns" },
                      { role: "Fashion Stylist", description: "Style looks for photoshoots and events" },
                      { role: "Apparel Production Manager", description: "Oversee garment manufacturing" },
                      { role: "Fashion Entrepreneur", description: "Start your own fashion business" },
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
                whileHover={{ scale: 1.03 }}
                style={{ cursor: "pointer" }}
              >
                <Card
                  title={<span style={{ fontSize: "24px" }}>Preparation Tips</span>}
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
                        "Practice sketching daily",
                        "Build a strong portfolio",
                        "Stay updated on fashion trends"
                      ])}
                    </Col>
                    <Col xs={24} md={12}>
                      {listItems([
                        "Solve previous years' papers",
                        "Work on time management",
                        "Develop material handling skills"
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
                  title={<span style={{ fontSize: "24px" }}>How to Apply</span>}
                  style={cardStyle}
                  headStyle={{ 
                    backgroundColor: "#FF8C00", 
                    color: "#fff",
                    fontSize: "24px",
                    padding: "20px 24px",
                    border: 'none'
                  }}
                  bodyStyle={{ 
                    padding: "24px",
                    background: "linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%)"
                  }}
                >
                  {listItems([
                    "Visit nift.ac.in and register",
                    "Upload required documents",
                    "Pay application fee online",
                    "Download admit card when released"
                  ])}
                  <Paragraph style={{ fontSize: 18, marginTop: 16 }}>
                    <a href="https://www.nift.ac.in" target="_blank" rel="noopener noreferrer" style={{ color: "#FF8C00", fontWeight: "bold" }}>
                      Official Website: www.nift.ac.in
                    </a>
                  </Paragraph>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </div>
      </Layout>
    </>
  );
};

export default NIFTPage;