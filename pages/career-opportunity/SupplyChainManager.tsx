
import React from "react";
import { Typography, Row, Col, Card, Table } from "antd";
import { motion } from "framer-motion";
import Header from "@/components/Header";
const { Title, Paragraph, Text } = Typography;

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

const skillsColumns = [
  {
    title: 'Hard Skills',
    dataIndex: 'hardSkills',
    key: 'hardSkills',
  },
  {
    title: 'Soft Skills',
    dataIndex: 'softSkills',
    key: 'softSkills',
  },
  {
    title: 'Tools',
    dataIndex: 'tools',
    key: 'tools',
  },
];

const skillsData = [
  {
    key: '1',
    hardSkills: 'Inventory management',
    softSkills: 'Negotiation',
    tools: 'ERP systems (SAP, Oracle)'
  },
  {
    key: '2',
    hardSkills: 'Lean/Six Sigma',
    softSkills: 'Problem-solving',
    tools: 'Tableau (data viz)'
  },
  {
    key: '3',
    hardSkills: 'Logistics software',
    softSkills: 'Leadership',
    tools: 'TMS (Transport Mgmt)'
  },
];

const SupplyChainManager = () => {
  return (
    <><Header/><div style={{marginTop: "8rem", padding: "60px 30px", maxWidth: 1200, margin: "auto", backgroundColor: "#fff" }}>
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={sectionVariant}
      >
        <Title level={1} style={{ textAlign: 'center', marginBottom: 50, color: '#0a2c64', fontSize: "clamp(1.5rem, 5vw, 2.625rem)" /* Responsive H1: 24px to 42px */ }}>
          Supply Chain Manager
          <div
            style={{
              height: 4,
              width: 120,
              backgroundColor: '#FF8C00',
              margin: '20px auto 40px',
            }}
          ></div>
        </Title>
        <Paragraph style={{ fontSize: 20, lineHeight: 1.8, color: "#333", marginBottom: 40 }}>
          A Supply Chain Manager (SCM) is a professional responsible for overseeing the entire lifecycle of a product—from raw material sourcing to production, logistics, and final delivery to consumers. 
          They optimize efficiency, reduce costs, and ensure smooth operations across the supply chain network.
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
                <div style={{ fontSize: "18px", color: "#333" }}>
                  <Text strong style={{ fontSize: "18px" }}>1. Procurement & Sourcing</Text>
                  <ul style={{ paddingLeft: 24, marginTop: 8, marginBottom: 16 }}>
                    <li>Select suppliers, negotiate contracts, and manage relationships</li>
                    <li>Example: Ensuring timely delivery of raw materials for manufacturing</li>
                  </ul>

                  <Text strong style={{ fontSize: "18px" }}>2. Production Planning</Text>
                  <ul style={{ paddingLeft: 24, marginTop: 8, marginBottom: 16 }}>
                    <li>Coordinate with factories to meet demand forecasts</li>
                    <li>Example: Avoiding overproduction or stockouts (e.g., Toyota's Just-in-Time system)</li>
                  </ul>

                  <Text strong style={{ fontSize: "18px" }}>3. Logistics & Distribution</Text>
                  <ul style={{ paddingLeft: 24, marginTop: 8, marginBottom: 16 }}>
                    <li>Manage transportation (trucks, ships, air freight), warehousing, and inventory</li>
                    <li>Example: Amazon's fulfillment centers optimizing 2-day deliveries</li>
                  </ul>

                  <Text strong style={{ fontSize: "18px" }}>4. Demand Forecasting</Text>
                  <ul style={{ paddingLeft: 24, marginTop: 8, marginBottom: 16 }}>
                    <li>Use data analytics to predict sales and align inventory</li>
                    <li>Tools: SAP, Oracle, Excel (advanced modeling)</li>
                  </ul>

                  <Text strong style={{ fontSize: "18px" }}>5. Risk Management</Text>
                  <ul style={{ paddingLeft: 24, marginTop: 8, marginBottom: 16 }}>
                    <li>Mitigate disruptions (e.g., natural disasters, supplier delays)</li>
                    <li>Example: Chip shortages during COVID-19</li>
                  </ul>

                  <Text strong style={{ fontSize: "18px" }}>6. Sustainability</Text>
                  <ul style={{ paddingLeft: 24, marginTop: 8 }}>
                    <li>Implement eco-friendly practices (reduced waste, carbon-neutral shipping)</li>
                  </ul>
                </div>
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
                <Table 
                  columns={skillsColumns} 
                  dataSource={skillsData} 
                  pagination={false}
                  bordered
                  style={{ fontSize: "16px" }}
                />
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
                title={<span style={{ fontSize: "24px" }}>Famous Supply Chain Managers</span>}
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
                      src="/assets/tim-cook.jpg"
                      alt="Tim Cook"
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
                      <strong style={{ fontSize: "20px" }}>Tim Cook (Apple)</strong>
                      <br />
                      <strong>Role:</strong> Former SVP of Worldwide Operations → Apple CEO
                      <br />
                      <strong>Impact:</strong> Streamlined Apple's supply chain with Just-in-Time (JIT) manufacturing. Forged key partnerships (e.g., Foxconn) to scale iPhone production
                      <br />
                      <strong>Quote:</strong> "You kind of want to manage it like you're in the dairy business. If it gets past its freshness date, you have a problem."
                    </Paragraph>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 24 }}>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <img
                      src="/assets/elon-musk.jpg"
                      alt="Elon Musk"
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
                      <strong style={{ fontSize: "20px" }}>Elon Musk (Tesla/SpaceX)</strong>
                      <br />
                      <strong>Role:</strong> Vertical Integration Pioneer
                      <br />
                      <strong>Impact:</strong> Built Gigafactories to control battery supply chains. SpaceX's reusable rockets cut logistics costs for space missions
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

export default SupplyChainManager;