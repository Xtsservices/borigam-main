// ./pages/careers/advance-batch-coaching.tsx
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

const AdvanceBatchPage = () => {
  return (
    <Layout>
      <Header/>
      <div style={{ padding: "60px 30px", maxWidth: 1200, margin: "auto", backgroundColor: "#fff" , marginTop : '5rem' }}>
        <motion.div initial="hidden" animate="visible" variants={sectionVariant}>
          <Title level={1} style={{ textAlign: 'center', marginBottom: 50, color: '', fontSize: '42px' }}>
            Advance Batch Coaching
            <div style={{
              height: 4,
              width: 120,
              backgroundColor: '#3498db',
              margin: '20px auto 40px',
            }} />
          </Title>

          <Paragraph style={{ fontSize: '18px', textAlign: 'center', marginBottom: 50 }}>
            Final-Step Prep to Crack Top Design, Architecture & Fine Arts Entrance Exams
          </Paragraph>

          <Row gutter={[32, 32]}>
            {[
              {
                title: "Why Join Advance Batch?",
                items: [
                  "Time-bound intensive preparation",
                  "Exam-specific strategies",
                  "Personalized feedback on weak areas",
                  "Smart revision techniques",
                  "Final portfolio & interview polishing",
                ],
              },
              {
                title: "Our Advance Coaching Features",
                items: [
                  "Intensive Syllabus Revision",
                  "Timed Mock Tests & Past Papers",
                  "Portfolio & Studio Test Prep",
                  "Drawing Speed & Accuracy Sessions",
                  "Design Aptitude & MCQ Practice",
                ],
              },
              {
                title: "Additional Benefits",
                items: [
                  "Interview Preparation",
                  "Error Analysis & Improvement Plans",
                  "Online & Offline Crash Batches",
                  "Daily Practice Material via App",
                  "Live Expert Feedback",
                ],
              },
              {
                title: "Exams We Cover",
                items: [
                  "Design: NID DAT, NIFT, UCEED, CEED",
                  "Architecture: NATA, JEE Paper 2, CEPT",
                  "Fine Arts: JJ School, BHU, MSU, DU",
                ],
              },
              {
                title: "Who Can Join?",
                items: [
                  "Class 12 students",
                  "Graduates for PG courses",
                  "Students with basic training",
                  "Reattempt students",
                ],
              },
              {
                title: "Our Unique Approach",
                items: [
                  "Exam-specific batch strategies",
                  "Tailored to target college",
                  "Full-length mock tests",
                  "One-on-one feedback",
                  "Performance tracking",
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

export default AdvanceBatchPage;