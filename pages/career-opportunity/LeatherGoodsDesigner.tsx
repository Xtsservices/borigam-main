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

const LeatherGoodsDesigner = () => {
  return (
    <div style={{ padding: "60px 30px", maxWidth: 1200, margin: "auto", backgroundColor: "#fff" }}>
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={sectionVariant}
      >
        <Title level={1} style={{ textAlign: 'center', marginBottom: 50, color: '#0a2c64', fontSize: '42px' }}>
          Leather Goods Designer
          <div
            style={{
              height: 4,
              width: 120,
              backgroundColor: '#FF8C00', // Changed to orange
              margin: '20px auto 40px',
            }}
          ></div>
        </Title>
        <Paragraph style={{ fontSize: 20, lineHeight: 1.8, color: "#333", marginBottom: 40 }}>
          A Leather Goods Designer is a specialized fashion professional who creates functional and aesthetic products 
          using leather and alternative materials. They blend craftsmanship, innovation, and trend awareness to design 
          items like handbags, wallets, belts, and luggage for luxury brands, contemporary labels, or artisanal workshops.
        </Paragraph>

        <Row gutter={[32, 32]}>
          {[
            {
              title: "Key Responsibilities",
              items: [
                "Concept Development: Sketch designs by hand or digitally (Adobe Illustrator, Procreate)",
                "Material Selection: Choose leather types (full-grain, suede) or sustainable alternatives (Piñatex, mushroom leather)",
                "Prototyping & Technical Packs: Collaborate with artisans to create samples",
                "Functionality & Ergonomics: Ensure usability (bag weight, pocket placement, strap comfort)",
                "Brand Alignment: Adapt designs to house codes (Hermès' saddle stitching, Goyard's chevron)"
              ]
            },
            {
              title: "Types of Leather Goods Designers",
              items: [
                "Luxury Handbags: Hermès, Chanel, Loewe",
                "Streetwear Accessories: Supreme, Off-White",
                "Sustainable Design: Stella McCartney, Elvis & Kresse",
                "Artisanal Workshops: Custom, small-batch production",
                "Luggage Specialists: Rimowa, Tumi"
              ]
            },
            {
              title: "Skills Required",
              items: [
                "Technical Knowledge: Leather tanning, cutting, stitching techniques",
                "Software: CAD for pattern-making (Optitex, Lectra), 3D modeling (Clo3D)",
                "Market Awareness: Luxury vs. mass-market demands",
                "Material Science: Understanding leather grades and alternatives",
                "Artisan Collaboration: Working with craftspeople and manufacturers"
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
                    backgroundColor: "#FF8C00", // Changed to orange
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
                title={<span style={{ fontSize: "24px" }}>Iconic Leather Goods Designers</span>}
                style={cardStyle}
                headStyle={{ 
                  backgroundColor: "#FF8C00", // Changed to orange
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
                      src="/assets/reed-krakoff.jpg"
                      alt="Reed Krakoff"
                      style={{ 
                        width: 120, 
                        height: 120, 
                        borderRadius: 16, 
                        objectFit: "cover",
                        border: "2px solid #FF8C00" // Changed to orange
                      }}
                    />
                  </motion.div>
                  <div>
                    <Paragraph style={{ marginBottom: 0, fontSize: "18px" }}>
                      <strong style={{ fontSize: "20px" }}>Reed Krakoff (1964–Present)</strong>
                      <br />
                      <strong>Title:</strong> The Modernizer of American Leather Goods
                      <br />
                      <strong>Hallmarks:</strong> Minimalist leather totes, heritage glove-tanned leather
                      <br />
                      <strong>Achievement:</strong> Revitalized Coach (1996–2013)
                      <br />
                      <strong>Legacy:</strong> Made Coach "cool" again through refined designs
                    </Paragraph>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 24, marginBottom: 24 }}>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <img
                      src="/assets/alessandro-michele.jpg"
                      alt="Alessandro Michele"
                      style={{ 
                        width: 120, 
                        height: 120, 
                        borderRadius: 16, 
                        objectFit: "cover",
                        border: "2px solid #FF8C00" // Changed to orange
                      }}
                    />
                  </motion.div>
                  <div>
                    <Paragraph style={{ marginBottom: 0, fontSize: "18px" }}>
                      <strong style={{ fontSize: "20px" }}>Alessandro Michele (1972–Present)</strong>
                      <br />
                      <strong>Title:</strong> The Romantic Maximalist
                      <br />
                      <strong>Iconic Designs:</strong> Gucci Dionysus (tiger-head clasp), Jackie 1961 revival
                      <br />
                      <strong>Trademark:</strong> Mixes vintage shapes with quirky hardware
                      <br />
                      <strong>Legacy:</strong> Reinvented Gucci's accessories with eclectic nostalgia
                    </Paragraph>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 24 }}>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <img
                      src="/assets/hermes-designer.jpg"
                      alt="Hermès Designer"
                      style={{ 
                        width: 120, 
                        height: 120, 
                        borderRadius: 16, 
                        objectFit: "cover",
                        border: "2px solid #FF8C00" // Changed to orange
                      }}
                    />
                  </motion.div>
                  <div>
                    <Paragraph style={{ marginBottom: 0, fontSize: "18px" }}>
                      <strong style={{ fontSize: "20px" }}>Hermès Artisans</strong>
                      <br />
                      <strong>Tradition:</strong> Since 1837, Parisian leather craftsmanship
                      <br />
                      <strong>Iconic Creations:</strong> Kelly Bag (1930s), Birkin Bag (1984)
                      <br />
                      <strong>Technique:</strong> Saddle stitching (two needles, waxed linen thread)
                      <br />
                      <strong>Legacy:</strong> 18-24 hours handcrafted per bag, defining luxury leather goods
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

export default LeatherGoodsDesigner;