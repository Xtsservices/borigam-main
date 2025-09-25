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
`;

const MainContent = styled.main`
  flex: 1;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
  
  /* RESPONSIVE: Enhanced mobile-first approach */
  @media (max-width: 768px) {
    padding: 0 16px; /* Reduced padding for mobile */
    max-width: 100%; /* Full width on mobile */
  }
  
  @media (max-width: 480px) {
    padding: 0 12px; /* Even smaller padding on very small screens */
  }
`;

const AnimatedSection = styled.section<{ $visible: boolean; $delay: number; $minHeight?: number }>`
  margin: 20px 0;
  padding: 0 20px;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? 0 : '20px')});
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  transition-delay: ${({ $delay }) => `${$delay * 0.1}s`};
  min-height: ${({ $minHeight }) => ($minHeight ? `${$minHeight}px` : '45px')};
  scroll-margin-top: 100px;

  /* RESPONSIVE: Improved mobile spacing and scroll behavior */
  @media (max-width: 768px) {
    margin: 14px 0;
    padding: 0 10px; /* Reduced horizontal padding */
    scroll-margin-top: 80px;
  }

  @media (max-width: 480px) {
    margin: 8px 0;
    padding: 0 5px; /* Further reduced padding for small screens */
    scroll-margin-top: 60px;
  }
  
  /* RESPONSIVE: Ensure sections don't overflow on mobile */
  overflow-x: hidden;
  width: 100%;
`;

const HideScrollbarContainer = styled.div`
  width: 100%;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  
  /* RESPONSIVE: Prevent horizontal scrolling */
  overflow-x: hidden;
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
    { id: 'student-life', component: <StudentLifeGallery /> },
    { id: 'life-at-borigam', component: <LifeAtBorigam /> },
    // { id: 'success-stories', component: <SuccessStoriesIndex /> },
    { id: 'reviews', component: <ReviewsPage /> },
    // { id: 'chat', component: <ChatWidget /> },
  ];

  return (
    <>
      <Head>
        <title>Top Coaching for NIFT, NATA, NID, UCEED & B.Arch Entrance Exams in Hyderabad – Borigam</title>
        <meta name="description" content="Crack NIFT, NID, NATA, CEED, UCEED & B.Arch entrance exams with Borigam Coaching in Hyderabad. Expert faculty from top institutes, updated study material, mock tests & proven results." />
        <meta name="keywords" content="Borigam, Nift Coaching, NID coaching, Nata coaching, Ceed Coaching, Uceed coaching, Nift coaching near me, NID coaching near me, Nata coaching centres" />
        <link rel="canonical" href="https://borigaminstitute.in/" />
        <meta name="robots" content="index, follow" />
      </Head>
      <PageWrapper>
        <HideScrollbarContainer>
          <Header />
          <MainContent>
            <h1
              style={{
                textAlign: 'center',
                color: '#ff4e18',
                fontWeight: 700,
                fontSize: 'clamp(1.2rem, 4vw, 1.5rem)', /* RESPONSIVE: Fluid typography */
                margin: 'clamp(100px, 15vw, 160px) 0 clamp(-80px, -10vw, -100px) 0', /* RESPONSIVE: Fluid margins */
                padding: '0 20px', /* RESPONSIVE: Add padding for mobile */
                lineHeight: 1.3, /* RESPONSIVE: Better line height */
                maxWidth: '100%', /* RESPONSIVE: Prevent overflow */
                wordWrap: 'break-word' /* RESPONSIVE: Handle long words */
              }}
            >
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
      </PageWrapper>
    </>
  );
};

export default HomePage;
