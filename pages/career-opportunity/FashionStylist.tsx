import React from "react";
import { Typography, Row, Col, Card } from "antd";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Head from "next/head";

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

const FashionStylist = () => {
  return (
    <>
      <Head>
        <title>Fashion Stylist | Career Paths</title>
        <meta name="description" content="Learn about the role of a fashion stylist in the fashion industry" />
      </Head>
      <Header />
      <div style={{ padding: "60px 30px", marginTop: "8rem", maxWidth: 1200, margin: "auto", backgroundColor: "#fff" }}>
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={sectionVariant}
        >
          <Title level={1} style={{ textAlign: 'center', marginBottom: 50, color: '#0a2c64', fontSize: "clamp(1.5rem, 5vw, 2.625rem)" /* Responsive H1: 24px to 42px */ }}>
            Fashion Stylist
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
            A fashion stylist is a creative professional who curates clothing, accessories, and overall looks to create 
            impactful style narratives. They shape public perception through red-carpet moments, editorials, and brand 
            campaigns by combining storytelling, trend knowledge, and visual aesthetics.
          </Paragraph>

          <Row gutter={[32, 32]}>
            {[
              {
                title: "Key Responsibilities",
                items: [
                  "Concept Development: Define visual themes and create mood boards",
                  "Clothing Selection: Source pieces from designers and vintage stores",
                  "Collaboration: Work with photographers and advise clients on image transformation",
                  "Trend Forecasting: Predict styles and adapt them to client personas",
                  "Logistics: Negotiate brand loans and oversee fittings"
                ]
              },
              {
                title: "Types of Fashion Stylists",
                items: [
                  "Celebrity Stylist: Red carpets and tours (e.g., Law Roach for Zendaya)",
                  "Editorial Stylist: Magazine spreads (e.g., Edward Enninful at British Vogue)",
                  "Commercial Stylist: Ad campaigns for brands like Nike or H&M",
                  "Personal Stylist: Wardrobe consulting for private clients",
                  "Costume Stylist: Film/TV (e.g., Arianne Phillips for Mad Max)"
                ]
              },
              {
                title: "Skills Required",
                items: [
                  "Visual Storytelling: Create cohesive looks with narrative impact",
                  "Networking: Build relationships with designers and PR agencies",
                  "Adaptability: Handle last-minute changes on set",
                  "Technical Knowledge: Understand fabrics and historical fashion eras"
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
                  title={<span style={{ fontSize: "24px" }}>Iconic Fashion Stylists</span>}
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
                          src="/assets/law-roach.jpg"
                          alt="Law Roach"
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
                        <strong style={{ fontSize: "20px" }}>Law Roach (1978-Present)</strong>
                        <br />
                        <strong>Title:</strong> "Image Architect"
                        <br />
                        <strong>Signature Clients:</strong> Zendaya, Céline Dion
                        <br />
                        <strong>Style DNA:</strong> Vintage-meets-futurism (Met Gala Cinderella glow-up)
                        <br />
                        <strong>Legacy:</strong> First stylist to win CFDA's Style Icon Award
                      </Paragraph>
                    </Col>
                  </Row>
                  <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
                    <Col xs={24} md={4}>
                      <motion.div whileHover={{ scale: 1.05 }} style={{ textAlign: "center" }}>
                        <img
                          src="/assets/rachel-zoe.jpg"
                          alt="Rachel Zoe"
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
                        <strong style={{ fontSize: "20px" }}>Rachel Zoe (1971-Present)</strong>
                        <br />
                        <strong>Title:</strong> Queen of "Boho Chic"
                        <br />
                        <strong>Signature Clients:</strong> Nicole Richie, Anne Hathaway
                        <br />
                        <strong>Style DNA:</strong> Layered maxi dresses, Y2K luxe
                        <br />
                        <strong>Legacy:</strong> Brought styling mainstream through reality TV
                      </Paragraph>
                    </Col>
                  </Row>
                  <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
                    <Col xs={24} md={4}>
                      <motion.div whileHover={{ scale: 1.05 }} style={{ textAlign: "center" }}>
                        <img
                          src="/assets/lotta-volkova.jpg"
                          alt="Lotta Volkova"
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
                        <strong style={{ fontSize: "20px" }}>Lotta Volkova (1985-Present)</strong>
                        <br />
                        <strong>Title:</strong> Vetements/Balenciaga's Secret Weapon
                        <br />
                        <strong>Signature Work:</strong> Grunge-meets-deconstruction for Demna Gvasalia
                        <br />
                        <strong>Style DNA:</strong> Socks with sandals, dystopian layering
                        <br />
                        <strong>Legacy:</strong> Redefined luxury's relationship with streetwear
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

export default FashionStylist;