// ./pages/careers/portfolio-coaching.tsx
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

const PortfolioCoachingPage = () => {
  return (
    <Layout>
      <Header/>
      <div style={{ padding: "60px 30px", maxWidth: 1200, margin: "auto", backgroundColor: "#fff",marginTop : '5rem' }}>
        <motion.div initial="hidden" animate="visible" variants={sectionVariant}>
          <Title level={1} style={{ textAlign: 'center', marginBottom: 50, color: '', fontSize: '42px' }}>
            Portfolio & Situation Test Coaching
            <div style={{
              height: 4,
              width: 120,
              backgroundColor: '#f1c40f',
              margin: '20px auto 40px',
            }} />
          </Title>

          <Paragraph style={{ fontSize: '18px', textAlign: 'center', marginBottom: 50 }}>
            Get Ready to Shine Beyond the Written Exam for NID, NIFT, IITs, UID, and MIT
          </Paragraph>

          <Row gutter={[32, 32]}>
            {[
              {
                title: "Portfolio Development",
                items: [
                  "Curate professional creative portfolio",
                  "Develop original artworks & concepts",
                  "Match institute expectations",
                  "Guide on layout & storytelling",
                  "Include process sheets & boards",
                ],
              },
              {
                title: "Situation Test Training",
                items: [
                  "Think creatively under pressure",
                  "Work with diverse materials",
                  "Develop 3D models quickly",
                  "Explain concepts effectively",
                  "Focus on neatness & originality",
                ],
              },
              {
                title: "Interview Preparation",
                items: [
                  "Mock Interviews with Experts",
                  "Personalized Feedback",
                  "Common & Creative Questions",
                  "Confidence Building",
                  "Communication Training",
                ],
              },
              {
                title: "Our Coaching Highlights",
                items: [
                  "One-on-One Mentorship",
                  "Material Handling Practice",
                  "Real-Time Model Making",
                  "Portfolio Feedback",
                  "Personality Development",
                ],
              },
              {
                title: "Skills You'll Master",
                items: [
                  "Portfolio Presentation",
                  "Quick Concept Development",
                  "Material Manipulation",
                  "Verbal Explanation",
                  "Interview Confidence",
                ],
              },
              {
                title: "Who Needs This?",
                items: [
                  "NID/NIFT shortlisted candidates",
                  "UCEED/CEED qualifiers",
                  "Architecture portfolio applicants",
                  "Fine arts interview candidates",
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

export default PortfolioCoachingPage;