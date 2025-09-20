import React from "react";
import Head from 'next/head';
import { Typography } from "antd";
import { motion } from "framer-motion";
import Header from "../components/Header";

const { Paragraph } = Typography;

// Animation variants
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

// Style objects
const topicBoxStyle: React.CSSProperties = {
  background: 'linear-gradient(90deg, #ff5722, #ff9800)',
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

const contentBoxStyle: React.CSSProperties = {
  backgroundColor: '#fff',
  borderRadius: '16px',
  padding: '40px',
  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
  height: '100%',
  transition: 'all 0.3s ease',
  display: 'flex',
  flexDirection: 'column'
};

const paragraphStyle: React.CSSProperties = {
  fontSize: '18px',
  lineHeight: 1.7,
  color: "#333",
  textAlign: 'justify',
  marginBottom: '0',
  transition: 'all 0.3s ease',
  paddingLeft: '40px',
  paddingRight: '40px'
};

const imageContainerStyle: React.CSSProperties = {
  width: '100%',
  borderRadius: '16px',
  overflow: 'hidden',
  boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
  height: '100%'
};

const imageStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'all 0.3s ease'
};

const AboutPage: React.FC = () => {
  // Responsive state
  const [isMobile, setIsMobile] = React.useState(false);
  const [isTablet, setIsTablet] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth < 992);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Consistent dimensions
  const boxHeight = isMobile ? 'auto' : '550px';
  const boxPadding = isMobile ? '20px' : isTablet ? '30px' : '40px';

  // Section component for DRY code
  const Section = ({
    title,
    content,
    imageSrc,
    imageAlt,
    reverse = false
  }: {
    title: string;
    content: string;
    imageSrc: string;
    imageAlt: string;
    reverse?: boolean;
  }) => (
    <div style={{ marginBottom: '80px' }}>
      <div style={{ 
        display: 'flex', 
        alignItems: 'stretch', 
        gap: isTablet ? '40px' : '60px',
        flexDirection: isTablet ? 'column' : (reverse ? 'row-reverse' : 'row')
      }}>
        {/* Image Box */}
        <motion.div 
          initial="hidden" 
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={reverse ? rightVariant : leftVariant}
          style={{ flex: 1, height: boxHeight }}
        >
          <motion.div
            whileHover="hover"
            variants={hoverVariant}
            style={imageContainerStyle}
          >
            <motion.img
              src={imageSrc}
              alt={imageAlt}
              style={imageStyle}
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>
        </motion.div>
        
        {/* Content Box */}
        <motion.div 
          initial="hidden" 
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={reverse ? leftVariant : rightVariant}
          style={{ flex: 1, height: boxHeight }}
        >
          <motion.div
            variants={hoverVariant}
            whileHover="hover"
            style={{
              ...contentBoxStyle,
              padding: boxPadding
            }}
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              style={{
                ...topicBoxStyle,
                fontSize: isMobile ? '18px' : '20px',
                padding: '10px 16px'
              }}
            >
              {title}
            </motion.div>
            <motion.div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
              <Paragraph style={{
                ...paragraphStyle,
                fontSize: isMobile ? '16px' : '18px',
                lineHeight: 1.6
              }}>
                {content}
              </Paragraph>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );

  return (
    <>
      <Head>
  <title>About Us – Borigam | Best Coaching for NID, NATA, UCEED, CEED, BFA & NIFT Entrance Exams</title>
  <meta name="description" content="Learn about Borigam, a leading coaching institute for NID, NATA, UCEED, CEED, BFA & NIFT entrance exams. Discover our vision, mission, expert faculty & creative learning environment." />
  <meta name="keywords" content="Borigam, Nift Coaching, NID coaching, Nata coaching, Ceed Coaching, Uceed coaching, Nift coaching near me, NID coaching near me, Nata coaching centres" />
  <link rel="canonical" href="https://borigaminstitute.in/" />
  <meta name="robots" content="index, follow" />
      </Head>
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
            marginTop: '10rem',
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
          <h1 style={{
            textAlign: 'center',
            color: '#ff4e18',
            fontWeight: 700,
            fontSize: '2rem',
            margin: '160px 0 -100px 0',
            background: 'rgba(255,255,255,0.85)',
            borderRadius: '8px',
            padding: '16px 32px',
            display: 'inline-block'
          }}>
            About Borigam – Your Trusted Partner for Design & Architecture Entrance Coaching
          </h1>
        </motion.section>

        {/* MAIN CONTENT */}
        <div style={{ 
          padding: isMobile ? "40px 5%" : "60px 5%", 
          maxWidth: 1400, 
          margin: "auto"
        }}>
 ̰          <motion.div 
            initial="hidden" 
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={leftVariant}
            style={{ textAlign: 'center', marginBottom: '40px' }}
          >
            <h2 style={{ 
              color: '#0a2c64', 
              fontSize: 'clamp(28px, 3vw, 42px)', 
              marginBottom: '20px',
              lineHeight: 1.3
            }}>
              Why choose Borigam?
            </h2>
          </motion.div>
          <Section
            title="Sculpting Creative Minds Since 2019"
            content="Borigam coaching institution is known for its exceptional coaching methods. At Borigam, we are committed to nurturing the creative potential of every student. Our main motto is to sculpture the creative minds by providing high-quality education and expert guidance to excel in design and architecture entrance exams like NIFT, NID, NATA, B.ARCH, UCEED, and CEED."
            imageSrc="/images/Sculpting.jpeg"
            imageAlt="Sculpting Creative Minds"
          />
          <Section
            title="Personalized Learning Experience"
            content="We understand that every student is unique. Our experienced faculty members are dedicated to ensure personalized attention through interactive classroom sessions and online courses to cater to the needs of different students. Our small batch sizes enable our faculty members to closely monitor the progress of each student and provide individualized guidance and support as needed."
            imageSrc="/images/Personalized.jpeg"
            imageAlt="Personalized Learning Experience"
            reverse
          />
          <Section
            title="Detailed Study Material"
            content="Our students benefit from exceptional coaching methods using extensive study material that covers all the important topics and concepts required for design and architecture entrance exams. Our study material is regularly updated to ensure it aligns with the latest exam patterns and syllabus. We also provide practice worksheets for each subject. Workshops with guest faculties further enhance their knowledge and offer real-world insights."
            imageSrc="/images/Sculpting.jpeg"
            imageAlt="Sculpting Creative Minds"
          />

          <Section
            title="Personalized Learning Experience"
            content="We understand that every student is unique. Our experienced faculty members are dedicated to ensure personalized attention through interactive classroom sessions and online courses to cater to the needs of different students. Our small batch sizes enable our faculty members to closely monitor the progress of each student and provide individualized guidance and support as needed."
            imageSrc="/images/Personalized.jpeg"
            imageAlt="Personalized Learning Experience"
            reverse
          />

          <Section
            title="Detailed Study Material"
            content="Our students benefit from exceptional coaching methods using extensive study material that covers all the important topics and concepts required for design and architecture entrance exams. Our study material is regularly updated to ensure it aligns with the latest exam patterns and syllabus. We also provide practice worksheets for each subject. Workshops with guest faculties further enhance their knowledge and offer real-world insights."
            imageSrc="/images/Detailed.jpeg"
            imageAlt="Detailed Study Material"
          />

          <Section
            title="Mastering with Mock Tests"
            content="To build confidence and sharpen exam skills, we conduct weekly mock tests and final exam replica tests that simulate the real exam experience. Our continuous evaluation process ensures that students identify their strengths and work on areas that need improvement. For added convenience, mock tests are also accessible online through our dedicated mobile app, allowing students to practice anytime, anywhere. With Borigam's thorough test series, students gain the confidence and competence needed."
            imageSrc="/images/Mastering.jpeg"
            imageAlt="Mastering with Mock Tests"
            reverse
          />

          <Section
            title="Proven Track of Success Record"
            content="Borigam takes pride in its proven success record, with many of our students consistently achieving top ranks in design and architecture entrance exams. Our extensive coaching program, experienced faculty, portfolio design classes, step-by-step guidance, and personalized attention have helped numerous students realize their dreams of getting admission into prestigious fashion, design, and architecture colleges. Join us and be a part of our success story!"
            imageSrc="/images/Proven.jpeg"
            imageAlt="Proven Track of Success Record"
          />
        </div>
      </div>
    </>
  );
};

export default AboutPage;