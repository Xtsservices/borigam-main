import React from "react";
import { Typography, Row, Col, Card } from "antd";
import { motion } from "framer-motion";
import Layout from '../../components/Layout';
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

const LandscapeArchitect = () => {
  return (
    <><Header/>
      <div style={{marginTop: "6rem", padding: "60px 30px", maxWidth: 1200, margin: "auto", backgroundColor: "#fff" }}>
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={sectionVariant}
        >
          <Title level={1} style={{ textAlign: 'center', marginBottom: 50, color: '#0a2c64', fontSize: '42px' }}>
            Landscape Architect
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
            A landscape architect is a licensed professional who designs outdoor spaces to harmonize nature, 
            functionality, and aesthetics. They plan everything from urban parks and private gardens to 
            large-scale ecological restorations, blending art, science, and sustainability to create 
            environments that enhance human well-being and biodiversity.
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
                    "Site Analysis: Assess soil, climate, and existing ecosystems",
                    "Conceptual Design: Create sketches, 3D models (SketchUp, Lumion) and master plans",
                    "Ecological Planning: Restore wetlands, design green roofs, or create wildlife corridors",
                    "Urban Design: Plan public plazas, bike trails, or stormwater management systems",
                    "Collaboration: Work with architects, engineers, and communities to align visions"
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
                  title={<span style={{ fontSize: "24px" }}>Types of Landscape Architects</span>}
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
                    "Residential: Private gardens, rooftop terraces",
                    "Urban/Public: Parks (High Line, NYC), streetscapes",
                    "Ecological: Habitat restoration, brownfield reclamation",
                    "Hospitality: Resorts, golf courses (Pete Dye's designs)",
                    "Institutional: Campus planning, healthcare environments"
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
                    "Technical: CAD, GIS mapping, plant knowledge",
                    "Creative: Spatial storytelling, material selection (stone, wood, water features)",
                    "Environmental: Understanding of hydrology, soil science",
                    "Regulatory: Knowledge of zoning laws, ADA compliance",
                    "Communication: Client presentations, stakeholder coordination"
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
                  title={<span style={{ fontSize: "24px" }}>Pioneers of Landscape Architecture</span>}
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
                        src="/assets/frederick-olmsted.jpg"
                        alt="Frederick Law Olmsted"
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
                        <strong style={{ fontSize: "20px" }}>Frederick Law Olmsted (1822–1903)</strong>
                        <br />
                        <strong>Title:</strong> Father of American Landscape Architecture
                        <br />
                        <strong>Iconic Projects:</strong> Central Park, Emerald Necklace, Biltmore Estate
                        <br />
                        <strong>Philosophy:</strong> Parks as democratic spaces for all social classes
                        <br />
                        <strong>Legacy:</strong> Established landscape architecture as a profession
                      </Paragraph>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: 24, marginBottom: 24 }}>
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <img
                        src="/assets/roberto-burle-marx.jpg"
                        alt="Roberto Burle Marx"
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
                        <strong style={{ fontSize: "20px" }}>Roberto Burle Marx (1909–1994)</strong>
                        <br />
                        <strong>Style:</strong> Tropical Modernist with abstract patterns
                        <br />
                        <strong>Masterpieces:</strong> Copacabana Promenade, Ministry of Education Roof Garden
                        <br />
                        <strong>Innovations:</strong> Championed native Brazilian plants
                        <br />
                        <strong>Legacy:</strong> Blended art, ecology, and social activism
                      </Paragraph>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: 24 }}>
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <img
                        src="/assets/piet-oudolf.jpg"
                        alt="Piet Oudolf"
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
                        <strong style={{ fontSize: "20px" }}>Piet Oudolf (1944–Present)</strong>
                        <br />
                        <strong>Movement:</strong> New Perennial Style leader
                        <br />
                        <strong>Famous Works:</strong> High Line NYC, Hauser & Wirth Somerset Garden
                        <br />
                        <strong>Trademark:</strong> Plants chosen for their "bones" and winter interest
                        <br />
                        <strong>Legacy:</strong> Redefined naturalistic planting design
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

export default LandscapeArchitect;