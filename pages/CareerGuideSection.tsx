import React from 'react';
import { Row, Col, Typography } from 'antd';

const { Title, Text } = Typography;

const cardData = [
  {
    title: 'Design Entrances',
    image: '/images/design.png',
    description: 'NIFT, NID, UCEED, CEED and more',
  },
  {
    title: 'Architecture Entrance',
    image: '/images/architecture.png',
    description: 'NATA, JEE B.Arch, and other exams',
  },
  {
    title: 'BFA / Interiors',
    image: '/images/bfi.jpeg',
    description: 'Bachelor of Fine Arts programs',
  },
  {
    title: 'Foundation Batch',
    image: '/images/foundationBatch.jpeg',
    description: 'For early starters in design field',
  },
  {
    title: 'Advance Batch',
    image: '/images/foundation.jpeg',
    description: 'For serious aspirants',
  },
  {
    title: 'Top Designing',
    image: '/images/top.jpeg',
    description: 'Specialized coaching for top colleges',
  },
];

export default function CareerGuideSection() {
  return (
    <section style={{ marginBottom: 60, background: 'transparent' }}>
      {/* Embedded CSS */}
      <style>
        {`
          .card-container {
            position: relative;
            height: 300px;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            transition: all 0.5s ease;
          }
          
          .card-container:hover {
            transform: translateY(-8px);
            box-shadow: 0 8px 30px rgba(0,0,0,0.15);
          }
          
          .card-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
            transition: all 0.5s ease;
            filter: blur(2px);
          }
          
          .card-container:hover .card-bg {
            filter: blur(0);
          }
          
          .card-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px;
            text-align: center;
            transition: all 0.5s ease;
          }
          
          .card-container:hover .card-overlay {
            background: rgba(0, 0, 0, 0.7);
          }
          
          .hover-effect {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to bottom, rgba(255, 165, 0, 0.3) 0%, transparent 100%);
            opacity: 0;
            transition: all 0.5s ease;
          }
          
          .card-container:hover .hover-effect {
            opacity: 1;
          }
        `}
      </style>

      <Title
        level={2}
        style={{
          color: '#FFA500',
          fontWeight: 600,
          fontSize: 30,
          marginBottom: 0,
          textAlign: 'center',
          paddingBottom: '50px',
        }}
      >
        Your Career Guide at Every Step
      </Title>

      <Row gutter={[24, 24]} justify="center">
        {cardData.map((card, index) => (
          <Col xs={24} sm={12} md={8} lg={6} key={index}>
            <div className="card-container">
              <div 
                className="card-bg" 
                style={{ backgroundImage: `url(${card.image})` }}
              />
              <div className="card-overlay">
                <div className="hover-effect" />
                <Title
                  level={4}
                  style={{
                    marginBottom: 8,
                    color: '#fff',
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  {card.title}
                </Title>
                <Text
                  style={{
                    display: 'block',
                    color: '#fff',
                    fontWeight: 500,
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  {card.description}
                </Text>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
}