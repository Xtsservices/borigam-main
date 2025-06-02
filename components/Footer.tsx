import {
  EnvironmentOutlined,
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';
import { Col, Layout, Row, Collapse, Grid } from 'antd';
import React from 'react';

const { Footer } = Layout;
const { Panel } = Collapse;
const { useBreakpoint } = Grid;

const AppFooter = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  const renderContent = () => (
    <>
      <h2 style={{ fontWeight: 'bold', color: '#fff', fontSize: '26px', paddingTop: '20px' }}>BORIGAM</h2>
      <h4 style={{ fontSize: '16px', color: '#fff' }}>Design | Architecture</h4>
      <p style={styles.text}>
        <EnvironmentOutlined /> #1-11-206/A,<br />
        Opposite Seasons Florists,<br />
        Begumpet, Hyderabad - 500016,<br />
        Telangana, India.
      </p>
      <p style={styles.text}>
        <PhoneOutlined /> 96661 69555,<br />
        93905 35851,<br />
        79952 97686
      </p>
      <p style={styles.text}><MailOutlined /> borigaminstitute@gmail.com</p>
      <h3 style={styles.heading}>SOCIAL LINKS</h3>
      <div style={styles.iconContainer}>
        <a href="#"><FacebookOutlined style={styles.icon} /></a>
        <a href="#"><TwitterOutlined style={styles.icon} /></a>
        <a href="#"><LinkedinOutlined style={styles.icon} /></a>
        <a href="#"><InstagramOutlined style={styles.icon} /></a>
        <a href="#"><YoutubeOutlined style={styles.icon} /></a>
      </div>
    </>
  );

  const sections = [
    {
      title: 'ENTRANCE EXAM COACHING',
      items: [
        'NID Entrance Exam',
        'CEED Entrance Exam',
        'UCEED Entrance Exam',
        'NATA & JEE P2 Entrance Exam',
        'NIFT Entrance Exam',
        'Portfolio Guidance',
        'Student Testimonials',
      ],
    },
    {
      title: 'OUR CENTRES',
      items: ['Hyderabad', 'Madhapur', 'Begampet'],
    },
    {
      title: 'STUDY MATERIAL',
      items: [
        'CEED Study Material',
        'NID Study Material',
        'NATA & JEE P2 Study Material',
        'NIFT Study Material',
        'UCEED Study Material',
      ],
    },
    {
      title: 'PAST YEAR PAPERS',
      items: [
        'Free NID UG Past Papers',
        'Free NID PG Past Papers',
        'Free JEE P2 Past Papers',
        'Free NATA Past Papers',
        'Free NIFT UG Past Papers',
        'Free NIFT PG Past Papers',
        'Free UCEED Past Papers',
        'Free CEED Past Papers',
      ],
    },
    {
      title: 'MOCK TESTS',
      items: [
        'Free NID UG Mock Tests',
        'Free NID PG Mock Tests',
        'Free UCEED Mock Tests',
        'Free CEED Mock Tests',
        'Free NATA Mock Tests',
        'Free JEE P2 Mock Tests',
        'Free NIFT UG Mock Tests',
        'Free NIFT PG Mock Tests',
      ],
    },
    {
      title: 'DESIGN RESOURCES',
      items: [
        'Top Design Careers',
        'Top Fashion Careers',
        'Top Fashion Institutes',
        'Top Architecture Institutes',
        'Top Design Institutes',
      ],
    },
  ];

  return (
    <Footer
      style={{
        backgroundColor: '#ff6600',
        padding: '20px 0',
        fontFamily: '"Open Sans", sans-serif',
        color: '#fff',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
        {isMobile ? (
          <Collapse accordion bordered={false} style={{ backgroundColor: 'transparent' }}>
            <Panel header="BORIGAM Info" key="borigam" style={styles.panel}>
              {renderContent()}
            </Panel>
            {sections.map((section, idx) => (
              <Panel header={section.title} key={idx} style={styles.panel}>
                <ul style={styles.list}>
                  {section.items.map((item, i) => (
                    <li key={i}><a href="#" style={styles.link}>{item}</a></li>
                  ))}
                </ul>
              </Panel>
            ))}
          </Collapse>
        ) : (
          <Row gutter={[32, 32]}>
            <Col xs={24} sm={12} md={6}>{renderContent()}</Col>
            <Col xs={24} sm={12} md={6}>
              <h3 style={styles.heading}>ENTRANCE EXAM COACHING</h3>
              <ul style={styles.list}>
                {sections[0].items.map((item, i) => (
                  <li key={i}><a href="#" style={styles.link}>{item}</a></li>
                ))}
              </ul>
              <h3 style={styles.heading}>OUR CENTRES</h3>
              <ul style={styles.list}>
                {sections[1].items.map((item, i) => (
                  <li key={i}><a href="#" style={styles.link}>{item}</a></li>
                ))}
              </ul>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <h3 style={styles.heading}>STUDY MATERIAL</h3>
              <ul style={styles.list}>
                {sections[2].items.map((item, i) => (
                  <li key={i}><a href="#" style={styles.link}>{item}</a></li>
                ))}
              </ul>
              <h3 style={styles.heading}>PAST YEAR PAPERS</h3>
              <ul style={styles.list}>
                {sections[3].items.map((item, i) => (
                  <li key={i}><a href="#" style={styles.link}>{item}</a></li>
                ))}
              </ul>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <h3 style={styles.heading}>MOCK TESTS</h3>
              <ul style={styles.list}>
                {sections[4].items.map((item, i) => (
                  <li key={i}><a href="#" style={styles.link}>{item}</a></li>
                ))}
              </ul>
              <h3 style={styles.heading}>DESIGN RESOURCES</h3>
              <ul style={styles.list}>
                {sections[5].items.map((item, i) => (
                  <li key={i}><a href="#" style={styles.link}>{item}</a></li>
                ))}
              </ul>
            </Col>
          </Row>
        )}
      </div>
      <div
        style={{
          backgroundColor: '#cc5200',
          color: '#ffffff',
          textAlign: 'center',
          padding: '16px 0',
          fontSize: '15px',
          fontWeight: 'bold',
          marginTop: '40px',
        }}
      >
        © 2024-2025 Borigam Institute. All Rights Reserved
        <a
          href="https://www.xtsservices.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#fff', textDecoration: '' }}
        >
          <br />
          xtsservices.com
        </a>
      </div>
    </Footer>
  );
};

const styles = {
  heading: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: '16px',
    marginTop: '20px',
  },
  text: {
    fontSize: '14px',
    lineHeight: '1.8',
    color: 'white',
    marginBottom: '12px',
  },
  list: {
    listStyle: 'none',
    paddingLeft: '0',
    fontSize: '14px',
    lineHeight: '1.9',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    transition: 'color 0.3s',
  },
  iconContainer: {
    display: 'flex',
    gap: '12px',
    marginTop: '10px',
  },
  icon: {
    fontSize: '18px',
    color: '#fff',
    transition: 'color 0.3s',
    cursor: 'pointer',
  },
  panel: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#fff',
  },
};

export default AppFooter;
