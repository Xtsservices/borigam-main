import React from 'react';
import Header from './Header';
import AppFooter from './Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{ 
        // Responsive padding for main content
        padding: 'clamp(1rem, 4vw, 1.25rem)',
        // Ensure proper spacing on mobile
        minHeight: 'calc(100vh - 60px)', // Adjust based on header height
      }}>{children}</main>
    </div>
  );
};

export default Layout;