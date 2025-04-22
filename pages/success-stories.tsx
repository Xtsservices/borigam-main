import React from 'react';
import { Card, Row, Col } from 'antd';
import Header from '../components/Header'; // Import the Header component
import Footer from '../components/Footer'; // Import the Footer component

const successStories = [
  {
    title: 'John Doe',
    description: 'John secured the top rank in the national exams with our guidance.',
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Jane Smith',
    description: 'Jane achieved her dream of becoming a software engineer.',
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Michael Johnson',
    description: 'Michael excelled in his career after completing our data science course.',
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Emily Davis',
    description: 'Emily aced her design portfolio and landed a top job in the industry.',
    image: 'https://via.placeholder.com/150',
  },
];

const SuccessStories = () => {
  return (
    <div>
      <Header /> {/* Add the Header */}
      <div style={{ padding: '20px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Success Stories</h1>
        <Row gutter={[16, 16]}>
          {successStories.map((story, index) => (
            <Col xs={24} sm={12} md={6} key={index}>
              <Card
                hoverable
                cover={<img alt={story.title} src={story.image} style={{ height: '150px', objectFit: 'cover' }} />}
              >
                <h3>{story.title}</h3>
                <p>{story.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default SuccessStories;