import React, { useState } from 'react';
import { MessageOutlined, CloseOutlined, SendOutlined } from '@ant-design/icons';
import { Button, Input, Typography } from 'antd';
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
import Enquire from './Enquire';
import ChatWidget from './ChatWidget';
import LifeAtBorigam from './LifeAtBorigam';
import StudentLifeGallery from './StudentLifeGallery';

const { Title } = Typography;

export const HomePage = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  const toggleChat = () => setIsChatOpen(!isChatOpen);

  const sendMessage = () => {
    if (inputValue.trim()) {
      setMessages((prevMessages) => [...prevMessages, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div style={{ width: '100%' }}>
      {/* Header outside the container to span full width */}
      <div style={{ width: '100%' }}>
        <Header />
      </div>
      
      {/* Content within the centered container */}
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 20px' }}>
        <CarouselComponent />
        <WhyChooseSection />
        <CareerGuideSection />
        <EntranceExamsSection />
        <AnimatedBoxesPage />
        <SuccessStoriesIndex />
        <Enquire />
        <StatsSection />
        <Gallery />
        <LifeAtBorigam />
        <StudentLifeGallery/>
        <ReviewsPage />
        <ChatWidget />
      </div>
    </div>
  );
};

export default HomePage;