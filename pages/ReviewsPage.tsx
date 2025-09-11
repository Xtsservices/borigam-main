import React, { useState, useRef } from 'react';
import { Carousel, Typography, Button, Rate } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Reviews = [
  {
    name: 'Ishwarya',
    review: 'Best coaching institute for competitive exams! The faculty at Borigam is highly experienced and supportive.',
    rating: 5,
    image: '/images/review1.jpeg'
  },
  {
    name: 'Sri Nandan',
    review: 'Personal attention and doubt-clearing sessions are amazing. Highly recommended for Design/Architecture aspirants!',
    rating: 5,
    image: '/images/review2.jpeg'
  },
  {
    name: 'Tanvija',
    review: 'Great results! Thanks to Borigam\'s structured approach, I cleared my Design entrance exam with a top rank.',
    rating: 5,
    image: '/images/review3.jpeg'
  },
  {
    name: 'Pushkar',
    review: 'Affordable fees with quality education. Compared to other big coaching centers, Borigam offers the best value.',
    rating: 5,
    image: '/images/review4.jpeg'
  },
  {
    name: 'Hansika',
    review: 'Regular tests and performance analysis helped me track my progress. The institute focuses on weak areas.',
    rating: 5,
    image: '/images/review5.jpeg'
  },
  {
    name: 'K. Greeshma',
    review: 'Borigam institute has very good learning environment. Faculty are really awesome in teaching with good examples.',
    rating: 5,
    image: '/images/review6.jpeg'
  },
  {
    name: 'Sathwik',
    review: 'I joined for nid coaching in borigam , borigam coaching institute have very good faculty and good materials every week they conduct the 2 mocks and they talks about students results I prefer borigam institute is good for all designing entrance exams.',
    rating: 5,
    image: '/images/review7.jpeg'
  },
  {
    name: 'Anuhya',
    review:'I came to Borigam institution for UCEED entrance exam coaching and i have cracked it with the decent marks . I am extremely satisfied with the faculties teaching and the support provided by the Sachin Sir.',
    rating: 5,
    image: '/images/review8.jpeg'
  }
];

