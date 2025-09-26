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

const NIDPage = () => {
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
          <title>NID Coaching in Hyderabad – Borigam | Best Design Entrance Exam Preparation</title>
          <meta name="description" content="Join Borigam’s NID Coaching in Hyderabad for expert guidance, updated study material & creative mentoring. Learn from NID alumni and crack the NID entrance exam with confidence." />
          <meta name="keywords" content="Borigam, Nift Coaching, NID coaching, Nata coaching, Ceed Coaching, Uceed coaching, Nift coaching near me, NID coaching near me, Nata coaching centres" />
          <link rel="canonical" href="https://borigaminstitute.in/entrance/nid/" />
          <meta name="robots" content="index, follow" />
        </Head>
        <div style={{ padding: "60px 30px", maxWidth: 1200, margin: "auto", backgroundColor: "#fff" }}>
         
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={sectionVariant}
        >
          <Title level={1} style={{ textAlign: 'center', marginBottom: 50, color: '#0a2c64', fontSize: "clamp(1.5rem, 5vw, 2.375rem)" /* Responsive H1: 24px to 38px */, marginTop: "clamp(4rem, 8vw, 8rem)" /* Responsive top margin */, }}>
            National Institute of Design (NID) Entrance Exam
            <div
              style={{
                height: 4,
                width: 120,
                backgroundColor: '#fbb034',
                margin: '20px auto 40px',
              }}
            ></div>
          </Title>
           <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h1 style={{
              color: '#ff4e18',
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "clamp(1rem, 3vw, 1.25rem)" /* Responsive: 16px to 20px */,
              fontWeight: 700,
              marginBottom: '18px',
              marginTop: '-40px',
              letterSpacing: '-0.5px',
              lineHeight: 1.2,
            }}>
              Best NID Entrance Exam Coaching in Hyderabad – Borigam
            </h1>
          </div>
          <Paragraph style={{ fontSize: "clamp(0.875rem, 2.5vw, 1rem)" /* Responsive: 14px to 16px */, lineHeight: 1.8, color: "#333", marginBottom: 40 }}>
            NID is India's premier design institute offering undergraduate and postgraduate programs in various design disciplines. 
            The NID Entrance Exam is highly competitive and considered a gateway to successful careers in the design industry.
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
                  title={<span style={{ fontSize: "clamp(0.875rem, 3vw, 1.375rem)" /* Responsive: 14px to 22px */ }}>About NID</span>}
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
                  <Paragraph style={{ fontSize: "clamp(0.875rem, 2.5vw, 1rem)" /* Responsive: 14px to 16px */, marginBottom: 16 }}>
                    Established in 1961, NID operates under the Ministry of Commerce and Industry, Government of India.
                  </Paragraph>
                  <Title level={4} style={{ color: "#0a2c64" }}>Campuses:</Title>
                  {listItems([
                    "NID Ahmedabad (Main Campus)",
                    "NID Gandhinagar",
                    "NID Bengaluru",
                    "NID Andhra Pradesh",
                    "NID Haryana",
                    "NID Madhya Pradesh",
                    "NID Assam"
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
                  title={<span style={{ fontSize: "clamp(0.875rem, 3vw, 1.375rem)" /* Responsive: 14px to 22px */ }}>Courses Offered</span>}
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
                  <Title level={4} style={{ color: "#0a2c64" }}>Bachelor of Design (B.Des)</Title>
                  {listItems([
                    "Duration: 4 Years",
                    "Specializations: Industrial, Communication, Textile & Apparel Design",
                    "Campuses: Ahmedabad and other campuses"
                  ])}
                  
                  <Title level={4} style={{ color: "#0a2c64", marginTop: 16 }}>Master of Design (M.Des)</Title>
                  {listItems([
                    "Duration: 2.5 Years",
                    "Specializations: Animation, Graphic, Product, Interaction Design",
                    "Campuses: Ahmedabad, Gandhinagar, Bengaluru"
                  ])}
                  
                  <Title level={4} style={{ color: "#0a2c64", marginTop: 16 }}>Doctoral Program</Title>
                  <Paragraph style={{ fontSize: "clamp(0.875rem, 2.5vw, 1rem)" /* Responsive: 14px to 16px */ }}>
                    Ph.D. in Design for research aspirants
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
                  title={<span style={{ fontSize: "clamp(0.875rem, 3vw, 1.375rem)" /* Responsive: 14px to 22px */ }}>Exam Structure</span>}
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
                  <Title level={4} style={{ color: "#0a2c64" }}>Stage 1: DAT Prelims</Title>
                  {listItems([
                    "Objective and Subjective questions",
                    "Conducted offline",
                    "Tests design aptitude and creativity"
                  ])}
                  
                  <Title level={4} style={{ color: "#0a2c64", marginTop: 16 }}>Stage 2: DAT Mains</Title>
                  {listItems([
                    "Studio Test and Personal Interview",
                    "Assesses practical skills and visualization",
                    "Portfolio review for M.Des candidates"
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
                  <Title level={4} style={{ color: "#0a2c64" }}>DAT Prelims</Title>
                  {listItems([
                    "Visual Perception and Observation",
                    "Design Thinking and Problem Solving",
                    "Drawing and Sketching",
                    "Creativity and Imagination"
                  ])}
                  
                  <Title level={4} style={{ color: "#0a2c64", marginTop: 16 }}>DAT Mains</Title>
                  {listItems([
                    "Material Handling",
                    "Model Making",
                    "Storytelling and Visual Narration",
                    "Design Solution Development"
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
                      { event: "Application Form Release", date: "October" },
                      { event: "Last Date to Apply", date: "December" },
                      { event: "DAT Prelims Exam", date: "January" },
                      { event: "Result Declaration", date: "March" },
                      { event: "DAT Mains Exam", date: "April-May" },
                      { event: "Final Result", date: "May-June" },
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
                  title={<span style={{ fontSize: "clamp(0.875rem, 3vw, 1.375rem)" /* Responsive: 14px to 22px */ }}>Selection Process</span>}
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
                  <Title level={4} style={{ color: "#0a2c64" }}>B.Des Admission</Title>
                  {listItems([
                    "DAT Prelims - 30% weightage",
                    "DAT Mains - 70% weightage"
                  ])}
                  
                  <Title level={4} style={{ color: "#0a2c64", marginTop: 16 }}>M.Des Admission</Title>
                  {listItems([
                    "DAT Prelims - 20% weightage",
                    "DAT Mains - 80% weightage",
                    "Portfolio review included"
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
                      { role: "Industrial Designer", description: "Design consumer products and equipment" },
                      { role: "Graphic Designer", description: "Create visual communications" },
                      { role: "UX/UI Designer", description: "Design digital interfaces and experiences" },
                      { role: "Textile Designer", description: "Create fabric designs and patterns" },
                      { role: "Animator", description: "Create animated content for various media" },
                    ]} 
                    columns={[
                      { title: 'Career Role', dataIndex: 'role', key: 'role' },
                      { title: 'Description', dataIndex: 'description', key: 'description' },
                    ]}
                    pagination={false}
                    bordered
                  />
                  <Paragraph style={{ fontSize: "clamp(0.875rem, 2.5vw, 1rem)" /* Responsive: 14px to 16px */, marginTop: 16 }}>
                    NID graduates work with top design firms, fashion houses, or start their own studios. Many also pursue careers in academia or research.
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
                        "Enhance Drawing Skills",
                        "Observe and Visualize",
                        "Improve Creativity",
                        "Stay Updated on Design Trends"
                      ])}
                    </Col>
                    <Col xs={24} md={12}>
                      {listItems([
                        "Practice Time Management",
                        "Prepare a strong portfolio (for M.Des)",
                        "Solve previous years' papers",
                        "Develop material handling skills"
                      ])}
                    </Col>
                  </Row>
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

export default NIDPage;