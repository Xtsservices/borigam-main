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
    title: 'Technical',
    dataIndex: 'technical',
    key: 'technical',
  },
  {
    title: 'Business',
    dataIndex: 'business',
    key: 'business',
  },
  {
    title: 'Soft Skills',
    dataIndex: 'softSkills',
    key: 'softSkills',
  },
];

const skillsData = [
  {
    key: '1',
    technical: 'Basic coding (SQL, APIs)',
    business: 'Market analysis',
    softSkills: 'Leadership'
  },
  {
    key: '2',
    technical: 'Agile/Scrum methodologies',
    business: 'Pricing strategies',
    softSkills: 'Communication'
  },
  {
    key: '3',
    technical: 'A/B testing',
    business: 'Competitive analysis',
    softSkills: 'Empathy (for users/teams)'
  },
];

const ProductManager = () => {
  return (
    <><Header /><div style={{marginTop: "6rem", padding: "60px 30px", maxWidth: 1200, margin: "auto", backgroundColor: "#fff" }}>
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={sectionVariant}
      >
        <Title level={1} style={{ textAlign: 'center', marginBottom: 50, color: '#0a2c64', fontSize: '42px' }}>
          Product Manager
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
          A Product Manager (PM) is a strategic role responsible for guiding the development, launch, and continuous improvement of a product (digital or physical). 
          They act as the bridge between business, technology, and user needs, ensuring a product delivers value to customers while meeting company goals.
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
                title={<span style={{ fontSize: "24px" }}>Key Responsibilities of a Product Manager</span>}
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
                <div style={{ fontSize: "18px", color: "#333" }}>
                  <Text strong style={{ fontSize: "18px" }}>1. Define Product Vision & Strategy</Text>
                  <ul style={{ paddingLeft: 24, marginTop: 8, marginBottom: 16 }}>
                    <li>Align product goals with business objectives (e.g., "Increase user retention by 20%")</li>
                    <li>Answer: Why should this product exist?</li>
                  </ul>

                  <Text strong style={{ fontSize: "18px" }}>2. Understand User Needs</Text>
                  <ul style={{ paddingLeft: 24, marginTop: 8, marginBottom: 16 }}>
                    <li>Conduct market research, user interviews, and analyze data to identify pain points</li>
                    <li>Example: Airbnb PMs studied travelers' frustrations with hotels to design a peer-to-peer rental model</li>
                  </ul>

                  <Text strong style={{ fontSize: "18px" }}>3. Prioritize Features & Roadmaps</Text>
                  <ul style={{ paddingLeft: 24, marginTop: 8, marginBottom: 16 }}>
                    <li>Decide what to build (and what not to) using frameworks like RICE (Reach, Impact, Confidence, Effort)</li>
                    <li>Balance stakeholder inputs (engineering, marketing, sales)</li>
                  </ul>

                  <Text strong style={{ fontSize: "18px" }}>4. Work with Cross-Functional Teams</Text>
                  <ul style={{ paddingLeft: 24, marginTop: 8, marginBottom: 16 }}>
                    <li>Collaborate with Engineers (feasibility), Designers (UX/UI), Marketing/Sales (go-to-market strategy)</li>
                  </ul>

                  <Text strong style={{ fontSize: "18px" }}>5. Measure Success</Text>
                  <ul style={{ paddingLeft: 24, marginTop: 8 }}>
                    <li>Track KPIs like DAU (Daily Active Users), churn rate, or revenue</li>
                    <li>Use tools: Google Analytics, Mixpanel, SQL</li>
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
                title={<span style={{ fontSize: "24px" }}>Skills Needed</span>}
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
                title={<span style={{ fontSize: "24px" }}>Types of Product Managers</span>}
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
                  "B2C PM: Focus on mass-market apps (e.g., Spotify, TikTok)",
                  "B2B PM: Serve businesses (e.g., Salesforce, Slack)",
                  "Technical PM: Deep tech focus (e.g., AI/cloud products)",
                  "Growth PM: Optimize user acquisition/retention"
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
                title={<span style={{ fontSize: "24px" }}>Famous Product Managers</span>}
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
                      src="/assets/sundar-pichai.jpg"
                      alt="Sundar Pichai"
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
                      <strong style={{ fontSize: "20px" }}>Sundar Pichai</strong>
                      <br />
                      <strong>Role:</strong> Early PM for Google Toolbar & Chrome → Google CEO → Alphabet CEO
                      <br />
                      <strong>Impact:</strong> Led Chrome to dominate browsers (60%+ market share)
                      <br />
                      <strong>Quote:</strong> "Focus on the user, and all else will follow"
                    </Paragraph>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 24 }}>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <img
                      src="/assets/marissa-mayer.jpg"
                      alt="Marissa Mayer"
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
                      <strong style={{ fontSize: "20px" }}>Marissa Mayer</strong>
                      <br />
                      <strong>Role:</strong> First female Google PM (Search, Gmail, Maps) → Yahoo CEO
                      <br />
                      <strong>Impact:</strong> Simplified Google's homepage (crazy 1999 idea: "Just a search box")
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

export default ProductManager;