import React from "react";
import Head from 'next/head';
import { Typography } from "antd";
import { motion } from "framer-motion";
import Header from "../components/Header";

const { Paragraph, Title } = Typography;

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

// Style objects with enhanced responsive design
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

  // Enhanced responsive dimensions with better mobile-first approach
  const boxHeight = isMobile ? 'auto' : '550px';
  const boxPadding = isMobile ? '20px' : isTablet ? '30px' : '40px';
  const sectionGap = isMobile ? '20px' : isTablet ? '40px' : '60px';
  const sectionMarginBottom = isMobile ? '40px' : isTablet ? '60px' : '80px';

  // Enhanced Section component with better responsive design
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
    <div style={{ 
      marginBottom: sectionMarginBottom,
      /* RESPONSIVE: Center content and add proper horizontal padding */
      padding: isMobile ? '0 5px' : '0 20px',
      maxWidth: '100%',
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      /* RESPONSIVE: Prevent content shifting */
      boxSizing: 'border-box',
      position: 'relative',
      /* RESPONSIVE: Better mobile centering */
      alignItems: 'center'
    }}>
      <div style={{
        display: 'flex',
        alignItems: isMobile ? 'center' : 'stretch',
        gap: sectionGap,
        /* RESPONSIVE: Stack vertically on mobile, respect reverse on larger screens */
        flexDirection: isMobile ? 'column' : (reverse ? 'row-reverse' : 'row'),
        /* RESPONSIVE: Limit width and center content */
        maxWidth: isMobile ? '100%' : '1200px',
        width: '100%',
        /* RESPONSIVE: Ensure proper centering */
        margin: '0 auto',
        justifyContent: 'center'
      }}>
        {/* Image Box */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={reverse ? rightVariant : leftVariant}
          style={{ 
            flex: 1, 
            height: boxHeight,
            /* RESPONSIVE: Ensure minimum height on mobile */
            minHeight: isMobile ? '250px' : 'auto'
          }}
        >
          <motion.div
            whileHover="hover"
            variants={hoverVariant}
            style={imageContainerStyle}
          >
            <motion.img
              src={imageSrc}
              alt={imageAlt}
              style={{
                ...imageStyle,
                /* RESPONSIVE: Better mobile image sizing */
                minHeight: isMobile ? '250px' : 'auto'
              }}
              whileHover={{ scale: isMobile ? 1.02 : 1.05 }} /* Less scaling on mobile */
            />
          </motion.div>
        </motion.div>

        {/* Content Box */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={reverse ? leftVariant : rightVariant}
          style={{ 
            flex: 1, 
            height: boxHeight,
            /* RESPONSIVE: Add margin top on mobile for better separation */
            marginTop: isMobile ? '40px' : '0'
          }}
        >
          <motion.div
            variants={hoverVariant}
            whileHover="hover"
            style={{
              ...contentBoxStyle,
              padding: boxPadding,
              /* RESPONSIVE: Center content box and improve mobile styling */
              borderRadius: isMobile ? '12px' : '16px',
              margin: isMobile ? '0' : '0',
              width: isMobile ? '100%' : 'auto',
              maxWidth: isMobile ? '100%' : 'none',
              /* RESPONSIVE: Additional centering for mobile */
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              /* RESPONSIVE: Prevent layout shifts */
              boxSizing: 'border-box',
              position: 'relative'
            }}
          >
            <motion.div
              whileHover={{ scale: isMobile ? 1.01 : 1.02 }} /* Less scaling on mobile */
              style={{
                ...topicBoxStyle,
                fontSize: isMobile ? '16px' : isTablet ? '18px' : '20px', /* More granular sizing */
                padding: isMobile ? '8px 12px' : '10px 16px',
                /* RESPONSIVE: Center topic box on mobile */
                margin: isMobile ? '0 auto 20px auto' : '0 0 20px 0',
                textAlign: 'center'
              }}
            >
              {title}
            </motion.div>
            <motion.div style={{ 
              flex: 1, 
              display: 'flex', 
              alignItems: 'center',
              justifyContent: 'center', // Center content horizontally
              width: '100%',
              /* RESPONSIVE: Additional mobile centering */
              flexDirection: 'column',
              textAlign: isMobile ? 'center' : 'inherit',
              /* RESPONSIVE: Prevent content shifting */
              position: 'relative',
              boxSizing: 'border-box'
            }}>
              <Paragraph style={{
                ...paragraphStyle,
                fontSize: isMobile ? '14px' : isTablet ? '16px' : '18px', /* More granular sizing */
                lineHeight: 1.6,
                /* RESPONSIVE: Better mobile text padding and centering */
                paddingLeft: isMobile ? '15px' : isTablet ? '20px' : '40px',
                paddingRight: isMobile ? '15px' : isTablet ? '20px' : '40px',
                /* RESPONSIVE: Center text on mobile */
                textAlign: isMobile ? 'center' : 'justify',
                width: '100%',
                margin: '0 auto',
                /* RESPONSIVE: Additional mobile centering */
                display: 'block',
                maxWidth: '100%',
                /* RESPONSIVE: Prevent layout shifts */
                boxSizing: 'border-box',
                position: 'relative'
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
      <Header />
     <div style={{ textAlign: "center" }}>
  <Title
    level={1}
    style={{
      color: "#0a2c64",
      fontFamily: "'Open Sans', sans-serif",
      fontSize: isMobile ? "28px" : "36px",
      fontWeight: 700,
      marginBottom: 0,
      letterSpacing: "-0.5px",
      marginTop: isMobile ? "6rem" : "9.5rem",
    }}
  >
    About Us
  </Title>
  <div
    style={{
      height: "4px",
      width: "180px",
      background: "linear-gradient(90deg, #fbb034, #ff6b00)",
      margin: "12px auto 16px", // reduced bottom space from 40px to 16px
      borderRadius: "2px",
      opacity: 0.8,
    }}
  />
</div>
          <h1
          style={{
            color: "#ff4e18", // primary color
            fontFamily: "'Open Sans', sans-serif",
            // Responsive font sizing using clamp for smooth scaling
            fontSize: 'clamp(1.25rem, 3vw, 2rem)',
            fontWeight: 700,
            letterSpacing: "-0.5px",
            lineHeight: 1.2,
            textAlign: "center",
            marginBottom: isMobile ? "1.5rem" : isTablet ? "2rem" : "2.5rem",
            // Additional mobile styling
            ...isMobile && {
              paddingLeft: '0.5rem',
              paddingRight: '0.5rem'
            }
          }}
        >
         Why choose Borigam?
        </h1>
      <div style={{ backgroundColor: '#fff' }}>
        <div style={{
          padding: isMobile ? "40px 5%" : "60px 5%",
          maxWidth: 1400,
          margin: "auto"
        }}></div>
       

        {/* MAIN CONTENT - RESPONSIVE CENTERED */}
        <div style={{
          padding: isMobile ? "2rem 10px" : isTablet ? "3rem 5%" : "4rem 5%",
          maxWidth: isMobile ? '100vw' : 1400,
          margin: "0 auto", // Center the container
          marginTop: isMobile ? "-4rem" : isTablet ? "-6rem" : "-10rem",
          // RESPONSIVE: Better mobile spacing and centering
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          /* RESPONSIVE: Additional mobile centering */
          textAlign: isMobile ? 'center' : 'inherit',
          justifyContent: 'center',
          /* RESPONSIVE: Ensure content doesn't shift with footer changes */
          position: 'relative',
          minHeight: 'auto',
          /* RESPONSIVE: Better mobile containment */
          overflow: 'hidden'
        }}>
          ̰          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={leftVariant}
            style={{ 
              textAlign: 'center', 
              marginBottom: '40px',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
          
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