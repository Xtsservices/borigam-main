import React from 'react';
import Header from '../components/Header';
import { Carousel, Card, Row, Col } from 'antd';
import { UserOutlined, BookOutlined, TrophyOutlined, StarOutlined } from '@ant-design/icons';

const HomePage = () => {
  return (
    <div>
      <Header />
      <main style={{ padding: '0px', margin: '0 auto' }}>
        <Carousel
          autoplay
          arrows
          style={{ marginBottom: '20px' }}
          prevArrow={<div style={{ fontSize: '20px', color: '#000' }}>◀</div>}
          nextArrow={<div style={{ fontSize: '20px', color: '#000' }}>▶</div>}
        >
          <div style={{ position: 'relative', textAlign: 'center' }}>
            <img
              src="https://borigaminstitute.in/wp-content/uploads/2025/04/cropped-WhatsApp-Image-2025-04-20-at-12.50.11-PM-scaled-1-2048x773.jpeg"
              alt="Slide 1"
              className="carousel-image"
              style={{ width: '100%' }}
            />
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                fontSize: '24px',
                fontWeight: 'bold',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
              }}
            >
              Slide 1 Text
            </div>
          </div>
          {/* Additional slides */}
        </Carousel>

        {/* Cards Section */}
        <Row gutter={[16, 16]} style={{ padding: '20px' }}>
          <Col xs={24} sm={12} md={6}>
            <Card
              hoverable
              style={{ textAlign: 'left' }}
              cover={<UserOutlined style={{ fontSize: '48px', color: 'orange', margin: '20px 0' }} />}
            >
              <h3>Personalized Attention</h3>
              <p>Through interactive classroom sessions and online courses.</p>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card
              hoverable
              style={{ textAlign: 'left' }}
              cover={<BookOutlined style={{ fontSize: '48px', color: 'orange', margin: '20px 0' }} />}
            >
              <h3>Detailed Study Material</h3>
              <p>Practice worksheets that cover all the important topics and concepts.</p>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card
              hoverable
              style={{ textAlign: 'left' }}
              cover={<TrophyOutlined style={{ fontSize: '48px', color: 'orange', margin: '20px 0' }} />}
            >
              <h3>Mastering with Mock Tests</h3>
              <p>To build confidence & sharpen exam skills that simulate the real exam experience.</p>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card
              hoverable
              style={{ textAlign: 'left' }}
              cover={<StarOutlined style={{ fontSize: '48px', color: 'orange', margin: '20px 0' }} />}
            >
              <h3>Proven Track of Success</h3>
              <p>With many of our students consistently achieving top ranks.</p>
            </Card>
          </Col>
        </Row>
      </main>
    </div>
  );
};

export default HomePage;