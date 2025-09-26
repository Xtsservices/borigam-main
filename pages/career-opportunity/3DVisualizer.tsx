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

const ThreeDVisualizer = () => {
  return (
    <>
      <Header/>    
      <div style={{ padding: "60px 30px", maxWidth: 1200, margin: "auto", backgroundColor: "#fff", marginTop: "8rem" }}>
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={sectionVariant}
        >
          <Title level={1} style={{ textAlign: 'center', marginBottom: 50, color: '#0a2c64', fontSize: "clamp(1.5rem, 5vw, 2.625rem)" /* Responsive H1: 24px to 42px */ }}>
            3D Visualizer
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
            A 3D Visualizer (also known as a 3D Artist, CG Artist, or Architectural Renderer) is a creative
            professional who transforms concepts, designs, or blueprints into photorealistic or stylized 3D images,
            animations, and interactive experiences.
          </Paragraph>

          <Row gutter={[32, 32]}>
            {[
              {
                title: "Key Responsibilities",
                items: [
                  "3D Modeling using 3ds Max, Blender, SketchUp, Rhino, Maya.",
                  "Texturing & Material Setup (Substance Painter, Photoshop, Quixel).",
                  "Lighting & Rendering (V-Ray, Corona, Lumion, Unreal, Octane).",
                  "Post-Production in Photoshop/After Effects.",
                  "Interactive Media: VR/AR with Twinmotion, Unity.",
                ]
              },
              {
                title: "Types of 3D Visualizers",
                items: [
                  "Architectural Visualizers",
                  "Product Visualizers",
                  "Game Artists",
                  "VFX Artists",
                ]
              },
              {
                title: "Skills Required",
                items: [
                  "Technical Proficiency: 3D Software and Rendering Engines",
                  "Artistic Eye: Composition, Lighting, Color Theory",
                  "Industry Knowledge in Architecture, Gaming, and Film",
                  "Collaboration with teams like architects and directors",
                ]
              }
            ].map((card, index) => (
              <Col xs={24} key={index}>
                <motion.div
                  variants={cardVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ scale: 1.03 }}
                  style={{ cursor: "pointer" }}
                >
                  <Card
                    title={<span style={{ fontSize: "24px" }}>{card.title}</span>}
                    style={cardStyle}
                    headStyle={{ 
                      background: 'linear-gradient(90deg, #ff5722, #ff9800)',
                      color: "#fff",
                      fontSize: "24px",
                      padding: "20px 24px",
                      border: 'none'
                    }}
                    bodyStyle={{ padding: "24px" }}
                  >
                    {listItems(card.items)}
                  </Card>
                </motion.div>
              </Col>
            ))}

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
                  title={<span style={{ fontSize: "24px" }}>Inspiring 3D Visualizers</span>}
                  style={cardStyle}
                  headStyle={{ 
                    background: 'linear-gradient(90deg, #ff5722, #ff9800)',
                    color: "#fff",
                    fontSize: "24px",
                    padding: "20px 24px",
                    border: 'none'
                  }}
                  bodyStyle={{ padding: "24px" }}
                >
                  <Row gutter={[24, 24]}>
                    <Col xs={24} md={4}>
                      <motion.div whileHover={{ scale: 1.05 }} style={{ textAlign: "center" }}>
                        <img
                          src="/assets/alex.jpg"
                          alt="Alex Roman"
                          style={{ 
                            width: 120, 
                            height: 120, 
                            borderRadius: 16, 
                            objectFit: "cover",
                            border: "2px solid #FF8C00",
                            margin: "0 auto"
                          }}
                        />
                      </motion.div>
                    </Col>
                    <Col xs={24} md={20}>
                      <Paragraph style={{ marginBottom: 0, fontSize: "18px" }}>
                        <strong style={{ fontSize: "20px" }}>Alex Roman (Spain)</strong> – The Cinematic Visionary
                        <br />
                        "The Third & The Seventh" (2010) – A poetic CGI short film showcasing architectural spaces.
                      </Paragraph>
                    </Col>
                  </Row>
                  <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
                    <Col xs={24} md={4}>
                      <motion.div whileHover={{ scale: 1.05 }} style={{ textAlign: "center" }}>
                        <img
                          src="/assets/peter.jpg"
                          alt="Peter Guthrie"
                          style={{ 
                            width: 120, 
                            height: 120, 
                            borderRadius: 16, 
                            objectFit: "cover",
                            border: "2px solid #FF8C00",
                            margin: "0 auto"
                          }}
                        />
                      </motion.div>
                    </Col>
                    <Col xs={24} md={20}>
                      <Paragraph style={{ marginBottom: 0, fontSize: "18px" }}>
                        <strong style={{ fontSize: "20px" }}>Peter Guthrie (UK)</strong> – The Photorealism Pioneer
                        <br />
                        Co-founder of The Boundary, worked with Zaha Hadid, Foster + Partners.
                      </Paragraph>
                    </Col>
                  </Row>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </div>
    </>
  );
};

export default ThreeDVisualizer;