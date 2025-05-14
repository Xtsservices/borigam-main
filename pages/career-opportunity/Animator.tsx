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

const Animator = () => {
  return (
    <>
    <Header/>
    <div style={{ padding: "60px 30px" ,marginTop: "6rem", maxWidth: 1200, margin: "auto", backgroundColor: "#fff" }}>
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={sectionVariant}
      >
        <Title level={1} style={{ textAlign: 'center', marginBottom: 50, color: '#0a2c64', fontSize: '42px' }}>
          Animator
          <div
            style={{
              height: 4,
              width: 120,
              backgroundColor: '#fbb034',
              margin: '20px auto 40px',
            }}
          ></div>
        </Title>
        <Paragraph style={{ fontSize: 20, lineHeight: 1.8, color: "#333", marginBottom: 40 }}>
          An animator is a professional who creates the illusion of movement by designing and sequencing a series of images (frames) 
          for films, TV shows, video games, advertisements, and digital media. Animators use artistic and technical skills to 
          bring characters, objects, and environments to life, often working in 2D, 3D, stop-motion, or motion graphics.
        </Paragraph>

        <Row gutter={[32, 32]}>
          <Col xs={24}>
            <motion.div 
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ scale: 1.03 }}
              style={{ cursor: "pointer" }}
            >
              <Card
                title={<span style={{ fontSize: "24px" }}>Types of Animators</span>}
                style={cardStyle}
                headStyle={{ 
                  backgroundColor: "#FF8C00", 
                  color: "#fff",
                  fontSize: "24px",
                  padding: "20px 24px",
                  border: 'none'
                }}
                bodyStyle={{ padding: "24px" }}
              >
                {listItems([
                  "2D Animator: Creates hand-drawn or digital frame-by-frame animation (e.g., classic Disney films)",
                  "3D Animator: Uses software to model and animate in three-dimensional space (e.g., Pixar films)",
                  "Stop-Motion Animator: Manipulates physical objects frame by frame (e.g., Wallace & Gromit)",
                  "Motion Graphics Animator: Designs animated graphics for ads, titles, and UI",
                  "Visual Effects (VFX) Animator: Integrates CGI with live-action footage"
                ])}
              </Card>
            </motion.div>
          </Col>

          <Col xs={24}>
            <motion.div 
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ scale: 1.03 }}
              style={{ cursor: "pointer" }}
            >
              <Card
                title={<span style={{ fontSize: "24px" }}>Key Responsibilities</span>}
                style={cardStyle}
                headStyle={{ 
                  backgroundColor: "#FF8C00", 
                  color: "#fff",
                  fontSize: "24px",
                  padding: "20px 24px",
                  border: 'none'
                }}
                bodyStyle={{ padding: "24px" }}
              >
                {listItems([
                  "Storyboarding: Planning scenes visually",
                  "Character Rigging: Creating digital skeletons for 3D models",
                  "Keyframing: Defining start/end points of movement",
                  "Lip Syncing: Matching character dialogue with mouth movements",
                  "Collaboration: Working with directors, modelers, and sound designers"
                ])}
              </Card>
            </motion.div>
          </Col>

          <Col xs={24}>
            <motion.div 
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ scale: 1.03 }}
              style={{ cursor: "pointer" }}
            >
              <Card
                title={<span style={{ fontSize: "24px" }}>Skills Needed</span>}
                style={cardStyle}
                headStyle={{ 
                  backgroundColor: "#FF8C00", 
                  color: "#fff",
                  fontSize: "24px",
                  padding: "20px 24px",
                  border: 'none'
                }}
                bodyStyle={{ padding: "24px" }}
              >
                {listItems([
                  "Drawing/storyboarding (for 2D)",
                  "3D modeling/rigging (for CGI)",
                  "Timing/spacing principles (e.g., squash & stretch)",
                  "Software proficiency (varies by specialization)"
                ])}
              </Card>
            </motion.div>
          </Col>

          <Col xs={24}>
            <motion.div
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ scale: 1.03 }}
              style={{ cursor: "pointer" }}
            >
              <Card
                title={<span style={{ fontSize: "24px" }}>Legendary Animators</span>}
                style={cardStyle}
                headStyle={{ 
                  backgroundColor: "#FF8C00", 
                  color: "#fff",
                  fontSize: "24px",
                  padding: "20px 24px",
                  border: 'none'
                }}
                bodyStyle={{ padding: "24px" }}
              >
                <div style={{ display: "flex", gap: 24, marginBottom: 24 }}>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <img
                      src="/assets/walt-disney.jpg"
                      alt="Walt Disney"
                      style={{ 
                        width: 120, 
                        height: 120, 
                        borderRadius: 16, 
                        objectFit: "cover",
                        border: "2px solid #FF8C00"
                      }}
                    />
                  </motion.div>
                  <div>
                    <Paragraph style={{ marginBottom: 0, fontSize: "18px" }}>
                      <strong style={{ fontSize: "20px" }}>Walt Disney (1901-1966)</strong>
                      <br />
                      <strong>Style:</strong> 2D Animation
                      <br />
                      <strong>Key Works:</strong> Snow White and the Seven Dwarfs, Mickey Mouse
                      <br />
                      <strong>Legacy:</strong> Founded Disney Studios and pioneered synchronized sound in animation
                    </Paragraph>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 24, marginBottom: 24 }}>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <img
                      src="/assets/glen-keane.jpg"
                      alt="Glen Keane"
                      style={{ 
                        width: 120, 
                        height: 120, 
                        borderRadius: 16, 
                        objectFit: "cover",
                        border: "2px solid #FF8C00"
                      }}
                    />
                  </motion.div>
                  <div>
                    <Paragraph style={{ marginBottom: 0, fontSize: "18px" }}>
                      <strong style={{ fontSize: "20px" }}>Glen Keane (1954-Present)</strong>
                      <br />
                      <strong>Style:</strong> 2D/3D Hybrid
                      <br />
                      <strong>Key Works:</strong> The Little Mermaid, Beauty and the Beast, Tangled
                      <br />
                      <strong>Legacy:</strong> Disney's father of modern character animation
                    </Paragraph>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 24 }}>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <img
                      src="/assets/john-lasseter.jpg"
                      alt="John Lasseter"
                      style={{ 
                        width: 120, 
                        height: 120, 
                        borderRadius: 16, 
                        objectFit: "cover",
                        border: "2px solid #FF8C00"
                      }}
                    />
                  </motion.div>
                  <div>
                    <Paragraph style={{ marginBottom: 0, fontSize: "18px" }}>
                      <strong style={{ fontSize: "20px" }}>John Lasseter (1957-Present)</strong>
                      <br />
                      <strong>Style:</strong> 3D CGI
                      <br />
                      <strong>Key Works:</strong> Toy Story, Cars
                      <br />
                      <strong>Legacy:</strong> Revolutionized 3D animation at Pixar
                    </Paragraph>
                  </div>
                </div>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </motion.div>
    </div></>
    
  );
};

export default Animator;