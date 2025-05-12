// ./pages/careers/foundation-batch-coaching.tsx
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

const FoundationBatchPage = () => {
  return (
    <Layout>
      <Header/>
      <div style={{ padding: "60px 30px", maxWidth: 1200, margin: "auto", backgroundColor: "#fff" ,marginTop : '5rem' }}>
        <motion.div initial="hidden" animate="visible" variants={sectionVariant}>
          <Title level={1} style={{ textAlign: 'center', marginBottom: 50, color: '', fontSize: '42px' }}>
            Foundation Batch Coaching
            <div style={{
              height: 4,
              width: 120,
              backgroundColor: '#3498db',
              margin: '20px auto 40px',
            }} />
          </Title>

          <Paragraph style={{ fontSize: '18px', textAlign: 'center', marginBottom: 50 }}>
            Build Your Creative Basics Early & Strong for Design, Architecture & Fine Arts
          </Paragraph>

          <Row gutter={[32, 32]}>
            {[
              {
                title: "Why Start Early?",
                items: [
                  "Develop creative thinking naturally",
                  "Strengthen foundational art skills",
                  "Gain clarity on creative careers",
                  "Build portfolio over time",
                  "Enter exam prep with confidence",
                ],
              },
              {
                title: "Who Is This For?",
                items: [
                  "Class 9 & 10 Students",
                  "Young creative enthusiasts",
                  "Students exploring career paths",
                  "Parents nurturing creativity",
                ],
              },
              {
                title: "Our Foundation Program",
                items: [
                  "Basic Drawing & Sketching",
                  "Perspective & Composition",
                  "Creative Thinking Exercises",
                  "Color Theory & Typography",
                  "Design Games & Challenges",
                ],
              },
              {
                title: "Learning Approach",
                items: [
                  "Weekly Classes + Feedback",
                  "Mini Projects & Assignments",
                  "Portfolio Building",
                  "Career Orientation",
                  "Parent Progress Reports",
                ],
              },
              {
                title: "Transition Paths",
                items: [
                  "Design (NID, NIFT, UCEED)",
                  "Architecture (NATA, JEE)",
                  "Fine Arts (JJ School, BHU)",
                  "Seamless to advanced prep",
                ],
              },
              {
                title: "Key Benefits",
                items: [
                  "Early exposure to creativity",
                  "Reduced exam pressure later",
                  "Strong foundational skills",
                  "Confidence in creative expression",
                  "Clarity on future paths",
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

export default FoundationBatchPage;