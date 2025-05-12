import React from "react";
import { Typography } from "antd";
import { motion } from "framer-motion";
import Header from "../components/Header";

const { Paragraph } = Typography;

const leftVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    } 
  }
};

const rightVariant = {
  hidden: { opacity: 0, x: 100 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    } 
  }
};

const hoverVariant = {
  hover: {
    scale: 1.03,
    boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const topicBoxStyle = {
  background: 'linear-gradient(135deg, #ff5722, #ff4500, #ff7043)',
  color: '#fff',
  padding: '12px 20px',
  borderRadius: '8px',
  display: 'inline-block',
  marginBottom: '20px',
  fontSize: '20px',
  fontWeight: 600,
  boxShadow: '0 4px 12px rgba(255, 69, 0, 0.3)',
  transition: 'all 0.3s ease'
};

const contentBoxStyle = {
  backgroundColor: '#fff',
  borderRadius: '16px',
  padding: '40px',
  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
  height: '100%',
  transition: 'all 0.3s ease'
};

const paragraphStyle = {
  fontSize: '18px',
  lineHeight: 1.7,
  color: "#333",
  textAlign: 'justify' as const,
  marginBottom: '0',
  transition: 'all 0.3s ease'
};

const imageStyle = {
  width: '100%',
  borderRadius: '16px',
  boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
  objectFit: 'cover' as const,
  height: '400px',
  transition: 'all 0.3s ease'
};

const AboutPage = () => {
  return (
    <div style={{ backgroundColor: '#fff' }}>
      <Header />

      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          backgroundImage: `url("/images/aboutus.jpeg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
          position: "relative",
        }}
      >
       
      </motion.section>

      {/* MAIN CONTENT */}
      <div style={{ padding: "60px 30px", maxWidth: 1200, margin: "auto" }}>
        {/* Why Choose Borigam Section - Image from LEFT, Content from RIGHT */}
        <div style={{ marginBottom: '80px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '60px' }}>
            {/* Image coming from LEFT */}
            <motion.div 
              initial="hidden" 
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={leftVariant}
              style={{ flex: 1 }}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src="/images/Sculpting.jpeg"
                  alt="Sculpting Creative Minds"
                  style={imageStyle}
                  whileHover={{ scale: 1.02 }}
                />
              </motion.div>
            </motion.div>
            
            {/* Content coming from RIGHT */}
            <motion.div 
              initial="hidden" 
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={rightVariant}
              style={{ flex: 1 }}
            >
              <h2 style={{ color: '#0a2c64', fontSize: '32px', marginBottom: '30px' }}>
                Why choose Borigam?
              </h2>
              <motion.div
                variants={hoverVariant}
                whileHover="hover"
                style={contentBoxStyle}
              >
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  style={topicBoxStyle}
                >
                  Sculpting Creative Minds Since 2019
                </motion.div>
                <motion.div whileHover={{ scale: 1.01 }}>
                  <Paragraph style={paragraphStyle}>
                    Borigam coaching institution is known for its exceptional coaching methods. At Borigam, we are committed to nurturing the creative potential of every student. Our main motto is to sculpture the creative minds by providing high-quality education and expert guidance to excel in design and architecture entrance exams like NIFT, NID, NATA, B.ARCH, UCEED, and CEED.
                  </Paragraph>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Personalized Learning Section - Image from RIGHT, Content from LEFT */}
        <div style={{ marginBottom: '80px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '60px', flexDirection: 'row-reverse' }}>
            {/* Image coming from RIGHT */}
            <motion.div 
              initial="hidden" 
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={rightVariant}
              style={{ flex: 1 }}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src="/images/Personalized.jpeg"
                  alt="Personalized Learning Experience"
                  style={imageStyle}
                  whileHover={{ scale: 1.02 }}
                />
              </motion.div>
            </motion.div>
            
            {/* Content coming from LEFT */}
            <motion.div 
              initial="hidden" 
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={leftVariant}
              style={{ flex: 1 }}
            >
              <motion.div
                variants={hoverVariant}
                whileHover="hover"
                style={contentBoxStyle}
              >
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  style={topicBoxStyle}
                >
                  Personalized Learning Experience
                </motion.div>
                <motion.div whileHover={{ scale: 1.01 }}>
                  <Paragraph style={paragraphStyle}>
                    We understand that every student is unique. Our experienced faculty members are dedicated to ensure personalized attention through interactive classroom sessions and online courses to cater to the needs of different students. Our small batch sizes enable our faculty members to closely monitor the progress of each student and provide individualized guidance and support as needed.
                  </Paragraph>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Study Material Section - Image from LEFT, Content from RIGHT */}
        <div style={{ marginBottom: '80px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '60px' }}>
            {/* Image coming from LEFT */}
            <motion.div 
              initial="hidden" 
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={leftVariant}
              style={{ flex: 1 }}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src="/images/Detailed.jpeg"
                  alt="Detailed Study Material"
                  style={imageStyle}
                  whileHover={{ scale: 1.02 }}
                />
              </motion.div>
            </motion.div>
            
            {/* Content coming from RIGHT */}
            <motion.div 
              initial="hidden" 
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={rightVariant}
              style={{ flex: 1 }}
            >
              <motion.div
                variants={hoverVariant}
                whileHover="hover"
                style={contentBoxStyle}
              >
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  style={topicBoxStyle}
                >
                  Detailed Study Material
                </motion.div>
                <motion.div whileHover={{ scale: 1.01 }}>
                  <Paragraph style={paragraphStyle}>
                    Our students benefit from exceptional coaching methods using extensive study material that covers all the important topics and concepts required for design and architecture entrance exams. Our study material is regularly updated to ensure it aligns with the latest exam patterns and syllabus. We also provide practice worksheets for each subject. Workshops with guest faculties further enhance their knowledge and offer real-world insights.
                  </Paragraph>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Mock Tests Section - Image from RIGHT, Content from LEFT */}
        <div style={{ marginBottom: '80px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '60px', flexDirection: 'row-reverse' }}>
            {/* Image coming from RIGHT */}
            <motion.div 
              initial="hidden" 
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={rightVariant}
              style={{ flex: 1 }}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src="/images/Mastering.jpeg"
                  alt="Mastering with Mock Tests"
                  style={imageStyle}
                  whileHover={{ scale: 1.02 }}
                />
              </motion.div>
            </motion.div>
            
            {/* Content coming from LEFT */}
            <motion.div 
              initial="hidden" 
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={leftVariant}
              style={{ flex: 1 }}
            >
              <motion.div
                variants={hoverVariant}
                whileHover="hover"
                style={contentBoxStyle}
              >
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  style={topicBoxStyle}
                >
                  Mastering with Mock Tests
                </motion.div>
                <motion.div whileHover={{ scale: 1.01 }}>
                  <Paragraph style={paragraphStyle}>
                    To build confidence and sharpen exam skills, we conduct weekly mock tests and final exam replica tests that simulate the real exam experience. Our continuous evaluation process ensures that students identify their strengths and work on areas that need improvement. For added convenience, mock tests are also accessible online through our dedicated mobile app, allowing students to practice anytime, anywhere. With Borigam's thorough test series, students gain the confidence and competence needed.
                  </Paragraph>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Success Record Section - Image from LEFT, Content from RIGHT */}
        <div style={{ marginBottom: '80px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '60px' }}>
            {/* Image coming from LEFT */}
            <motion.div 
              initial="hidden" 
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={leftVariant}
              style={{ flex: 1 }}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src="/images/Proven.jpeg"
                  alt="Proven Track of Success Record"
                  style={imageStyle}
                  whileHover={{ scale: 1.02 }}
                />
              </motion.div>
            </motion.div>
            
            {/* Content coming from RIGHT */}
            <motion.div 
              initial="hidden" 
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={rightVariant}
              style={{ flex: 1 }}
            >
              <motion.div
                variants={hoverVariant}
                whileHover="hover"
                style={contentBoxStyle}
              >
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  style={topicBoxStyle}
                >
                  Proven Track of Success Record
                </motion.div>
                <motion.div whileHover={{ scale: 1.01 }}>
                  <Paragraph style={paragraphStyle}>
                    Borigam takes pride in its proven success record, with many of our students consistently achieving top ranks in design and architecture entrance exams. Our extensive coaching program, experienced faculty, portfolio design classes, step-by-step guidance, and personalized attention have helped numerous students realize their dreams of getting admission into prestigious fashion, design, and architecture colleges. Join us and be a part of our success story!
                  </Paragraph>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;