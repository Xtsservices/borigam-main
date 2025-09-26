import React from "react";
import { Typography, Row, Col, Card } from "antd";
import { motion } from "framer-motion";
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const listItems = (items: string[]) => (
  <ul style={{ paddingLeft: 24, color: "#333", fontSize: "18px" }}>
    {items.map((item, idx) => (
      <li key={idx} style={{ marginBottom: 12 }}>{item}</li>
    ))}
  </ul>
);

const DesignEntranceCoaching = () => {
  return (
    <>
      <Header/>
      <div style={{ padding: "60px 30px", maxWidth: 1200, margin: "auto", backgroundColor: "#fff", marginTop: "clamp(4rem, 8vw, 8rem)" /* Responsive top margin */ }}>
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={sectionVariant}
        >
          {/* Hero Section */}
          <Card
            style={{ ...cardStyle, marginBottom: 40 }}
            headStyle={{ 
              background: 'linear-gradient(90deg, #ff5722, #ff9800)',
              color: "#fff",
              fontSize: "28px",
              padding: "20px 24px",
              border: 'none'
            }}
            title="Your Gateway to Top Design Colleges in India"
            bodyStyle={{ padding: "24px" }}
          >
            <Paragraph style={{ fontSize: 18, lineHeight: 1.8, color: "#333" }}>
              Are you dreaming of a career in design? Whether it's fashion, product, communication, or industrial design, 
              India's top institutes like NID, NIFT, IITs (UCEED/CEED), MITID, UID offer world-class education to turn 
              your creativity into a profession.
              <br /><br />
              But to get in, you need to crack some of the most competitive entrance exams. That's where our Design 
              Entrance Exams Coaching comes in.
            </Paragraph>
          </Card>

          {/* Why Choose Design Section */}
          <Card
            style={{ ...cardStyle, marginBottom: 40 }}
            headStyle={{ 
              background: 'linear-gradient(90deg, #ff5722, #ff9800)',
              color: "#fff",
              fontSize: "28px",
              padding: "20px 24px",
              border: 'none'
            }}
            title="Why Choose Design as a Career?"
            bodyStyle={{ padding: "24px" }}
          >
            <Paragraph style={{ fontSize: 18, lineHeight: 1.8, color: "#333", marginBottom: 20 }}>
              Design is not just about aesthetics – it's about solving real-world problems with innovation and creativity. 
              As a designer, you could work in:
            </Paragraph>
            {listItems([
              "Fashion & Textile Industry",
              "Product & Industrial Design",
              "UI/UX & Digital Design",
              "Film, Animation & Gaming",
              "Graphic & Communication Design",
              "Interior & Furniture Design"
            ])}
            <Paragraph style={{ fontSize: 18, lineHeight: 1.8, color: "#333" }}>
              The demand for creative professionals is growing rapidly across industries – making this a lucrative and 
              fulfilling career path.
            </Paragraph>
          </Card>

          {/* Focused Coaching Section */}
          <Card
            style={{ ...cardStyle, marginBottom: 40 }}
            headStyle={{ 
              background: 'linear-gradient(90deg, #ff5722, #ff9800)',
              color: "#fff",
              fontSize: "28px",
              padding: "20px 24px",
              border: 'none'
            }}
            title="Focused Coaching For"
            bodyStyle={{ padding: "24px" }}
          >
            <Row gutter={[24, 24]}>
              {[
                {
                  title: "NID DAT (Prelims + Mains)",
                  content: [
                    "For admission to National Institute of Design (NID)",
                    "Tests drawing, creativity, visualization, logical reasoning"
                  ]
                },
                {
                  title: "NIFT Entrance Exam",
                  content: [
                    "For National Institute of Fashion Technology",
                    "Includes GAT (General Ability Test), CAT (Creative Ability Test), and Situation Test"
                  ]
                },
                {
                  title: "UCEED (Undergraduate Common Entrance Exam for Design)",
                  content: [
                    "For B.Des at IIT Bombay, Delhi, Guwahati, Hyderabad, IIITDM Jabalpur",
                    "Conducted by IIT Bombay – tests visualization, observation, creativity"
                  ]
                },
                {
                  title: "CEED (Common Entrance Exam for Design)",
                  content: [
                    "For M.Des at IITs, IISc, and other top design schools",
                    "Focuses on problem-solving, sketching, design aptitude"
                  ]
                },
                {
                  title: "Other Exams",
                  content: [
                    "MITID DAT, UID, Pearl Academy"
                  ]
                }
              ].map((item, index) => (
                <Col xs={24} sm={12} key={index}>
                  <motion.div
                    variants={cardVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <Card
                      style={{ borderRadius: 12, boxShadow: "0 5px 15px rgba(0,0,0,0.1)", height: "100%" }}
                      headStyle={{ 
                        background: '#f5f5f5',
                        color: "#ff5722",
                        fontSize: "20px",
                        padding: "16px",
                        border: 'none',
                        fontWeight: 'bold'
                      }}
                      title={item.title}
                      bodyStyle={{ padding: "16px" }}
                    >
                      {listItems(item.content)}
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Card>

          {/* What Our Coaching Offers Section */}
          <Card
            style={{ ...cardStyle, marginBottom: 40 }}
            headStyle={{ 
              background: 'linear-gradient(90deg, #ff5722, #ff9800)',
              color: "#fff",
              fontSize: "28px",
              padding: "20px 24px",
              border: 'none'
            }}
            title="What Our Coaching Offers"
            bodyStyle={{ padding: "24px" }}
          >
            {listItems([
              "Experienced Faculty from Design & Architecture backgrounds",
              "Complete Syllabus Coverage with regular tests",
              "Creative Assignments & Practice Worksheets",
              "Mock Tests and regular tests for each topic",
              "Situation test, Material handling, Portfolio and Interview Preparation",
              "Online & Classroom Batches Available",
              "Study Material + Previous Years' Question Papers",
              "Personalized Mentorship for each student",
              "One-on-One Career Guidance",
              "24/7 online support",
              "Online Preparation through our App portal"
            ])}
            <Paragraph style={{ fontSize: 18, lineHeight: 1.8, color: "#333", marginTop: 20 }}>
              Whether you're just starting out or reattempting the exam, our structured approach helps you build the 
              right mindset, skills, and confidence.
            </Paragraph>
          </Card>

          {/* Who Can Join Section */}
          <Card
            style={{ ...cardStyle, marginBottom: 40 }}
            headStyle={{ 
              background: 'linear-gradient(90deg, #ff5722, #ff9800)',
              color: "#fff",
              fontSize: "28px",
              padding: "20px 24px",
              border: 'none'
            }}
            title="Who Can Join?"
            bodyStyle={{ padding: "24px" }}
          >
            {listItems([
              "Class 10 & 12 Students aiming for Graduation",
              "Graduates aiming for PG design courses",
              "Students preparing for BFA / NATA / B.Des / M.Des"
            ])}
            <Paragraph style={{ fontSize: 18, lineHeight: 1.8, color: "#333", marginTop: 20 }}>
              No matter your background, we'll help you discover and grow your creative potential.
            </Paragraph>
          </Card>

          {/* Let's Get Started Section */}
          <Card
            style={{ ...cardStyle, textAlign: "center" }}
            headStyle={{ 
              background: 'linear-gradient(90deg, #ff5722, #ff9800)',
              color: "#fff",
              fontSize: "28px",
              padding: "20px 24px",
              border: 'none'
            }}
            title="Let's Get Started"
            bodyStyle={{ padding: "40px 24px" }}
          >
            <Paragraph style={{ fontSize: 18, lineHeight: 1.8, color: "#333", marginBottom: 30 }}>
              Explore our flexible batches, free demo classes, and expert mentorship. Your dream design college is 
              just an exam away – let's crack it together!
            </Paragraph>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: 'linear-gradient(90deg, #ff5722, #ff9800)',
                color: 'white',
                border: 'none',
                padding: '15px 40px',
                fontSize: '18px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Enroll Now
            </motion.button>
          </Card>
        </motion.div>
      </div>
    </>
  );
};

export default DesignEntranceCoaching;