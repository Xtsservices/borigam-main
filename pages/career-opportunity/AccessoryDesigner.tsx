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

const AccessoryDesigner = () => {
  return (
    <>
    <header/>
    <div style={{ padding: "60px 30px", maxWidth: 1200, margin: "auto", backgroundColor: "#fff" ,marginTop: "6rem" }}>
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={sectionVariant}
      >
        <Title level={1} style={{ textAlign: 'center', marginBottom: 50, color: '#0a2c64', fontSize: '42px' }}>
          Accessory Designer
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
          An accessory designer is a specialized fashion professional who creates wearable items that complement and enhance outfits, 
          focusing on functionality, aesthetics, and trends. Unlike apparel designers, they concentrate on non-clothing elements 
          that complete a look, often serving as statement pieces.
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
background: 'linear-gradient(90deg, #ff5722, #ff9800)',                  color: "#fff",
                  fontSize: "24px",
                  padding: "20px 24px",
                  border: 'none'
                }}
                bodyStyle={{ padding: "24px" }}
              >
                {listItems([
                  "Concept Development: Sketching designs for bags, jewelry, hats, belts, scarves, or eyewear",
                  "Material Selection: Choosing leather, metals, fabrics, or sustainable alternatives",
                  "Prototyping & Production: Collaborating with artisans or using 3D printing for samples",
                  "Brand Alignment: Designing cohesive collections for brands",
                  "Sustainability Innovation: Pioneering eco-friendly materials"
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
                title={<span style={{ fontSize: "24px" }}>Types of Accessory Designers</span>}
                style={cardStyle}
                headStyle={{ 
background: 'linear-gradient(90deg, #ff5722, #ff9800)',                  color: "#fff",
                  fontSize: "24px",
                  padding: "20px 24px",
                  border: 'none'
                }}
                bodyStyle={{ padding: "24px" }}
              >
                {listItems([
                  "Handbag Designers (Judith Leiber's crystal minaudières, Moynat's trunks)",
                  "Jewelry Designers (Elsa Peretti for Tiffany, Shaun Leane's avant-garde pieces)",
                  "Footwear Designers (Christian Louboutin's red soles, Salvatore Ferragamo's wedges)",
                  "Milliners (Hat designers like Philip Treacy for royal weddings)",
                  "Tech-Accessory Designers (Smartwatches, phone cases)"
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
                  "Technical Drawing (Analog or digital tools like Adobe Illustrator)",
                  "Material Knowledge (Metalsmithing, leather grading, beadwork)",
                  "Market Awareness (Luxury vs. fast-fashion demands)",
                  "Handcraftsmanship (Sewing, welding, 3D modeling)"
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
                title={<span style={{ fontSize: "24px" }}>Inspiring Accessory Designers</span>}
                style={cardStyle}
                headStyle={{ 
background: 'linear-gradient(90deg, #ff5722, #ff9800)',                  color: "#fff",
                  fontSize: "24px",
                  padding: "20px 24px",
                  border: 'none'
                }}
                bodyStyle={{ padding: "24px" }}
              >
                <div style={{ display: "flex", gap: 24, marginBottom: 24 }}>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <img
                      src="/assets/elsa.jpg"
                      alt="Elsa Peretti"
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
                      <strong style={{ fontSize: "20px" }}>Elsa Peretti (1940-2021)</strong>
                      <br />
                      <strong>Brand:</strong> Tiffany & Co.
                      <br />
                      <strong>Signature Style:</strong> Organic, fluid silver designs inspired by nature
                      <br />
                      <strong>Iconic Pieces:</strong> "Bone Cuff" Bracelet, "Open Heart" Pendant, "Bean" Design
                      <br />
                      <strong>Legacy:</strong> Redefined modern jewelry with wearable sculpture
                    </Paragraph>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 24, marginBottom: 24 }}>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <img
                      src="/assets/judith.jpg"
                      alt="Judith Leiber"
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
                      <strong style={{ fontSize: "20px" }}>Judith Leiber (1921-2018)</strong>
                      <br />
                      <strong>Brand:</strong> Judith Leiber Couture
                      <br />
                      <strong>Signature Style:</strong> Extravagant crystal-covered minaudières
                      <br />
                      <strong>Iconic Pieces:</strong> Swan, Cupcake, and Lipstick-shaped clutches
                      <br />
                      <strong>Legacy:</strong> Turned handbags into collectible art
                    </Paragraph>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 24 }}>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <img
                      src="/assets/christian.jpg"
                      alt="Christian Louboutin"
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
                      <strong style={{ fontSize: "20px" }}>Christian Louboutin (1963-Present)</strong>
                      <br />
                      <strong>Brand:</strong> Louboutin
                      <br />
                      <strong>Signature Style:</strong> Sky-high stilettos with red-lacquered soles
                      <br />
                      <strong>Iconic Pieces:</strong> "Pigalle" Pump, "So Kate" Heels, "Spiked" Accessories
                      <br />
                      <strong>Legacy:</strong> Synonymous with seductive luxury
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

export default AccessoryDesigner;