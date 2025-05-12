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

const TextileDesigner = () => {
  return (
    <div style={{ padding: "60px 30px", maxWidth: 1200, margin: "auto", backgroundColor: "#fff" }}>
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={sectionVariant}
      >
        <Title level={1} style={{ textAlign: 'center', marginBottom: 50, color: '#0a2c64', fontSize: '42px' }}>
          Textile and Fashion Designer
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
          A Textile and Fashion Designer is a creative professional who designs fabrics, patterns, and clothing, 
          blending art, technology, and trend forecasting to create wearable and marketable fashion products. 
          They work across apparel, accessories, and home textiles, ensuring aesthetics, functionality, and sustainability.
        </Paragraph>

        <Row gutter={[32, 32]}>
          {[
            {
              title: "Key Responsibilities",
              items: [
                "Textile Design: Creating original prints, weaves, knits, and dyes for fabrics. Using tools like Adobe Illustrator, Photoshop, or CAD software for patterns.",
                "Fashion Design: Sketching garments, accessories, or footwear collections. Selecting fabrics, colors, and trims based on trends and usability.",
                "Trend Research: Analyzing fashion forecasts (e.g., Pantone colors, WGSN reports). Adapting designs to cultural and seasonal trends.",
                "Prototyping & Production: Developing samples with draping, sewing, or 3D fashion software (e.g., CLO 3D). Collaborating with manufacturers to ensure quality and feasibility.",
                "Sustainability Focus: Innovating with eco-friendly materials (organic cotton, recycled fibers). Reducing waste through zero-waste pattern cutting or upcycling."
              ]
            },
            {
              title: "Skills Required",
              items: [
                "Creative Drawing & Illustration (Fashion sketching, technical flats)",
                "Fabric Knowledge (Weaves, knits, draping qualities)",
                "Software Proficiency (Adobe Creative Suite, CAD, CLO 3D)",
                "Sewing & Patternmaking (Draping, grading, garment construction)",
                "Market Awareness (Luxury, fast fashion, niche markets)"
              ]
            }
          ].map((card, index) => (
            <Col xs={24} md={12} key={index}>
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
                title={<span style={{ fontSize: "24px" }}>Iconic Fashion Designers</span>}
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
                      src="/assets/coco-chanel.jpg"
                      alt="Coco Chanel"
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
                      <strong style={{ fontSize: "20px" }}>Coco Chanel (1883–1971)</strong> – The Pioneer of Modern Women's Fashion
                      <br />
                      Key Contributions: Introduced the "little black dress", popularized tweed suits and costume jewelry, created Chanel No. 5.
                      <br />
                      Legacy: Freed women from corsets with relaxed, elegant silhouettes.
                    </Paragraph>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 24, marginBottom: 24 }}>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <img
                      src="/assets/yves-saint-laurent.jpg"
                      alt="Yves Saint Laurent"
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
                      <strong style={{ fontSize: "20px" }}>Yves Saint Laurent (1936–2008)</strong> – The Rebel of Haute Couture
                      <br />
                      Key Contributions: First to introduce women's tuxedos (Le Smoking, 1966), created the Mondrian dress, founded one of the first ready-to-wear luxury lines.
                      <br />
                      Legacy: Blurred gender norms in fashion.
                    </Paragraph>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 24 }}>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <img
                      src="/assets/issey-miyake.jpg"
                      alt="Issey Miyake"
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
                      <strong style={{ fontSize: "20px" }}>Issey Miyake (1938–2022)</strong> – Master of Fabric Innovation
                      <br />
                      Key Contributions: Developed Pleats Please, created A-POC ("A Piece of Cloth") technology, designed Steve Jobs' black turtleneck.
                      <br />
                      Legacy: Merged fashion with technology and engineering.
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

export default TextileDesigner;