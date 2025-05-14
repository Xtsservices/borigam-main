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

const VisualMerchandiser = () => {
  return (
    <><Header /><div style={{marginTop: "6rem", padding: "60px 30px", maxWidth: 1200, margin: "auto", backgroundColor: "#fff" }}>
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={sectionVariant}
      >
        <Title level={1} style={{ textAlign: 'center', marginBottom: 50, color: '#0a2c64', fontSize: '42px' }}>
          Visual Merchandiser
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
          A Visual Merchandiser is a creative professional who designs and arranges retail spaces, window displays, 
          and product layouts to maximize customer engagement, drive sales, and enhance brand identity. They blend art, 
          psychology, and marketing to create visually compelling shopping experiences.
        </Paragraph>

        <Row gutter={[32, 32]}>
          {[
            {
              title: "Key Responsibilities",
              items: [
                "Window Displays: Design eye-catching installations to attract foot traffic (e.g., holiday themes, seasonal trends). Example: Bergdorf Goodman's iconic Christmas windows.",
                "In-Store Layouts: Arrange products to guide customer flow (hot spots, focal points). Use techniques like color blocking or thematic zoning (e.g., Nike's sport-inspired sections).",
                "Signage & Graphics: Create clear, branded signage for promotions or product info.",
                "Lighting & Ambiance: Set mood with spotlights, LED strips, or natural light (Apple Store's minimalist lighting).",
                "Trend Integration: Adapt to trends like sustainability (recycled materials) or interactive displays (AR mirrors)."
              ]
            },
            {
              title: "Skills & Tools",
              items: [
                "Design Software: Adobe Creative Suite (Photoshop, Illustrator), SketchUp.",
                "Hands-On Skills: Prop styling, mannequin dressing, spatial planning.",
                "Analytical Skills: Track sales data to measure display effectiveness."
              ]
            },
            {
              title: "Types of Visual Merchandisers",
              items: [
                "Fashion: Luxury boutiques (Chanel), fast fashion (Zara).",
                "Beauty: Sephora's color-coordinated product walls.",
                "Grocery/Retail: Whole Foods' artful produce displays."
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
                title={<span style={{ fontSize: "24px" }}>Iconic Visual Merchandising Examples</span>}
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
                      src="/assets/bergdorf-windows.jpg"
                      alt="Bergdorf Goodman Windows"
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
                      <strong style={{ fontSize: "20px" }}>Bergdorf Goodman Holiday Windows</strong>
                      <br />
                      New York's most anticipated holiday tradition since the 1920s.
                      <br />
                      Features elaborate themes, animatronics, and designer collaborations.
                      <br />
                      Draws over 1 million visitors annually.
                    </Paragraph>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 24, marginBottom: 24 }}>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <img
                      src="/assets/apple-store.jpg"
                      alt="Apple Store Design"
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
                      <strong style={{ fontSize: "20px" }}>Apple Store Merchandising</strong>
                      <br />
                      Minimalist product tables with ample white space.
                      <br />
                      Strategic lighting highlights product features.
                      <br />
                      "Today at Apple" interactive displays drive engagement.
                    </Paragraph>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 24 }}>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <img
                      src="/assets/sephora-display.jpg"
                      alt="Sephora Visual Merchandising"
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
                      <strong style={{ fontSize: "20px" }}>Sephora Color Walls</strong>
                      <br />
                      Rainbow-organized product displays create visual impact.
                      <br />
                      Testers arranged by color families for intuitive shopping.
                      <br />
                      Interactive digital screens complement physical displays.
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

export default VisualMerchandiser;