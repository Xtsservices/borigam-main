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

const InteriorDesigner = () => {
  return (
    <>
    <Header/>
    <div style={{marginTop: "6rem", padding: "60px 30px", maxWidth: 1200, margin: "auto", backgroundColor: "#fff" }}>
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={sectionVariant}
      >
        <Title level={1} style={{ textAlign: 'center', marginBottom: 50, color: '#0a2c64', fontSize: '42px' }}>
          Interior Designer
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
          An Interior Designer is a creative professional who enhances the functionality, safety, and aesthetics 
          of interior spaces—from homes and offices to hotels and retail stores. They blend artistry with technical 
          knowledge to create environments that reflect clients' needs, brand identities, and well-being principles.
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
                  "Space Planning: Optimize layouts for flow and function (e.g., open-plan offices, ergonomic kitchens)",
                  "Concept Development: Create mood boards with colour schemes, materials, and furniture (Adobe Photoshop, SketchUp)",
                  "Material & Furniture Selection: Choose sustainable options (bamboo flooring, recycled glass countertops)",
                  "Lighting Design: Layer ambient, task, and accent lighting (LED smart systems, statement chandeliers)",
                  "Project Management: Coordinate with architects, contractors, and artisans"
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
                title={<span style={{ fontSize: "24px" }}>Types of Interior Designers</span>}
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
                  "Residential: Homes, apartments (Nate Berkus, Kelly Wearstler)",
                  "Commercial: Offices, restaurants (Rockwell Group)",
                  "Hospitality: Hotels, resorts (HBA - Hirsch Bedner Associates)",
                  "Sustainable Design: Eco-friendly spaces (Elora Hardy's bamboo houses)",
                  "Set Design: Film/theatre (Adam Stockhausen for The Grand Budapest Hotel)"
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
background: 'linear-gradient(90deg, #ff5722, #ff9800)',                  color: "#fff",
                  fontSize: "24px",
                  padding: "20px 24px",
                  border: 'none'
                }}
                bodyStyle={{ padding: "24px" }}
              >
                {listItems([
                  "Technical: AutoCAD, Revit, 3D rendering (Enscape, V-Ray)",
                  "Creative: Colour theory, spatial awareness",
                  "Communication: Client presentations, vendor negotiations",
                  "Trend Knowledge: Japandi fusion, dark academia, post-pandemic flexible spaces",
                  "Regulatory Knowledge: Building codes, ADA compliance"
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
                title={<span style={{ fontSize: "24px" }}>Legendary Interior Designers</span>}
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
                      src="/assets/kelly-wearstler.jpg"
                      alt="Kelly Wearstler"
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
                      <strong style={{ fontSize: "20px" }}>Kelly Wearstler (1969–Present)</strong>
                      <br />
                      <strong>Style:</strong> Bold patterns, vintage art, "California glam" with a modern edge
                      <br />
                      <strong>Signature Projects:</strong> Proper Hotels, Gwen Stefani's Beverly Hills home
                      <br />
                      <strong>Trademark:</strong> Mixing brass, marble, and saturated hues
                      <br />
                      <strong>Legacy:</strong> Queen of maximalist luxury
                    </Paragraph>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 24, marginBottom: 24 }}>
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
                      <strong style={{ fontSize: "20px" }}>Philippe Starck (1949–Present)</strong>
                      <br />
                      <strong>Style:</strong> Playful, surreal, and high-tech
                      <br />
                      <strong>Iconic Designs:</strong> Ghost Chair, Mondrian Hotel NYC
                      <br />
                      <strong>Innovations:</strong> Democratized design with affordable collaborations
                      <br />
                      <strong>Legacy:</strong> The Futurist of interior design
                    </Paragraph>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 24 }}>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <img
                      src="/assets/india-mahdavi.jpg"
                      alt="India Mahdavi"
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
                      <strong style={{ fontSize: "20px" }}>India Mahdavi (1962–Present)</strong>
                      <br />
                      <strong>Style:</strong> Joyful, candy-colored spaces
                      <br />
                      <strong>Masterpiece:</strong> Sketch London's pink gallery
                      <br />
                      <strong>Philosophy:</strong> "Color is a therapy for happiness"
                      <br />
                      <strong>Legacy:</strong> The Color Alchemist of contemporary design
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

export default InteriorDesigner;