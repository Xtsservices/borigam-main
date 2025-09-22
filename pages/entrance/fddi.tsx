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

const FDDIPage = () => {
  return (
    <>
      <Header />
      <Layout>
        <Head>
          <title>FDDI Coaching in Hyderabad – Borigam | Best Footwear & Fashion Design Entrance Preparation</title>
          <meta name="description" content="Crack the FDDI entrance exam with expert coaching at Borigam Hyderabad. Learn from experienced mentors, access updated study material & build a strong foundation in footwear and fashion design." />
            <meta name="keywords" content="Borigam, Nift Coaching, NID coaching, Nata coaching, Ceed Coaching, Uceed coaching, Nift coaching near me, NID coaching near me, Nata coaching centres" />
          <link rel="canonical" href="https://borigaminstitute.in/entrance/fddi/" />
          <meta name="robots" content="index, follow" />
        </Head>
        <div style={{ padding: "60px 30px", maxWidth: 1200, margin: "auto", backgroundColor: "#fff" }}>
           <Title level={1} style={{ textAlign: 'center',  color: '#0a2c64', fontSize: '42px', marginTop: '4.5rem', }}>
            FDDI AIST Entrance Exam 
            <div
              style={{
                height: 4,
                width: 120,
                backgroundColor: '#fbb034',
                margin: '10px auto 40px',
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
            Best FDDI Entrance Exam Coaching in Hyderabad – Borigam
          </h1>
           </div>
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={sectionVariant}
        >
          <Paragraph style={{ fontSize: 20, lineHeight: 1.8, color: "#333", marginBottom: 40, marginTop: -60 }}>
            Footwear Design and Development Institute All India Selection Test (FDDI AIST) is the gateway to premier 
            design and business programs in footwear, fashion, and retail management.
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
                  title={<span style={{ fontSize: "24px" }}>About FDDI AIST</span>}
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
                    "Conducting Body: Footwear Design and Development Institute",
                    "Mode: Computer-Based Test (CBT)",
                    "Duration: 2 Hours 30 Minutes",
                    "Score Validity: 1 Year",
                    "Frequency: Conducted once a year"
                  ])}
                  <Title level={4} style={{ color: "#0a2c64", marginTop: 16 }}>Courses Offered</Title>
                  {listItems([
                    "Bachelor of Design (B.Des)",
                    "Master of Design (M.Des)",
                    "Bachelor of Business Administration (BBA)",
                    "Master of Business Administration (MBA)"
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
                  <Table 
                    dataSource={[
                      { section: "Quantitative Aptitude", questions: 25, marks: 25 },
                      { section: "Verbal Ability", questions: 25, marks: 25 },
                      { section: "General Awareness", questions: 50, marks: 50 },
                      { section: "Business/Design Aptitude", questions: 50, marks: 50 },
                    ]} 
                    columns={[
                      { title: 'Section', dataIndex: 'section', key: 'section' },
                      { title: 'Questions', dataIndex: 'questions', key: 'questions' },
                      { title: 'Marks', dataIndex: 'marks', key: 'marks' },
                    ]}
                    pagination={false}
                    bordered
                  />
                  <Paragraph style={{ fontSize: 18, marginTop: 16 }}>
                    <strong>Total Duration:</strong> 2 Hours 30 Minutes | <strong>No Negative Marking</strong>
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
                  <Title level={4} style={{ color: "#0a2c64" }}>Undergraduate Courses (B.Des/BBA)</Title>
                  {listItems([
                    "Passed or appearing in 10+2 or equivalent",
                    "Age Limit: Not exceeding 25 years"
                  ])}
                  
                  <Title level={4} style={{ color: "#0a2c64", marginTop: 16 }}>Postgraduate Courses (M.Des/MBA)</Title>
                  {listItems([
                    "Bachelor's degree in any discipline",
                    "No age limit"
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
                  <Title level={4} style={{ color: "#0a2c64" }}>Quantitative Aptitude</Title>
                  {listItems([
                    "Algebra, Profit and Loss, Percentage",
                    "Ratio and Proportion, Time and Work",
                    "Probability, Permutation"
                  ])}
                  
                  <Title level={4} style={{ color: "#0a2c64", marginTop: 16 }}>Verbal Ability</Title>
                  {listItems([
                    "Reading Comprehension, Grammar",
                    "Sentence Correction, Vocabulary",
                    "Synonyms, Antonyms, Para Jumbles"
                  ])}
                  
                  <Title level={4} style={{ color: "#0a2c64", marginTop: 16 }}>General Awareness</Title>
                  {listItems([
                    "Current Affairs",
                    "Fashion and Footwear Industry Updates",
                    "Indian and International Events"
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
                      { event: "Application Start", date: "January 2025" },
                      { event: "Last Date to Apply", date: "April 2025" },
                      { event: "Admit Card Release", date: "May 2025" },
                      { event: "Exam Date", date: "June 2025" },
                      { event: "Result Declaration", date: "July 2025" },
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
                  title={<span style={{ fontSize: "24px" }}>Top FDDI Campuses</span>}
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
                        "FDDI Noida",
                        "FDDI Chennai",
                        "FDDI Kolkata",
                        "FDDI Hyderabad"
                      ])}
                    </Col>
                    <Col xs={24} md={12}>
                      {listItems([
                        "FDDI Rohtak",
                        "FDDI Chandigarh",
                        "FDDI Jodhpur",
                        "FDDI Patna"
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
                      { role: "Footwear Designer", description: "Design innovative footwear products" },
                      { role: "Fashion Designer", description: "Create fashion collections and styles" },
                      { role: "Retail Manager", description: "Oversee store operations and sales" },
                      { role: "Product Manager", description: "Manage product development lifecycle" },
                      { role: "Entrepreneur", description: "Start your own fashion/footwear business" },
                    ]} 
                    columns={[
                      { title: 'Career Role', dataIndex: 'role', key: 'role' },
                      { title: 'Description', dataIndex: 'description', key: 'description' },
                    ]}
                    pagination={false}
                    bordered
                  />
                  <Paragraph style={{ fontSize: 18, marginTop: 16 }}>
                    <strong>Top Recruiters:</strong> Adidas, Bata, Nike, Puma, Reliance Retail
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

export default FDDIPage;