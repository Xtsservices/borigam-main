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
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const listItems = (items: string[]) => (
  <ul style={{ paddingLeft: 24, color: "#333", fontSize: "18px" }}>
    {items.map((item, idx) => (
      <li key={idx} style={{ marginBottom: 12 }}>
        {item}
      </li>
    ))}
  </ul>
);

const GraphicDesigner = () => {
  return (
    <>
      <Header />
      <div
        style={{
          padding: "60px 30px",
          marginTop: "8rem",
          maxWidth: 1200,
          margin: "auto",
          backgroundColor: "#fff",
        }}
      >
        <motion.div initial="hidden" animate="visible" variants={sectionVariant}>
          <Title
            level={1}
            style={{
              textAlign: "center",
              marginBottom: 50,
              color: "#0a2c64",
              fontSize: "42px",
            }}
          >
            Graphic Designer
            <div
              style={{
                height: 4,
                width: 120,
                background:
                  "linear-gradient(90deg, #ff5722, #ff9800)",
                margin: "20px auto 40px",
              }}
            ></div>
          </Title>
          <Paragraph
            style={{ fontSize: 20, lineHeight: 1.8, color: "#333", marginBottom: 40 }}
          >
            A graphic designer is a visual communicator who combines images, typography, color,
            and layout to create designs that convey messages, solve problems, or enhance
            aesthetics. They work across print and digital media, blending creativity with
            technical skills to produce everything from logos and posters to websites and app
            interfaces.
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
                  title={<span style={{ fontSize: "24px" }}>Key Responsibilities of a Graphic Designer</span>}
                  style={cardStyle}
                  headStyle={{
                    background:
                      "linear-gradient(90deg, #ff5722, #ff9800)",
                    color: "#fff",
                    fontSize: "24px",
                    padding: "20px 24px",
                    border: "none",
                  }}
                  bodyStyle={{ padding: "24px" }}
                >
                  <ul style={{ paddingLeft: 24, color: "#333", fontSize: "18px" }}>
                    <li style={{ marginBottom: 12 }}>
                      <strong>Visual Identity & Branding</strong>
                      <ul style={{ paddingLeft: 20, marginTop: 8 }}>
                        <li>Design logos, color palettes, and brand guidelines.</li>
                        <li>Example: Creating a cohesive look for a company (e.g., Nike’s Swoosh + typography).</li>
                      </ul>
                    </li>
                    <li style={{ marginBottom: 12 }}>
                      <strong>Print Design</strong>
                      <ul style={{ paddingLeft: 20, marginTop: 8 }}>
                        <li>Posters, brochures, packaging, magazines.</li>
                        <li>Example: Album covers, book layouts, or product labels.</li>
                      </ul>
                    </li>
                    <li style={{ marginBottom: 12 }}>
                      <strong>Digital Design</strong>
                      <ul style={{ paddingLeft: 20, marginTop: 8 }}>
                        <li>Website layouts, social media graphics, app interfaces.</li>
                        <li>Example: Instagram ads or YouTube thumbnails.</li>
                      </ul>
                    </li>
                    <li style={{ marginBottom: 12 }}>
                      <strong>Typography</strong>
                      <ul style={{ paddingLeft: 20, marginTop: 8 }}>
                        <li>Select and arrange fonts for readability and impact.</li>
                        <li>Example: Movie title sequences (Star Wars opening crawl).</li>
                      </ul>
                    </li>
                    <li style={{ marginBottom: 12 }}>
                      <strong>User Interface (UI) Design</strong>
                      <ul style={{ paddingLeft: 20, marginTop: 8 }}>
                        <li>Design buttons, icons, and interactive elements for apps/websites.</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Collaboration</strong>
                      <ul style={{ paddingLeft: 20, marginTop: 8 }}>
                        <li>Work with marketers, writers, and developers to align visuals with goals.</li>
                      </ul>
                    </li>
                  </ul>
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
                    background:
                      "linear-gradient(90deg, #ff5722, #ff9800)",
                    color: "#fff",
                    fontSize: "24px",
                    padding: "20px 24px",
                    border: "none",
                  }}
                  bodyStyle={{ padding: "24px" }}
                >
                  {listItems([
                    "Software: Adobe Creative Suite (Photoshop, Illustrator, InDesign), Figma, Canva, Sketch (for UI/UX).",
                    "Core Skills: Layout composition, color theory, visual hierarchy.",
                    "Adapting styles (minimalist, retro, futuristic).",
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
                  title={<span style={{ fontSize: "24px" }}>Types of Graphic Designers</span>}
                  style={cardStyle}
                  headStyle={{
                    background:
                      "linear-gradient(90deg, #ff5722, #ff9800)",
                    color: "#fff",
                    fontSize: "24px",
                    padding: "20px 24px",
                    border: "none",
                  }}
                  bodyStyle={{ padding: "24px" }}
                >
                  {listItems([
                    "Brand Identity Designer – Logos + brand systems.",
                    "Marketing Designer – Ads, banners, email templates.",
                    "Publication Designer – Books, magazines, newspapers.",
                    "Packaging Designer – Product boxes, labels.",
                    "Motion Graphics Designer – Animated visuals (title sequences, GIFs).",
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
                  title={<span style={{ fontSize: "24px" }}>Legendary Graphic Designers</span>}
                  style={cardStyle}
                  headStyle={{
                    background:
                      "linear-gradient(90deg, #ff5722, #ff9800)",
                    color: "#fff",
                    fontSize: "24px",
                    padding: "20px 24px",
                    border: "none",
                  }}
                  bodyStyle={{ padding: "24px" }}
                >
                  <div style={{ display: "flex", gap: 24, marginBottom: 24 }}>
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <img
                        src="/assets/paul-rand.jpg" // Replace with actual image path
                        alt="Paul Rand"
                        style={{
                          width: 120,
                          height: 120,
                          borderRadius: 16,
                          objectFit: "cover",
                          border: "2px solid #FF8C00",
                        }}
                      />
                    </motion.div>
                    <div>
                      <Paragraph style={{ marginBottom: 0, fontSize: "18px" }}>
                        <strong style={{ fontSize: "20px" }}>Paul Rand (1914–1996)</strong>
                        <br />
                        Iconic Work: IBM, ABC, UPS logos
                        <br />
                        Style: Modernist simplicity ("Design is so simple, that's why it's so complicated")
                      </Paragraph>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: 24 }}>
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <img
                        src="/assets/david-carson.jpg" // Replace with actual image path
                        alt="David Carson"
                        style={{
                          width: 120,
                          height: 120,
                          borderRadius: 16,
                          objectFit: "cover",
                          border: "2px solid #FF8C00",
                        }}
                      />
                    </motion.div>
                    <div>
                      <Paragraph style={{ marginBottom: 0, fontSize: "18px" }}>
                        <strong style={{ fontSize: "20px" }}>David Carson (b. 1955)</strong>
                        <br />
                        Iconic Work: Ray Gun magazine
                        <br />
                        Style: Grunge typography, chaotic layouts
                      </Paragraph>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </div>
    </>
  );
};

export default GraphicDesigner;
