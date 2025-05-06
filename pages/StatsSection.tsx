import React, { useEffect, useState } from 'react';
import { Typography, Row, Col } from 'antd';
import CountUp from 'react-countup';
import {
  FileDoneOutlined,
  HomeOutlined,
  UserSwitchOutlined,
  CheckCircleOutlined,
  SafetyCertificateOutlined,
  ClockCircleOutlined
} from '@ant-design/icons';

const { Title, Text } = Typography;

const stats = [
  {
    icon: <FileDoneOutlined style={{ fontSize: 36, color: '#ffcc66' }} />,
    value: 560,
    suffix: '+',
    label: 'Selected in Design Colleges',
  },
  {
    icon: <HomeOutlined style={{ fontSize: 36, color: '#ffcc66' }} />,
    value: 670,
    suffix: '+',
    label: 'Selected in Architecture',
  },
  {
    icon: <UserSwitchOutlined style={{ fontSize: 36, color: '#ffcc66' }} />,
    value: 14,
    suffix: '',
    label: 'UCEED IIT Qualifiers',
  },
  {
    icon: <CheckCircleOutlined style={{ fontSize: 36, color: '#ffcc66' }} />,
    value: 103,
    suffix: '',
    label: 'NIFT Selections',
  },
  {
    icon: <SafetyCertificateOutlined style={{ fontSize: 36, color: '#ffcc66' }} />,
    value: 24,
    suffix: '',
    label: 'NID Admissions',
  },
  {
    icon: <ClockCircleOutlined style={{ fontSize: 36, color: '#ffcc66' }} />,
    value: 6,
    suffix: '+ yrs',
    label: 'Expertise',
  },
];

const StatsSection: React.FC = () => {
  const [trigger, setTrigger] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrigger(false);
      setTimeout(() => setTrigger(true), 100);
    }, 10000); // every 10s
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #ff5722, #ff4500, #ff7043)',
        color: '#fff',
        padding: '60px 20px',
        borderRadius: 16,
        marginBottom: 60,
      }}
    >
      <Title level={2} style={{ color: '#fff', textAlign: 'center', marginBottom: 40 }}>
        Our Achievements
      </Title>

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
              transition: 'transform 0.3s ease',
            }}
          >
            <div
              style={{
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: 12,
                padding: 24,
                height: '100%',
                transition: 'transform 0.3s',
              }}
              className="stat-box"
            >
              <div style={{ marginBottom: 16 }}>{stat.icon}</div>

              <Title
                level={2}
                style={{
                  color: '#fff',
                  marginBottom: 8,
                  fontSize: 36,
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

              <Text style={{ color: 'rgba(255,255,255,0.9)', fontSize: 14 }}>{stat.label}</Text>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default StatsSection;
