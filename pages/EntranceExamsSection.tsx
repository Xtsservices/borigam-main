import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Card, Button, Typography, Carousel } from 'antd';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import { css, Global } from '@emotion/react';
import styled from '@emotion/styled';

const { Title } = Typography;

interface ExamCard {
  id: string;
  title: string;
  image: string;
}

const examCards: ExamCard[] = [
  { id: 'nift', title: 'NIFT Entrance', image: '/images/nift.jpeg' },
  { id: 'bfa', title: 'BFA Entrance', image: '/images/bfa.jpeg' },
  { id: 'nid', title: 'NID Entrance', image: '/images/nid.jpeg' },
  { id: 'fddi', title: 'FDDI Entrance', image: '/images/fddi.jpeg' },
  { id: 'ceed', title: 'CEED Entrance', image: '/images/ceed.jpeg' },
  { id: 'aat', title: 'AAT Entrance', image: '/images/AAT.jpeg' },
  { id: 'uceed', title: 'UCEED Entrance', image: '/images/uceed.jpeg' },
  { id: 'nata', title: 'NATA Entrance', image: '/images/nata.jpeg' },
  { id: 'barch', title: 'B.ARCH Entrance', image: '/images/barch.jpeg' },
];

// Styled components
const SectionContainer = styled.section`
  margin: 100px auto;
  height: 100%;
  max-width: 1200px;
  padding: 0 20px;
  font-family: 'Poppins', sans-serif;
  overflow: hidden;
`;

