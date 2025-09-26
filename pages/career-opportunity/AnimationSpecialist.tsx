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

const AnimationSpecialist = () => {
  return (
    <>
      <Header/>
      <div style={{ padding: "60px 30px", maxWidth: 1200, margin: "auto", backgroundColor: "#fff", marginTop: "8rem" }}>
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={sectionVariant}
        >
          <Title level={1} style={{ textAlign: 'center', marginBottom: 50, color: '#0a2c64', fontSize: "clamp(1.5rem, 5vw, 2.625rem)" /* Responsive H1: 24px to 42px */ }}>
            Animation Specialist
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
            An Animation Specialist is a professional who specializes in creating, designing, and manipulating animations 
            for various media, including films, video games, television, advertising, and digital platforms. They use 
            technical and artistic skills to bring characters, objects, and environments to life through motion.
          </Paragraph>

          <Row gutter={[32, 32]}>
            {[
              {
                title: "Key Responsibilities",
                items: [
                  "Creating Animations: Developing 2D or 3D animations using software like Adobe After Effects, Maya, Blender",
                  "Storyboarding & Concept Art: Planning scenes and sequences to visualize the animation flow",
                  "Character Rigging: Setting up skeletal structures for 3D models to enable movement",
                  "Motion Graphics: Designing animated graphics for commercials, explainer videos, and UI/UX elements",
                  "Visual Effects (VFX): Adding special effects like explosions, weather, or fantasy elements",
                  "Collaborating with Teams: Working with directors, game designers, and other artists",
                  "Editing & Polishing: Refining animations for smooth transitions and realistic motion"
                ]
              },
              {
                title: "Skills Required",
                items: [
                  "Proficiency in animation software (e.g., Adobe Animate, Autodesk Maya, Unity, Unreal Engine)",
                  "Strong understanding of timing, weight, and physics in motion",
                  "Creativity in character and environment design",
                  "Knowledge of scripting (e.g., Python for automation in 3D tools)",
                  "Ability to work under deadlines and adapt to feedback"
                ]
              },
              {
                title: "Career Paths",
                items: [
                  "2D Animator (Cartoons, web animations)",
                  "3D Animator (Movies, video games)",
                  "Motion Graphics Designer (Ads, social media)",
                  "VFX Artist (Film post-production)",
                  "Game Animator (Character & environmental animations)"
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
                  title={<span style={{ fontSize: "24px" }}>Legendary Animation Specialists</span>}
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
                          src="/assets/walt-disney.jpg"
                          alt="Walt Disney"
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
                        <strong style={{ fontSize: "20px" }}>Walt Disney (1901-1966)</strong>
                        <br />
                        <strong>Role:</strong> Pioneer of animation, founder of Disney
                        <br />
                        <strong>Contributions:</strong> Created Mickey Mouse, produced first full-length animated feature (Snow White, 1937)
                        <br />
                        <strong>Legacy:</strong> Revolutionized storytelling in animation
                      </Paragraph>
                    </Col>
                  </Row>
                  <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
                    <Col xs={24} md={4}>
                      <motion.div whileHover={{ scale: 1.05 }} style={{ textAlign: "center" }}>
                        <img
                          src="/assets/glen-keane.jpg"
                          alt="Glen Keane"
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
                        <strong style={{ fontSize: "20px" }}>Glen Keane (1954-Present)</strong>
                        <br />
                        <strong>Role:</strong> Disney animator, character designer
                        <br />
                        <strong>Contributions:</strong> Designed Ariel, Beast, and Rapunzel
                        <br />
                        <strong>Legacy:</strong> Brought Disney's golden age characters to life
                      </Paragraph>
                    </Col>
                  </Row>
                  <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
                    <Col xs={24} md={4}>
                      <motion.div whileHover={{ scale: 1.05 }} style={{ textAlign: "center" }}>
                        <img
                          src="/assets/hayao-miyazaki.jpg"
                          alt="Hayao Miyazaki"
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
                        <strong style={{ fontSize: "20px" }}>Hayao Miyazaki (1941-Present)</strong>
                        <br />
                        <strong>Role:</strong> Co-founder of Studio Ghibli, director, animator
                        <br />
                        <strong>Contributions:</strong> Masterpieces like Spirited Away, My Neighbor Totoro
                        <br />
                        <strong>Legacy:</strong> Icon of hand-drawn animation with deep storytelling
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

export default AnimationSpecialist;