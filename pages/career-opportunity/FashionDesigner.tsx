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

const FashionDesigner = () => {
  return (
    <div style={{ padding: "60px 30px", maxWidth: 1200, margin: "auto", backgroundColor: "#fff" }}>
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={sectionVariant}
      >
        <Title level={1} style={{ textAlign: 'center', marginBottom: 50, color: '#0a2c64', fontSize: '42px' }}>
          Fashion Designer
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
          A fashion designer is a creative professional who designs clothing, accessories, and footwear, 
          combining artistry, trend forecasting, and technical skills to create wearable collections. 
          They shape cultural aesthetics while considering functionality, materials, and market demands.
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
                  "Concept Development: Sketching designs and creating mood boards",
                  "Fabric & Material Selection: Choosing textiles and testing properties",
                  "Patternmaking & Prototyping: Drafting patterns and overseeing construction",
                  "Trend Forecasting: Analyzing reports and adapting seasonal designs",
                  "Branding & Marketing: Collaborating with teams and defining brand identity"
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
                title={<span style={{ fontSize: "24px" }}>Types of Fashion Designers</span>}
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
                  "Haute Couture: Custom, handcrafted luxury (Chanel, Dior)",
                  "Ready-to-Wear (RTW): Mass-produced collections (Zara, Calvin Klein)",
                  "Sportswear: Performance-focused (Nike, Lululemon)",
                  "Sustainable Design: Eco-conscious materials (Stella McCartney)",
                  "Costume Design: For film/theater (Sandy Powell)"
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
                title={<span style={{ fontSize: "24px" }}>Skills Required</span>}
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
                  "Drawing & Illustration: Fashion croquis, technical flats",
                  "Sewing & Draping: Hands-on garment construction",
                  "Software Proficiency: Adobe Suite, CLO 3D, Optitex",
                  "Business Acumen: Budgeting, supply chain management",
                  "Adaptability: Fast fashion vs. slow fashion cycles"
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
                title={<span style={{ fontSize: "24px" }}>Legendary Fashion Designers</span>}
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
                      <strong style={{ fontSize: "20px" }}>Coco Chanel (1883-1971)</strong>
                      <br />
                      <strong>Brand:</strong> Chanel
                      <br />
                      <strong>Revolution:</strong> Liberated women from corsets
                      <br />
                      <strong>Iconic Creations:</strong> Little Black Dress, Tweed Suits, Chanel No. 5
                      <br />
                      <strong>Legacy:</strong> Timeless elegance and quilted handbags
                    </Paragraph>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 24, marginBottom: 24 }}>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <img
                      src="/assets/karl-lagerfeld.jpg"
                      alt="Karl Lagerfeld"
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
                      <strong style={{ fontSize: "20px" }}>Karl Lagerfeld (1933-2019)</strong>
                      <br />
                      <strong>Brands:</strong> Chanel, Fendi, and his eponymous label
                      <br />
                      <strong>Contributions:</strong> Rejuvenated Chanel, created Fendi's "FF" logo
                      <br />
                      <strong>Innovations:</strong> First designer H&M collaboration (2004)
                      <br />
                      <strong>Signature:</strong> White ponytail and black sunglasses
                    </Paragraph>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 24 }}>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <img
                      src="/assets/rei-kawakubo.jpg"
                      alt="Rei Kawakubo"
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
                      <strong style={{ fontSize: "20px" }}>Rei Kawakubo (1942-Present)</strong>
                      <br />
                      <strong>Brand:</strong> Comme des Garçons
                      <br />
                      <strong>Avant-Garde Vision:</strong> Deconstructed silhouettes and anti-fashion
                      <br />
                      <strong>Iconic Elements:</strong> "Lumps and bumps" dresses, CDG Heart Logo
                      <br />
                      <strong>Legacy:</strong> Redefined conventional beauty standards
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

export default FashionDesigner;