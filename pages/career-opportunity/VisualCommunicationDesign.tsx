import React from "react";
import { Typography, Row, Col, Card } from "antd";
import { motion } from "framer-motion";

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

const VisualCommunicationDesign = () => {
  return (
    <div style={{ padding: "60px 30px", maxWidth: 1200, margin: "auto", backgroundColor: "#fff" }}>
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={sectionVariant}
      >
        <Title level={1} style={{ textAlign: 'center', marginBottom: 50, color: '#0a2c64', fontSize: '42px' }}>
          Visual Communication Designer
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
          A Visual Communication Designer is a creative professional who combines art, technology, and design principles 
          to convey messages visually. They work across various media—such as digital, print, motion graphics, and 
          branding—to create compelling visuals that inform, engage, and inspire audiences.
        </Paragraph>

        <Row gutter={[32, 32]}>
          {[
            {
              title: "Key Responsibilities",
              items: [
                "Graphic Design: Designing logos, brochures, posters, packaging, and other marketing materials. Ensuring brand consistency across all visuals.",
                "Digital & Web Design: Creating UI/UX designs for websites, apps, and social media. Developing engaging digital ads, banners, and email templates.",
                "Typography & Layout: Selecting fonts and arranging text for readability and impact. Designing editorial layouts for magazines, books, and reports.",
                "Motion Graphics & Animation: Crafting animated visuals for videos, GIFs, and multimedia projects.",
                "Illustration & Iconography: Creating custom illustrations, infographics, and icons.",
                "Branding & Identity: Developing visual identities, style guides, and brand assets."
              ]
            },
            {
              title: "Skills & Tools",
              items: [
                "Software: Adobe Creative Suite (Photoshop, Illustrator, InDesign, After Effects), Figma, Canva, Blender.",
                "Fundamentals: Color theory, composition, typography, storytelling.",
                "Soft Skills: Creativity, collaboration, time management, adaptability."
              ]
            },
            {
              title: "Career Paths",
              items: [
                "Graphic Designer",
                "UI/UX Designer",
                "Art Director",
                "Motion Graphics Designer",
                "Brand Identity Designer"
              ]
            }
          ].map((card, index) => (
            <Col xs={24} md={index === 0 ? 24 : 12} key={index}>
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
                    backgroundColor: "#FF8C00", 
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
                title={<span style={{ fontSize: "24px" }}>Legendary Visual Communication Designers</span>}
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
                      src="/assets/paul-rand.jpg"
                      alt="Paul Rand"
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
                      <strong style={{ fontSize: "20px" }}>Paul Rand (1914–1996)</strong>
                      <br />
                      Known for: Corporate logos (IBM, ABC, UPS)
                      <br />
                      Style: Modernist, simplicity, timeless branding
                      <br />
                      Quote: "Design is so simple, that's why it's so complicated."
                    </Paragraph>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 24, marginBottom: 24 }}>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <img
                      src="/assets/saul-bass.jpg"
                      alt="Saul Bass"
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
                      <strong style={{ fontSize: "20px" }}>Saul Bass (1920–1996)</strong>
                      <br />
                      Known for: Movie title sequences (Psycho, Vertigo), logos (AT&T, Kleenex)
                      <br />
                      Style: Bold minimalism, kinetic typography
                      <br />
                      Legacy: Pioneer of motion graphics in film
                    </Paragraph>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 24 }}>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <img
                      src="/assets/paula-scher.jpg"
                      alt="Paula Scher"
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
                      <strong style={{ fontSize: "20px" }}>Paula Scher (b. 1948)</strong>
                      <br />
                      Known for: Citibank logo, Microsoft Windows rebrand, The Public Theater posters
                      <br />
                      Style: Bold typography, vibrant colors
                      <br />
                      Role: Partner at Pentagram
                    </Paragraph>
                  </div>
                </div>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </motion.div>
    </div>
  );
};

export default VisualCommunicationDesign;