import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { MessageOutlined, CloseOutlined, SendOutlined } from '@ant-design/icons';
import { Button, Input, Typography } from 'antd';
import styled from 'styled-components';
import Header from '../components/Header';
import AnimatedBoxesPage from './AnimatedBoxesPage';
import CareerGuideSection from './CareerGuideSection';
import StatsSection from './StatsSection';
import EntranceExamsSection from './EntranceExamsSection';
import Gallery from './Gallery';
import WhyChooseSection from './WhyChooseSection';
import CarouselComponent from './CarouselComponent';
// import SuccessStoriesIndex from './SuccessStoriesIndex';
import ReviewsPage from './ReviewsPage';
// import ChatWidget from './ChatWidget';
import LifeAtBorigam from './LifeAtBorigam';
import StudentLifeGallery from './StudentLifeGallery';
import EnquireIndex from './EnquireIndex';
import Footer from '../components/Footer';
// import AboutPage from './about';

const { Title } = Typography;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  
  /* Consistent top margin for header spacing */
  padding-top: clamp(80px, 12vw, 120px);
  
  @media (max-width: 768px) {
    padding-top: clamp(70px, 10vw, 90px);
  }
  
  @media (max-width: 480px) {
    padding-top: clamp(60px, 8vw, 80px);
  }
`;

const MainContent = styled.main`
  flex: 1;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 clamp(16px, 3vw, 24px); /* Responsive padding */
  width: 100%;
  
  /* Enhanced responsive typography system for Home page */
  font-size: clamp(0.875rem, 2vw, 1.125rem); /* Improved base font scaling */
  line-height: clamp(1.4, 0.2vw, 1.6); /* Responsive line height */
  
  /* Main title with responsive scaling using media queries */
  .home-main-title {
    text-align: center;
    color: #ff4e18;
    font-weight: 700;
    max-width: 100%;
    word-wrap: break-word;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    
    /* Desktop styles (default) */
    font-size: 2.5rem; /* Large - 40px */
    line-height: 1.2;
    margin-top: 80px;
    margin-bottom: 2rem;
    padding: 1.25rem 1.5rem;
    letter-spacing: -0.5px;
  }
  
  /* Tablet styles */
  @media (max-width: 1024px) {
    .home-main-title {
      font-size: 2rem; /* Medium-Large - 32px */
      margin-top: 60px;
      margin-bottom: 1.5rem;
      padding: 1rem 1.25rem;
      letter-spacing: -0.3px;
    }
  }
  
  /* Small tablet styles */
  @media (max-width: 768px) {
    .home-main-title {
      font-size: 1.75rem; /* Medium - 28px */
      line-height: 1.25;
      margin-top: 40px;
      margin-bottom: 1.25rem;
      padding: 0.75rem 1rem;
      letter-spacing: -0.2px;
    }
  }
  
  /* Mobile styles */
  @media (max-width: 480px) {
    .home-main-title {
      font-size: 1.25rem; /* Small - 20px */
      line-height: 1.3;
      margin-top: 24px;
      margin-bottom: 1rem;
      padding: 0.5rem 0.75rem;
      letter-spacing: 0px;
    }
  }
  
  /* Very small mobile styles */
  @media (max-width: 320px) {
    .home-main-title {
      font-size: 1.125rem; /* Extra Small - 18px */
      margin-top: 16px;
      padding: 0.25rem 0.5rem;
    }
  }
  
  /* Enhanced heading typography */
  h1 {
    font-size: clamp(1.5rem, 4.5vw, 2.5rem);
    line-height: clamp(1.2, 0.1vw, 1.3);
    margin-bottom: clamp(1rem, 3vw, 2rem);
  }
  
  h2 {
    font-size: clamp(1.25rem, 3.5vw, 2rem);
    line-height: 1.3;
    margin-bottom: clamp(0.875rem, 2.5vw, 1.5rem);
  }
  
  h3 {
    font-size: clamp(1.125rem, 3vw, 1.75rem);
    line-height: 1.3;
    margin-bottom: clamp(0.75rem, 2vw, 1.25rem);
  }
  
  /* Enhanced paragraph spacing */
  p {
    margin-bottom: clamp(0.875rem, 2vw, 1.5rem);
    font-size: inherit;
  }
  
  /* Prevent horizontal overflow */
  overflow-x: hidden;
