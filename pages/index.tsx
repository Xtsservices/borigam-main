import React, { useState, useEffect } from 'react';
import { Carousel, Card, Row, Col, Button, Typography } from 'antd';
import { UserOutlined, BookOutlined, TrophyOutlined, StarOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import Header from '../components/Header';
import AnimatedBoxesPage from './AnimatedBoxesPage';
const { Title, Text } = Typography;
import CareerGuideSection from './CareerGuideSection';
import StatsSection from './StatsSection';

const videoLinks = [
  'https://youtu.be/qR9Uu9w9aMg?si=Vm5Sn198JhdZWmhc',
  'https://youtu.be/s0deY2c1E18?si=D8tHot6toW98_xpi',
  'https://youtu.be/XNCyeh2jEC4?si=zC1KOkdWtSxjUh5p',
  'https://youtu.be/KlCvUVQL28k?si=UmWPEe--QR3tB9me',
  'https://youtu.be/_MLkkvWLMNg?si=ZUaj050MC6wUYjSA',
  'https://youtu.be/BfdbpS-Crag?si=UyMzP2EKA6MIWk1p',
  'https://youtu.be/hFcKkso7k10?si=4YvL5RVFKXXVCPPZ',
  'https://youtu.be/POBTVum-a1k?si=kAr4Cwc40M7DkF7r',
  'https://youtu.be/CIo24etQ-cU?si=kU_wUZoshC0oUQB2',
];

function getYouTubeId(url: string) {
  if (!url) return null;

  if (url.includes('youtu.be/')) {
    return url.split('youtu.be/')[1].split(/[/?&#]/)[0];
  }

  if (url.includes('v=')) {
    return url.split('v=')[1].split(/[&?/#]/)[0];
  }
  if (url.includes('embed/')) {
    return url.split('embed/')[1].split(/[/?&#]/)[0];
  }

  const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return (match && match[2].length === 11) ? match[2] : null;
}

export const HomePage = () => {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setWindowWidth(window.innerWidth);
    };
    
    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const shortText = `Borigam Coaching Institution, established in 2019, is dedicated to nurturing creative minds through
  exceptional coaching for design and architecture entrance exams like NIFT, NID, NATA...`;

  const fullText = `Borigam Coaching Institution, established in 2019, is dedicated to nurturing creative minds through
  exceptional coaching for design and architecture entrance exams like NIFT, NID, NATA, B.ARCH, UCEED,
  and CEED. With personalized learning, detailed study material, and regular mock tests available both
  offline and online, we ensure students are fully prepared.`;

  const CustomPrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        style={{
          position: 'absolute',
          left: -25,
          zIndex: 1,
          top: '50%',
          transform: 'translateY(-50%)',
          cursor: 'pointer',
          backgroundColor: 'rgba(255,255,255,0.7)',
          borderRadius: '50%',
          width: 40,
          height: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        }}
      >
        <LeftOutlined style={{ fontSize: 18, color: '#0a2c64' }} />
      </div>
    );
  };

  const CustomNextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        style={{
          position: 'absolute',
          right: -25,
          zIndex: 1,
          top: '50%',
          transform: 'translateY(-50%)',
          cursor: 'pointer',
          backgroundColor: 'rgba(255,255,255,0.7)',
          borderRadius: '50%',
          width: 40,
          height: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        }}
      >
        <RightOutlined style={{ fontSize: 18, color: '#0a2c64' }} />
      </div>
    );
  };

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    customPaging: (i: number) => (
      <div style={{
        width: '12px',
        height: '12px',
        borderRadius: '0%',
        backgroundColor: '#f97316',
        margin: '0 4px',
        cursor: 'pointer',
        opacity: 0.5,
        transition: 'all 0.3s',
      }} />
    ),
    appendDots: (dots: React.ReactNode) => (
      <div style={{ position: 'absolute', bottom: '-30px', left: 0, right: 0 }}>
        <ul style={{ margin: 0, padding: 0, textAlign: 'center' }}>{dots}</ul>
      </div>
    ),
  };

  return (
    <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 20px' }}>
      <style>{`
        .slick-dots li.slick-active div {
          opacity: 1 !important;
          transform: scale(1.2);
        }
        .slick-dots li div:hover {
          opacity: 0.8;
        }
        .slick-arrow {
          z-index: 10;
        }
        .slick-prev {
          left: -40px !important;
        }
        .slick-next {
          right: -40px !important;
        }
        @media (max-width: 768px) {
          .slick-prev {
            left: -20px !important;
          }
          .slick-next {
            right: -20px !important;
          }
        }
      `}</style>
      
      <Header />

      {/* Hero Carousel */}
      <div style={{ position: 'relative', marginBottom: '60px' }}>
        <Carousel {...carouselSettings}>
          <div key="intro-video" style={{ position: 'relative', borderRadius: 8 }}>
            <video 
              autoPlay
              muted
              loop
              playsInline
              style={{ width: '100%', height: 'auto', maxHeight: '500px', borderRadius: 8 }}
            >
              <source src="/images/intro.mp4" type="video/mp4" />
            </video>
          </div>
        </Carousel>
      </div>

      {/* About Us Section */}
      <section style={{ marginBottom: 60 }}>
        <Row gutter={[32, 32]} align="middle" justify="center">
          <Col xs={24} md={12} lg={10} xl={8} style={{ marginLeft: isMobile ? 0 : 'auto' }}>
            <Title level={2} style={{ 
              color: '#002147', 
              fontFamily: "'Open Sans', sans-serif", 
              textAlign: isMobile ? 'center' : 'left',
              fontSize: windowWidth < 768 ? '24px' : '30px'
            }}>
              Why Choose Borigam?
            </Title>
            <Text
              style={{
                fontSize: 14,
                lineHeight: 1.6,
                color: '#666666',
                fontFamily: "'Open Sans', sans-serif",
                textAlign: 'justify',
                display: 'block',
              }}
            >
              {expanded ? fullText : shortText}
            </Text>
            <div style={{ textAlign: isMobile ? 'center' : 'right' }}>
              <Button
                type="primary"
                style={{
                  marginTop: 20,
                  backgroundColor: '#f97316',
                  borderColor: '#f97316',
                  fontFamily: "'Open Sans', sans-serif",
                }}
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? 'Show Less' : 'Continue Reading'}
              </Button>
            </div>
          </Col>
        </Row>
      </section>

      {/* Features Section */}
      {/* <section style={{ padding: '40px 0', backgroundColor: '#f8f9fa', borderRadius: 16, marginBottom: 60 }}>
        <Title
          level={2}
          style={{
            color: '#0a2c64',
            fontWeight: 600,
            fontSize: 30,
            marginBottom: 0,
            textAlign: 'center',
            paddingBottom: '50px'
          }}
        >
          What We Offer
        </Title>

        <Row gutter={[24, 24]} justify="center">
          {[
            {
              title: 'Personalized Attention',
              image: '/images/personalizedAttention.jpg',
              description: 'Tailored guidance for each student to maximize potential'
            },
            {
              title: 'Online & Offline',
              image: '/images/online.png',
              description: 'Flexible learning options to suit your schedule'
            },
            {
              title: 'Foundation Batch',
              image: '/images/foundation.jpeg',
              description: 'Strong fundamentals for long-term success'
            },
            {
              title: 'Mastering with Mocks',
              image: '/images/mastering.jpg',
              description: 'Regular practice tests for exam readiness'
            },
          ].map((card, index) => (
            <Col xs={24} sm={12} md={8} lg={6} key={index}>
              <div
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  backgroundColor: '#fff',
                  transition: 'transform 0.3s',
                  height: '100%',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '180px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#fef3c7',
                  }}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </div>
                <div
                  style={{
                    padding: '16px 20px',
                    backgroundColor: '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '160px',
                  }}
                >
                  <div>
                    <h3 style={{ margin: '0 0 10px 0', color: '#0a2c64' }}>{card.title}</h3>
                    <p style={{ color: '#666', fontSize: 14 }}>{card.description}</p>
                  </div>
                  <div style={{ fontSize: '20px', marginTop: 'auto', color: '#f97316', textAlign: 'right' }}>&rarr;</div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </section> */}

      {/* News Section */}
      {/* <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <Title
          level={2}
          style={{
            color: '#0a2c64',
            fontWeight: 600,
            fontSize: 30,
            marginBottom: 0,
          }}
        >
          News & Updates
        </Title>
        <div
          style={{
            height: 3,
            width: 40,
            backgroundColor: '#fbb034',
            margin: '10px auto 30px',
          }}
        ></div>
      </div> */}

      {/* <Row gutter={[16, 16]} justify="center">
        {[1, 2, 3, 4].map((item, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <Card 
              hoverable
              // cover={
              //   <img
              //     alt={`news-${item}`}
              //     src={`/images/news-${item}.jpg`}
              //     style={{ height: 160, objectFit: 'cover' }}
              //   />
              // }
              style={{ borderRadius: 8 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                <div style={{
                  backgroundColor: '#f97316',
                  color: 'white',
                  padding: '4px 8px',
                  borderRadius: 4,
                  fontSize: 12,
                  marginRight: 8
                }}>
                  News
                </div>
                <Text type="secondary" style={{ fontSize: 12 }}>May {15 + item}, 2023</Text>
              </div>
              <Title level={4} style={{ marginBottom: 8 }}>Latest Updates from Borigam</Title>
              <Text>Stay updated with our latest achievements and news...</Text>
            </Card>
          </Col>
        ))}
      </Row> */}
      
      
      {/* Career Guide Section */}
      <CareerGuideSection />

      {/* Stats Section */}
      <StatsSection/>

      {/* Gallery Section */}
      <section style={{ marginBottom: 60, textAlign: 'center', fontFamily: "'Poppins', sans-serif" }}>
        <Title
          level={2}
          style={{
            color: '#0a2c64',
            fontWeight: 600,
            fontSize: 30,
            marginBottom: 0,
          }}
        >
          Gallery
        </Title>
        <div
          style={{
            height: 3,
            width: 40,
            backgroundColor: '#fbb034',
            margin: '10px auto 30px',
          }}
        ></div>

        {/* Image Carousel */}
        <div style={{ padding: '0 20px', position: 'relative', marginBottom: '40px' }}>
          <Carousel
            arrows
            dots={true}
            slidesToShow={4}
            infinite
            draggable
            nextArrow={<CustomNextArrow />}
            prevArrow={<CustomPrevArrow />}
            customPaging={(i: number) => (
              <div style={{
                width: '10px',
                height: '10px',
                borderRadius: '0%',
                backgroundColor: '#0a2c64',
                margin: '0 4px',
                cursor: 'pointer',
                opacity: 0.5,
                transition: 'all 0.3s',
              }} />
            )}
            appendDots={(dots: React.ReactNode) => (
              <div style={{ position: 'absolute', bottom: '-30px', left: 0, right: 0 }}>
                <ul style={{ margin: 0, padding: 0, textAlign: 'center' }}>{dots}</ul>
              </div>
            )}
            responsive={[
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 3,
                },
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                },
              },
              {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                },
              },
            ]}
          >
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} style={{ padding: '0 10px' }}>
                <div
                  style={{
                    boxShadow: '0 0 12px rgba(0, 0, 0, 0.1)',
                    borderRadius: 10,
                    overflow: 'hidden',
                    backgroundColor: '#fff',
                    transition: 'transform 0.3s',
                  }}
                >
                  <img
                    src={`/images/${item}.jpeg`}
                    alt={`Gallery ${item}`}
                    style={{
                      width: '100%',
                      height: 250,
                      objectFit: 'cover',
                      borderRadius: 8,
                    }}
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        {/* Video Carousel */}
        <div style={{ padding: '0 20px', position: 'relative', marginBottom: '40px' }}>
          <Carousel
            arrows
            dots={true}
            slidesToShow={4}
            infinite
            draggable
            nextArrow={<CustomNextArrow />}
            prevArrow={<CustomPrevArrow />}
            customPaging={(i: number) => (
              <div style={{
                width: '10px',
                height: '10px',
                borderRadius: '0%',
                backgroundColor: '#0a2c64',
                margin: '0 4px',
                cursor: 'pointer',
                opacity: 0.5,
                transition: 'all 0.3s',
              }} />
            )}
            appendDots={(dots: React.ReactNode) => (
              <div style={{ position: 'absolute', bottom: '-30px', left: 0, right: 0 }}>
                <ul style={{ margin: 0, padding: 0, textAlign: 'center' }}>{dots}</ul>
              </div>
            )}
            responsive={[
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 3,
                },
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                },
              },
              {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                },
              },
            ]}
          >
            {videoLinks.map((link, index) => {
              const videoId = getYouTubeId(link);
              return (
                <div key={index} style={{ padding: '0 10px' }}>
                  <div
                    onClick={() => window.open(link, '_blank')}
                    style={{
                      position: 'relative',
                      cursor: 'pointer',
                      borderRadius: 8,
                      overflow: 'hidden',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                      transition: 'transform 0.3s',
                    }}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                      alt={`Video ${index + 1}`}
                      style={{
                        width: '100%',
                        height: 180,
                        objectFit: 'cover'
                      }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = '/images/default-video-thumbnail.jpg';
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        fontSize: 40,
                        color: 'white',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        borderRadius: '50%',
                        width: 60,
                        height: 60,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s',
                      }}
                    >
                      ▶
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>

        <div style={{ marginTop: 30 }}>
        <Button
          style={{
            backgroundColor: '#fff',
            border: '1px solid #ccc',
            padding: '10px 40px',
            fontSize: '14px',
            fontFamily: 'sans-serif',
            color: '#000000',
            borderRadius: '30px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          }}
        >

            EXPLORE GALLERY
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{ marginBottom: 60, backgroundColor: '#f8f9fa', padding: '60px 20px', borderRadius: 16 }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: 40, color: '#0a2c64' }}>
          What Our Students Say
          <div
            style={{
              height: 3,
              width: 90,
              backgroundColor: '#fbb034',
              margin: '10px auto 30px',
            }}
          ></div>
        </Title>

        <div style={{ padding: '0 40px', position: 'relative' }}>
          <Carousel
            dots={true}
            arrows
            slidesToShow={3}
            nextArrow={<CustomNextArrow />}
            prevArrow={<CustomPrevArrow />}
            customPaging={(i: number) => (
              <div style={{
                width: '10px',
                height: '10px',
                borderRadius: '0%',
                backgroundColor: '#fbb034',
                margin: '0 4px',
                cursor: 'pointer',
                opacity: 0.5,
                transition: 'all 0.3s',
              }} />
            )}
            appendDots={(dots: React.ReactNode) => (
              <div style={{ position: 'absolute', bottom: '-30px', left: 0, right: 0 }}>
                <ul style={{ margin: 0, padding: 0, textAlign: 'center' }}>{dots}</ul>
              </div>
            )}
            responsive={[
              { 
                breakpoint: 768, 
                settings: { 
                  slidesToShow: 1,
                  arrows: true
                } 
              },
              { 
                breakpoint: 992, 
                settings: { 
                  slidesToShow: 2,
                  arrows: true
                } 
              }
            ]}
          >
            {[
              { 
                name: 'Riya Sharma', 
                college: 'NIFT Mumbai',
                review: "Thanks to Borigam Coaching, I cracked NIFT with ease. The faculty's personalized attention and study material were exceptional."
              },
              { 
                name: 'Arjun Mehta', 
                college: 'CEPT Ahmedabad',
                review: 'The support from mentors and well-planned curriculum helped me secure a good rank in NATA. Highly recommended!' 
              },
              { 
                name: 'Sneha Rao', 
                college: 'NID Bangalore',
                review: 'Great study material and weekly tests really kept me on track. The mock interviews were especially helpful.' 
              },
              { 
                name: 'Rahul Verma', 
                college: 'IIT Bombay (UCEED)',
                review: 'Best institute for design aspirants! The environment pushes you to do your best while providing all necessary support.' 
              }
            ].map((testimonial, index) => (
              <div key={index} style={{ padding: '0 15px' }}>
                <Card
                  hoverable
                  style={{
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    borderRadius: '8px',
                    padding: 20,
                    height: '100%',
                    backgroundColor: '#fff'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
                    <div style={{
                      width: 50,
                      height: 50,
                      borderRadius: '50%',
                      backgroundColor: '#f97316',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: 20,
                      fontWeight: 'bold',
                      marginRight: 16
                    }}>
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <Title level={4} style={{ marginBottom: 0 }}>{testimonial.name}</Title>
                      <Text type="secondary">{testimonial.college}</Text>
                    </div>
                  </div>
                  <Text style={{ fontStyle: 'italic', color: '#555' }}>"{testimonial.review}"</Text>
                  <div style={{ textAlign: 'right', marginTop: 16 }}>
                    <StarOutlined style={{ color: '#fbb034' }} />
                    <StarOutlined style={{ color: '#fbb034' }} />
                    <StarOutlined style={{ color: '#fbb034' }} />
                    <StarOutlined style={{ color: '#fbb034' }} />
                    <StarOutlined style={{ color: '#fbb034' }} />
                  </div>
                </Card>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Colleges Section */}
      <AnimatedBoxesPage />
    </div>
  );
};

export default HomePage;