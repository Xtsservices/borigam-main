import React, { useState, useRef } from 'react';
import { Card, Row, Col, Typography, Button, Modal } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Header from '@/components/Header';
import Head from 'next/head';

const { Title, Text, Paragraph } = Typography;

const successStories = [
  {
    name: 'Meghana Pai',
    exam: 'NID - M.DES (AMD)',
    rank: 'AIR 3',
    content: '"Securing AIR 3 in NID was a dream achieved thanks to BORIGAM, their creative guidance and relentless focus on original thinking. Their personalized approach transformed my portfolio and design mindset!"',
    photo: '/images/meghana.jpeg'
  },
  {
    name: 'Tharun N',
    exam: 'NIFT - B.DES (BOM)',
    rank: 'AIR 18',
    content: '"The intensive mock tests and personalized feedback sessions helped me refine my design sensibilities and time management skills – crucial for cracking NIFT\'s unique exam pattern."',
    photo: '/images/tharun.jpeg'
  },
  {
    name: 'Tanmayee',
    exam: 'NIFT - B.DES (HYD)',
    rank: 'AIR 74',
    content: '"When I first held my NIFT admit card with \'AIR 74\' gleaming on it, I didn\'t just see a rank – I saw 74,000 hours of burning midnight oil, 74 rejected drafts before my perfect portfolio piece, and 74% extra grit when I wanted to quit. It was a TOTAL worth."',
    photo: '/images/tanmayee.jpeg'
  },
  {
    name: 'Akshitha',
    exam: 'NIFT - B.DES',
    rank: 'AIR 767',
    content: '"AIR 767 in NIFT wasn\'t just a rank—it was my first yes in the world of design! BORIGAM transformed my self-doubt into a razor-sharp creative vision, turning my quirky perspectives into a standout portfolio. Felt very happy as I reach a step towards my goals."',
    photo: '/images/akshitha.jpeg'
  },
  {
    name: 'Sonali',
    exam: 'AAT, IIT Kharagpur',
    rank: 'AIR 3057',
    content: '"Scoring AIR-3057 in AAT was my golden ticket to IIT Kharagpur. Those brutal 3AM sketching drills and spatial reasoning hacks transformed my raw passion into precision—now I\'m ready to build dreams in concrete and light!"',
    photo: '/images/sonali.jpeg'
  },
  {
    name: 'Pallavi',
    exam: 'JEE-PAPER-2',
    rank: '98.25%:-98.25%ile',
    content: "98.25%:-98.25%ile in JEE Paper 2 wasn't just a number – it was the quiet victory of every erased sketch, every doubting voice I turned into fuel, and every time I chose to believe in buildings that existed only in my dreams. I carry not just a percentile, but the conviction that even the most ordinary dreams can build extraordinary foundations.",
    photo: '/images/Pallavi.jpeg'
  },
  {
    name: 'Kavyasri',
    exam: 'NID-B.DES',
    content: '"I felt really happy and exicted as I got to know that I will be studying in my dream college and the time I spent practicing was absolutely worth and the guidance and the support my mentors gave was my confidence."',
    photo: '/images/Kavyasri.jpeg'
  },
  {
    name: 'Thanusree Keerni',
    exam: 'JEE-PAPER-2',
    rank: '99.73%',
    content: "99.73 %ile in JEE Paper 2 wasn't a score—it was my architectural debutante ball, where calculus waltzed with creativity and spatial IQ wore its best suit! They weaponized my imagination.",
    photo: '/images/Keerni.jpeg'
  },
  {
    name: 'Christina',
    exam: '(JEE-B.ARCH(SPA-VGA)',
    rank: '99.64%',
    content: "Scoring 99.64%ile in JEE B.Arch was my golden ticket to SPA Vijayawada's coveted VGA program! Those brutal 3AM sketching drills and spatial reasoning hacks transformed my raw passion into precision—now I'm ready to build dreams in concrete and light!",
    photo: '/images/Christina.jpeg'
  },
  {
    name: 'Anagha',
    exam: 'NATA',
    rank: '143',
    content: "This number carries the weight of every sunrise I spent perfecting perspective sketches, every critique that sharpened my vision, and every moment I chose to see the world differently. At BORIGAM, they didn't just teach me how to draw buildings—they taught me how to think in structures and dream in blueprints.",
    photo: '/images/Anagha.jpeg'
  }
];

