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

const DesignConsultant = () => {
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
            Design Consultant
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
            A Design Consultant provides expert advice and creative solutions to businesses or individuals on design-related projects, 
            bridging the gap between design, business strategy, and technical feasibility to improve functionality, aesthetics, 
            and user experience.
          </Paragraph>

          <Row gutter={[32, 32]}>
            {[
              {
                title: "Key Responsibilities",
                items: [
                  "Client Needs Assessment: Analyze objectives and conduct market research",
                  "Concept Development: Propose design directions and create visual prototypes",
                  "Collaboration: Work with designers, engineers, and marketers",
                  "Sustainability & Innovation: Advise on eco-materials and emerging tech",
                  "Problem-Solving: Troubleshoot design and manufacturing challenges"
                ]
              },
              {
                title: "Industries They Work In",
                items: [
                  "Product Design (Consumer goods, tech gadgets)",
                  "Interior Design (Residential, commercial spaces)",
                  "Fashion & Textiles (Collections, retail displays)",
                  "Graphic/Branding (Logos, packaging, UX/UI)",
                  "Architecture & Urban Planning"
                ]
              },
              {
                title: "Skills Required",
                items: [
                  "Visual and conceptual thinking",
                  "Proficiency in design tools (Adobe Suite, CAD, Figma)",
                  "Knowledge of materials and manufacturing",
                  "Communication and presentation skills",
                  "Business acumen (budgeting, project management)"
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
                  title={<span style={{ fontSize: "24px" }}>Influential Design Consultants</span>}
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
                          src="/assets/jony-ive.jpg"
                          alt="Jony Ive"
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
                        <strong style={{ fontSize: "20px" }}>Jony Ive (1967-Present)</strong>
                        <br />
                        <strong>Focus:</strong> Industrial & Product Design
                        <br />
                        <strong>Famous Work:</strong> Apple's iPhone, iMac, MacBook
                        <br />
                        <strong>Consulting Role:</strong> Founded LoveFrom (advising Airbnb, Ferrari)
                        <br />
                        <strong>Style:</strong> Minimalism, human-centered tech
                      </Paragraph>
                    </Col>
                  </Row>
                  <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
                    <Col xs={24} md={4}>
                      <motion.div whileHover={{ scale: 1.05 }} style={{ textAlign: "center" }}>
                        <img
                          src="/assets/tim-brown.jpg"
                          alt="Tim Brown"
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
                        <strong style={{ fontSize: "20px" }}>Tim Brown (1962-Present)</strong>
                        <br />
                        <strong>Focus:</strong> Design Thinking & Innovation
                        <br />
                        <strong>Role:</strong> CEO of IDEO (human-centered design pioneer)
                        <br />
                        <strong>Clients:</strong> Pepsi, Samsung, Ford
                        <br />
                        <strong>Legacy:</strong> Author of "Change by Design"
                      </Paragraph>
                    </Col>
                  </Row>
                  <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
                    <Col xs={24} md={4}>
                      <motion.div whileHover={{ scale: 1.05 }} style={{ textAlign: "center" }}>
                        <img
                          src="/assets/karim-rashid.jpg"
                          alt="Karim Rashid"
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
                        <strong style={{ fontSize: "20px" }}>Karim Rashid (1960-Present)</strong>
                        <br />
                        <strong>Focus:</strong> Product & Experience Design
                        <br />
                        <strong>Clients:</strong> Umbra, Method, Sony
                        <br />
                        <strong>Style:</strong> Playful futurism ("democratizing design")
                        <br />
                        <strong>Consulting:</strong> Helps brands innovate with color and form
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

export default DesignConsultant;