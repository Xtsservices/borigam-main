import React from 'react';
import { Card, Row, Col } from 'antd';
import Header from '../components/Header'; // Import the Header component
import Footer from '../components/Footer'; // Import the Footer component

const testimonials = [
  {
    name: 'Alice Johnson',
    feedback: 'The courses offered here are amazing! The instructors are very knowledgeable and supportive.',
    image: 'https://via.placeholder.com/150',
    youtube: 'https://www.youtube.com/watch?v=example1',
    course: 'Web Development',
    batch: 'Batch A - 2025',
  },
  {
    name: 'Robert Brown',
    feedback: 'I was able to achieve my career goals thanks to the excellent guidance and resources provided.',
    image: 'https://via.placeholder.com/150',
    youtube: 'https://www.youtube.com/watch?v=example2',
    course: 'Data Science',
    batch: 'Batch B - 2024',
  },
  {
    name: 'Sophia Williams',
    feedback: 'The mock tests and study material helped me prepare thoroughly for my exams.',
    image: 'https://via.placeholder.com/150',
    youtube: 'https://www.youtube.com/watch?v=example3',
    course: 'UI/UX Design',
    batch: 'Batch C - 2023',
  },
  {
    name: 'James Wilson',
    feedback: 'The personalized attention I received made a huge difference in my learning experience.',
    image: 'https://via.placeholder.com/150',
    youtube: 'https://www.youtube.com/watch?v=example4',
    course: 'Machine Learning',
    batch: 'Batch D - 2025',
  },
];

const Testimonials = () => {
  return (
    <div>
      <Header /> {/* Add the Header */}
      <div style={{ padding: '20px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Testimonials</h1>
        <Row gutter={[16, 16]}>
          {testimonials.map((testimonial, index) => (
            <Col xs={24} sm={12} md={6} key={index}>
              <Card
                hoverable
                cover={<img alt={testimonial.name} src={testimonial.image} style={{ height: '150px', objectFit: 'cover' }} />}
              >
                <h3>{testimonial.name}</h3>
                <p><strong>Course:</strong> {testimonial.course}</p>
                <p><strong>Batch:</strong> {testimonial.batch}</p>
                <p>{testimonial.feedback}</p>
                <a
                  href={testimonial.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'orange', textDecoration: 'underline' }}
                >
                  Watch on YouTube
                </a>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Testimonials;