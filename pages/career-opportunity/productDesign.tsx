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

const ProductDesigner = () => {
  return (
    <>
    <Header/>
    <div style={{ marginTop: "6rem",padding: "60px 30px", maxWidth: 1200, margin: "auto", backgroundColor: "#fff" }}>
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={sectionVariant}
      >
        <Title level={1} style={{ textAlign: 'center', marginBottom: 50, color: '#0a2c64', fontSize: '42px' }}>
          Product Designer
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
          A product designer is someone who designs and develops products — both physical (like electronics, furniture, or clothing) 
          and digital (like apps or websites). They usually work across different stages, like researching customer needs, 
          sketching and prototyping ideas, testing with real users, collaborating with teams, and improving based on feedback.
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
                title={<span style={{ fontSize: "24px" }}>Key Responsibilities of a Product Designer</span>}
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
                  "User Research – Understanding user behaviors, needs, and pain points through interviews, surveys, and usability testing",
                  "UX (User Experience) Design – Creating wireframes, user flows, and prototypes to define how a product works",
                  "UI (User Interface) Design – Designing visual elements like buttons, icons, and layouts to ensure an intuitive interface",
                  "Prototyping & Testing – Building interactive prototypes and conducting usability tests to refine designs",
                  "Collaboration – Working with product managers, engineers, and stakeholders to align design with business goals",
                  "Iteration – Continuously improving designs based on user feedback and data",
                  "Design Systems – Maintaining consistency by creating and adhering to design guidelines and component libraries"
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
                {listItems([
                  "UX/UI Design (Figma, Sketch, Adobe XD)",
                  "Prototyping (Framer, ProtoPie)",
                  "User Research (Hotjar, UserTesting)",
                  "Interaction Design & Animation (After Effects, Principle)",
                  "Basic Front-End Knowledge (HTML/CSS, understanding of development constraints)"
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
                title={<span style={{ fontSize: "24px" }}>Famous Product Designers</span>}
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
                      src="/assets/jonathan-ive.jpg"
                      alt="Jonathan Ive"
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
                      <strong style={{ fontSize: "20px" }}>Jonathan Ive, United Kingdom</strong>
                      <br />
                      Known for his work at Apple Inc., Jonathan Ive is a British industrial designer who designed the 
                      iconic iPhone, iPad, and MacBook products. He is known for his minimalist and sleek design aesthetic, 
                      and his work has received numerous awards.
                    </Paragraph>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 24, marginBottom: 24 }}>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <img
                      src="/assets/james-dyson.jpg"
                      alt="James Dyson"
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
                      <strong style={{ fontSize: "20px" }}>Sir James Dyson, United Kingdom</strong>
                      <br />
                      A well-known and successful product designer, Sir James Dyson is known for his innovations in the 
                      field of vacuum cleaners and other household appliances. He shaped an entire industry with his creation 
                      of useful products and founded Dyson, the world-famous technology-led solutions brand.
                    </Paragraph>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 24 }}>
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
                      <strong style={{ fontSize: "20px" }}>Philippe Starck, France</strong>
                      <br />
                      French designer Philippe Starck is known for his innovative and unconventional designs in various 
                      domains, including product design, interior design, and architecture. His creations include furniture, 
                      household items, consumer electronics, and lighting fixtures.
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

export default ProductDesigner;