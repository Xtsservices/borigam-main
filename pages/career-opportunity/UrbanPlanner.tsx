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

const UrbanPlanner = () => {
  return (
    <><Header/><div style={{ marginTop: "6rem",padding: "60px 30px", maxWidth: 1200, margin: "auto", backgroundColor: "#fff" }}>
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={sectionVariant}
      >
        <Title level={1} style={{ textAlign: 'center', marginBottom: 50, color: '#0a2c64', fontSize: '42px' }}>
          Urban Planner
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
          An Urban Planner is a professional who designs, manages, and revitalizes cities and communities to create 
          functional, sustainable, and equitable spaces. They balance growth with environmental, social, and economic 
          needs—shaping everything from transit systems to green parks and affordable housing.
        </Paragraph>

        <Row gutter={[32, 32]}>
          {[
            {
              title: "Key Responsibilities",
              items: [
                "Land Use Planning: Zone areas for residential, commercial, or industrial use. Prevent urban sprawl (e.g., Portland's urban growth boundary).",
                "Transportation & Infrastructure: Design bike lanes, subway networks (Tokyo's efficient transit), or pedestrian-friendly streets.",
                "Sustainability & Resilience: Integrate green spaces (Singapore's 'Garden City'). Plan for climate change (flood-resistant designs in Copenhagen).",
                "Community Engagement: Gather public input for inclusive development (participatory budgeting in NYC).",
                "Policy & Regulations: Draft laws on building heights, heritage preservation, or affordable housing quotas."
              ]
            },
            {
              title: "Types of Urban Planners",
              items: [
                "Transportation Planners (Bus rapid transit, walkable cities)",
                "Environmental Planners (Wetland conservation, renewable energy grids)",
                "Urban Designers (Public plazas, mixed-use developments)",
                "Housing Planners (Low-income housing, gentrification mitigation)"
              ]
            },
            {
              title: "Skills Required",
              items: [
                "GIS Mapping (ArcGIS, QGIS)",
                "Data Analysis (Census data, traffic models)",
                "Negotiation (Developers vs. community needs)",
                "Visionary Thinking (15-minute cities, green roofs)"
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
                title={<span style={{ fontSize: "24px" }}>Legendary Urban Planners</span>}
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
                      src="/assets/le-corbusier.jpg"
                      alt="Le Corbusier"
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
                      <strong style={{ fontSize: "20px" }}>Le Corbusier (1887–1965)</strong> – The Radical Modernist
                      <br />
                      Vision: "Towers in the park" (high-rises + green space).
                      <br />
                      Projects: Chandigarh, India (planned city), Ville Radieuse (unbuilt utopian concept).
                      <br />
                      Criticism: Designs often ignored human scale.
                    </Paragraph>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 24, marginBottom: 24 }}>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <img
                      src="/assets/kevin-lynch.jpg"
                      alt="Kevin Lynch"
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
                      <strong style={{ fontSize: "20px" }}>Kevin Lynch (1918–1984)</strong> – The Mental Map Theorist
                      <br />
                      Key Work: "The Image of the City" (1960).
                      <br />
                      Idea: Cities should be legible (paths, edges, landmarks).
                      <br />
                      Influence: Shaped wayfinding and urban psychology.
                    </Paragraph>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 24 }}>
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
                      <strong style={{ fontSize: "20px" }}>Frederick Law Olmsted (1822–1903)</strong> – The Park Maker
                      <br />
                      Iconic Designs: Central Park (NYC), Emerald Necklace (Boston).
                      <br />
                      Philosophy: "Parks as democratic spaces."
                      <br />
                      Legacy: Father of American landscape architecture.
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

export default UrbanPlanner;