const ReviewsPage = () => {
  const carouselRef = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      }
    ]
  };

  const isMiddleCard = (index: number) => {
    return index === currentSlide % Reviews.length;
  };

  const handleCardClick = (index: number) => {
    // Calculate how many slides we need to move
    const slidesToMove = index - currentSlide;
    if (slidesToMove > 0) {
      for (let i = 0; i < slidesToMove; i++) {
        carouselRef.current.next();
      }
    } else if (slidesToMove < 0) {
      for (let i = 0; i < -slidesToMove; i++) {
        carouselRef.current.prev();
      }
    }
  };

  return (
    <div style={{ backgroundColor: '#f9f9f9', paddingTop: '50px', paddingBottom: '50px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <Title level={2} style={{ color: '#333', marginBottom: 0 }}>
        Student Reviews
        </Title>
        <div
        style={{
          width: 80,
          height: 4,
          background: 'linear-gradient(90deg, #ff7b25 0%, #ff5500 100%)',
          margin: '16px auto 0',
          borderRadius: 2,
        }}
        />
      </div>
        
        {/* Arrows */}
        <div style={{ position: 'relative' }}>
          <Button
            shape="circle"
            icon={<LeftOutlined />}
            onClick={() => carouselRef.current.prev()}
            style={{
              position: 'absolute',
              top: '50%',
              left: '-40px',
              transform: 'translateY(-50%)',
              backgroundColor: '#fff',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              zIndex: 2
            }}
          />
          <Button
            shape="circle"
            icon={<RightOutlined />}
            onClick={() => carouselRef.current.next()}
            style={{
              position: 'absolute',
              top: '50%',
              right: '-40px',
              transform: 'translateY(-50%)',
              backgroundColor: '#fff',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              zIndex: 2
            }}
          />

          {/* Carousel */}
          <Carousel ref={carouselRef} {...settings}>
            {Reviews.map((review, index) => (
              <div 
                key={index} 
                style={{ 
                  padding: '0 15px',
                  transition: 'transform 0.3s ease',
                }}
              >
                <div
                  onClick={() => handleCardClick(index)}
                  style={{
                    position: 'relative',
                    height: isMiddleCard(index) ? '480px' : '400px',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    boxShadow: isMiddleCard(index) 
                      ? '0 20px 40px rgba(255, 85, 0, 0.3)' 
                      : '0 10px 20px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                    transform: isMiddleCard(index) ? 'translateY(-20px) scale(1.05)' : 'translateY(0)',
                    zIndex: isMiddleCard(index) ? 10 : 1,
                    cursor: 'pointer'
                  }}
                >
                  {/* Top Section - Orange by default */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '40%',
                    background: isMiddleCard(index) ? '#fff' : 'linear-gradient(to right, #ff7b25, #ff5500)',
                    transition: 'all 0.6s cubic-bezier(0.65, 0, 0.35, 1)',
                    zIndex: 1,
                  }}>
                    {/* Notch between sections */}
                    <div style={{
                      position: 'absolute',
                      bottom: '-20px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '40px',
                      height: '40px',
                      backgroundColor: isMiddleCard(index) ? '#fff' : 'linear-gradient(to right, #ff7b25, #ff5500)',
                      borderRadius: '50%',
                      zIndex: 3,
                      boxShadow: isMiddleCard(index) 
                        ? '0 5px 15px rgba(255, 85, 0, 0.4)'
                        : '0 2px 5px rgba(0,0,0,0.1)'
                    }} />
                  </div>

                  {/* Bottom Section - White by default */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '60%',
                    background: isMiddleCard(index) ? 'linear-gradient(to right, #ff7b25, #ff5500)' : '#fff',
                    transition: 'all 0.6s cubic-bezier(0.65, 0, 0.35, 1)',
                    zIndex: 1,
                  }} />

                  {/* Profile Image */}
                  <div style={{
                    position: 'absolute',
                    top: '40%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: isMiddleCard(index) ? '140px' : '120px',
                    height: isMiddleCard(index) ? '140px' : '120px',
                    borderRadius: '50%',
                    border: `5px solid ${isMiddleCard(index) ? '#ff5500' : '#fff'}`,
                    backgroundImage: `url(${review.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 3,
                    boxShadow: isMiddleCard(index) 
                      ? '0 10px 25px rgba(0,0,0,0.3)'
                      : '0 5px 15px rgba(0,0,0,0.2)',
                    transition: 'all 0.4s ease',
                  }} />

                  {/* Name Section (in top part) */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '40%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2,
                    padding: '0 20px'
                  }}>
                    <Title 
                      level={4} 
                      style={{ 
                        margin: 0,
                        color: isMiddleCard(index) ? '#ff5500' : '#fff',
                        textAlign: 'center',
                        transition: 'color 0.3s ease',
                        fontSize: isMiddleCard(index) ? '20px' : '18px'
                      }}
                    >
                      {review.name}
                    </Title>
                  </div>

                  {/* Review Section (in bottom part) */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '60%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '60px 20px 20px',
                    zIndex: 2
                  }}>
                    <Paragraph style={{
                      fontSize: isMiddleCard(index) ? '16px' : '15px',
                      margin: 0,
                      color: isMiddleCard(index) ? '#fff' : '#555',
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                      lineHeight: '1.6'
                    }}>
                      "{review.review}"
                    </Paragraph>

                    <div style={{
                      marginTop: '25px'
                    }}>
                      <Rate
                        disabled
                        defaultValue={review.rating}
                        style={{
                          color: isMiddleCard(index) ? '#fff' : '#ff7b25',
                          fontSize: isMiddleCard(index) ? '20px' : '18px',
                          transition: 'all 0.3s ease'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;