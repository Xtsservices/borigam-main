import React from 'react';
import { Layout, Row, Col } from 'antd';
import {
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined
} from '@ant-design/icons';

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <>
      <Footer
        style={{
          backgroundColor: '#ffffff',
          padding: '40px 20px',
          fontFamily: '"Open Sans", sans-serif',
          color: '#000',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Row gutter={[32, 32]}>
            <Col xs={24} sm={12} md={6}>
              <h2 style={{ fontWeight: 'bold', color: '#b58e2f', fontSize: '28px' }}>BORIGAM</h2>
              <h4 style={{ fontSize: '16px', color: '#333' }}>Design | Architecture</h4>
              <p style={styles.text}><EnvironmentOutlined /> #1-11-206/A,<br />Opposite Seasons Florists,<br />Begumpet, Hyderabad - 500016,<br />Telangana, India.</p>
              <p style={styles.text}><PhoneOutlined /> 96661 69555, <br />93905 35851,<br />79952 97686</p>
              <p style={styles.text}><MailOutlined /> borigaminstitute@gmail.com</p>
              <h3 style={styles.heading}>SOCIAL LINKS</h3>
              <div style={{ fontSize: '18px' }}>
                <a href="#"><FacebookOutlined style={styles.icon} /></a>
                <a href="#"><TwitterOutlined style={styles.icon} /></a>
                <a href="#"><LinkedinOutlined style={styles.icon} /></a>
                <a href="#"><InstagramOutlined style={styles.icon} /></a>
                <a href="#"><YoutubeOutlined style={styles.icon} /></a>
              </div>
            </Col>

            <Col xs={24} sm={12} md={6}>
              <h3 style={styles.heading}>ENTRANCE EXAM COACHING</h3>
              <ul style={styles.list}>
                <li><a href="#">NID Entrance Exam</a></li>
                <li><a href="#">CEED Entrance Exam</a></li>
                <li><a href="#">UCEED Entrance Exam</a></li>
                <li><a href="#">NATA & JEE P2 Entrance Exam</a></li>
                <li><a href="#">NIFT Entrance Exam</a></li>
                <li><a href="#">Portfolio Guidance</a></li>
                <li><a href="#">Student Testimonials</a></li>
              </ul>
              
              <h3 style={styles.heading}>OUR CENTRES</h3>
              <ul style={styles.list}>
                <li><a href="#">Hyderabad</a></li>
                <li><a href="#">Madhapur</a></li>
                <li><a href="#">Begampet</a></li>
              </ul>
            </Col>

            <Col xs={24} sm={12} md={6}>
              <h3 style={styles.heading}>STUDY MATERIAL</h3>
              <ul style={styles.list}>
                <li><a href="#">CEED Study Material</a></li>
                <li><a href="#">NID Study Material</a></li>
                <li><a href="#">NATA & JEE P2 Study Material</a></li>
                <li><a href="#">NIFT Study Material</a></li>
                <li><a href="#">UCEED Study Material</a></li>
              </ul>
              
              <h3 style={styles.heading}>PAST YEAR PAPERS</h3>
              <ul style={styles.list}>
                <li><a href="#">Free NID UG Past Papers</a></li>
                <li><a href="#">Free NID PG Past Papers</a></li>
                <li><a href="#">Free JEE P2 Past Papers</a></li>
                <li><a href="#">Free NATA Past Papers</a></li>
                <li><a href="#">Free NIFT UG Past Papers</a></li>
                <li><a href="#">Free NIFT PG Past Papers</a></li>
                <li><a href="#">Free UCEED Past Papers</a></li>
                <li><a href="#">Free CEED Past Papers</a></li>
              </ul>
            </Col>

            <Col xs={24} sm={12} md={6}>
              <h3 style={styles.heading}>MOCK TESTS</h3>
              <ul style={styles.list}>
                <li><a href="#">Free NID UG Mock Tests</a></li>
                <li><a href="#">Free NID PG Mock Tests</a></li>
                <li><a href="#">Free UCEED Mock Tests</a></li>
                <li><a href="#">Free CEED Mock Tests</a></li>
                <li><a href="#">Free NATA Mock Tests</a></li>
                <li><a href="#">Free JEE P2 Mock Tests</a></li>
                <li><a href="#">Free NIFT UG Mock Tests</a></li>
                <li><a href="#">Free NIFT PG Mock Tests</a></li>
              </ul>
              
              <h3 style={styles.heading}>DESIGN RESOURCES</h3>
              <ul style={styles.list}>
                <li><a href="#">Top Design Careers</a></li>
                <li><a href="#">Top Fashion Careers</a></li>
                <li><a href="#">Top Fashion Institutes</a></li>
                <li><a href="#">Top Architecture Institutes</a></li>
                <li><a href="#">Top Design Institutes</a></li>
              </ul>
            </Col>
          </Row>
        </div>
        <br/><br/>
        {/* Copyright bar */}
        <div
          style={{
            backgroundColor: '#ff4500',
            color: '#ffffff',
            textAlign: 'center',
            padding: '12px 0',
            fontSize: '16px',
            fontWeight: 'bold',
            lineHeight: '1.6',
          }}
        >
          © 2024-2025 Borigam Institute. All Rights Reserved
        </div>
      </Footer>
    </>
  );
};

const styles = {
  heading: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#000',
    marginBottom: '16px',
    marginTop: '20px',
  },
  text: {
    fontSize: '14px',
    lineHeight: '2',
    color: '#333',
    marginBottom: '12px',
  },
  list: {
    listStyle: 'none',
    paddingLeft: '0',
    fontSize: '14px',
    lineHeight: '2',
  },
  icon: {
    marginRight: '10px',
    color: '#333',
    transition: 'color 0.3s',
    ':hover': {
      color: '#b58e2f',
    }
  },
  specialLink: {
    color: '#ff6600',
    textDecoration: 'none',
    fontSize: '15px',
    display: 'inline-block',
    marginBottom: '12px',
    ':hover': {
      textDecoration: 'underline',
    }
  },
};

export default AppFooter;