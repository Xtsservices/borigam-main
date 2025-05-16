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

const ConstructionManager = () => {
  return (
    <>
      <Header />
      <div style={{ padding: "60px 30px", marginTop: "6rem", maxWidth: 1200, margin: "auto", backgroundColor: "#fff" }}>
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={sectionVariant}
        >
          <Title level={1} style={{ textAlign: 'center', marginBottom: 50, color: '#0a2c64', fontSize: '42px' }}>
            Construction Manager
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
            A Construction Manager (CM) is a professional responsible for overseeing the planning, coordination, and execution 
            of construction projects from start to finish. They act as the project's "conductor," ensuring buildings and 
            infrastructure are completed on time, within budget, and to required quality and safety standards.
          </Paragraph>

          <Row gutter={[32, 32]}>
            {[
              {
                title: "Key Responsibilities",
                items: [
                  "Pre-Construction Planning: Review blueprints, obtain permits, ensure code compliance",
                  "Budget & Cost Control: Estimate project costs and prevent overruns",
                  "Scheduling & Coordination: Develop timelines and coordinate deliveries",
                  "On-Site Supervision: Manage daily operations and enforce safety regulations",
                  "Quality Assurance: Ensure work aligns with design documents and standards",
                  "Stakeholder Communication: Liaise between clients, architects, and authorities"
                ]
              },
              {
                title: "Types of Construction Managers",
                items: [
                  "Residential CM: Homes, apartments (e.g., Lennar, PulteGroup)",
                  "Commercial CM: Offices, retail (e.g., Turner Construction)",
                  "Industrial CM: Factories, warehouses (e.g., Bechtel, Fluor)",
                  "Civil CM: Roads, bridges (e.g., AECOM, Kiewit)"
                ]
              },
              {
                title: "Skills & Certifications",
                items: [
                  "Technical: Reading blueprints, BIM (Revit), cost estimation (RSMeans)",
                  "Soft Skills: Leadership, conflict resolution, crisis management",
                  "Certifications: CMAA, PMP, LEED AP for green building projects"
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
                      background: 'linear-gradient(90deg, #ff5722, #ff9800)',
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
                  title={<span style={{ fontSize: "24px" }}>Construction Management Pioneers</span>}
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
                  <Row gutter={[24, 24]}>
                    <Col xs={24} md={4}>
                      <motion.div whileHover={{ scale: 1.05 }} style={{ textAlign: "center" }}>
                        <img
                          src="/assets/henry-kaiser.jpg"
                          alt="Henry J. Kaiser"
                          style={{ 
                            width: 120, 
                            height: 120, 
                            borderRadius: 16, 
                            objectFit: "cover",
                            border: "2px solid #FF8C00",
                            margin: "0 auto"
                          }}
                        />
                      </motion.div>
                    </Col>
                    <Col xs={24} md={20}>
                      <Paragraph style={{ marginBottom: 0, fontSize: "18px" }}>
                        <strong style={{ fontSize: "20px" }}>Henry J. Kaiser (1882-1967)</strong>
                        <br />
                        <strong>Iconic Projects:</strong> Hoover Dam, Liberty Ships (WWII)
                        <br />
                        <strong>Innovation:</strong> Completed projects ahead of schedule using prefabrication
                        <br />
                        <strong>Legacy:</strong> The Mega-Project Titan who founded Kaiser Permanente
                      </Paragraph>
                    </Col>
                  </Row>
                  <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
                    <Col xs={24} md={4}>
                      <motion.div whileHover={{ scale: 1.05 }} style={{ textAlign: "center" }}>
                        <img
                          src="/assets/leslie-robertson.jpg"
                          alt="Leslie E. Robertson"
                          style={{ 
                            width: 120, 
                            height: 120, 
                            borderRadius: 16, 
                            objectFit: "cover",
                            border: "2px solid #FF8C00",
                            margin: "0 auto"
                          }}
                        />
                      </motion.div>
                    </Col>
                    <Col xs={24} md={20}>
                      <Paragraph style={{ marginBottom: 0, fontSize: "18px" }}>
                        <strong style={{ fontSize: "20px" }}>Leslie E. Robertson (1928-2021)</strong>
                        <br />
                        <strong>Structural Masterpieces:</strong> World Trade Center, Shanghai World Financial Center
                        <br />
                        <strong>Innovation:</strong> Pioneered tube structure systems for skyscrapers
                        <br />
                        <strong>Legacy:</strong> The Skyscraper Savior who advanced seismic engineering
                      </Paragraph>
                    </Col>
                  </Row>
                  <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
                    <Col xs={24} md={4}>
                      <motion.div whileHover={{ scale: 1.05 }} style={{ textAlign: "center" }}>
                        <img
                          src="/assets/frank-gilbreth.jpg"
                          alt="Frank B. Gilbreth"
                          style={{ 
                            width: 120, 
                            height: 120, 
                            borderRadius: 16, 
                            objectFit: "cover",
                            border: "2px solid #FF8C00",
                            margin: "0 auto"
                          }}
                        />
                      </motion.div>
                    </Col>
                    <Col xs={24} md={20}>
                      <Paragraph style={{ marginBottom: 0, fontSize: "18px" }}>
                        <strong style={{ fontSize: "20px" }}>Frank B. Gilbreth (1868-1924)</strong>
                        <br />
                        <strong>Method:</strong> Time-and-motion studies to optimize labor
                        <br />
                        <strong>Projects:</strong> Streamlined MIT buildings and hospital ORs
                        <br />
                        <strong>Legacy:</strong> The Efficiency Guru and father of modern construction management
                      </Paragraph>
                    </Col>
                  </Row>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </div>
    </>
  );
};

export default ConstructionManager;