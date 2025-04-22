import React from 'react';
import Header from '../components/Header';

const AboutPage = () => {
  return (
    <div>
      <Header />
      <main style={{ padding: '20px' }}>
        <h2>About Us</h2>
        <p>This is the About page content.</p>
      </main>
    </div>
  );
};

export default AboutPage;