const SectionTitle = styled(Title)`
  text-align: center;
  color: #0a2c64 !important;
  font-weight: 600 !important;
  font-size: 30px !important;
  margin-bottom: 40p !important;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const TitleUnderline = styled.div`
  height: 3px;
  width: 40px;
  background: linear-gradient(90deg, #fbb034, #ff5722);
  margin: 10px auto 30px;
  border-radius: 3px;
  box-shadow: 0 2px 4px rgba(251, 176, 52, 0.3);
`;

const StyledCarousel = styled(Carousel)`
  position: relative;
  padding: 0 80px;

  .slick-list {
    padding: 40px 0;
    margin: 0 -30px;
    overflow: visible;
  }

  .slick-slide {
    padding: 0 30px;
    transition: transform 0.5s ease, opacity 0.5s ease;
    
    > div {
      height: 100%;
    }
  }

  .slick-dots {
    bottom: 0 !important;
    
    li {
      margin: 0 4px !important;
      
      button {
        width: 10px !important;
        height: 10px !important;
        border-radius: 50% !important;
        background: #0a2c64 !important;
        opacity: 0.4;
        transition: all 0.3s ease;
      }
      
      &.slick-active button {
        opacity: 1;
        width: 20px !important;
        border-radius: 5px !important;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 0 40px;
    
    .slick-slide {
      padding: 0 15px;
    }
  }
`;

const StyledCard = styled(Card)<{ ismiddle: boolean }>`
  border-radius: 10px !important;
  overflow: hidden;
  border: none !important;
  position: relative;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
  cursor: pointer;
  margin: 0 auto;
  box-shadow: ${props => props.ismiddle ? 
    '0 15px 30px rgba(0, 0, 0, 0.2), 0 5px 15px rgba(251, 176, 52, 0.3)' : 
    '0 8px 15px rgba(0, 0, 0, 0.1)'} !important;
  height: ${props => props.ismiddle ? '420px' : '380px'};
  transform: ${props => props.ismiddle ? 'scale(1.05)' : 'scale(0.95)'};
  z-index: ${props => props.ismiddle ? 5 : 1};
  background: white;

  &:hover {
    transform: ${props => props.ismiddle ? 
      'scale(1.08) translateY(-10px)' : 
      'scale(1) translateY(-5px)'};
    box-shadow: ${props => props.ismiddle ? 
      '0 25px 50px rgba(0, 0, 0, 0.3), 0 10px 20px rgba(251, 176, 52, 0.4)' : 
      '0 15px 30px rgba(0, 0, 0, 0.2)'} !important;
    z-index: 10;
    
    .card-title {
      color: ${props => props.ismiddle ? '#ff5722' : '#0a2c64'} !important;
      text-shadow: ${props => props.ismiddle ? '0 2px 4px rgba(255, 87, 34, 0.3)' : 'none'};
    }
  }

  .ant-card-body {
    padding: 20px !important;
    display: flex;
    flex-direction: column;
    height: calc(100% - ${props => props.ismiddle ? '220px' : '200px'});
  }

  .ant-card-cover {
    height: ${props => props.ismiddle ? '220px' : '200px'};
    overflow: hidden;
    transition: all 0.5s ease;
  }

  .card-image {
    width: 100%;
    height: 120%;
    padding: 0px;
    object-fit: cover;
    transition: all 0.5s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    height: auto !important;
    
    .ant-card-cover {
      height: 200px !important;
    }
  }
`;

const CardTitle = styled(Title)<{ ismiddle: boolean }>`
  color: #0a2c64 !important;
  font-size: ${props => props.ismiddle ? '20px' : '18px'} !important;
  margin-bottom: 15px !important;
  text-align: center;
  transition: all 0.3s ease;
  font-weight: ${props => props.ismiddle ? '600' : '500'} !important;
`;

const ViewMoreButton = styled(Button)<{ ismiddle: boolean }>`

  background: linear-gradient(90deg, #ff5722, #ff9800) !important;
  border: none !important;
  color: white !important;
  border-radius: 20px !important;
  font-weight: 500 !important;
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-top: auto;
  font-size: ${props => props.ismiddle ? '16px' : '14px'};
  height: ${props => props.ismiddle ? '42px' : '38px'};
  padding: ${props => props.ismiddle ? '0 24px' : '0 20px'};
  transition: all 0.3s ease !important;
  position: relative;
  z-index: 2;
  box-shadow: 0 4px 6px rgba(251, 176, 52, 0.3);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #0a2c64, #1a4b8c);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(10, 44, 100, 0.3) !important;
    
    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(0);
  }
`;

const ArrowContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  pointer-events: none;
  z-index: 10;
`;

const ArrowButton = styled(Button)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff5722, #ff4500, #ff7043) !important;
  color: white !important;
  border: none !important;
  box-shadow: 0 4px 8px rgba(255, 87, 34, 0.3) !important;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: auto;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #0a2c64, #1a4b8c);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 12px rgba(255, 87, 34, 0.4) !important;

    &::before {
      opacity: 0.2;
    }
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const EntranceExamsSection: React.FC = () => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef<any>(null);
const autoPlayIntervalRef = useRef<number | null>(null);

  const handleCardClick = (examId: string) => {
    router.push(`/entrance/${examId}`);
  };

  const isMiddleCard = (index: number) => {
    return index === currentSlide;
  };

  // Auto-play functionality with faster sliding
  useEffect(() => {
    const startAutoPlay = () => {
      autoPlayIntervalRef.current = setInterval(() => {
        if (carouselRef.current) {
          carouselRef.current.next();
        }
      }, 2000); // Faster auto-slide (2 seconds)
    };

    const stopAutoPlay = () => {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
        autoPlayIntervalRef.current = null;
      }
    };

    if (!isHovered) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }

    return () => {
      stopAutoPlay();
    };
  }, [isHovered]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    autoplaySpeed: 2000, // Faster transition speed
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

  return (
    <SectionContainer>
      <Global styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
      `} />

      <SectionTitle level={2}>Entrance Exams</SectionTitle>
      <TitleUnderline />

      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ position: 'relative' }}
      >
        <ArrowContainer>
          <ArrowButton 
            icon={<LeftOutlined />} 
            onClick={() => carouselRef.current?.prev()}
          />
          <ArrowButton 
            icon={<RightOutlined />} 
            onClick={() => carouselRef.current?.next()}
          />
        </ArrowContainer>

        <StyledCarousel 
          ref={carouselRef} 
          {...settings}
        >
          {examCards.map((exam, index) => (
            <div key={exam.id}>
              <StyledCard
                ismiddle={isMiddleCard(index)}
                hoverable
                cover={<img alt={exam.title} src={exam.image} className="card-image" />}
                onClick={() => handleCardClick(exam.id)}
              >
                <CardTitle level={3} ismiddle={isMiddleCard(index)} className="card-title">
                  {exam.title}
                </CardTitle>
                <ViewMoreButton
                  ismiddle={isMiddleCard(index)}
                  icon={<RightOutlined />}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick(exam.id);
                  }}
                >
                  View Details
                </ViewMoreButton>
              </StyledCard>
            </div>
          ))}
        </StyledCarousel>
      </div>
    </SectionContainer>
  );
};

export default EntranceExamsSection;