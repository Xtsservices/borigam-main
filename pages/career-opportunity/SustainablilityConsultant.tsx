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

const SustainabilityConsultant = () => {
  return (
    <div style={{ padding: "60px 30px", maxWidth: 1200, margin: "auto", backgroundColor: "#fff" }}>
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={sectionVariant}
      >
        <Title level={1} style={{ textAlign: 'center', marginBottom: 50, color: '#0a2c64', fontSize: '42px' }}>
          Sustainability Consultant
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
          A Sustainability Consultant is a professional who helps organizations reduce their environmental impact, 
          improve social responsibility, and achieve long-term economic viability. They analyze operations, 
          recommend eco-friendly practices, and ensure compliance with sustainability standards—balancing planet, 
          people, and profit.
        </Paragraph>

        <Row gutter={[32, 32]}>
          {[
            {
              title: "Key Responsibilities",
              items: [
                "Environmental Audits: Assess carbon footprints, waste, water/energy use (e.g., measuring a factory's emissions). Identify inefficiencies using tools like Life Cycle Assessment (LCA).",
                "Strategy Development: Create roadmaps for net-zero goals, circular economy practices, or ESG (Environmental, Social, Governance) compliance. Example: Helping IKEA shift to 100% renewable energy.",
                "Regulatory Guidance: Navigate laws like EU Green Deal, California's SB 253 (climate disclosure), or LEED certification.",
                "Stakeholder Engagement: Train employees, collaborate with suppliers (e.g., sustainable sourcing for Patagonia), and communicate with investors.",
                "Innovation & Tech: Recommend clean tech (solar, hydrogen fuel), carbon offset programs, or biodegradable packaging."
              ]
            },
            {
              title: "Types of Sustainability Consultants",
              items: [
                "Corporate Sustainability: Help businesses like Unilever meet ESG goals.",
                "Built Environment: Green building consultants (LEED, BREEAM).",
                "Supply Chain: Ethical sourcing advisors (Fair Trade, conflict minerals).",
                "Policy Advisors: Work with governments on climate action plans."
              ]
            },
            {
              title: "Skills Required",
              items: [
                "Analytical: Data modeling, GHG Protocol, SimaPro/GaBi (LCA software).",
                "Communication: Translating complex metrics into actionable plans.",
                "Industry Knowledge: Familiarity with sectors like fashion (textile recycling) or agriculture (regenerative farming)."
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
                title={<span style={{ fontSize: "24px" }}>Leading Sustainability Experts</span>}
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
                      src="/assets/paul-hawken.jpg"
                      alt="Paul Hawken"
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
                      <strong style={{ fontSize: "20px" }}>Paul Hawken</strong>
                      <br />
                      Famous For: Project Drawdown (100+ climate solutions ranked by impact).
                      <br />
                      Clients/Projects: Advised Google, Walmart on decarbonization.
                      <br />
                      Quote: "We have every solution needed to reverse global warming—just not at scale."
                    </Paragraph>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 24, marginBottom: 24 }}>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <img
                      src="/assets/ellen-macarthur.jpg"
                      alt="Ellen MacArthur"
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
                      <strong style={{ fontSize: "20px" }}>Ellen MacArthur</strong>
                      <br />
                      Foundation: Ellen MacArthur Foundation (circular economy leader).
                      <br />
                      Corporate Partners: H&M (recycled textiles), Unilever (plastic waste reduction).
                      <br />
                      Impact: Pushed Starbucks to phase out single-use cups.
                    </Paragraph>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 24 }}>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <img
                      src="/assets/amory-lovins.jpg"
                      alt="Amory Lovins"
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
                      <strong style={{ fontSize: "20px" }}>Amory Lovins</strong>
                      <br />
                      Organization: Rocky Mountain Institute (energy efficiency pioneers).
                      <br />
                      Notable Clients: Tesla (battery storage strategies), U.S. Department of Defense (energy resilience).
                      <br />
                      Concept: "Negawatts" (saving energy as a resource).
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

export default SustainabilityConsultant;