const Reviews = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedStory, setSelectedStory] = useState<any>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const storiesRef = useRef<HTMLDivElement>(null);

  const scrollToStories = () => {
    storiesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ backgroundColor: '#f5f5f5' }}>
      <Header />
      <Head>
        <title>Success Stories – Borigam | NID, NATA, UCEED, CEED, BFA & NIFT Coaching Results</title>
        <meta name="description" content="Read inspiring success stories of Borigam students who cracked NID, NATA, UCEED, CEED, BFA & NIFT entrance exams. Proven results, top ranks & dream college admissions."></meta>
        <meta name="keywords" content="Borigam, Nift Coaching, NID coaching, Nata coaching, Ceed Coaching, Uceed coaching, Nift coaching near me, NID coaching near me, Nata coaching centres" />
        <link rel="canonical" href="https://borigaminstitute.in/success-stories/" />
        <meta name="robots" content="index, follow" />
      </Head>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', marginTop: '13rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1 style={{
            color: '#0a2c64',
            fontFamily: "'Open Sans', sans-serif",
            fontSize: '2.6rem',
            fontWeight: 800,
            marginBottom: '18px',
            letterSpacing: '-0.5px',
            lineHeight: 1.2,
          }}>
            Success Stories of Borigam Students – From Aspirations to Achievements
          </h1>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '40px', flexWrap: 'wrap' }}>
          <div style={{
            flex: '1',
            minWidth: '300px',
            backgroundColor: '#ff6b00',
            color: 'white',
            padding: '40px',
            borderRadius: '10px',
            boxShadow: '0 10px 30px rgba(255, 107, 0, 0.3)',
            marginRight: '30px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <Title level={2} style={{ color: 'white', fontSize: '2.5rem', fontWeight: 700, marginBottom: '20px' }}>
              DESIGN SUCCESS STORIES
            </Title>
            <Paragraph style={{
              fontSize: '14px',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: 0,
              lineHeight: 1.6
            }}>
              Our students' achievements showcase our commitment to nurturing creative excellence. Read inspiring journeys of those who made it to top design institutes with our guidance.
            </Paragraph>
          </div>

          <div style={{
            flex: '1',
            minWidth: '300px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '20px'
          }}>
            <Paragraph style={{ fontSize: '16px', color: '#555', lineHeight: 1.8 }}>
              Every year, our students achieve remarkable success in prestigious design entrance exams. Their stories inspire new generations of creative minds to pursue their dreams.
            </Paragraph>
            <Button
              type="primary"
              onClick={scrollToStories}
              style={{
                backgroundColor: '#ff6b00',
                borderColor: '#ff6b00',
                fontWeight: 500,
                width: '200px',
                marginTop: '20px',
                height: '45px',
                fontSize: '16px'
              }}
            >
              View All Stories
            </Button>
          </div>
        </div>

        <div ref={storiesRef}>
          <Row gutter={[24, 24]}>
            {successStories.map((story, index) => (
              <Col xs={24} sm={12} md={12} lg={8} key={index}>
                <div
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.4s ease',
                    height: '415px',
                    position: 'relative',
                    transform: hoveredCard === index ? 'translateY(-10px)' : 'none'
                  }}
                >
                  <div style={{
                    height: hoveredCard === index ? '30%' : '60%',
                    backgroundImage: hoveredCard === index ? 'none' : `url(${story.photo})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'all 0.4s ease',
                    position: 'relative',
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '100%',
                      backgroundColor: hoveredCard === index ? '#ff6b00' : 'transparent',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      opacity: hoveredCard === index ? 1 : 0,
                      transition: 'all 0.4s ease'
                    }} />
                  </div>

                  <div style={{
                    height: hoveredCard === index ? '60%' : '40%',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.4s ease',
                    position: 'relative'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: hoveredCard === index ? '-60%' : '-40%',
                      left: '20px',
                      right: '20px',
                      transition: 'all 0.4s ease',
                      color: hoveredCard === index ? 'white' : '#333',
                    }}>
                      <Text strong style={{
                        marginTop: hoveredCard === index ? '3rem' : '5rem',
                        display: 'block',
                        fontSize: '18px',
                        color: hoveredCard === index ? 'white' : '#ff6b00',
                        marginBottom: '4px'
                      }}>
                        {story.name}
                      </Text>
                      <Paragraph style={{
                        fontSize: '14px',
                        color: hoveredCard === index ? 'rgba(255, 255, 255, 0.9)' : '#ff6b00',
                        marginBottom: '4px'
                      }}>
                        {story.exam}
                      </Paragraph>
                      <Paragraph style={{
                        fontSize: '14px',
                        color: hoveredCard === index ? 'rgba(255, 255, 255, 0.9)' : '#ff6b00',
                        marginBottom: 0,
                        fontWeight: 500
                      }}>
                        {story.rank && `Rank: ${story.rank}`}
                      </Paragraph>
                    </div>

                    <Paragraph style={{
                      fontSize: '14px',
                      color: '#555',
                      marginBottom: 0,
                      opacity: hoveredCard === index ? 1 : 0,
                      height: hoveredCard === index ? 'auto' : 0,
                      overflow: 'hidden',
                      transition: 'all 0.4s ease',
                      lineHeight: 1.6,
                      fontStyle: 'italic'
                    }}>
                      {story.content}
                    </Paragraph>

                    <div style={{
                      opacity: hoveredCard === index ? 0 : 1,
                      height: hoveredCard === index ? 0 : 'auto',
                      overflow: 'hidden',
                      transition: 'all 0.4s ease',
                      textAlign: 'center',
                      paddingTop: '10px'
                    }}>
                      <Button
                        type="primary"
                        onClick={() => {
                          setSelectedStory(story);
                          setModalVisible(true);
                        }}
                        style={{
                          backgroundColor: '#ff6b00',
                          borderColor: '#ff6b00',
                          fontWeight: 500
                        }}

                      >
                        Read Full Story
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* Modal to show full story */}
      <Modal
        visible={modalVisible}
        title={selectedStory?.name}
        footer={null}
        onCancel={() => setModalVisible(false)}
      >
        <Paragraph style={{ fontSize: '16px', lineHeight: 1.8 }}>
          <strong>Exam:</strong> {selectedStory?.exam}
        </Paragraph>
        {selectedStory?.rank && (
          <Paragraph>
            <strong>Rank:</strong> {selectedStory.rank}
          </Paragraph>
        )}
        <Paragraph>{selectedStory?.content}</Paragraph>
      </Modal>
    </div>
  );
};

export default Reviews;
