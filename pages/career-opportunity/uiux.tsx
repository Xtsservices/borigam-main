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

const UiUxDesigner = () => {
  const uiUxComparisonData = [
    {
      aspect: "Focus",
      ux: "Functionality & Usability",
      ui: "Visuals & Interactivity"
    },
    {
      aspect: "Output",
      ux: "Wireframes, User Flows, Research",
      ui: "High-fidelity mockups, Icons, Animations"
    },
    {
      aspect: "Tools",
      ux: "Figma, Sketch, Miro, UserTesting",
      ui: "Figma, Adobe XD, Photoshop, After Effects"
    },
    {
      aspect: "Mindset",
      ux: "Problem-solving (Is this easy to use?)",
      ui: "Aesthetics (Does this look good?)"
    }
  ];

  const columns = [
    {
      title: 'Aspect',
      dataIndex: 'aspect',
      key: 'aspect',
    },
    {
      title: 'UX Designer',
      dataIndex: 'ux',
      key: 'ux',
    },
    {
      title: 'UI Designer',
      dataIndex: 'ui',
      key: 'ui',
    },
  ];

  return (
    <><Header/><div style={{marginTop: "6rem", padding: "60px 30px", maxWidth: 1200, margin: "auto", backgroundColor: "#fff" }}>
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={sectionVariant}
      >
        <Title level={1} style={{ textAlign: 'center', marginBottom: 50, color: '#0a2c64', fontSize: '42px' }}>
          UI/UX Designer
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
          A UI/UX designer is someone who focuses on making digital products — like apps, websites, and software — 
          easy to use and visually appealing.
        </Paragraph>

        <Row gutter={[32, 32]}>
          {[
            {
              title: "What is UX Design? (User Experience)",
              items: [
                "Focuses on how a product feels and the overall user journey.",
                "Key Responsibilities:",
                "• User Research (interviews, surveys, usability testing)",
                "• Information Architecture (organizing content logically)",
                "• Wireframing & Prototyping (low-fidelity layouts)",
                "• User Flows (mapping how users navigate a product)",
                "• Usability Testing (identifying pain points)",
                "Goal: Make products intuitive, efficient, and enjoyable to use."
              ]
            },
            {
              title: "What is UI Design? (User Interface)",
              items: [
                "Focuses on how a product looks—the visual and interactive elements.",
                "Key Responsibilities:",
                "• Visual Design (colors, typography, icons, buttons)",
                "• Responsive Design (ensuring layouts work on all devices)",
                "• Interactive Elements (animations, micro-interactions)",
                "• Design Systems (consistent UI components & style guides)",
                "• Handoff to Developers (providing specs, assets, and prototypes)",
                "Goal: Make products aesthetically pleasing, on-brand, and easy to interact with."
              ]
            },
            {
              title: "Career Paths in UI/UX",
              items: [
                "UX Researcher → Focuses on user behavior & data.",
                "UI Designer → Specializes in visual design.",
                "Interaction Designer → Focuses on animations & micro-interactions.",
                "Product Designer → Broader role (UX + UI + strategy)."
              ]
            },
            {
              title: "Popular Tools for UI/UX Designers",
              items: [
                "Wireframing & Prototyping: Figma, Sketch, Adobe XD",
                "User Research: Hotjar, Optimal Workshop, UserTesting",
                "Animation & Micro-interactions: After Effects, Principle, ProtoPie"
              ]
            }
          ].map((card, index) => (
            <Col xs={24} md={12} key={index}>
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
                title={<span style={{ fontSize: "24px" }}>UI vs. UX: Key Differences</span>}
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
                  dataSource={uiUxComparisonData} 
                  columns={columns} 
                  pagination={false}
                  bordered
                  style={{ marginBottom: 24 }}
                />
                <Paragraph style={{ fontSize: 18, marginBottom: 0 }}>
                  <Text strong>Do UI/UX Designers Code?</Text>
                  <br />
                  • Not required, but knowing basics (HTML/CSS, how APIs work) helps collaboration with developers
                  <br />
                  • Some roles (like UX Engineer) blend design and front-end coding.
                </Paragraph>
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
                title={<span style={{ fontSize: "24px" }}>Famous UI/UX Designers</span>}
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
                      src="/assets/jared-spool.jpg"
                      alt="Jared Spool"
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
                      <strong style={{ fontSize: "20px" }}>Jared Spool</strong>
                      <br />
                      American writer, researcher, speaker, and educator specializing in usability and design.
                      <br />
                      Founding principal of User Interface Engineering and a leading voice in UX research methodology.
                    </Paragraph>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 24 }}>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <img
                      src="/assets/jesse-james-garrett.jpg"
                      alt="Jesse James Garrett"
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
                      <strong style={{ fontSize: "20px" }}>Jesse James Garrett</strong>
                      <br />
                      User Experience Designer based in San Francisco and co-founder of Adaptive Path.
                      <br />
                      Known for creating the "Elements of User Experience" framework that defines modern UX practice.
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

export default UiUxDesigner;