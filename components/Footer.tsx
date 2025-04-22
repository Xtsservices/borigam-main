import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer
      style={{
        textAlign: 'center', // Centers the content
        padding: '10px',
        backgroundColor: '#f0f0f0',
        marginTop: '20px',
      }}
    >
      <p>&copy; 2025 My Website. All rights reserved.</p>
    </Footer>
  );
};

export default AppFooter;