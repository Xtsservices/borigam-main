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

const PackagingDesign = () => {
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
          Packaging Design
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
          Packaging design is the strategic fusion of art, functionality, and branding to create containers, 
          wrappers, and labels that protect products, attract consumers, and communicate brand values. 
          It's a critical touchpoint in marketing, sustainability, and user experience.
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
                title={<span style={{ fontSize: "24px" }}>Key Elements of Packaging Design</span>}
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
                  <Text strong style={{ fontSize: "18px" }}>1. Visual Identity</Text>
                  <ul style={{ paddingLeft: 24, marginTop: 8, marginBottom: 16 }}>
                    <li>Logo placement, colors, and typography (e.g., Coca-Cola's iconic script)</li>
                    <li>Imagery/illustrations that reflect brand personality (playful vs. luxury)</li>
                  </ul>

                  <Text strong style={{ fontSize: "18px" }}>2. Structural Design</Text>
                  <ul style={{ paddingLeft: 24, marginTop: 8, marginBottom: 16 }}>
                    <li>Shape, materials (glass, biodegradable plastic), and ergonomics (easy-to-open tabs)</li>
                    <li>Innovations like airless pumps (skincare) or tetra packs (beverages)</li>
                  </ul>

                  <Text strong style={{ fontSize: "18px" }}>3. Information Hierarchy</Text>
                  <ul style={{ paddingLeft: 24, marginTop: 8, marginBottom: 16 }}>
                    <li>Clear ingredients, usage instructions, and regulatory details (FDA, EU compliance)</li>
                    <li>QR codes for traceability or interactive experiences</li>
                  </ul>

                  <Text strong style={{ fontSize: "18px" }}>4. Sustainability</Text>
                  <ul style={{ paddingLeft: 24, marginTop: 8, marginBottom: 16 }}>
                    <li>Eco-friendly materials (mushroom packaging, seaweed-based films)</li>
                    <li>Minimalist designs to reduce ink/plastic waste (Pangaia's compostable bags)</li>
                  </ul>

                  <Text strong style={{ fontSize: "18px" }}>5. User Experience (UX)</Text>
                  <ul style={{ paddingLeft: 24, marginTop: 8 }}>
                    <li>Tactile finishes (embossing, soft-touch coatings)</li>
                    <li>Smart packaging (NFC chips for authenticity, AR-enabled labels)</li>
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
                title={<span style={{ fontSize: "24px" }}>Types of Packaging Design</span>}
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
                  "Primary Packaging: Direct contact with product (perfume bottles, snack wrappers)",
                  "Secondary Packaging: Outer box or carton (iPhone's sleek retail box)",
                  "Tertiary Packaging: Bulk shipping/palletizing (Amazon's frustration-free packaging)"
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
                {listItems([
                  "Adobe Creative Suite (Illustrator, Photoshop)",
                  "3D Modeling (Blender, ArtiosCAD for dielines)",
                  "Material Science (bioplastics, recyclability)",
                  "Consumer Psychology (color theory, shelf impact)"
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
                title={<span style={{ fontSize: "24px" }}>Iconic Packaging Designers</span>}
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
                      src="/assets/dieter-rams.jpg"
                      alt="Dieter Rams"
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
                      <strong style={{ fontSize: "20px" }}>Dieter Rams (1932–Present)</strong>
                      <br />
                      <strong>Brand:</strong> Braun
                      <br />
                      <strong>Timeless Minimalism:</strong> Braun Product Packaging – Clean, functional, grid-based design.
                      <br />
                      <strong>Legacy:</strong> Set the standard for modernist packaging; influenced Apple.
                    </Paragraph>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 24, marginBottom: 24 }}>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <img
                      src="/assets/peter-saville.jpg"
                      alt="Peter Saville"
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
                      <strong style={{ fontSize: "20px" }}>Peter Saville (1955–Present)</strong>
                      <br />
                      <strong>Brands:</strong> Factory Records, Various Fashion Houses
                      <br />
                      <strong>Cultural Crossover:</strong> New Order's album packaging – Merged music and design.
                      <br />
                      <strong>Legacy:</strong> Blurred lines between commercial packaging and art.
                    </Paragraph>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 24 }}>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <img
                      src="/assets/naoto-fukasawa.jpg"
                      alt="Naoto Fukasawa"
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
                      <strong style={{ fontSize: "20px" }}>Naoto Fukasawa (1956–Present)</strong>
                      <br />
                      <strong>Brands:</strong> Muji, Panasonic
                      <br />
                      <strong>Subtle Sophistication:</strong> Muji packaging – Unbranded, utilitarian elegance.
                      <br />
                      <strong>Legacy:</strong> Redefined "invisible design" – humble, human-centered packaging.
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

export default PackagingDesign;