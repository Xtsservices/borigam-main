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

  useEffect(() => {
    const interval = setInterval(() => {
      setTrigger(false);
      setTimeout(() => setTrigger(true), 100);
    }, 10000); // every 10s
    return () => clearInterval(interval);
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
      <div style={{ textAlign: 'center', marginTop: -170, marginBottom: 20 }}>
        <Title level={2} style={{ color: '#000000ff', marginBottom: 10 }}>
          Our Achievements
        </Title>
        <div
          style={{
        display: 'inline-block',
        height: 4,
        width: 64,
        background: 'orange',
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
          padding: '60px 20px',
          borderRadius: 16,
          marginBottom: 60,
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
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            
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
                xs={24}
                sm={12}
                md={8}
                lg={4}
                style={{
                  textAlign: 'center',
                }}
              >
                <div style={{ marginBottom: 16 }}>{stat.icon}</div>
                <Title
                  level={2}
                  style={{
                    color: '#fff',
                    marginBottom: 8,
                    fontSize: 40,
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
                <Text style={{ color: 'rgba(255,255,255,0.9)', fontSize: 20 }}>{stat.label}</Text>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </>
  );
};

export default StatsSection;