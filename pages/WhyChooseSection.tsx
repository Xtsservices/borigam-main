'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Row, Col, Typography, Button } from 'antd';
import Image from 'next/image';

const { Title, Text } = Typography;

const WhyChooseSection = () => {
  const router = useRouter();
  const [windowWidth, setWindowWidth] = useState(1024);
  const [isMounted, setIsMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => setWindowWidth(window.innerWidth);
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = isMounted ? windowWidth < 768 : false;

  const fullText = `
    Borigam Coaching Institution, established in 2019, is dedicated to nurturing creative minds through exceptional coaching for design and architecture entrance exams like NIFT, NID, NATA, B.ARCH, UCEED, and CEED. With personalized learning, detailed study material, and regular mock tests available both offline and online, we ensure students are fully prepared. Our proven success record reflects our commitment to helping students achieve their dreams of securing admission to prestigious colleges.
  `;

  return (
    <section style={{ marginBottom: 60, padding: '40px 20px' }}>
      <Row gutter={[32, 32]} align="middle" justify="center">
        {/* Image Section - Centered */}
        <Col xs={24} md={12} style={{ 
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div
            onClick={() => router.push('./blog')}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              cursor: 'pointer',
              position: 'relative',
              width: '100%',
              maxWidth: '500px',
              height: isMobile ? '250px' : '350px',
            }}
          >
            {/* Main Image - Centered */}
            <div style={{
              position: 'relative',
              width: '100%',
              height: '100%'
            }}>
              <Image
                src="/images/aboutIndex.jpeg"
                alt="About Us"
                fill
                style={{ 
                  objectFit: 'contain',
                }}
              />
            </div>
            
            {/* Play Button Image - Always visible but pops on hover */}
            <div style={{
              marginLeft: isMobile ? '-50px' : '-80px',
              marginTop: isMobile ? '-15px' : '-20px',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) scale(${isHovered ? 1.2 : 1})`,
              width: isMobile ? '80px' : '120px',
              height: isMobile ? '80px' : '120px',
              transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              zIndex: 2,
              opacity: 0.9,
              filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))'
            }}>
              <Image
                src="/images/play.jpeg"
                alt="Play Button"
                fill
                style={{
                  objectFit: 'contain',
                }}
              />
            </div>
          </div>
        </Col>

        {/* Content Section */}
        <Col xs={24} md={12} style={{ 
          paddingLeft: isMobile ? 0 : '32px',
textAlign: 'justify',
        }}>
          <Title
            level={2}
            style={{
              color: '#0a2c64',
              fontFamily: "'Open Sans', sans-serif",
              fontSize: isMobile ? '24px' : '30px',
              fontWeight: 600,
              marginBottom: 0,
              textAlign: isMobile ? 'center' : 'left'
            }}
          >
            About Us
          </Title>
          <div style={{
            height: '3px',
            width: '40px',
            backgroundColor: '#fbb034',
            margin: '10px auto',
            marginLeft: isMobile ? 'auto' : 0
          }} />

          <Text
            style={{
              fontSize: 16,
              lineHeight: 1.8,
              color: '#444',
              fontFamily: "'Open Sans', sans-serif",
              textAlign: isMobile ? 'center' : 'left',
              display: 'block',
            }}
          >
            {fullText}
          </Text>

          <div style={{ 
            textAlign: isMobile ? 'center' : 'left', 
            marginTop: 24 
          }}>
            <Button
              type="primary"
              size="large"
              onClick={() => router.push('./about')}
              style={{
                backgroundColor: '#f97316',
                borderColor: '#f97316',
                fontFamily: "'Open Sans', sans-serif",
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#fb923c';
                e.currentTarget.style.borderColor = '#fb923c';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#f97316';
                e.currentTarget.style.borderColor = '#f97316';
              }}
            >
              Why Choose Borigam?
            </Button>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default WhyChooseSection;