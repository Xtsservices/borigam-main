import React, { useState, useEffect, useRef } from 'react';
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
import SuccessStoriesIndex from './SuccessStoriesIndex';
import ReviewsPage from './ReviewsPage';
// import ChatWidget from './ChatWidget';
import LifeAtBorigam from './LifeAtBorigam';
import StudentLifeGallery from './StudentLifeGallery';
import EnquireIndex from './EnquireIndex';
import Footer from '../components/Footer';

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
`;

const AnimatedSection = styled.section<{ $visible: boolean; $delay: number; $minHeight?: number }>`
  margin: 40px 0;
  padding: 0 20px;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? 0 : '20px')});
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  transition-delay: ${({ $delay }) => `${$delay * 0.1}s`};
  min-height: ${({ $minHeight }) => ($minHeight ? `${$minHeight}px` : '45px')};
  scroll-margin-top: 100px;

  @media (max-width: 768px) {
    margin: 30px 0;
    padding: 0 15px;
    scroll-margin-top: 80px;
  }

  @media (max-width: 480px) {
    margin: 20px 0;
    padding: 0 10px;
    scroll-margin-top: 60px;
  }
`;

const HideScrollbarContainer = styled.div`
  width: 100%;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
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
    { id: 'student-life', component: <StudentLifeGallery /> },
    { id: 'life-at-borigam', component: <LifeAtBorigam /> },
    { id: 'success-stories', component: <SuccessStoriesIndex /> },
    { id: 'reviews', component: <ReviewsPage /> },
    // { id: 'chat', component: <ChatWidget /> },
  ];

  return (
    <PageWrapper>
      <HideScrollbarContainer>
        <Header />
        <MainContent>
          {sections.map((section, index) => {
            const isHeavySection =
              section.id === 'success-stories' || section.id === 'reviews';
            return (
              <AnimatedSection
                key={section.id}
                id={section.id}
                ref={(el) => {
                  if (el) sectionRefs.current[index] = el;
                }}
                $visible={visibleSections.includes(index)}
                $delay={index % 3}
                $minHeight={isHeavySection ? 600 : undefined}
              >
                {section.component}
              </AnimatedSection>
            );
          })}
        </MainContent>
      </HideScrollbarContainer>
    </PageWrapper>
  );
};

export default HomePage;
