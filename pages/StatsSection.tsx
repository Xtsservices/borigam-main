import React, { useEffect, useState } from 'react';
import { Typography, Row, Col } from 'antd';
import CountUp from 'react-countup';
import styled from 'styled-components';
import {
  FileDoneOutlined,
  HomeOutlined,
  UserSwitchOutlined,
  CheckCircleOutlined,
  SafetyCertificateOutlined,
  ClockCircleOutlined
} from '@ant-design/icons';

const { Title, Text } = Typography;

const StatsSection: React.FC = () => {
  const [trigger, setTrigger] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    const interval = setInterval(() => {
      setTrigger(false);
      setTimeout(() => setTrigger(true), 100);
    }, 10000); // every 10s
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const stats = [
    {
      icon: <FileDoneOutlined style={{ fontSize: 36, color: '#fff' }} />,
      value: 560,
      suffix: '+',
      label: 'Selected in Design Colleges',
    },
    {
      icon: <HomeOutlined style={{ fontSize: 36, color: '#fff' }} />,
      value: 670,
      suffix: '+',
      label: 'Selected in Architecture',
    },
    {
      icon: <UserSwitchOutlined style={{ fontSize: 36, color: '#fff' }} />,
      value: 14,
      suffix: '',
      label: 'UCEED IIT Qualifiers',
    },
    {
      icon: <CheckCircleOutlined style={{ fontSize: 36, color: '#fff' }} />,
      value: 103,
      suffix: '',
      label: 'NIFT Selections',
    },
    {
      icon: <SafetyCertificateOutlined style={{ fontSize: 36, color: '#fff' }} />,
      value: 24,
      suffix: '',
      label: 'NID Admissions',
    },
    {
      icon: <ClockCircleOutlined style={{ fontSize: 36, color: '#fff' }} />,
      value: 6,
      suffix: '+ yrs',
      label: 'Expertise',
    },
  ];

  return (
    <>
      <div style={{ 
        textAlign: 'center', 
        marginTop: isMobile ? 30 : 40, 
        marginBottom: isMobile ? 20 : 30, 
        position: 'relative', 
        zIndex: 10,
        padding: isMobile ? '0 15px' : '0'
       }}>
        <Title level={2} style={{ 
          color: '#0a2c64', 
          marginBottom: 10, 
          fontSize: 'clamp(1.25rem, 5vw, 2.5rem)', /* Responsive: 20px to 40px */ 
          fontWeight: 'bold',
          textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
        }}>
          Our Achievements
        </Title>
        <div
          style={{
        display: 'inline-block',
        height: 4,
        width: 64,
        background: '#ff6600',
        borderRadius: 2,
        marginBottom: 20,
        animation: 'slideInLine 1s cubic-bezier(0.4,0,0.2,1)'
          }}
        />
      </div>
      <section
        style={{
          position: 'relative',
          color: '#fff',
          padding: isMobile ? '40px 15px' : '60px 20px',
          borderRadius: isMobile ? 12 : 16,
          marginBottom: isMobile ? 40 : 60,
          overflow: 'hidden',
          backgroundImage: `url('/images/Our Achievements.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          animation: 'moveBg 30s linear infinite',
        }}
      >
      <style>
        {`
          @keyframes moveBg {
        0% { background-position: left center; }
        100% { background-position: right center; }
          }
        `}
      </style>
        {/* Light black overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.71)', // Light black overlay
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />

        <div style={{ position: 'relative', zIndex: 3 }}>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? 30 : 40 }}>
            
            <style>
              {`
                @keyframes slideInLine {
            0% { width: 0; opacity: 0.2; }
            70% { width: 80px; opacity: 1; }
            100% { width: 64px; opacity: 1; }
                }
              `}
            </style>
          </div>

          <Row gutter={[24, 24]} justify="center">
            {stats.map((stat, index) => (
              <Col
                key={index}
                xs={12}
                sm={8}
                md={8}
                lg={4}
                style={{
                  textAlign: 'center',
                }}
              >
                <div style={{ marginBottom: isMobile ? 12 : 16 }}>
                  {React.cloneElement(stat.icon, { 
                    style: { 
                      fontSize: 'clamp(1.25rem, 4vw, 2.25rem)', /* Responsive: 20px to 36px */ 
                      color: '#fff' 
                    } 
                  })}
                </div>
                <Title
                  level={2}
                  style={{
                    color: '#fff',
                    marginBottom: 8,
                    fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', /* Responsive: 28px to 40px */
                  }}
                >
                  {trigger ? (
                    <CountUp
                      key={index + '-' + trigger}
                      start={0}
                      end={stat.value}
                      duration={5}
                      suffix={stat.suffix}
                    />
                  ) : (
                    <span>0{stat.suffix}</span>
                  )}
                </Title>
                <Text style={{ 
                  color: 'rgba(255,255,255,0.9)', 
                  fontSize: 'clamp(0.75rem, 2.5vw, 1.25rem)', /* Responsive: 12px to 20px */
                  display: 'block',
                  lineHeight: 1.4
                }}>
                  {stat.label}
                </Text>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </>
  );
};

export default StatsSection;