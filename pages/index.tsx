import React, { useState, useEffect, useRef } from 'react';
import { MessageOutlined, CloseOutlined, SendOutlined } from '@ant-design/icons';
import { Button, Input, Typography, Modal } from 'antd';
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
// import Enquire from './Enquire';
import ChatWidget from './ChatWidget';
import LifeAtBorigam from './LifeAtBorigam';
import StudentLifeGallery from './StudentLifeGallery';
import EnquireIndex from './EnquireIndex';
const { Title } = Typography;

const AnimatedSection = styled.section<{ $visible: boolean; $delay: number }>`
  margin: 40px 0;
  padding: 0 20px;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? 0 : '20px')});
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  transition-delay: ${({ $delay }) => `${$delay * 0.1}s`};
  min-height: 50px;
  scroll-margin-top: 100px; /* Add scroll margin to account for fixed header */

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

const BlurBackground = styled.div<{ $blur: boolean }>`
  filter: ${({ $blur }) => ($blur ? 'blur(5px)' : 'none')};
  transition: filter 0.3s ease;
`;

const HomePage: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [visibleSections, setVisibleSections] = useState<number[]>([]);
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  // Initialize first section as visible
  useEffect(() => {
    setVisibleSections([0]);
    
    // Handle hash navigation on initial load
    if (window.location.hash) {
      const sectionId = window.location.hash.substring(1);
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'auto' });
        }
      }, 100);
    }
    
    // Show enquiry modal after 5 seconds
    const timer = setTimeout(() => {
      setShowEnquiryModal(true);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);

  const toggleChat = () => setIsChatOpen(!isChatOpen);

  const sendMessage = () => {
    if (inputValue.trim()) {
      setMessages((prev) => [...prev, inputValue]);
      setInputValue('');
    }
  };

  // Intersection Observer setup
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
    // { id: 'enquire-section', component: <Enquire /> },
    { id: 'reviews', component: <ReviewsPage /> },
    { id: 'chat', component: <ChatWidget /> },
  ];

  return (
    // <BlurBackground $blur={showEnquiryModal}>
      <div style={{ width: '100%', minHeight: '100vh', overflowX: 'hidden' }}>
        <Header />

        <main style={{ maxWidth: 1440, margin: '0 auto', padding: '0 20px' }}>
          {sections.map((section, index) => (
            <AnimatedSection
              key={section.id}
              id={section.id}
              ref={(el) => {
                if (el) {
                  sectionRefs.current[index] = el;
                }
              }}
              $visible={visibleSections.includes(index)}
              $delay={index % 3}
            >
              {section.component}
            </AnimatedSection>
          ))}
        </main>

        {/* Floating Chat Button */}
        <Button
          type="primary"
          shape="circle"
          size="large"
          icon={isChatOpen ? <CloseOutlined /> : <MessageOutlined />}
          onClick={toggleChat}
          style={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            zIndex: 1000,
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          }}
        />

        {/* Chat Modal */}
        {isChatOpen && (
          <div style={{
            position: 'fixed',
            bottom: 80,
            right: 24,
            width: 'min(350px, 90vw)',
            backgroundColor: '#fff',
            borderRadius: 8,
            boxShadow: '0 4px 24px rgba(0, 0, 0, 0.15)',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            maxHeight: '60vh',
            overflow: 'hidden',
          }}>
            <div style={{
              padding: 16,
              backgroundColor: '#1890ff',
              color: '#fff',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <Title level={5} style={{ color: '#fff', margin: 0 }}>Chat Support</Title>
              <Button
                type="text"
                icon={<CloseOutlined style={{ color: '#fff' }} />}
                onClick={toggleChat}
              />
            </div>
            
            <div style={{
              flex: 1,
              padding: 16,
              overflowY: 'auto',
              borderBottom: '1px solid #f0f0f0',
            }}>
              {messages.length === 0 ? (
                <div style={{ textAlign: 'center', color: '#888', padding: 16 }}>
                  How can we help you today?
                </div>
              ) : (
                messages.map((msg, i) => (
                  <div
                    key={i}
                    style={{
                      marginBottom: 8,
                      padding: '8px 12px',
                      backgroundColor: '#f5f5f5',
                      borderRadius: 4,
                      maxWidth: '80%',
                      marginLeft: 'auto',
                    }}
                  >
                    {msg}
                  </div>
                ))
              )}
            </div>
            
            <div style={{ padding: 16, display: 'flex', gap: 8 }}>
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                onPressEnter={sendMessage}
                style={{ flex: 1 }}
              />
              <Button
                type="primary"
                icon={<SendOutlined />}
                onClick={sendMessage}
                disabled={!inputValue.trim()}
              />
            </div>
          </div>
        )}

        {/* Enquiry Modal */}
        {/* <Modal
          visible={showEnquiryModal}
          onCancel={() => setShowEnquiryModal(false)}
          footer={null}
          centered
          width={1500}
        >
          <EnquireIndex/>
        </Modal> */}
      </div>
    // </BlurBackground>
  );
};

export default HomePage;