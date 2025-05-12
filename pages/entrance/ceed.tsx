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

const CEEDPage = () => {
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
            Common Entrance Exam for Design (CEED)
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
            CEED is a national-level entrance exam conducted by IIT Bombay for admission to Master of Design (M.Des) 
            and Ph.D. programs at premier design institutes in India.
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
                  title={<span style={{ fontSize: "24px" }}>About CEED</span>}
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
                    "Full Form: Common Entrance Exam for Design",
                    "Conducting Body: IIT Bombay",
                    "Courses Offered: M.Des and Ph.D. in Design",
                    "Mode: Computer-Based Test + Offline Drawing",
                    "Score Validity: 1 Year"
                  ])}
                  <Title level={4} style={{ color: "#0a2c64", marginTop: 16 }}>Participating Institutes</Title>
                  {listItems([
                    "IIT Bombay, Delhi, Guwahati, Hyderabad, Kanpur, Roorkee",
                    "IIITDM Jabalpur",
                    "Other premier design institutes"
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
                  title={<span style={{ fontSize: "24px" }}>Exam Pattern</span>}
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
                  <Title level={4} style={{ color: "#0a2c64" }}>Part A - Computer-Based Test (1 Hour, 100 Marks)</Title>
                  {listItems([
                    "Objective Questions (NAT, MSQ, MCQ)",
                    "Sections: Visualization, Environmental Awareness, Logical Reasoning",
                    "Shortlisting for Part B"
                  ])}
                  
                  <Title level={4} style={{ color: "#0a2c64", marginTop: 16 }}>Part B - Drawing Test (2 Hours, 100 Marks)</Title>
                  {listItems([
                    "Offline (Pen and Paper)",
                    "Tasks: Sketching, Product Conceptualization, Storytelling",
                    "Evaluates design and problem-solving skills"
                  ])}
                  <Paragraph style={{ fontSize: 18, marginTop: 16 }}>
                    <strong>Final Score:</strong> Part A (25%) + Part B (75%)
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
                  title={<span style={{ fontSize: "24px" }}>Eligibility Criteria</span>}
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
                    "Bachelor's degree in Design, Engineering, Architecture or Fine Arts",
                    "Final year students can apply",
                    "No upper age limit",
                    "No restriction on number of attempts"
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
                  <Title level={4} style={{ color: "#0a2c64" }}>Part A Syllabus</Title>
                  {listItems([
                    "Visualization and Spatial Ability",
                    "Environmental and Social Awareness",
                    "Analytical and Logical Reasoning",
                    "Design and Creativity",
                    "Language Skills"
                  ])}
                  
                  <Title level={4} style={{ color: "#0a2c64", marginTop: 16 }}>Part B Syllabus</Title>
                  {listItems([
                    "Drawing Skills",
                    "Creativity and Problem Solving",
                    "Form and Material Understanding",
                    "Storytelling through Illustrations"
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
                      { event: "Application Start Date", date: "September 2024" },
                      { event: "Last Date to Apply", date: "October 2024" },
                      { event: "Admit Card Release", date: "January 2025" },
                      { event: "CEED Exam Date", date: "January 2025" },
                      { event: "Result Declaration", date: "March 2025" },
                    ]} 
                    columns={[
                      { title: 'Event', dataIndex: 'event', key: 'event' },
                      { title: 'Date', dataIndex: 'date', key: 'date' },
                    ]}
                    pagination={false}
                    bordered
                  />
                  <Paragraph style={{ fontSize: 18, marginTop: 16 }}>
                    Official Website: <a href="https://ceed.iitb.ac.in" target="_blank" rel="noopener noreferrer" style={{ color: "#FF8C00" }}>www.ceed.iitb.ac.in</a>
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
                  {listItems([
                    "Practice daily sketching and perspective drawing",
                    "Develop observation skills - study everyday objects",
                    "Solve previous years' CEED papers",
                    "Improve speed and accuracy for Part A",
                    "Build a portfolio of creative work",
                    "Stay updated on design trends and technology"
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
                      { role: "UI/UX Designer", description: "Create user interfaces and experiences" },
                      { role: "Product Designer", description: "Develop new product concepts" },
                      { role: "Automotive Designer", description: "Design vehicles and components" },
                      { role: "Graphic Designer", description: "Create visual communications" },
                      { role: "Design Consultant", description: "Provide expert design advice" },
                      { role: "Design Researcher", description: "Conduct user research and testing" },
                    ]} 
                    columns={[
                      { title: 'Career Role', dataIndex: 'role', key: 'role' },
                      { title: 'Description', dataIndex: 'description', key: 'description' },
                    ]}
                    pagination={false}
                    bordered
                  />
                  <Paragraph style={{ fontSize: 18, marginTop: 16 }}>
                    Graduates can also pursue Ph.D. in specialized fields like Sustainable Design or Human-Computer Interaction.
                  </Paragraph>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </div>
    </Layout>
  );
};

export default CEEDPage;