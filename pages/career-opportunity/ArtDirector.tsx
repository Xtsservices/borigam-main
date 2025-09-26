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

const ArtDesigner = () => {
  return (
    <>
      <Header />
      <div style={{ padding: "60px 30px", marginTop: "8rem", maxWidth: 1200, margin: "auto", backgroundColor: "#fff" }}>
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={sectionVariant}
        >
          <Title level={1} style={{ textAlign: 'center', marginBottom: 50, color: '#0a2c64', fontSize: "clamp(1.5rem, 5vw, 2.625rem)" /* Responsive H1: 24px to 42px */ }}>
            Art Designer
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
            An Art Designer is a multidisciplinary professional who blends fine art, digital media, and design principles 
            to create expressive, conceptual, or commercial artwork. They work at the intersection of aesthetics, 
            storytelling, and innovation—whether for galleries, brands, films, or digital experiences.
          </Paragraph>

          <Row gutter={[32, 32]}>
            {[
              {
                title: "Key Responsibilities",
                items: [
                  "Concept Art & Ideation: Developing visual narratives, themes, and styles",
                  "Mixed Media Art: Combining traditional with digital techniques",
                  "Branded Artwork: Creating bespoke art for fashion, music, or advertising",
                  "Experimental Design: Pushing boundaries with interactive installations",
                  "Collaboration: Working with directors, curators, or marketers"
                ]
              },
              {
                title: "Skills & Tools",
                items: [
                  "Traditional Art: Painting, printmaking, sculpture",
                  "Digital Tools: Photoshop, Procreate, Blender, TouchDesigner",
                  "Emergent Tech: AR/VR, generative AI (MidJourney, DALL-E), NFTs",
                  "Conceptual Thinking: Strong narrative or thematic depth"
                ]
              },
              {
                title: "Career Paths",
                items: [
                  "Gallery Artist: Exhibiting in museums/contemporary spaces",
                  "Commercial Art Designer: Collaborating with brands (Nike, Apple)",
                  "Film/Game Concept Artist: Designing worlds for movies or games",
                  "Public Art Installer: Creating large-scale urban artworks",
                  "Digital Art Innovator: Working in NFTs, metaverse, or AI art"
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
                  title={<span style={{ fontSize: "24px" }}>Influential Art Designers</span>}
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
                          src="/assets/yayoi-kusama.jpg"
                          alt="Yayoi Kusama"
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
                        <strong style={{ fontSize: "20px" }}>Yayoi Kusama (Japan)</strong>
                        <br />
                        <strong>Style:</strong> Infinity rooms, polka dots, psychedelic installations
                        <br />
                        <strong>Impact:</strong> Blurs art, design, and mental health themes
                      </Paragraph>
                    </Col>
                  </Row>
                  <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
                    <Col xs={24} md={4}>
                      <motion.div whileHover={{ scale: 1.05 }} style={{ textAlign: "center" }}>
                        <img
                          src="/assets/olafur-eliasson.jpg"
                          alt="Olafur Eliasson"
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
                        <strong style={{ fontSize: "20px" }}>Olafur Eliasson (Denmark/Iceland)</strong>
                        <br />
                        <strong>Style:</strong> Light, weather, and space installations
                        <br />
                        <strong>Impact:</strong> Art as an immersive, sensory experience
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

export default ArtDesigner;