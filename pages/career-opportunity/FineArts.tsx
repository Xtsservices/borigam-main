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

const FineArtist = () => {
  return (
    <>
    <Header/>
    <div style={{ padding: "60px 30px",marginTop: "6rem", maxWidth: 1200, margin: "auto", backgroundColor: "#fff" }}>
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={sectionVariant}
      >
        <Title level={1} style={{ textAlign: 'center', marginBottom: 50, color: '#0a2c64', fontSize: '42px' }}>
          Fine Artist
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
          A Fine Artist creates original works of art primarily for their aesthetic and intellectual value, 
          expressing ideas and emotions through diverse mediums while often pushing cultural boundaries 
          and challenging societal norms.
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
                title={<span style={{ fontSize: "24px" }}>Key Characteristics</span>}
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
                  "Mediums: Painting (oil, acrylic), sculpture (clay, bronze), digital art, installation",
                  "Creative Process: Concept development and mastery of techniques",
                  "Exhibition & Sales: Showcased in galleries and sold through auctions/online platforms",
                  "Emerging Forms: NFTs, AI-generated art, bio-art using living organisms"
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
                title={<span style={{ fontSize: "24px" }}>Types of Fine Artists</span>}
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
                  "Painters: Pablo Picasso, Yayoi Kusama",
                  "Sculptors: Auguste Rodin, Anish Kapoor",
                  "Conceptual Artists: Marina Abramović, Joseph Beuys",
                  "Street Artists: Banksy, JR",
                  "Digital Artists: Beeple, Refik Anadol"
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
                  "Technical Proficiency: Mastery of chosen mediums and techniques",
                  "Conceptual Depth: Ability to convey complex ideas through art",
                  "Business Acumen: Self-promotion, networking, and pricing strategies",
                  "Adaptability: Working across traditional and contemporary mediums"
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
                title={<span style={{ fontSize: "24px" }}>Notable Fine Artists</span>}
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
                      src="/assets/yayoi-kusama.jpg"
                      alt="Yayoi Kusama"
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
                      <strong style={{ fontSize: "20px" }}>Yayoi Kusama (1929-Present)</strong>
                      <br />
                      <strong>Medium:</strong> Painting, sculpture, installation
                      <br />
                      <strong>Signature Style:</strong> Polka dots, infinity rooms
                      <br />
                      <strong>Legacy:</strong> Blurs boundaries between art and mental health awareness
                    </Paragraph>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 24, marginBottom: 24 }}>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <img
                      src="/assets/banksy.jpg"
                      alt="Banksy"
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
                      <strong style={{ fontSize: "20px" }}>Banksy (Anonymous)</strong>
                      <br />
                      <strong>Medium:</strong> Street art, stencil graffiti
                      <br />
                      <strong>Signature Style:</strong> Political and social commentary
                      <br />
                      <strong>Notable Work:</strong> "Girl with Balloon" self-destructing at auction
                    </Paragraph>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 24 }}>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <img
                      src="/assets/beeple.jpg"
                      alt="Beeple"
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
                      <strong style={{ fontSize: "20px" }}>Beeple (Mike Winkelmann, 1981-Present)</strong>
                      <br />
                      <strong>Medium:</strong> Digital art, NFTs
                      <br />
                      <strong>Signature Style:</strong> Surreal digital collages
                      <br />
                      <strong>Legacy:</strong> Sold "Everydays: The First 5000 Days" for $69 million
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

export default FineArtist;