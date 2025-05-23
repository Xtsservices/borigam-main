import React from "react";
import { Typography, Row, Col, Card, Table } from "antd";
import { motion } from "framer-motion";
import Layout from '../../components/Layout';
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

const NIDPage = () => {
  return (
    <Layout>
      <header/>
      <div style={{ padding: "60px 30px", maxWidth: 1200, margin: "auto", backgroundColor: "#fff" }}>
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={sectionVariant}
        >
          <Title level={1} style={{ textAlign: 'center', marginBottom: 50, color: '#0a2c64', fontSize: '42px' }}>
            National Institute of Design (NID) Entrance Exam
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
            NID is India's premier design institute offering undergraduate and postgraduate programs in various design disciplines. 
            The NID Entrance Exam is highly competitive and considered a gateway to successful careers in the design industry.
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
                  title={<span style={{ fontSize: "24px" }}>About NID</span>}
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
                  <Paragraph style={{ fontSize: 18, marginBottom: 16 }}>
                    Established in 1961, NID operates under the Ministry of Commerce and Industry, Government of India.
                  </Paragraph>
                  <Title level={4} style={{ color: "#0a2c64" }}>Campuses:</Title>
                  {listItems([
                    "NID Ahmedabad (Main Campus)",
                    "NID Gandhinagar",
                    "NID Bengaluru",
                    "NID Andhra Pradesh",
                    "NID Haryana",
                    "NID Madhya Pradesh",
                    "NID Assam"
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
                  title={<span style={{ fontSize: "24px" }}>Courses Offered</span>}
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
                  <Title level={4} style={{ color: "#0a2c64" }}>Bachelor of Design (B.Des)</Title>
                  {listItems([
                    "Duration: 4 Years",
                    "Specializations: Industrial, Communication, Textile & Apparel Design",
                    "Campuses: Ahmedabad and other campuses"
                  ])}
                  
                  <Title level={4} style={{ color: "#0a2c64", marginTop: 16 }}>Master of Design (M.Des)</Title>
                  {listItems([
                    "Duration: 2.5 Years",
                    "Specializations: Animation, Graphic, Product, Interaction Design",
                    "Campuses: Ahmedabad, Gandhinagar, Bengaluru"
                  ])}
                  
                  <Title level={4} style={{ color: "#0a2c64", marginTop: 16 }}>Doctoral Program</Title>
                  <Paragraph style={{ fontSize: 18 }}>
                    Ph.D. in Design for research aspirants
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
                  title={<span style={{ fontSize: "24px" }}>Exam Structure</span>}
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
                  <Title level={4} style={{ color: "#0a2c64" }}>Stage 1: DAT Prelims</Title>
                  {listItems([
                    "Objective and Subjective questions",
                    "Conducted offline",
                    "Tests design aptitude and creativity"
                  ])}
                  
                  <Title level={4} style={{ color: "#0a2c64", marginTop: 16 }}>Stage 2: DAT Mains</Title>
                  {listItems([
                    "Studio Test and Personal Interview",
                    "Assesses practical skills and visualization",
                    "Portfolio review for M.Des candidates"
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
                  title={<span style={{ fontSize: "24px" }}>Syllabus</span>}
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
                  <Title level={4} style={{ color: "#0a2c64" }}>DAT Prelims</Title>
                  {listItems([
                    "Visual Perception and Observation",
                    "Design Thinking and Problem Solving",
                    "Drawing and Sketching",
                    "Creativity and Imagination"
                  ])}
                  
                  <Title level={4} style={{ color: "#0a2c64", marginTop: 16 }}>DAT Mains</Title>
                  {listItems([
                    "Material Handling",
                    "Model Making",
                    "Storytelling and Visual Narration",
                    "Design Solution Development"
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
                  title={<span style={{ fontSize: "24px" }}>Important Dates (Tentative)</span>}
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
                  <Table 
                    dataSource={[
                      { event: "Application Form Release", date: "October" },
                      { event: "Last Date to Apply", date: "December" },
                      { event: "DAT Prelims Exam", date: "January" },
                      { event: "Result Declaration", date: "March" },
                      { event: "DAT Mains Exam", date: "April-May" },
                      { event: "Final Result", date: "May-June" },
                    ]} 
                    columns={[
                      { title: 'Event', dataIndex: 'event', key: 'event' },
                      { title: 'Date', dataIndex: 'date', key: 'date' },
                    ]}
                    pagination={false}
                    bordered
                  />
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
                  title={<span style={{ fontSize: "24px" }}>Selection Process</span>}
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
                  <Title level={4} style={{ color: "#0a2c64" }}>B.Des Admission</Title>
                  {listItems([
                    "DAT Prelims - 30% weightage",
                    "DAT Mains - 70% weightage"
                  ])}
                  
                  <Title level={4} style={{ color: "#0a2c64", marginTop: 16 }}>M.Des Admission</Title>
                  {listItems([
                    "DAT Prelims - 20% weightage",
                    "DAT Mains - 80% weightage",
                    "Portfolio review included"
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
                  title={<span style={{ fontSize: "24px" }}>Career Opportunities</span>}
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
                  <Table 
                    dataSource={[
                      { role: "Industrial Designer", description: "Design consumer products and equipment" },
                      { role: "Graphic Designer", description: "Create visual communications" },
                      { role: "UX/UI Designer", description: "Design digital interfaces and experiences" },
                      { role: "Textile Designer", description: "Create fabric designs and patterns" },
                      { role: "Animator", description: "Create animated content for various media" },
                    ]} 
                    columns={[
                      { title: 'Career Role', dataIndex: 'role', key: 'role' },
                      { title: 'Description', dataIndex: 'description', key: 'description' },
                    ]}
                    pagination={false}
                    bordered
                  />
                  <Paragraph style={{ fontSize: 18, marginTop: 16 }}>
                    NID graduates work with top design firms, fashion houses, or start their own studios. Many also pursue careers in academia or research.
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
                  title={<span style={{ fontSize: "24px" }}>Preparation Tips</span>}
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
                  <Row gutter={[16, 16]}>
                    <Col xs={24} md={12}>
                      {listItems([
                        "Enhance Drawing Skills",
                        "Observe and Visualize",
                        "Improve Creativity",
                        "Stay Updated on Design Trends"
                      ])}
                    </Col>
                    <Col xs={24} md={12}>
                      {listItems([
                        "Practice Time Management",
                        "Prepare a strong portfolio (for M.Des)",
                        "Solve previous years' papers",
                        "Develop material handling skills"
                      ])}
                    </Col>
                  </Row>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </div>
    </Layout>
  );
};

export default NIDPage;