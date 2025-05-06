'use client';


import React from 'react';
import Layout from '../../components/Layout';
import CareerOpportunities from '../careerOpportunities';

import { Row, Col, Typography, Card, Divider, List } from 'antd';

const { Title, Text, Paragraph } = Typography;

const famousDesigners = [
  {
    name: 'Jonathan Ive',
    country: 'United Kingdom',
    image: '/images/jonathan_ive.jpg', // replace with real path
    description:
      'Known for his work at Apple Inc., Jonathan Ive is a British industrial designer behind the iPhone, iPad, and MacBook. His minimalist, sleek design aesthetic earned him worldwide acclaim.',
  },
  {
    name: 'Sir James Dyson',
    country: 'United Kingdom',
    image: '/images/james_dyson.jpg', // replace with real path
    description:
      'Sir James Dyson is known for his innovations in vacuum cleaners and other appliances. He founded Dyson, a brand known for tech-driven solutions.',
  },
  {
    name: 'Philippe Starck',
    country: 'France',
    image: '/images/philippe_starck.jpg', // replace with real path
    description:
      'Philippe Starck is a French designer famous for his bold, unconventional work across product design, interiors, and architecture.',
  },
];

export default function ProductDesigner() {
  return (
    <div style={{ padding: '40px 20px', maxWidth: 1200, margin: '0 auto' }}>
      <style>
        {`
          .designer-img {
            width: 100%;
            height: 220px;
            object-fit: cover;
            border-radius: 8px;
          }

          .section-title {
            color: #ffa500;
            font-weight: 600;
            font-size: 28px;
            margin-top: 40px;
            margin-bottom: 20px;
          }

          .highlight {
            color: #333;
            font-weight: 500;
          }

          .custom-list li {
            margin-bottom: 8px;
          }
        `}
      </style>

      <Title level={2} className="section-title">
        Product Designer
      </Title>
      <Paragraph>
        A product designer is someone who designs and develops products — both
        physical (like electronics, furniture, or clothing) and digital (like apps or
        websites). They usually work across different stages, like:
      </Paragraph>

      <ul className="custom-list">
        <li>Researching what customers need</li>
        <li>Sketching and prototyping ideas</li>
        <li>Testing how real users interact with their designs</li>
        <li>Collaborating with engineers, marketers, and business teams</li>
        <li>Improving the product based on feedback</li>
      </ul>

      <Divider />

      <Title level={3} className="section-title">
        Key Responsibilities of a Product Designer
      </Title>
      <List
        dataSource={[
          'User Research – Understanding user behaviors, needs, and pain points through interviews, surveys, and usability testing.',
          'UX (User Experience) Design – Creating wireframes, user flows, and prototypes to define how a product works.',
          'UI (User Interface) Design – Designing visual elements like buttons, icons, and layouts to ensure an intuitive and appealing interface.',
          'Prototyping & Testing – Building interactive prototypes and conducting usability tests to refine designs.',
          'Collaboration – Working with product managers, engineers, and stakeholders to align design with business goals.',
          'Iteration – Continuously improving designs based on user feedback and data.',
          'Design Systems – Maintaining consistency by creating and adhering to design guidelines and component libraries.',
        ]}
        renderItem={(item) => <List.Item>- {item}</List.Item>}
        bordered={false}
        style={{ paddingLeft: '16px' }}
      />

      <Divider />

      <Title level={3} className="section-title">Skills & Tools</Title>
      <ul className="custom-list">
        <li><strong>UX/UI Design:</strong> Figma, Sketch, Adobe XD</li>
        <li><strong>Prototyping:</strong> Framer, ProtoPie</li>
        <li><strong>User Research:</strong> Hotjar, UserTesting</li>
        <li><strong>Interaction Design & Animation:</strong> After Effects, Principle</li>
        <li><strong>Basic Front-End Knowledge:</strong> HTML/CSS, understanding of development constraints</li>
      </ul>

      <Divider />

      <Title level={3} className="section-title">Famous Product Designers</Title>
      <Row gutter={[24, 24]}>
        {famousDesigners.map((designer, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card
              hoverable
              cover={
                <img
                  alt={designer.name}
                  src={designer.image}
                  className="designer-img"
                />
              }
            >
              <Title level={4}>{designer.name}</Title>
              <Text type="secondary">{designer.country}</Text>
              <Paragraph style={{ marginTop: 10 }}>
                {designer.description}
              </Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
