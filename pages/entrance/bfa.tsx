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
      <header/>
      <div style={{ padding: "60px 30px", maxWidth: 1200, margin: "auto", backgroundColor: "#fff" }}>
        <motion.div initial="hidden" animate="visible" variants={sectionVariant}>
          <Title level={1} style={{ textAlign: 'center', marginBottom: 50, color: '#0a2c64', fontSize: '42px' }}>
            Bachelor of Fine Arts (BFA) Entrance Exam Guide
            <div style={{
              height: 4,
              width: 120,
              backgroundColor: '#fbb034',
              margin: '20px auto 40px',
            }} />
          </Title>

          <Row gutter={[32, 32]}>
            {[
              {
                title: "1. About BFA Course",
                items: [
                  "Full Form: Bachelor of Fine Arts",
                  "Duration: 4 Years",
                  "Degree Type: Undergraduate",
                  "Mode: Full-time, Part-time, or Distance Learning",
                  "Specializations: Painting, Applied Arts, Sculpture, Photography, Visual Communication, Printmaking, Animation and Multimedia",
                  "Objective: Enhance artistic skills with theoretical and practical knowledge in fine arts.",
                ],
              },
              {
                title: "2. Why Choose BFA?",
                items: [
                  "Ideal for students passionate about art and design.",
                  "Offers career opportunities in visual arts, media, advertising, and education.",
                  "Develops creative thinking and artistic expression.",
                  "Hands-on experience via exhibitions, workshops, and studios.",
                ],
              },
              {
                title: "3. Popular BFA Entrance Exams in India",
                items: [
                  "DU BFA Entrance Exam",
                  "JNAFAU Entrance Exam",
                  "BHU UET (BFA)",
                  "JJ School of Arts Entrance Exam",
                  "State-Level Exams",
                ],
              },
              {
                title: "4. Eligibility Criteria for BFA",
                items: [
                  "Qualification: Class 12 pass with 50% (varies)",
                  "Streams: Arts, Science, or Commerce",
                  "Age Limit: Generally 17 to 23 years",
                ],
              },
              {
                title: "5. BFA Entrance Exam Structure",
                items: [
                  "Part 1: Practical/Studio Test - Drawing, Sketching, Composition, Color Application",
                  "Part 2: Theory Test - GK of Art, Art History, Spatial Awareness (optional)",
                  "Part 3: Interview or Portfolio Review",
                ],
              },
              {
                title: "6. Syllabus for BFA Entrance Exam",
                items: [
                  "Practical: Still Life, Object Drawing, Composition, Color Use",
                  "Theory: Design Basics, Art History, Famous Artists, Logical Reasoning",
                ],
              },
              {
                title: "7. Application Process for BFA Entrance Exam",
                items: [
                  "Register on the institute's website",
                  "Fill the form and upload documents",
                  "Pay the fee online",
                  "Download admit card",
                ],
              },
              {
                title: "8. Important Dates (Tentative)",
                items: [
                  "Application: March – April",
                  "Deadline: May – June",
                  "Exam: June – July",
                  "Results: July – August",
                  "Admission: August – September",
                ],
              },
              {
                title: "9. BFA Entrance Exam Preparation Tips",
                items: [
                  "Practice drawing daily",
                  "Study art history and recent trends",
                  "Focus on creativity and concept building",
                  "Attempt mock tests",
                ],
              },
              {
                title: "10. Admission Process After BFA Entrance Exam",
                items: [
                  "Merit List",
                  "Counselling",
                  "Document Verification",
                ],
              },
              {
                title: "11. Career Opportunities After BFA",
                items: [
                  "Fine Artist",
                  "Graphic Designer",
                  "Illustrator",
                  "Art Director",
                  "Animator",
                  "Freelancer",
                ],
              },
            ].map((section, idx) => (
              <Col xs={24} key={idx}>
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
