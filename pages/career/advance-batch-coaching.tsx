import React, { useState, useEffect } from "react";
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

const listItems = (items: string[], isMobile = false) => (
  <ul style={{ 
    paddingLeft: isMobile ? 16 : 24, 
    color: "#333", 
    fontSize: "clamp(0.75rem, 2.5vw, 1.125rem)" /* Responsive: 12px to 18px */ 
  }}>
    {items.map((item, idx) => (
      <li key={idx} style={{ 
        marginBottom: isMobile ? 8 : 12,
        lineHeight: 1.6 
      }}>{item}</li>
    ))}
  </ul>
);

const AdvanceBatchCoaching = () => {
  // Responsive breakpoint hooks
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
      <Header/>
      <div style={{ 
        padding: isMobile ? "30px 15px" : isTablet ? "45px 20px" : "60px 30px", 
        maxWidth: 1200, 
        margin: "auto", 
        backgroundColor: "#fff", 
        marginTop: 'clamp(4rem, 8vw, 8rem)' /* Responsive top margin */ 
      }}>
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={sectionVariant}
        >
          {/* Hero Section - RESPONSIVE */}
          <Card
            style={{ 
              ...cardStyle, 
              marginBottom: isMobile ? 25 : 40 
            }}
            headStyle={{ 
              background: 'linear-gradient(90deg, #ff5722, #ff9800)',
              color: "#fff",
              fontSize: 'clamp(1.25rem, 4vw, 1.75rem)', /* Responsive: 20px to 28px */
              padding: isMobile ? "15px 16px" : "20px 24px",
              border: 'none',
              textAlign: isMobile ? "center" : "left",
              lineHeight: 1.3,
            }}
            title="Advance Batch Coaching: Final-Step Prep to Crack Top Design, Architecture & Fine Arts Entrance Exams"
            bodyStyle={{ padding: isMobile ? "16px" : "24px" }}
          >
            <Paragraph style={{ 
              fontSize: "clamp(0.75rem, 2.5vw, 1.125rem)" /* Responsive: 12px to 18px */, 
              lineHeight: 1.8, 
              color: "#333",
              textAlign: isMobile ? "center" : "left" 
            }}>
              Already familiar with the basics and looking for the final boost? Our Advance Batch Coaching is specifically 
              designed for students in their final stage of preparation for design, architecture, and fine arts entrance exams.
              <br /><br />
              Whether you're attempting NID, NIFT, UCEED, CEED, NATA, JEE Paper 2, JJ School of Art, BHU or other leading 
              colleges—our structured and intensive coaching will help you fine-tune your skills and maximize your performance.
            </Paragraph>
          </Card>

          {/* Why Join Section */}
          <Card
            style={{ ...cardStyle, marginBottom: 40 }}
            headStyle={{ 
              background: 'linear-gradient(90deg, #ff5722, #ff9800)',
              color: "#fff",
              fontSize: "28px",
              padding: "20px 24px",
              border: 'none'
            }}
            title="Why Join the Advance Batch?"
            bodyStyle={{ padding: "24px" }}
          >
            <Paragraph style={{ fontSize: 18, lineHeight: 1.8, color: "#333", marginBottom: 20 }}>
              Time is limited, competition is tough, and precision is everything. The Advance Batch focuses on:
            </Paragraph>
            {listItems([
              "Exam-specific strategies",
              "Time-bound mock tests",
              "Personalized feedback to overcome weak areas",
              "Smart revision techniques",
              "Final portfolio & interview polishing"
            ])}
            <Paragraph style={{ fontSize: 18, lineHeight: 1.8, color: "#333", marginTop: 20 }}>
              Ideal for students in Class 12, drop-year aspirants, or final-year grads preparing for entrance tests.
            </Paragraph>
          </Card>

          {/* What Our Advance Coaching Offers Section */}
          <Card
            style={{ ...cardStyle, marginBottom: 40 }}
            headStyle={{ 
              background: 'linear-gradient(90deg, #ff5722, #ff9800)',
              color: "#fff",
              fontSize: "28px",
              padding: "20px 24px",
              border: 'none'
            }}
            title="What Our Advance Coaching Offers"
            bodyStyle={{ padding: "24px" }}
          >
            {listItems([
              "Intensive Revision of Complete Syllabus",
              "Topic-Wise Timed Mock Tests & Past Year Paper Solving",
              "Portfolio, Studio Test & Situation Test Preparation (NID/NIFT)",
              "Drawing Speed & Accuracy Sessions (JJ/NATA/CEED)",
              "Design Aptitude, Logical Reasoning & MCQ Practice (UCEED/CEED)",
              "Interview Preparation + Presentation Skills",
              "Error Analysis + Personalized Improvement Plans",
              "Online & Offline Crash Batch Options",
              "Daily Practice Material via App + Full-Length Tests",
              "Live Feedback from Experts + Performance Tracking"
            ])}
            <Paragraph style={{ fontSize: 18, lineHeight: 1.8, color: "#333", marginTop: 20 }}>
              You'll learn how to stay calm, work smart, and approach each exam with clarity and confidence.
            </Paragraph>
          </Card>

          {/* Focused Coaching For Section */}
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
                  title: "Design Exams",
                  content: [
                    "NID DAT",
                    "NIFT",
                    "UCEED",
                    "CEED",
                    "MITID",
                    "UID"
                  ]
                },
                {
                  title: "Architecture Exams",
                  content: [
                    "NATA",
                    "JEE Paper 2",
                    "CEPT"
                  ]
                },
                {
                  title: "Fine Arts Exams",
                  content: [
                    "JJ School",
                    "BHU",
                    "MSU",
                    "DU College of Art"
                  ]
                }
              ].map((item, index) => (
                <Col xs={24} sm={8} key={index}>
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
              "Class 12 students appearing for upcoming entrance exams",
              "Graduates applying for PG courses (M.Des, MFA, etc.)",
              "Students who've already done basic or foundation training",
              "Reattempt students needing strategic revision"
            ])}
            <Paragraph style={{ fontSize: 18, lineHeight: 1.8, color: "#333", marginTop: 20 }}>
              Whether you're a first-timer or looking to improve your rank, we'll help you bring your A-game.
              <br /><br />
              Each batch is exam-specific, with mentors tailoring the strategy to your target college and exam date.
            </Paragraph>
          </Card>

          {/* Let's Finish Strong Section */}
          <Card
            style={{ ...cardStyle, textAlign: "center" }}
            headStyle={{ 
              background: 'linear-gradient(90deg, #ff5722, #ff9800)',
              color: "#fff",
              fontSize: "28px",
              padding: "20px 24px",
              border: 'none'
            }}
            title="Let's Finish Strong"
            bodyStyle={{ padding: "40px 24px" }}
          >
            <Paragraph style={{ fontSize: 18, lineHeight: 1.8, color: "#333", marginBottom: 30 }}>
              Join our Advance Batch for focused preparation, full-length mocks, and expert strategy. Demo sessions, 
              flexible crash batch options, and one-on-one feedback available.
              <br /><br />
              It's your last lap—let's sprint towards success!
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

export default AdvanceBatchCoaching;