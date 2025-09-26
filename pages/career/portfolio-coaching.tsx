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

const PortfolioCoaching = () => {
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
            title="Portfolio, Situation Test & Interview Coaching: Get Ready to Shine Beyond the Written Exam!"
            bodyStyle={{ padding: "24px" }}
          >
            <Paragraph style={{ fontSize: 18, lineHeight: 1.8, color: "#333" }}>
              Clearing the written test is just the beginning! Top design and fashion colleges like NID, NIFT, IITs, UID, MIT go beyond paper scores – 
              they assess how you think, create, and present.
              <br /><br />
              This is where our Portfolio, Situation Test, Material Handling, and Interview Coaching comes in – helping you confidently crack the final round 
              and secure your dream admission.
            </Paragraph>
          </Card>

          {/* Portfolio Development Section */}
          <Card
            style={{ ...cardStyle, marginBottom: 40 }}
            headStyle={{ 
              background: 'linear-gradient(90deg, #ff5722, #ff9800)',
              color: "#fff",
              fontSize: "28px",
              padding: "20px 24px",
              border: 'none'
            }}
            title="1. Portfolio Development Coaching"
            bodyStyle={{ padding: "24px" }}
          >
            <Paragraph style={{ fontSize: 18, lineHeight: 1.8, color: "#333", marginBottom: 20 }}>
              Your portfolio is your creative identity – it should speak louder than words.
              <br />
              We help you:
            </Paragraph>
            {listItems([
              "Curate a professional design portfolio that showcases your strengths",
              "Develop original artworks, sketches, concepts, and prototypes",
              "Organize your work to match the institute's expectations",
              "Guide you on layout, digital presentation, and storytelling",
              "Include concept notes, process sheets, and inspiration boards"
            ])}
            <Paragraph style={{ fontSize: 18, lineHeight: 1.8, color: "#333", marginTop: 20 }}>
              We help you build a standout portfolio that reflects your unique creative journey.
            </Paragraph>
          </Card>

          {/* Situation Test Section */}
          <Card
            style={{ ...cardStyle, marginBottom: 40 }}
            headStyle={{ 
              background: 'linear-gradient(90deg, #ff5722, #ff9800)',
              color: "#fff",
              fontSize: "28px",
              padding: "20px 24px",
              border: 'none'
            }}
            title="2. Situation Test & Material Handling Practice (NIFT + NID)"
            bodyStyle={{ padding: "24px" }}
          >
            <Paragraph style={{ fontSize: 18, lineHeight: 1.8, color: "#333", marginBottom: 20 }}>
              In this round, ideas {">"} perfection.
              <br />
              We train you to:
            </Paragraph>
            {listItems([
              "Think quickly and creatively under pressure",
              "Work with materials like thermocol, wires, fabric, clay, straws, ice-cream sticks, paper, cardboard, etc.",
              "Develop 3D models, product ideas, or installations within time limits",
              "Explain your model with effective write-ups and concepts",
              "Focus on neatness, stability, and originality"
            ])}
            <Paragraph style={{ fontSize: 18, lineHeight: 1.8, color: "#333", marginTop: 20 }}>
              Mock tests and time-based challenges will help you get exam-ready with ease.
            </Paragraph>
          </Card>

          {/* Interview Preparation Section */}
          <Card
            style={{ ...cardStyle, marginBottom: 40 }}
            headStyle={{ 
              background: 'linear-gradient(90deg, #ff5722, #ff9800)',
              color: "#fff",
              fontSize: "28px",
              padding: "20px 24px",
              border: 'none'
            }}
            title="3. Interview Preparation & Personality Grooming"
            bodyStyle={{ padding: "24px" }}
          >
            <Paragraph style={{ fontSize: 18, lineHeight: 1.8, color: "#333", marginBottom: 20 }}>
              Top design and fashion colleges often conduct personal interviews to evaluate:
            </Paragraph>
            {listItems([
              "Your passion for design/fashion/architecture",
              "Awareness of current trends & industry news",
              "Thought process, originality, and problem-solving skills",
              "Communication skills, confidence, and motivation"
            ])}
            <Paragraph style={{ fontSize: 18, lineHeight: 1.8, color: "#333", marginTop: 20 }}>
              We offer: 
            </Paragraph>
            {listItems([
              "Mock Interviews with Expert Panel",
              "Personalized Feedback",
              "Practice on Common & Creative Questions",
              "Confidence Building & Communication Tips"
            ])}
            <Paragraph style={{ fontSize: 18, lineHeight: 1.8, color: "#333", marginTop: 20 }}>
              Our sessions prepare you not just to answer, but to impress.
            </Paragraph>
          </Card>

          {/* Highlights Section */}
          <Card
            style={{ ...cardStyle, marginBottom: 40 }}
            headStyle={{ 
              background: 'linear-gradient(90deg, #ff5722, #ff9800)',
              color: "#fff",
              fontSize: "28px",
              padding: "20px 24px",
              border: 'none'
            }}
            title="Highlights of Our Coaching"
            bodyStyle={{ padding: "24px" }}
          >
            <Row gutter={[24, 24]}>
              {[
                {
                  title: "One-on-One Mentorship",
                  content: "Personalized guidance for your unique strengths"
                },
                {
                  title: "Material Access",
                  content: "Practice with all required materials and tools"
                },
                {
                  title: "Mock Tests",
                  content: "Real exam-like situation test simulations"
                },
                {
                  title: "Expert Feedback",
                  content: "Detailed evaluation from experienced faculty"
                },
                {
                  title: "Flexible Learning",
                  content: "Online & offline batch options available"
                },
                {
                  title: "Confidence Building",
                  content: "Special sessions for personality development"
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
                      <Paragraph style={{ fontSize: 16 }}>{item.content}</Paragraph>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Card>

          {/* CTA Section */}
          <Card
            style={{ ...cardStyle, textAlign: "center" }}
            headStyle={{ 
              background: 'linear-gradient(90deg, #ff5722, #ff9800)',
              color: "#fff",
              fontSize: "28px",
              padding: "20px 24px",
              border: 'none'
            }}
            title="Join Now & Ace the Final Round with Confidence!"
            bodyStyle={{ padding: "40px 24px" }}
          >
            <Paragraph style={{ fontSize: 18, lineHeight: 1.8, color: "#333", marginBottom: 30 }}>
              This is your moment to go beyond the basics. Let your ideas speak louder with the right guidance and training.
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

export default PortfolioCoaching;