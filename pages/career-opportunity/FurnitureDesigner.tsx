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

const FurnitureDesigner = () => {
  return (
    <>
    <Header/>
    <div style={{ padding: "60px 30px",marginTop: "8rem" ,maxWidth: 1200, margin: "auto", backgroundColor: "#fff" }}>
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={sectionVariant}
      >
        <Title level={1} style={{ textAlign: 'center', marginBottom: 50, color: '#0a2c64', fontSize: "clamp(1.5rem, 5vw, 2.625rem)" /* Responsive H1: 24px to 42px */ }}>
          Furniture Designer
          <div
            style={{
              height: 4,
              width: 120,
background: 'linear-gradient(90deg, #ff5722, #ff9800)',              
margin: '20px auto 40px',
            }}
          ></div>
        </Title>
        <Paragraph style={{ fontSize: 20, lineHeight: 1.8, color: "#333", marginBottom: 40 }}>
          A Furniture Designer blends art, functionality, and craftsmanship to create pieces that enhance living spaces. 
          They work with materials like wood, metal, and textiles to balance aesthetics, ergonomics, and structural integrity.
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
background: 'linear-gradient(90deg, #ff5722, #ff9800)',                  
color: "#fff",
                  fontSize: "24px",
                  padding: "20px 24px",
                  border: 'none'
                }}
                bodyStyle={{ padding: "24px" }}
              >
                {listItems([
                  "Concept Development: Sketching and prototyping furniture ideas",
                  "Material Selection: Choosing wood, metal, glass, and upholstery",
                  "Ergonomics & Comfort: Ensuring usability and human-centered design",
                  "Sustainability: Implementing eco-friendly materials and methods",
                  "Collaboration: Working with manufacturers and interior designers",
                  "Trend Research: Following design movements like Mid-Century Modern"
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
                title={<span style={{ fontSize: "24px" }}>Skills & Tools</span>}
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
                {listItems([
                  "Sketching & 3D Modeling: SketchUp, AutoCAD, Rhino",
                  "Material Knowledge: Woodworking, metalworking, upholstery",
                  "Prototyping & Craftsmanship: Hands-on model creation",
                  "Ergonomics: Understanding human proportions and comfort",
                  "Sustainability: Recycled materials, modular design"
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
                title={<span style={{ fontSize: "24px" }}>Career Paths</span>}
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
                {listItems([
                  "Industrial Furniture Designer: Work for brands like IKEA or Herman Miller",
                  "Artisan/Custom Maker: Create handcrafted luxury pieces",
                  "Interior Design Collaboration: Design for hospitality spaces",
                  "Sustainable Innovator: Focus on eco-conscious furniture",
                  "Concept Designer: Create avant-garde experimental pieces"
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
                title={<span style={{ fontSize: "24px" }}>Legendary Furniture Designers</span>}
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
                <div style={{ display: "flex", gap: 24, marginBottom: 24 }}>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <img
                      src="/assets/eames.jpg"
                      alt="Charles & Ray Eames"
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
                      <strong style={{ fontSize: "20px" }}>Charles & Ray Eames (USA)</strong>
                      <br />
                      <strong>Iconic Designs:</strong> Eames Lounge Chair, Molded Plastic Chairs
                      <br />
                      <strong>Style:</strong> Mid-Century Modern with organic curves
                      <br />
                      <strong>Legacy:</strong> Pioneered mass-produced functional beauty
                    </Paragraph>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 24, marginBottom: 24 }}>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <img
                      src="/assets/arne-jacobsen.jpg"
                      alt="Arne Jacobsen"
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
                      <strong style={{ fontSize: "20px" }}>Arne Jacobsen (Denmark)</strong>
                      <br />
                      <strong>Iconic Designs:</strong> Egg Chair, Swan Chair, Series 7 Chair
                      <br />
                      <strong>Style:</strong> Scandinavian minimalism and sleek futurism
                      <br />
                      <strong>Legacy:</strong> Defined Danish modern design
                    </Paragraph>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 24 }}>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <img
                      src="/assets/philippe-starck.jpg"
                      alt="Philippe Starck"
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
                      <strong style={{ fontSize: "20px" }}>Philippe Starck (France)</strong>
                      <br />
                      <strong>Iconic Designs:</strong> Louis Ghost Chair, Juicy Salif Citrus Squeezer
                      <br />
                      <strong>Style:</strong> Playful, futuristic, and provocative
                      <br />
                      <strong>Legacy:</strong> Brought whimsy to functional design
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

export default FurnitureDesigner;