`;

const AnimatedSection = styled.section<{ $visible: boolean; $delay: number; $minHeight?: number }>`
  /* Consistent margins across all Home page sections */
  margin: clamp(20px, 4vw, 40px) 0;
  padding: 0 clamp(8px, 2vw, 16px);
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? 0 : '20px')});
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  transition-delay: ${({ $delay }) => `${$delay * 0.1}s`};
  min-height: ${({ $minHeight }) => ($minHeight ? `${$minHeight}px` : '50px')};
  scroll-margin-top: clamp(80px, 12vw, 120px); /* Consistent with PageWrapper */

  /* Enhanced responsive spacing for better consistency */
  @media (max-width: 768px) {
    margin: clamp(16px, 3vw, 28px) 0;
    padding: 0 clamp(6px, 1.5vw, 12px);
    scroll-margin-top: clamp(70px, 10vw, 90px);
  }

  @media (max-width: 480px) {
    margin: clamp(12px, 2.5vw, 20px) 0;
    padding: 0 clamp(4px, 1vw, 8px);
    scroll-margin-top: clamp(60px, 8vw, 80px);
  }
  
  /* Enhanced typography for section content */
  h1, h2, h3 {
    margin-top: clamp(1.5rem, 4vw, 3rem);
    margin-bottom: clamp(0.875rem, 2.5vw, 1.75rem);
    font-weight: 600;
  }
  
  /* Ensure sections maintain consistent layout */
  overflow-x: hidden;
  width: 100%;
  
  /* Better text rendering */
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const HideScrollbarContainer = styled.div`
  width: 100%;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  
  /* Prevent horizontal scrolling */
  overflow-x: hidden;
  
  /* Home page specific responsive typography enhancements */
  
  /* Enhanced button styling for home page */
  .ant-btn {
    font-size: clamp(0.8125rem, 2vw, 1.125rem) !important;
    padding: clamp(6px, 1.2vw, 10px) clamp(14px, 2.8vw, 20px) !important;
    height: auto !important;
    line-height: 1.4 !important;
    border-radius: clamp(4px, 0.8vw, 6px) !important;
  }
  
  /* Enhanced card styling */
  .ant-card {
    .ant-card-head-title {
      font-size: clamp(1.125rem, 2.8vw, 1.5rem) !important;
      font-weight: 600 !important;
      line-height: 1.3 !important;
    }
    .ant-card-body {
      font-size: clamp(0.875rem, 2.2vw, 1.125rem) !important;
      padding: clamp(16px, 3.2vw, 28px) !important;
      line-height: clamp(1.4, 0.2vw, 1.6) !important;
    }
  }
  
  /* Typography utilities for home page sections */
  .home-section-title {
    font-size: clamp(1.375rem, 4.2vw, 2.25rem) !important;
    margin-bottom: clamp(1.25rem, 3.2vw, 2.25rem) !important;
    line-height: 1.2 !important;
    font-weight: 600 !important;
  }
  
  .home-section-subtitle {
    font-size: clamp(1.125rem, 2.8vw, 1.5rem) !important;
    margin-bottom: clamp(0.875rem, 2.2vw, 1.25rem) !important;
    line-height: 1.3 !important;
    font-weight: 500 !important;
  }
  
  .home-body-text {
    font-size: clamp(0.875rem, 2.2vw, 1.125rem) !important;
    line-height: clamp(1.5, 0.2vw, 1.6) !important;
    margin-bottom: clamp(0.875rem, 2.2vw, 1.25rem) !important;
  }
  
  /* Mobile-specific typography enhancements */
  @media (max-width: 768px) {
    .ant-typography h1 {
      font-size: clamp(1.375rem, 5.2vw, 2rem) !important;
      margin-bottom: clamp(1rem, 2.8vw, 1.5rem) !important;
    }
    .ant-typography h2 {
      font-size: clamp(1.25rem, 4.5vw, 1.75rem) !important;
      margin-bottom: clamp(0.875rem, 2.5vw, 1.25rem) !important;
    }
    .ant-typography h3 {
      font-size: clamp(1.125rem, 3.8vw, 1.5rem) !important;
      margin-bottom: clamp(0.75rem, 2.2vw, 1rem) !important;
    }
    .ant-typography p {
      font-size: clamp(0.875rem, 2.5vw, 1.125rem) !important;
      line-height: 1.5 !important;
      margin-bottom: clamp(0.875rem, 2.2vw, 1.25rem) !important;
    }
    
    /* Smaller buttons on mobile */
    .ant-btn {
      font-size: clamp(0.75rem, 1.8vw, 1rem) !important;
      padding: clamp(4px, 1vw, 8px) clamp(12px, 2.5vw, 16px) !important;
    }
  }
  
  /* Small mobile specific adjustments */
  @media (max-width: 480px) {
    .ant-typography h1 {
      font-size: clamp(1.25rem, 4.8vw, 1.75rem) !important;
    }
    .ant-typography h2 {
      font-size: clamp(1.125rem, 4.2vw, 1.5rem) !important;
    }
    .ant-typography h3 {
      font-size: clamp(1rem, 3.5vw, 1.25rem) !important;
    }
  }
`;

