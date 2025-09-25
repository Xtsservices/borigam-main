import React, { useState, useEffect } from "react";
import { Typography, Row, Col, Card, Table } from "antd";
import { motion } from "framer-motion";
import Layout from '../../components/Layout';
import Header from "@/components/Header";


const { Title, Paragraph, Text } = Typography;

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

const DesignPage = () => {
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
    <Layout>
      <header/>
      <div style={{ padding: "60px 30px", maxWidth: 1200, margin: "auto", backgroundColor: "#fff" }}>
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={sectionVariant}
        >
          <Title level={1} style={{ textAlign: 'center', marginBottom: 50, color: '#0a2c64', fontSize: '42px' }}>
            Design Entrance Exams Coaching
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
            Your gateway to top design colleges in India including NID, NIFT, IITs (UCEED/CEED), MITID, and UID.
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
                  title={<span style={{ fontSize: "24px" }}>Why Choose Design as a Career?</span>}
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
                  <Paragraph style={{ fontSize: 18, marginBottom: 16 }}>
                    Design is not just about aesthetics – it's about solving real-world problems with innovation and creativity.
                  </Paragraph>
                  <Title level={4} style={{ color: "#0a2c64" }}>Career Opportunities:</Title>
                  {listItems([
                    "Fashion & Textile Industry",
                    "Product & Industrial Design",
                    "UI/UX & Digital Design",
                    "Film, Animation & Gaming",
                    "Graphic & Communication Design",
                    "Interior & Furniture Design"
                  ])}
                  <Paragraph style={{ fontSize: 18, marginTop: 16 }}>
                    The demand for creative professionals is growing rapidly across industries.
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
                  title={<span style={{ fontSize: "24px" }}>Key Design Entrance Exams</span>}
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
                      { exam: "NID DAT", description: "For National Institute of Design (Prelims + Mains)", focus: "Drawing, creativity, visualization" },
                      { exam: "NIFT Entrance", description: "For National Institute of Fashion Technology", focus: "GAT, CAT, Situation Test" },
                      { exam: "UCEED", description: "For B.Des at IITs", focus: "Visualization, observation, creativity" },
                      { exam: "CEED", description: "For M.Des at IITs", focus: "Problem-solving, sketching" },
                      { exam: "Others", description: "MITID DAT, UID, Pearl Academy", focus: "Varies by institute" },
                    ]} 
                    columns={[
                      { title: 'Exam', dataIndex: 'exam', key: 'exam' },
                      { title: 'Description', dataIndex: 'description', key: 'description' },
                      { title: 'Focus Areas', dataIndex: 'focus', key: 'focus' },
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
                  title={<span style={{ fontSize: "24px" }}>Our Coaching Program</span>}
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
                      <Title level={4} style={{ color: "#0a2c64" }}>What We Offer:</Title>
                      {listItems([
                        "Experienced Faculty from Design & Architecture",
                        "Complete Syllabus Coverage",
                        "Creative Assignments & Practice Worksheets",
                        "Mock Tests for each topic",
                        "Portfolio and Interview Preparation"
                      ])}
                    </Col>
                    <Col xs={24} md={12}>
                      <Title level={4} style={{ color: "#0a2c64" }}>Additional Benefits:</Title>
                      {listItems([
                        "Online & Classroom Batches",
                        "Study Material + Previous Years' Papers",
                        "Personalized Mentorship",
                        "One-on-One Career Guidance",
                        "24/7 online support"
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
                  title={<span style={{ fontSize: "24px" }}>ccess Stories</span>}
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
                  <div style={{ borderLeft: "4px solid #0a2c64", paddingLeft: 16, marginBottom: 16 }}>
                    <Paragraph italic style={{ fontSize: 18 }}>
                      "I cracked NID in my first attempt, thanks to the mock test series and personalized feedback sessions!"
                    </Paragraph>
                    <Text strong style={{ fontSize: 16 }}>– Ananya R., NID Ahmedabad</Text>
                  </div>
                  <div style={{ borderLeft: "4px solid #0a2c64", paddingLeft: 16 }}>
                    <Paragraph italic style={{ fontSize: 18 }}>
                      "The faculty helped me think beyond basic sketching and taught me how to present ideas like a designer."
                    </Paragraph>
                    <Text strong style={{ fontSize: 16 }}>– Karan M., UCEED Rank Holder</Text>
                  </div>
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
                  title={<span style={{ fontSize: "24px" }}>Who Can Join?</span>}
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
                    "Class 10 & 12 Students aiming for Graduation",
                    "Graduates aiming for PG design courses",
                    "Students preparing for BFA / NATA / B.Des / M.Des"
                  ])}
                  <Paragraph style={{ fontSize: 18, marginTop: 16 }}>
                    No matter your background, we'll help you discover and grow your creative potential.
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
                  title={<span style={{ fontSize: "24px" }}>Ready to Start Your Design Journey?</span>}
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
                    textAlign: "center",
                    background: "linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%)"
                  }}
                >
                  <Title level={3} style={{ color: "#0a2c64", marginBottom: 16 }}>
                    Explore our flexible batches and free demo classes
                  </Title>
                  <Paragraph style={{ fontSize: 20, marginBottom: 24 }}>
                    Your dream design college is just an exam away – let's crack it together!
                  </Paragraph>
                  <button style={{
                    backgroundColor: "#FF8C00",
                    color: "white",
                    border: "none",
                    padding: "12px 24px",
                    fontSize: "18px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontWeight: "bold",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                  onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                  >
                    Enquire Now
                  </button>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </div>
    </Layout>
  );
};

export default DesignPage;