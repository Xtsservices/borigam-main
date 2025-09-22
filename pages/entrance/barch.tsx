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

const BArchPage = () => {
  return (
    <>
      <Header />
      <Layout>
        <Head>
          <title>B.Arch Coaching in Hyderabad – Borigam | Best Architecture Entrance Preparation</title>
          <meta name="description" content="Join Borigam’s B.Arch Coaching in Hyderabad and prepare for top architecture entrance exams like NATA & JEE Paper." />
          <meta name="keywords" content="Borigam, Nift Coaching, NID coaching, Nata coaching, Ceed Coaching, Uceed coaching, Nift coaching near me, NID coaching near me, Nata coaching centres" />
          <link rel="canonical" href="https://borigaminstitute.in/entrance/barch" />
          <meta name="robots" content="index, follow" />
        </Head>
        <div style={{ padding: "60px 30px", maxWidth: 1200, margin: "auto", backgroundColor: "#fff" }}>
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={sectionVariant}
        >
          <Title level={1} style={{ textAlign: 'center', marginBottom: 50, color: '#0a2c64', fontSize: '42px', marginTop: '4.5rem', }}>
            Bachelor of Architecture (B.Arch) 
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
Best B.Arch Entrance Exam Coaching in Hyderabad – Borigam          </h1>
           </div>
          <Paragraph style={{ fontSize: 20, lineHeight: 1.8, color: "#333", marginBottom: 40, marginTop: -60 }}>
            B.Arch is a 5-year professional undergraduate degree that prepares students for careers in architecture, 
            combining artistic vision with technical knowledge of building design and construction.
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
                  title={<span style={{ fontSize: "24px" }}>About B.Arch Course</span>}
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
                    "Duration: 5 Years",
                    "Course Type: Undergraduate Professional Degree",
                    "Objective: Train students in architectural design and construction",
                    "Career Scope: Architects, urban planners, interior designers"
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
                  title={<span style={{ fontSize: "24px" }}>Popular Entrance Exams</span>}
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
                  <Title level={4} style={{ color: "#0a2c64" }}>National Level</Title>
                  {listItems([
                    "NATA – Conducted by Council of Architecture (CoA)",
                    "JEE Main Paper 2 – Conducted by NTA"
                  ])}
                  
                  <Title level={4} style={{ color: "#0a2c64", marginTop: 16 }}>State Level</Title>
                  {listItems([
                    "KEAM (Kerala)",
                    "TANCET (Tamil Nadu)",
                    "UPSEE (Uttar Pradesh)"
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
                    "10+2 with Physics, Chemistry, and Mathematics",
                    "Minimum 50% aggregate in PCM (For NATA)",
                    "60% aggregate for IITs (through JEE Advanced)",
                    "Diploma in Architecture holders also eligible",
                    "No age limit for most exams"
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
                  <Title level={4} style={{ color: "#0a2c64" }}>NATA</Title>
                  {listItems([
                    "Mode: Computer-Based + Offline Drawing",
                    "Duration: 3 Hours",
                    "Total Marks: 200",
                    "Sections: Cognitive, Drawing, Mathematics, Aptitude"
                  ])}
                  
                  <Title level={4} style={{ color: "#0a2c64", marginTop: 16 }}>JEE Main Paper 2</Title>
                  {listItems([
                    "Mode: Computer-Based + Offline Drawing",
                    "Duration: 3 Hours",
                    "Total Marks: 400",
                    "Sections: Mathematics (100), Aptitude (200), Drawing (100)"
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
                  <Title level={4} style={{ color: "#0a2c64" }}>Mathematics</Title>
                  {listItems([
                    "Algebra, Trigonometry, Calculus",
                    "Geometry and Coordinate Geometry",
                    "Probability and Statistics"
                  ])}
                  
                  <Title level={4} style={{ color: "#0a2c64", marginTop: 16 }}>Aptitude</Title>
                  {listItems([
                    "Visualizing 3D Objects",
                    "Mental Ability, Logical Reasoning",
                    "Architecture GK"
                  ])}
                  
                  <Title level={4} style={{ color: "#0a2c64", marginTop: 16 }}>Drawing</Title>
                  {listItems([
                    "Sketching and Drawing",
                    "Perspective and Geometric Drawing",
                    "Freehand and Memory Sketching"
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
                      { exam: "NATA Application", date: "March" },
                      { exam: "NATA Exam", date: "April–July" },
                      { exam: "JEE Main Application", date: "December" },
                      { exam: "JEE Main Exam", date: "January and April" },
                      { exam: "Results", date: "Within a month after exams" },
                    ]} 
                    columns={[
                      { title: 'Exam', dataIndex: 'exam', key: 'exam' },
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
                  title={<span style={{ fontSize: "24px" }}>Top Architecture Colleges</span>}
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
                    "IITs (Kharagpur, Roorkee, BHU)",
                    "NITs (Trichy, Calicut, Nagpur)",
                    "School of Planning and Architecture (SPA Delhi, Bhopal, Vijayawada)",
                    "CEPT University, Ahmedabad",
                    "Sir JJ College of Architecture, Mumbai"
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
                      { role: "Interior Designer", description: "Design interior spaces" },
                      { role: "Landscape Architect", description: "Design outdoor environments" },
                      { role: "Project Manager", description: "Oversee construction projects" },
                      { role: "Sustainability Consultant", description: "Eco-friendly design solutions" },
                    ]} 
                    columns={[
                      { title: 'Career Role', dataIndex: 'role', key: 'role' },
                      { title: 'Description', dataIndex: 'description', key: 'description' },
                    ]}
                    pagination={false}
                    bordered
                  />
                  <Paragraph style={{ fontSize: 18, marginTop: 16 }}>
                    Graduates can also pursue higher education in Urban Design, Sustainable Architecture, or Construction Management.
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
}

export default BArchPage;