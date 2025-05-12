// ./pages/careers/bfa-entrance-exams.tsx
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

const BFAPage = () => {
  return (
    <Layout>
      <Header/>
      <div style={{ padding: "60px 30px", maxWidth: 1200, margin: "auto", backgroundColor: "#fff" ,marginTop: '5rem'}}>
        <motion.div initial="hidden" animate="visible" variants={sectionVariant}>
          <Title level={1} style={{ textAlign: 'center', marginBottom: 50, color: '', fontSize: '42px' }}>
            BFA Entrance Exams Coaching
            <div style={{
              height: 4,
              width: 120,
              backgroundColor: '#f39c12',
              margin: '20px auto 40px',
            }} />
          </Title>

          <Paragraph style={{ fontSize: '18px', textAlign: 'center', marginBottom: 50 }}>
            Your Gateway to Top Fine Arts Colleges in India like JJ School of Art, Delhi College of Art, BHU, and MSU Baroda
          </Paragraph>

          <Row gutter={[32, 32]}>
            {[
              {
                title: "Why Choose Fine Arts?",
                items: [
                  "Express ideas through visual language",
                  "Career paths: Painting, Sculpture, Digital Media",
                  "Work in Illustration, Animation, Game Art",
                  "Opportunities in Art Restoration, Gallery Curation",
                ],
              },
              {
                title: "Key BFA Exams We Cover",
                items: [
                  "JJ School of Art Entrance",
                  "Delhi College of Art Exam",
                  "BHU BFA Entrance",
                  "MSU Baroda Fine Arts",
                  "Visva-Bharati, Shantiniketan",
                ],
              },
              {
                title: "Our Coaching Features",
                items: [
                  "Faculty of Practicing Artists",
                  "Theory + Practical Coaching",
                  "Drawing, Composition, Color Study",
                  "Mock Entrance Tests",
                  "Portfolio Reviews",
                ],
              },
              {
                title: "What We Offer",
                items: [
                  "Art Aptitude & GK Training",
                  "Online & Offline Learning",
                  "Study Material + Sketchbooks",
                  "One-on-One Mentoring",
                  "24/7 Online Support",
                ],
              },
              {
                title: "Skills You'll Develop",
                items: [
                  "Technical Art Mastery",
                  "Conceptual Depth",
                  "Creative Confidence",
                  "Portfolio Presentation",
                  "Art Historical Knowledge",
                ],
              },
              {
                title: "Who Can Join?",
                items: [
                  "Class 10 & 12 Students",
                  "Graduates for PG courses",
                  "BFA Aspirants",
                  "Art Enthusiasts",
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

export default BFAPage;