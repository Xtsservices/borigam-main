// ./pages/careers/architecture-entrance-exams.tsx
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

const ArchitecturePage = () => {
  return (
    <Layout>
      <Header/>
      <div style={{ padding: "60px 30px", maxWidth: 1200, margin: "auto", backgroundColor: "#fff",marginTop : '5rem' }}>
        <motion.div initial="hidden" animate="visible" variants={sectionVariant}>
          <Title level={1} style={{ textAlign: 'center', marginBottom: 50, color: '', fontSize: '42px' }}>
            Architecture Entrance Exams Coaching
            <div style={{
              height: 4,
              width: 120,
              backgroundColor: '#fbb034',
              margin: '20px auto 40px',
            }} />
          </Title>

          <Paragraph style={{ fontSize: '18px', textAlign: 'center', marginBottom: 50 }}>
            Your Path to India's Premier Architecture Colleges like SPA, IITs, NITs, CEPT, and JJ College of Architecture
          </Paragraph>

          <Row gutter={[32, 32]}>
            {[
              {
                title: "Why Choose Architecture?",
                items: [
                  "Transform lives through thoughtful, sustainable space design",
                  "Career paths: Residential/Commercial Architecture, Urban Planning",
                  "Work in Interior Architecture, Landscape Architecture, Heritage Conservation",
                  "Dynamic career combining creativity, engineering, and vision",
                ],
              },
              {
                title: "Key Exams We Coach For",
                items: [
                  "NATA (National Aptitude Test in Architecture)",
                  "JEE (Main) Paper 2 - B.Arch/B.Planning",
                  "CEPT Entrance Exam (CEPT University, Ahmedabad)",
                  "State-level tests (TNEA, COMEDK, KCET B.Arch)",
                ],
              },
              {
                title: "Our Coaching Features",
                items: [
                  "Experienced Architecture Faculty",
                  "Complete Syllabus Coverage + Topic-wise Practice",
                  "Drawing & Sketching Practice Sessions",
                  "Mock Tests & Weekly Assessments",
                  "Portfolio & Interview Training",
                  "Online & Classroom Options",
                ],
              },
              {
                title: "What We Offer",
                items: [
                  "Study Material + Past Year Papers",
                  "Digital App Access",
                  "One-on-One Mentorship",
                  "24/7 Doubt Solving Support",
                  "Career Counseling",
                ],
              },
              {
                title: "Skills You'll Develop",
                items: [
                  "Technical Drawing & Visualization",
                  "Spatial Understanding",
                  "Analytical Thinking",
                  "Creative Problem Solving",
                  "Time Management for Exams",
                ],
              },
              {
                title: "Who Can Join?",
                items: [
                  "Class 10 & 12 Students aiming for Architecture",
                  "Students preparing for NATA/B.Arch",
                  "Those seeking portfolio development",
                  "Repeaters wanting to improve scores",
                ],
              },
            ].map((section, idx) => (
              <Col xs={24} sm={12} md={8} key={idx}>
                <motion.div
                  variants={cardVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ scale: 1.03 }}
                  style={{ cursor: "pointer" }}
                >
                  <Card
                    title={<span style={{ fontSize: "22px" }}>{section.title}</span>}
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
                    {listItems(section.items)}
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

export default ArchitecturePage;