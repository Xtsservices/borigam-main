'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Row, Col, Typography, Button, Carousel } from 'antd';
import Image from 'next/image';

const { Title, Text } = Typography;

const WhyChooseSection = () => {
  const router = useRouter();
  const [windowWidth, setWindowWidth] = useState(1024);
  const [isMounted, setIsMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isContentHovered, setIsContentHovered] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = isMounted ? windowWidth < 768 : false;

  const fullText = `
    Borigam Coaching Institution, established in 2019, is dedicated to nurturing creative minds through exceptional coaching for design and architecture entrance exams like NIFT, NID, NATA, B.ARCH, UCEED, and CEED. With personalized learning, detailed study material, and regular mock tests available both offline and online, we ensure students are fully prepared. Our proven success record reflects our commitment to helping students achieve their dreams of securing admission to prestigious colleges.
  `;

  // Student images list for sliding
  const studentImages = [
    { src: "/images/About.1.jpeg", alt: "Student 1" },
    { src: "/images/About.2.jpeg", alt: "Student 2" },
    { src: "/images/About.3.jpeg", alt: "Student 3" },
    { src: "/images/About.4.jpeg", alt: "Student 4" },
    { src: "/images/About.5.jpeg", alt: "Student 5" },
    { src: "/images/About.6.jpeg", alt: "Student 6" },
  ];

  return (
    <section style={{ 
      marginBottom: isMobile ? 30 : 60, 
      padding: isMobile ? '20px 10px' : '40px 20px', 
      perspective: '1000px' 
    }}>
      <Row gutter={[isMobile ? 16 : 32, isMobile ? 16 : 32]} align="middle" justify="center">
        
        {/* Image Section with Carousel of 6 Student Images */}
        <Col xs={24} md={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '500px',
              height: isMobile ? '250px' : '400px',
              overflow: 'hidden',
              // border: '5px solid #ff6200', // Orange border
              borderRadius: '12px',
              boxShadow: isHovered && !isMobile 
                ? '0 25px 50px rgba(0,0,0,0.3), 0 10px 20px rgba(251, 176, 52, 0.4)' 
                : '0 15px 30px rgba(0,0,0,0.1)',
              transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              transform: isHovered && !isMobile 
                ? 'translateY(-10px) scale(1.03) rotateX(5deg) rotateY(5deg)' 
                : 'translateY(0) scale(1)',
              transformStyle: 'preserve-3d',
              willChange: 'transform',
              zIndex: isHovered ? 10 : 1
            }}
          >
            <Carousel autoplay autoplaySpeed={2500} dots arrows infinite style={{ height: '100%' }}>
              {studentImages.map((image, idx) => (
                <div key={idx} style={{ 
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  height: isMobile ? '250px' : '400px',
                  background: '#fff',
                  borderRadius: '8px',
                  overflow: 'hidden',
                }}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={isMobile ? 320 : 480}
                    height={isMobile ? 220 : 360}
                    style={{ 
                      objectFit: 'contain',
                      borderRadius: '8px',
                      width: '100%',
                      height: '100%',
                      background: '#fff',
                      maxHeight: isMobile ? 220 : 360,
                    }}
                  />
                </div>
              ))}
            </Carousel>

            {/* Glossy Overlay */}
            {!isMobile && (
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: isHovered 
                  ? 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 50%)' 
                  : 'transparent',
                transition: 'all 0.5s ease',
              }} />
            )}

            {/* Reflection Effect */}
            {!isMobile && (
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '30%',
                background: isHovered 
                  ? 'linear-gradient(to top, rgba(255,255,255,0.4) 0%, transparent 100%)' 
                  : 'transparent',
                transition: 'all 0.5s ease',
              }} />
            )}
          </div>
        </Col>

        {/* Content Section */}
        <Col xs={24} md={12} style={{ paddingLeft: isMobile ? 0 : '32px', textAlign: 'justify' }}>
          <div
            onMouseEnter={() => setIsContentHovered(true)}
            onMouseLeave={() => setIsContentHovered(false)}
            style={{
              padding: isMobile ? '10px' : '20px',
              borderRadius: '12px',
              backgroundColor: '#f9f9f9',
              transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              transform: isContentHovered && !isMobile ? 'translateY(-5px) scale(1.03)' : 'translateY(0) scale(1)',
              boxShadow: isContentHovered && !isMobile ? '0 15px 30px rgba(0,0,0,0.1)' : 'none'
            }}
          >
            <Title
              level={2}
              style={{
                marginTop: isMobile ? '20px' : '55px',
                color: '#0a2c64',
                fontFamily: "'Open Sans', sans-serif",
                fontSize: isMobile ? '22px' : '30px',
                fontWeight: 600,
                marginBottom: 0,
                textAlign: isMobile ? 'center' : 'left',
              }}
            >
              About Us
            </Title>
            <div style={{
              height: '3px',
              width: '40px',
              backgroundColor: '#ff6200', // Orange line under "About Us"
              margin: '10px auto',
              marginLeft: isMobile ? 'auto' : 0,
            }} />

            <Text
              style={{
                fontSize: isMobile ? 16 : 20,
                lineHeight: isMobile ? 1.6 : 1.8,
                color: '#444',
                fontFamily: "'Open Sans', sans-serif",
                textAlign: 'justify',
                display: 'block',
              }}
            >
              <br />{fullText}
            </Text>

            <div style={{ textAlign: isMobile ? 'center' : 'left', marginTop: isMobile ? 16 : 24 }}>
              <Button
                type="primary"
                size={isMobile ? 'middle' : 'large'}
                onClick={() => router.push('./about')}
                onMouseEnter={() => setIsContentHovered(true)}
                onMouseLeave={() => setIsContentHovered(false)}
                style={{
                  background: 'linear-gradient(90deg, #ff5722, #ff9800)',
                  borderColor: '#f97316',
                  fontFamily: "'Open Sans', sans-serif'",
                  padding: isMobile ? '8px 16px' : '12px 24px',
                  fontSize: isMobile ? 14 : undefined,
                  transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  transform: isContentHovered && !isMobile ? 'scale(1.05)' : 'scale(1)',
                }}
              >
                Why Choose Borigam?
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default WhyChooseSection;