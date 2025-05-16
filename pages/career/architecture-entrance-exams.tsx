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

const ArchitectureEntranceExams = () => {
  return (
    <>
      <Header/>
      <div style={{ padding: "60px 30px", maxWidth: 1200, margin: "auto", backgroundColor: "#fff", marginTop: "6rem" }}>
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
            title="Architecture Entrance Exams Coaching: Your Path to India's Premier Architecture Colleges"
            bodyStyle={{ padding: "24px" }}
          >
            <Paragraph style={{ fontSize: 18, lineHeight: 1.8, color: "#333" }}>
              Dreaming of designing the skylines of tomorrow? A career in architecture blends creativity with structural expertise—opening doors to a profession that shapes the spaces we live, work, and thrive in. India's top architecture institutes like SPA, IITs (B.Arch), NITs, CEPT, JJ College of Architecture and others offer world-class programs—but you need to clear competitive entrance exams to get there.
              <br /><br />
              That's where our Architecture Entrance Exams Coaching makes the difference.
            </Paragraph>
          </Card>

          {/* Why Choose Architecture Section */}
          <Card
            style={{ ...cardStyle, marginBottom: 40 }}
            headStyle={{ 
              background: 'linear-gradient(90deg, #ff5722, #ff9800)',
              color: "#fff",
              fontSize: "28px",
              padding: "20px 24px",
              border: 'none'
            }}
            title="Why Choose Architecture as a Career?"
            bodyStyle={{ padding: "24px" }}
          >
            <Paragraph style={{ fontSize: 18, lineHeight: 1.8, color: "#333", marginBottom: 20 }}>
              Architecture is more than just designing buildings—it's about transforming lives through thoughtful, sustainable, and innovative space design. As an architect, you can work in:
            </Paragraph>
            {listItems([
              "Residential & Commercial Architecture",
              "Urban Planning & Sustainable Design",
              "Interior Architecture & Furniture Design",
              "Landscape Architecture",
              "Heritage & Conservation Projects",
              "Set Design & Exhibition Spaces"
            ])}
            <Paragraph style={{ fontSize: 18, lineHeight: 1.8, color: "#333", marginTop: 20 }}>
              Architecture offers a dynamic and respected career path that combines creativity, engineering, and vision.
            </Paragraph>
          </Card>

          {/* Key Exams Section */}
          <Card
            style={{ ...cardStyle, marginBottom: 40 }}
            headStyle={{ 
              background: 'linear-gradient(90deg, #ff5722, #ff9800)',
              color: "#fff",
              fontSize: "28px",
              padding: "20px 24px",
              border: 'none'
            }}
            title="Key Architecture Entrance Exams We Offer Coaching For"
            bodyStyle={{ padding: "24px" }}
          >
            <Row gutter={[24, 24]}>
              {[
                {
                  title: "NATA (National Aptitude Test in Architecture)",
                  content: [
                    "For admission to most architecture colleges including private and state-level institutions",
                    "Tests drawing skills, architectural awareness, reasoning, and aptitude"
                  ]
                },
                {
                  title: "JEE (Main) Paper 2 – B.Arch/B.Planning",
                  content: [
                    "For admission to IITs, NITs, SPAs, and other top institutes",
                    "Covers Mathematics, Aptitude, and Drawing (Paper 2A) or Planning (Paper 2B)"
                  ]
                },
                {
                  title: "CEPT Entrance Exam",
                  content: [
                    "One of India's leading institutions for architecture and planning",
                    "Includes aptitude tests and creative assessments"
                  ]
                },
                {
                  title: "Other State-Level Exams",
                  content: [
                    "TNEA, COMEDK, KCET B.Arch, etc.",
                    "Targeted prep based on specific state board or institute exam pattern"
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
              "Experienced Faculty from Architecture & Design backgrounds",
              "Complete Exam Syllabus Coverage with topic-wise practice",
              "Drawing & Sketching Practice for visual composition and creativity",
              "Mock Tests & Weekly Assessments to track progress",
              "Portfolio, Interview & Presentation Skills Training",
              "Online & Classroom Coaching Options",
              "Study Material + Past Year Papers + Digital App Access",
              "One-on-One Mentorship & Career Counseling",
              "24/7 Doubt Solving Support via App & Live Sessions"
            ])}
            <Paragraph style={{ fontSize: 18, lineHeight: 1.8, color: "#333", marginTop: 20 }}>
              Whether you're targeting NATA, JEE Paper 2, or CEPT, we help you build the right skills—technical drawing, visualization, spatial understanding, and analytical thinking.
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
              "Students preparing for NATA/B.ARCH"
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
              Explore our flexible batches, free demo classes, and expert mentorship. Your dream design college is just an exam away – let's crack it together!
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

export default ArchitectureEntranceExams;