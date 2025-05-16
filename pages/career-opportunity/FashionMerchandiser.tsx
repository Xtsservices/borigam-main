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

const FashionMerchandiser = () => {
  return (
    <>
      <Head>
        <title>Fashion Merchandiser | Career Paths</title>
        <meta name="description" content="Learn about the role of a fashion merchandiser in the fashion industry" />
      </Head>
      <Header />
      <div style={{ padding: "60px 30px", marginTop: "6rem", maxWidth: 1200, margin: "auto", backgroundColor: "#fff" }}>
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={sectionVariant}
        >
          <Title level={1} style={{ textAlign: 'center', marginBottom: 50, color: '#0a2c64', fontSize: '42px' }}>
            Fashion Merchandiser
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
            A fashion merchandiser is a strategic professional who bridges the gap between design and sales, 
            analyzing trends and consumer behavior to optimize product assortments, pricing, and inventory 
            for maximum profitability.
          </Paragraph>

          <Row gutter={[32, 32]}>
            {[
              {
                title: "Key Responsibilities",
                items: [
                  "Market Research: Analyze sales data and predict trends using WGSN/Pantone",
                  "Product Planning: Decide styles, colors and quantities to buy/produce",
                  "Pricing Strategy: Set markups/markdowns based on demand and seasonality",
                  "Inventory Management: Track stock levels and coordinate with suppliers",
                  "Visual Merchandising: Design in-store displays and e-commerce layouts",
                  "Sales Analysis: Generate reports on bestsellers to guide future buys"
                ]
              },
              {
                title: "Types of Fashion Merchandisers",
                items: [
                  "Retail Merchandiser: Curates product mixes for stores like Target or H&M",
                  "Wholesale Merchandiser: Manages bulk sales to retailers through showrooms",
                  "E-commerce Merchandiser: Optimizes online product listings and SEO",
                  "Luxury Merchandiser: Focuses on exclusivity for brands like Chanel"
                ]
              },
              {
                title: "Skills Required",
                items: [
                  "Analytical Skills: Excel, Tableau, and retail analytics software",
                  "Trend Sensitivity: Spot emerging styles from TikTok to runway",
                  "Negotiation: Work with vendors/buyers for better profit margins",
                  "Visual Sense: Understand how displays drive customer purchases"
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
                  title={<span style={{ fontSize: "24px" }}>Merchandising Innovators</span>}
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
                          src="/assets/mickey-drexler.jpg"
                          alt="Mickey Drexler"
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
                        <strong style={{ fontSize: "20px" }}>Mickey Drexler (1944-Present)</strong>
                        <br />
                        <strong>Nickname:</strong> "The Merchant Prince"
                        <br />
                        <strong>Key Roles:</strong> J.Crew CEO, Gap Inc.
                        <br />
                        <strong>Innovations:</strong> Turned Gap into global phenomenon, launched Madewell
                        <br />
                        <strong>Legacy:</strong> Master of product storytelling and brand reinvention
                      </Paragraph>
                    </Col>
                  </Row>
                  <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
                    <Col xs={24} md={4}>
                      <motion.div whileHover={{ scale: 1.05 }} style={{ textAlign: "center" }}>
                        <img
                          src="/assets/ron-johnson.jpg"
                          alt="Ron Johnson"
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
                        <strong style={{ fontSize: "20px" }}>Ron Johnson (1959-Present)</strong>
                        <br />
                        <strong>Key Roles:</strong> Apple Retail SVP, JC Penney CEO
                        <br />
                        <strong>Innovations:</strong> Created Apple's minimalist store merchandising
                        <br />
                        <strong>Tactics:</strong> Introduced "month-long values" at JCPenney
                      </Paragraph>
                    </Col>
                  </Row>
                  <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
                    <Col xs={24} md={4}>
                      <motion.div whileHover={{ scale: 1.05 }} style={{ textAlign: "center" }}>
                        <img
                          src="/assets/tyler-creator.jpg"
                          alt="Tyler, the Creator"
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
                        <strong style={{ fontSize: "20px" }}>Tyler, the Creator (1991-Present)</strong>
                        <br />
                        <strong>Brand:</strong> GOLF le FLEUR
                        <br />
                        <strong>Merchandising Tactics:</strong> Scarcity marketing with limited drops
                        <br />
                        <strong>Style:</strong> Nostalgic merch with pastel colorways and 90s graphics
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

export default FashionMerchandiser;