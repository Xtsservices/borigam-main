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


  const isMobile = isMounted ? windowWidth < 768 : false;

  const fullText = `
    Borigam Coaching Institution, established in 2019, is dedicated to nurturing creative minds through exceptional coaching for design and architecture entrance exams like NIFT, NID, NATA, B.ARCH, UCEED, and CEED. With personalized learning, detailed study material, and regular mock tests available both offline and online, we ensure students are fully prepared. Our proven success record reflects our commitment to helping students achieve their dreams of securing admission to prestigious colleges.
  `;

  return (
    <section style={{ marginBottom: 60, padding: '40px 20px', perspective: '1000px' }}>
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
              overflow: 'hidden',
              borderRadius: '12px',
              boxShadow: isHovered 
                ? '0 25px 50px rgba(0,0,0,0.3), 0 10px 20px rgba(251, 176, 52, 0.4)' 
                : '0 15px 30px rgba(0,0,0,0.1)',
              transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              transform: isHovered 
                ? 'translateY(-10px) scale(1.03) rotateX(5deg) rotateY(5deg)' 
                : 'translateY(0) scale(1)',
              transformStyle: 'preserve-3d',
              willChange: 'transform',
              zIndex: isHovered ? 10 : 1
            }}
          >
            {/* Main Image with Enhanced Zoom Effect */}
            <div style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              overflow: 'hidden',
              transform: isHovered ? 'scale(1.1)' : 'scale(1)',
              transition: 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            }}>
              <Image
                src="/images/aboutIndex.jpeg"
                alt="About Us"
                fill
                style={{ 
                  objectFit: 'cover',
                  borderRadius: '12px',
                  transition: 'all 0.2s ease',
                  transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                  marginTop: isMobile ? '0px' : '0px',
                  filter: isHovered ? 'brightness(0.85)' : 'brightness(1)'
                }}
              />
            </div>
            
            {/* Glossy Overlay Effect */}
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
            
            {/* Enhanced Play Button with 3D Effect */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) scale(${isHovered ? 1.3 : 1})`,
              width: isMobile ? '80px' : '120px',
              height: isMobile ? '80px' : '120px',
              transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              zIndex: 3,
              opacity: isHovered ? 1 : 0.9,
              filter: isHovered 
                ? 'drop-shadow(0 8px 20px rgba(251, 176, 52, 0.6))' 
                : 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))',
              animation: isHovered ? 'pulse 1.5s infinite, float 3s ease-in-out infinite' : 'none'
            }}>
              <Image
                src="/images/play.jpeg"
                alt="Play Button"
                fill
                style={{
                  objectFit: 'contain',
                  marginLeft: isMobile ? '0px' : '-100px',
                  marginTop: isMobile ? '0px' : '-20px',
                }}
              />
            </div>

            {/* Reflection Effect */}
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
          </div>
        </Col>

        {/* Content Section with Matching Hover Effects */}
        <Col xs={24} md={12} style={{ 
          paddingLeft: isMobile ? 0 : '32px',
          textAlign: 'justify',
        }}>
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              padding: '20px',
              borderRadius: '12px',
              transition: 'all 0.5s ease',
              transform: isHovered ? 'translateY(-5px)' : 'none',
              boxShadow: isHovered ? '0 15px 30px rgba(0,0,0,0.1)' : 'none'
            }}
          >
            <Title
              level={2}
              style={{
                marginTop: '55px',
                color: '#0a2c64',
                fontFamily: "'Open Sans', sans-serif",
                fontSize: isMobile ? '24px' : '30px',
                fontWeight: 600,
                marginBottom: 0,
                textAlign: isMobile ? 'center' : 'left',
                transition: 'all 0.3s ease',
                transform: isHovered ? 'scale(1.02)' : 'scale(1)'
              }}
            >
              About Us
            </Title>
            <div style={{
              height: '3px',
              width: '40px',
              backgroundColor: '#fbb034',
              margin: '10px auto',
              marginLeft: isMobile ? 'auto' : 0,
              transform: isHovered ? 'scaleX(1.5)' : 'scaleX(1)',
              transition: 'all 0.3s ease',
            }} />

            <Text
              style={{
                fontSize: 20,
                lineHeight: 1.8,
                color: '#444',
                fontFamily: "'Open Sans', sans-serif",
                textAlign: 'justify',
                display: 'block',
                transition: 'all 0.3s ease',
                transform: isHovered ? 'translateX(5px)' : 'none'
              }}
            >
              <br/>{fullText}
            </Text>

            <div style={{ 
              textAlign: isMobile ? 'center' : 'left', 
              marginTop: 24,
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
              transition: 'all 0.3s ease',
            }}>
              <Button
                type="primary"
                size="large"
                onClick={() => router.push('./about')}
                style={{
                  background: 'linear-gradient(90deg, #ff5722, #ff9800)',
                  borderColor: '#f97316',
                  fontFamily: "'Open Sans', sans-serif",
                  transition: 'all 0.3s ease',
                  boxShadow: isHovered 
                    ? '0 8px 20px rgb(224, 133, 53)' 
                    : '0 4px 12px rgba(0,0,0,0.1)',
                  padding: '12px 24px',
                  transform: isHovered ? 'translateY(-5px)' : 'none',
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
          </div>
        </Col>
      </Row>

      {/* CSS for animations */}
      <style jsx global>{`
        @keyframes pulse {
          0% {
            transform: translate(-50%, -50%) scale(1.2);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.3);
          }
          100% {
            transform: translate(-50%, -50%) scale(1.2);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1.2) translateY(0);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2) translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseSection;