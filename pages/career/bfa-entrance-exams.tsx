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

const BFAEntranceExams = () => {
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
            title="BFA Entrance Exams Coaching: Your Gateway to Top Fine Arts Colleges in India"
            bodyStyle={{ padding: "24px" }}
          >
            <Paragraph style={{ fontSize: 18, lineHeight: 1.8, color: "#333" }}>
              Do you dream of turning your passion for art into a professional career? Whether it's painting, sculpture, applied arts, or digital media, 
              India's premier fine arts colleges like JJ School of Art, Delhi College of Art, BHU, Visva-Bharati, MSU Baroda, and others offer the right 
              environment to nurture your talent.
              <br /><br />
              But first—you need to crack the entrance exams. That's where our BFA Entrance Exam Coaching comes in.
            </Paragraph>
          </Card>

          {/* Why Choose Fine Arts Section */}
          <Card
            style={{ ...cardStyle, marginBottom: 40 }}
            headStyle={{ 
              background: 'linear-gradient(90deg, #ff5722, #ff9800)',
              color: "#fff",
              fontSize: "28px",
              padding: "20px 24px",
              border: 'none'
            }}
            title="Why Choose Fine Arts as a Career?"
            bodyStyle={{ padding: "24px" }}
          >
            <Paragraph style={{ fontSize: 18, lineHeight: 1.8, color: "#333", marginBottom: 20 }}>
              Fine arts is a deeply creative field where you express ideas, emotions, and stories through visual language. 
              A degree in fine arts opens career paths in:
            </Paragraph>
            {listItems([
              "Painting, Sculpture & Applied Arts",
              "Illustration, Animation & Game Art",
              "Graphic Design & Art Direction",
              "Art Restoration & Conservation",
              "Gallery Curation & Art Education",
              "Digital Media, Concept Art & Storyboarding"
            ])}
            <Paragraph style={{ fontSize: 18, lineHeight: 1.8, color: "#333", marginTop: 20 }}>
              With growing demand for visual content and creative storytelling, fine arts professionals are in high demand across industries.
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
            title="Key BFA Entrance Exams We Offer Coaching For"
            bodyStyle={{ padding: "24px" }}
          >
            <Row gutter={[24, 24]}>
              {[
                {
                  title: "JJ School of Art (Mumbai University – BFA Entrance)",
                  content: [
                    "Tests drawing ability, design sense, general knowledge, and creativity"
                  ]
                },
                {
                  title: "Delhi College of Art (University of Delhi)",
                  content: [
                    "Includes practical drawing/sketching test and theory paper (Art Aptitude & GK)"
                  ]
                },
                {
                  title: "BHU BFA Entrance (Banaras Hindu University)",
                  content: [
                    "Includes objective questions (Art & General Awareness) and a practical test"
                  ]
                },
                {
                  title: "MSU Baroda (Faculty of Fine Arts)",
                  content: [
                    "Focused on drawing, painting skills, and creative aptitude"
                  ]
                },
                {
                  title: "Other Institutes",
                  content: [
                    "Visva-Bharati, Shantiniketan, Chandigarh College of Art, etc.",
                    "We cover specific patterns and requirements of each institute's entrance test"
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
              "Faculty of Practicing Artists & Art Professors",
              "Comprehensive Theory + Practical Coaching",
              "Fine Arts Drawing, Composition, and Color Study Sessions",
              "Mock Entrance Tests and Portfolio Reviews",
              "Art Aptitude, General Knowledge & Awareness Training",
              "Online & Offline Learning Modes",
              "Study Material + Previous Year Papers + Sketchbooks",
              "One-on-One Mentoring for Portfolio & Interview",
              "24/7 Online Support & App Access for Practice"
            ])}
            <Paragraph style={{ fontSize: 18, lineHeight: 1.8, color: "#333", marginTop: 20 }}>
              We help you develop technical mastery, conceptual depth, and the confidence to present your creative voice to the world.
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
              "Students preparing for BFA"
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

export default BFAEntranceExams;