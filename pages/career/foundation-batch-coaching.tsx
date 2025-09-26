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

const FoundationBatchCoaching = () => {
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
            title="Foundation Batch Coaching: Build Your Creative Basics Early & Strong"
            bodyStyle={{ padding: "24px" }}
          >
            <Paragraph style={{ fontSize: 18, lineHeight: 1.8, color: "#333" }}>
              Are you a student in Class 8, 9, or 10 with a spark for design, architecture, or fine arts? The earlier you begin, 
              the stronger your creative journey becomes. Our Foundation Batch Coaching is designed to build the essential skills 
              and mindset that top creative careers demand—before entrance exam pressure begins.
              <br /><br />
              Whether you aim to get into NID, NIFT, IITs (UCEED/CEED), JJ School of Art, SPA, CEPT, or other top creative 
              colleges—this is your head start.
            </Paragraph>
          </Card>

          {/* Why Join Early Section */}
          <Card
            style={{ ...cardStyle, marginBottom: 40 }}
            headStyle={{ 
              background: 'linear-gradient(90deg, #ff5722, #ff9800)',
              color: "#fff",
              fontSize: "28px",
              padding: "20px 24px",
              border: 'none'
            }}
            title="Why Join a Foundation Batch Early?"
            bodyStyle={{ padding: "24px" }}
          >
            <Paragraph style={{ fontSize: 18, lineHeight: 1.8, color: "#333", marginBottom: 20 }}>
              Creative entrance exams are competitive and demand more than just talent. Starting early helps you:
            </Paragraph>
            {listItems([
              "Develop creative thinking & visualization",
              "Strengthen observation, perspective & sketching skills",
              "Gain clarity on career paths in design, architecture, and fine arts",
              "Build discipline and portfolio over time",
              "Enter senior-level entrance prep with a solid base"
            ])}
            <Paragraph style={{ fontSize: 18, lineHeight: 1.8, color: "#333", marginTop: 20 }}>
              It's not about early pressure—it's about early exposure and confident growth.
            </Paragraph>
          </Card>

          {/* Who Is This For Section */}
          <Card
            style={{ ...cardStyle, marginBottom: 40 }}
            headStyle={{ 
              background: 'linear-gradient(90deg, #ff5722, #ff9800)',
              color: "#fff",
              fontSize: "28px",
              padding: "20px 24px",
              border: 'none'
            }}
            title="Who Is This For?"
            bodyStyle={{ padding: "24px" }}
          >
            {listItems([
              "Class 9 & 10 Students exploring creative careers",
              "Young learners passionate about drawing, design, and innovation",
              "Students unsure of which path (Design, Architecture, Fine Arts) to pursue",
              "Parents who want to nurture their child's creativity in the right direction"
            ])}
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
            title="What Our Foundation Coaching Offers"
            bodyStyle={{ padding: "24px" }}
          >
            {listItems([
              "Basic Drawing & Sketching Techniques",
              "Perspective Drawing, Light & Shadow, Composition",
              "Creative Thinking, Design Aptitude & Observation Skills",
              "Introduction to Color Theory, Typography & Materials",
              "Fun Challenges, Design Games, and Creativity Boosters",
              "Mini Projects & Art Assignments for Portfolio",
              "Weekly Classes with Individual Feedback",
              "Personality Development & Career Orientation Sessions",
              "Online & Offline Batches Available",
              "Study Material, Worksheets + App Access",
              "Parent Progress Reports & Guidance Meetings"
            ])}
            <Paragraph style={{ fontSize: 18, lineHeight: 1.8, color: "#333", marginTop: 20 }}>
              We create a nurturing, exploratory space that encourages kids to think like creators, not just learners.
            </Paragraph>
          </Card>

          {/* What's Next Section */}
          <Card
            style={{ ...cardStyle, marginBottom: 40 }}
            headStyle={{ 
              background: 'linear-gradient(90deg, #ff5722, #ff9800)',
              color: "#fff",
              fontSize: "28px",
              padding: "20px 24px",
              border: 'none'
            }}
            title="What's Next After the Foundation Batch?"
            bodyStyle={{ padding: "24px" }}
          >
            <Paragraph style={{ fontSize: 18, lineHeight: 1.8, color: "#333", marginBottom: 20 }}>
              Students seamlessly transition into our specialized entrance prep for:
            </Paragraph>
            <Row gutter={[24, 24]}>
              {[
                {
                  title: "Design",
                  content: ["NID", "NIFT", "UCEED", "CEED", "MITID", "UID"]
                },
                {
                  title: "Architecture",
                  content: ["NATA", "JEE Paper 2", "CEPT"]
                },
                {
                  title: "Fine Arts",
                  content: ["JJ School", "BHU", "MSU Baroda", "DU College of Art"]
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
            <Paragraph style={{ fontSize: 18, lineHeight: 1.8, color: "#333", marginTop: 20 }}>
              This early start ensures they're way ahead of peers in creativity, clarity, and confidence.
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
            title="Let's Lay the Right Foundation"
            bodyStyle={{ padding: "40px 24px" }}
          >
            <Paragraph style={{ fontSize: 18, lineHeight: 1.8, color: "#333", marginBottom: 30 }}>
              Get started with a free orientation session, interactive demo class, and career discovery tools. 
              Help your child build not just skills—but a future they're excited about.
              <br /><br />
              Your creative journey begins now—let's build it step by step!
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
              Book Free Demo
            </motion.button>
          </Card>
        </motion.div>
      </div>
    </>
  );
};

export default FoundationBatchCoaching;