const HomePage: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState<number[]>([]);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    setVisibleSections([0]);
    if (window.location.hash) {
      const sectionId = window.location.hash.substring(1);
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'auto' });
        }
      }, 100);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target) {
            const index = sectionRefs.current.indexOf(entry.target as HTMLElement);
            if (index !== -1) {
              setVisibleSections((prev) =>
                prev.includes(index) ? prev : [...prev, index].sort((a, b) => a - b)
              );
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const currentRefs = sectionRefs.current;
    currentRefs.forEach((ref) => ref && observer.observe(ref));

    return () => {
      currentRefs.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, []);

  const sections = [
    { id: 'carousel', component: <CarouselComponent /> },
    { id: 'about-section', component: <WhyChooseSection /> },
    { id: 'career-guide', component: <CareerGuideSection /> },
    { id: 'entrance-section', component: <EntranceExamsSection /> },
    { id: 'animated-boxes', component: <AnimatedBoxesPage /> },
    { id: 'stats', component: <StatsSection /> },
    { id: 'gallery', component: <Gallery /> },
    { id: 'life-at-borigam', component: <LifeAtBorigam /> },
    { id: 'student-gallery', component: <StudentLifeGallery /> },
    { id: 'reviews', component: <ReviewsPage /> },
    // { id: 'enquire', component: <EnquireIndex /> },
  ];

  return (
    <>
      <Head>
        <title>Borigam Institute - Best Coaching for NIFT, NID, NATA, CEED, UCEED & B.Arch Entrance Exams in Hyderabad</title>
        <meta name="description" content="Crack NIFT, NID, NATA, CEED, UCEED & B.Arch entrance exams with Borigam Coaching in Hyderabad. Expert faculty from top institutes, updated study material, mock tests & proven results." />
        <meta name="keywords" content="Borigam, Nift Coaching, NID coaching, Nata coaching, Ceed Coaching, Uceed coaching, Nift coaching near me, NID coaching near me, Nata coaching centres" />
        <link rel="canonical" href="https://borigaminstitute.in/" />
        <meta name="robots" content="index, follow" />
      </Head>
      <PageWrapper>
        <Header />
        <HideScrollbarContainer>
          <MainContent>
            <h1 className="home-main-title">
              Best Coaching for NIFT, NID, NATA, CEED, UCEED & B.Arch Entrance Exams in Hyderabad
            </h1>
            {sections.map((section, index) => {
              // Remove minHeight for reviews section
              const isReviews = section.id === 'reviews';
              const extraStyle = section.id === 'life-at-borigam' ? { marginBottom: 80 } : {};
              return (
                <AnimatedSection
                  key={section.id}
                  id={section.id}
                  ref={(el) => {
                    if (el) sectionRefs.current[index] = el;
                  }}
                  $visible={visibleSections.includes(index)}
                  $delay={index % 3}
                  $minHeight={isReviews ? undefined : undefined}
                  style={extraStyle}
                >
                  {section.component}
                </AnimatedSection>
              );
            })}
          </MainContent>
        </HideScrollbarContainer>
        <Footer />
      </PageWrapper>
    </>
  );
};

export default HomePage;
