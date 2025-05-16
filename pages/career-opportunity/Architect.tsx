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

const Architect = () => {
  return (
    <>
      <Header/>
      <div style={{ padding: "60px 30px", maxWidth: 1200, margin: "auto", backgroundColor: "#fff", marginTop: "6rem" }}>
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={sectionVariant}
        >
          <Title level={1} style={{ textAlign: 'center', marginBottom: 50, color: '#0a2c64', fontSize: '42px' }}>
            Architect
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
            An architect is a licensed professional who designs buildings, structures, and spaces, blending art, science, 
            and functionality to create environments that are safe, sustainable, and meaningful. Architects shape the 
            world's skylines, homes, and public spaces while addressing cultural, environmental, and technical challenges.
          </Paragraph>

          <Row gutter={[32, 32]}>
            {[
              {
                title: "Key Responsibilities",
                items: [
                  "Conceptual Design: Sketch and model ideas (using tools like SketchUp, Revit)",
                  "Technical Planning: Create blueprints and specifications for construction",
                  "Collaboration: Work with engineers, contractors, and clients",
                  "Sustainability & Innovation: Integrate eco-friendly materials and energy efficiency",
                  "Project Management: Oversee construction to align with design intent"
                ]
              },
              {
                title: "Types of Architects",
                items: [
                  "Residential Architects (Homes, apartments)",
                  "Commercial Architects (Offices, malls)",
                  "Landscape Architects (Parks, urban green spaces)",
                  "Urban Designers (City planning, transit hubs)",
                  "Interior Architects (Space optimization, structural interiors)"
                ]
              },
              {
                title: "Skills Required",
                items: [
                  "Design Software: AutoCAD, Rhino, BIM (Building Information Modeling)",
                  "Structural Knowledge: Physics, material science",
                  "Creativity + Problem-Solving: Unique solutions for site constraints",
                  "Communication: Presenting ideas to clients/governments"
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
                  title={<span style={{ fontSize: "24px" }}>Legendary Architects</span>}
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
                          src="/assets/norman-foster.jpg"
                          alt="Norman Foster"
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
                        <strong style={{ fontSize: "20px" }}>Norman Foster (1935-Present)</strong>
                        <br />
                        <strong>Style:</strong> High-Tech Architecture
                        <br />
                        <strong>Iconic Works:</strong> Apple Park, The Gherkin
                        <br />
                        <strong>Legacy:</strong> Sustainable megaprojects
                      </Paragraph>
                    </Col>
                  </Row>
                  <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
                    <Col xs={24} md={4}>
                      <motion.div whileHover={{ scale: 1.05 }} style={{ textAlign: "center" }}>
                        <img
                          src="/assets/im-pei.jpg"
                          alt="I.M. Pei"
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
                        <strong style={{ fontSize: "20px" }}>I.M. Pei (1917-2019)</strong>
                        <br />
                        <strong>Style:</strong> Geometric Modernism
                        <br />
                        <strong>Iconic Works:</strong> Louvre Pyramid, Bank of China Tower
                        <br />
                        <strong>Legacy:</strong> Bridged East-West design
                      </Paragraph>
                    </Col>
                  </Row>
                  <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
                    <Col xs={24} md={4}>
                      <motion.div whileHover={{ scale: 1.05 }} style={{ textAlign: "center" }}>
                        <img
                          src="/assets/frank-lloyd-wright.jpg"
                          alt="Frank Lloyd Wright"
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
                        <strong style={{ fontSize: "20px" }}>Frank Lloyd Wright (1867-1959)</strong>
                        <br />
                        <strong>Style:</strong> Organic Architecture
                        <br />
                        <strong>Iconic Works:</strong> Fallingwater, Guggenheim Museum
                        <br />
                        <strong>Legacy:</strong> Pioneer of Prairie School architecture
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

export default Architect;