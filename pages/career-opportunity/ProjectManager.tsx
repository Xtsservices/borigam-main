import React from "react";
import { Typography, Row, Col, Card } from "antd";
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

const ProjectManager = () => {
  return (
    <><Header /><div style={{ marginTop: "8rem",padding: "60px 30px", maxWidth: 1200, margin: "auto", backgroundColor: "#fff" }}>
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={sectionVariant}
      >
        <Title level={1} style={{ textAlign: 'center', marginBottom: 50, color: '#0a2c64', fontSize: "clamp(1.5rem, 5vw, 2.625rem)" /* Responsive H1: 24px to 42px */ }}>
          Project Manager
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
          A Project Manager (PM) is a professional responsible for planning, executing, and closing projects—ensuring they are completed on time, 
          within budget, and meet defined goals. They act as the bridge between teams, stakeholders, and resources, 
          orchestrating all moving parts to deliver successful outcomes.
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
                  <Text strong style={{ fontSize: "18px" }}>1. Project Planning</Text>
                  <ul style={{ paddingLeft: 24, marginTop: 8, marginBottom: 16 }}>
                    <li>Define scope, objectives, and deliverables (SMART goals)</li>
                    <li>Create timelines (Gantt charts, Critical Path Method)</li>
                    <li>Allocate resources (budget, team, tools)</li>
                  </ul>

                  <Text strong style={{ fontSize: "18px" }}>2. Team Leadership</Text>
                  <ul style={{ paddingLeft: 24, marginTop: 8, marginBottom: 16 }}>
                    <li>Assign tasks and track progress (Agile, Waterfall, or Hybrid methodologies)</li>
                    <li>Resolve conflicts and motivate team members</li>
                  </ul>

                  <Text strong style={{ fontSize: "18px" }}>3. Risk Management</Text>
                  <ul style={{ paddingLeft: 24, marginTop: 8, marginBottom: 16 }}>
                    <li>Identify potential risks (delays, cost overruns) and develop mitigation plans</li>
                  </ul>

                  <Text strong style={{ fontSize: "18px" }}>4. Stakeholder Communication</Text>
                  <ul style={{ paddingLeft: 24, marginTop: 8, marginBottom: 16 }}>
                    <li>Report updates to clients, executives, or investors</li>
                    <li>Manage expectations and negotiate changes (change orders)</li>
                  </ul>

                  <Text strong style={{ fontSize: "18px" }}>5. Quality Control</Text>
                  <ul style={{ paddingLeft: 24, marginTop: 8 }}>
                    <li>Ensure deliverables meet standards (ISO, Six Sigma)</li>
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
                title={<span style={{ fontSize: "24px" }}>Types of Project Managers</span>}
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
                  "Construction PM: Oversees building projects (skyscrapers, bridges)",
                  "IT/Software PM: Manages app development, system rollouts (Scrum, DevOps)",
                  "Marketing PM: Leads campaigns, product launches",
                  "Event PM: Coordinates conferences, weddings",
                  "Healthcare PM: Implements hospital systems or vaccine distribution"
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
                  background: 'linear-gradient(90deg, #ff5722, #ff9800)',
                  color: "#fff",
                  fontSize: "24px",
                  padding: "20px 24px",
                  border: 'none'
                }}
                bodyStyle={{ padding: "24px" }}
              >
                {listItems([
                  "Technical: Tools like Microsoft Project, Jira, Trello, Asana",
                  "Soft Skills: Leadership, negotiation, problem-solving",
                  "Industry Knowledge: Understanding sector-specific challenges (e.g., FDA compliance for healthcare PMs)"
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
                title={<span style={{ fontSize: "24px" }}>Famous Project Managers</span>}
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
                      src="/assets/henry-gantt.jpg"
                      alt="Henry Gantt"
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
                      <strong style={{ fontSize: "20px" }}>Henry Gantt (1861–1919) – The Visualization Pioneer</strong>
                      <br />
                      <strong>Claim to Fame:</strong> Invented the Gantt Chart (1917), now used in every project management tool.
                      <br />
                      <strong>Key Project:</strong> Helped build the Hoover Dam precursor projects.
                      <br />
                      <strong>Legacy:</strong> Father of scientific task scheduling.
                    </Paragraph>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 24, marginBottom: 24 }}>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <img
                      src="/assets/indra-nooyi.jpg"
                      alt="Indra Nooyi"
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
                      <strong style={{ fontSize: "20px" }}>Indra Nooyi (1955–Present) – The Corporate Project Whisperer</strong>
                      <br />
                      <strong>Role:</strong> Former CEO of PepsiCo (2006–2018).
                      <br />
                      <strong>Mega-Projects:</strong> Oversaw the $13B Tropicana acquisition (1998), launched PepsiCo's Performance with Purpose sustainability initiative.
                      <br />
                      <strong>Style:</strong> Blended strategic vision with hands-on execution.
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
                      <strong style={{ fontSize: "20px" }}>Elon Musk (1971–Present) – The Mega-Project Maverick</strong>
                      <br />
                      <strong>Projects:</strong> Tesla Gigafactories – Scaled EV production globally; SpaceX Starship – Rapid iterative testing.
                      <br />
                      <strong>Method:</strong> Sets "impossible" deadlines to drive urgency (e.g., "The Tesla Model 3 must ship in 2017 or we're bankrupt").
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

export default ProjectManager;