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

// ...all imports remain the same

const HomePage: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showChatPopup, setShowChatPopup] = useState(true);
  const [messages, setMessages] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [visibleSections, setVisibleSections] = useState<number[]>([]);
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
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

    const timer = setTimeout(() => {
      setShowEnquiryModal(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const toggleChat = () => {
    if (isChatOpen) {
      setIsChatOpen(false);
      setShowChatPopup(true);
      setMessages([]);
      setInputValue('');
    } else {
      setIsChatOpen(true);
      setShowChatPopup(false);
      setMessages([]);
      setInputValue('');
    }
  };

  const sendMessage = () => {
    if (inputValue.trim()) {
      setMessages((prev) => [...prev, inputValue]);
      setInputValue('');
    }
  };

  const handleQuickReply = (message: string) => {
    setMessages((prev) => [...prev, message]);
    setIsChatOpen(true);
    setShowChatPopup(false);
  };

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
    { id: 'chat', component: <ChatWidget /> },
  ];

  return (
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

      {/* Chat Toggle Button */}
      <Button
        shape="circle"
        icon={isChatOpen ? <CloseOutlined /> : <MessageOutlined />}
        onClick={toggleChat}
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          width: 64,
          height: 64,
          fontSize: 24,
          backgroundColor: '#fa8c16',
          borderColor: '#fa8c16',
          color: '#fff',
          zIndex: 1000,
        }}
      />

      {/* Separate Popup Boxes */}
      {showChatPopup && !isChatOpen && (
        <>
          <div
            style={{
              position: 'fixed',
              bottom: 180,
              right: 24,
              backgroundColor: '#fff',
              border: '1px solid #fa8c16',
              borderRadius: 20,
              padding: '10px 10px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              zIndex: 999,
              fontWeight: 500,
              color: '#333',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              minWidth: 180,
              maxWidth: 250,
            }}
          >
            <span>👋 Hi! How can we help?</span>
            <Button
              type="text"
              icon={<CloseOutlined />}
              onClick={() => setShowChatPopup(false)}
              style={{ color: '#fa8c16', fontSize: 16, padding: 0, lineHeight: 1 }}
              aria-label="Close greeting"
            />
          </div>

          <div style={{ position: 'fixed', bottom: 130, right: 24, zIndex: 999 }}>
            <button
              onClick={() => handleQuickReply('I have a question')}
              style={{
                backgroundColor: '#fff',
                color: '#fa8c16',
                border: '1px solid #fa8c16',
                borderRadius: 20,
                padding: '8px 14px',
                fontWeight: 500,
                cursor: 'pointer',
                boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
              }}
            >
              I have a question
            </button>
          </div>

          <div style={{ position: 'fixed', bottom: 90, right: 24, zIndex: 999 }}>
            <button
              onClick={() => handleQuickReply('Tell me more about your institution')}
              style={{
                backgroundColor: '#fff',
                color: '#fa8c16',
                border: '1px solid #fa8c16',
                borderRadius: 20,
                padding: '8px 14px',
                fontWeight: 500,
                cursor: 'pointer',
                boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
              }}
            >
              Tell me more
            </button>
          </div>
        </>
      )}

      {/* Chat Box */}
      {isChatOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: 100,
            right: 24,
            width: 320,
            height: 420,
            backgroundColor: '#fff',
            borderRadius: 12,
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: '#fa8c16',
              padding: '12px 16px',
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
              color: 'white',
              fontWeight: 'bold',
              fontSize: 16,
            }}
          >
            Chat Support
          </div>
          <div style={{ flex: 1, padding: '8px 12px', overflowY: 'auto' }}>
            {messages.length === 0 ? (
              <div>
                <div
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: 8,
                    padding: '10px',
                    fontWeight: 500,
                    color: '#555',
                    marginBottom: 12,
                  }}
                >
                  👋 Hi! I am Mansi. How can I assist you?
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <button
                    onClick={() => handleQuickReply('I have a question')}
                    style={{
                      backgroundColor: '#fff',
                      color: '#fa8c16',
                      border: '1px solid #fa8c16',
                      borderRadius: 20,
                      padding: '6px 12px',
                      fontWeight: 500,
                      cursor: 'pointer',
                      alignSelf: 'flex-start',
                    }}
                  >
                    I have a question
                  </button>
                  <button
                    onClick={() => handleQuickReply('Tell me more about your institution')}
                    style={{
                      backgroundColor: '#fff',
                      color: '#fa8c16',
                      border: '1px solid #fa8c16',
                      borderRadius: 20,
                      padding: '6px 12px',
                      fontWeight: 500,
                      cursor: 'pointer',
                      alignSelf: 'flex-start',
                    }}
                  >
                    Tell me more
                  </button>
                </div>
              </div>
            ) : (
              messages.map((msg, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: '#dcf8c6',
                    padding: '8px 12px',
                    borderRadius: 16,
                    margin: '6px 0',
                    alignSelf: 'flex-end',
                    maxWidth: '80%',
                    marginLeft: 'auto',
                  }}
                >
                  {msg}
                </div>
              ))
            )}
          </div>
          <div style={{ display: 'flex', padding: 8, borderTop: '1px solid #eee' }}>
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onPressEnter={sendMessage}
              placeholder="Type your message..."
              style={{ flex: 1, borderRadius: 20 }}
            />
            <Button
              type="primary"
              icon={<SendOutlined />}
              onClick={sendMessage}
              style={{ marginLeft: 8, backgroundColor: '#fa8c16', borderColor: '#fa8c16' }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
