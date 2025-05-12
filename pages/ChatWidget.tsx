import React, { useState, useEffect } from 'react';
import { Button, Input } from 'antd';
import { MessageOutlined, CloseOutlined, SendOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
}

const ChatWidget: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isFirstOpen, setIsFirstOpen] = useState(true);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    if (isFirstOpen) {
      setIsFirstOpen(false);
    }
  };

  useEffect(() => {
    if (isChatOpen && isFirstOpen) {
      // Initial welcome message
      setTimeout(() => {
        setMessages([{ sender: 'bot', text: 'Hello! Welcome to Borigam Institute.' }]);
        
        // Follow-up message after a short delay
        setTimeout(() => {
          setMessages(prev => [...prev, 
            { sender: 'bot', text: 'How can I help you with your design education journey today?' }
          ]);
        }, 800);
      }, 300);
    }
  }, [isChatOpen, isFirstOpen]);

  const sendMessage = () => {
    if (inputValue.trim()) {
      const newMessages = [...messages, { sender: 'user', text: inputValue }];
      // setMessages(newMessages);
      setInputValue('');

      // Simulated bot response
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          { 
            sender: 'bot', 
            text: 'Thank you for your message! Our admissions team will get back to you shortly. ' +
                  'Meanwhile, you might want to check our programs at borigaminstitute.com/programs'
          }
        ]);
      }, 1000);
    }
  };

  return (
    <div style={{ position: 'fixed', bottom: 30, right: 30, zIndex: 1000 }}>
      <Button
        type="primary"
        shape="circle"
        icon={isChatOpen ? <CloseOutlined /> : <MessageOutlined />}
        size="large"
        onClick={toggleChat}
        style={{ 
          backgroundColor: '#0a2c64', 
          borderColor: '#0a2c64',
          boxShadow: '0 4px 12px rgba(10, 44, 100, 0.3)',
          transition: 'all 0.3s'
        }}
      />
      {isChatOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            width: 350,
            height: 500,
            backgroundColor: '#fff',
            borderRadius: 15,
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            border: '1px solid #f0f0f0'
          }}
        >
          <div style={{
            padding: '12px 16px',
            backgroundColor: '#0a2c64',
            color: 'white',
            fontWeight: '600',
            textAlign: 'center'
          }}>
            Borigam Institute Support
          </div>
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: 15,
            backgroundColor: '#f7f7f7',
          }}>
            {messages.length === 0 && (
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                color: '#888'
              }}>
                Connecting to support...
              </div>
            )}
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  marginBottom: 10,
                  display: 'flex',
                  justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    backgroundColor: msg.sender === 'user' ? '#0a2c64' : '#e8e8e8',
                    color: msg.sender === 'user' ? '#fff' : '#000',
                    padding: '10px 15px',
                    borderRadius: msg.sender === 'user' ? '12px 12px 0 12px' : '12px 12px 12px 0',
                    maxWidth: '80%',
                    fontSize: 14,
                    lineHeight: 1.5
                  }}
                >
                  {msg.text}
                </motion.div>
              </div>
            ))}
          </div>
          <div style={{ 
            display: 'flex', 
            borderTop: '1px solid #f0f0f0',
            padding: '10px 12px',
            backgroundColor: '#fff'
          }}>
            <Input
              placeholder="Type your message here..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onPressEnter={sendMessage}
              style={{ 
                borderRadius: '20px', 
                border: '1px solid #d9d9d9',
                padding: '6px 15px',
                marginRight: '8px'
              }}
            />
            <Button
              type="primary"
              icon={<SendOutlined />}
              onClick={sendMessage}
              style={{ 
                backgroundColor: '#0a2c64', 
                borderColor: '#0a2c64',
                borderRadius: '50%',
                width: '40px',
                height: '40px'
              }}
            />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ChatWidget;