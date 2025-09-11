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
      <h2 style={{ fontWeight: 'bold', color: '#fff', fontSize: '2.3rem', paddingTop: '20px', margin: 0, marginBottom: '8px', letterSpacing: '2px' }}>BORIGAM</h2>
      <h4 style={{ fontSize: '1.3rem', color: '#fff', margin: 0, marginBottom: '18px', fontWeight: 600 }}>Design | Architecture</h4>
      <div style={{ fontSize: '1.1rem', marginBottom: 18 }}>
        <strong style={{ color: '#fff', fontSize: '1.1rem' }}>Branches:</strong>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 10, marginBottom: 10 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
            <a href="https://maps.app.goo.gl/1BegumpetLocation" target="_blank" rel="noopener noreferrer" style={{ marginTop: 4 }}>
              <img src="/images/" alt="Begumpet Location" style={{ width: 32, height: 32, borderRadius: 6, border: '2px solid #fff' }} />
            </a>
            <div>
              <EnvironmentOutlined style={{ color: '#fff', fontSize: '1.2rem', marginRight: 6 }} />
              <span style={{ fontWeight: 500 }}>Begumpet:</span><br />
              <span style={{ marginLeft: 28 }}>
                #1-11-206/A, Opposite Seasons Florists,<br />
                Begumpet, Hyderabad - 500016,<br />
                Telangana, India.
              </span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
            <a href="https://maps.app.goo.gl/ZVCPFXB7GNi5U6qB6" target="_blank" rel="noopener noreferrer" style={{ marginTop: 4 }}>
              <img src="/images/location.png" alt="Madhapur Location" style={{ width: 32, height: 32, borderRadius: 6, border: '2px solid #fff' }} />
            </a>
            <div>
              <EnvironmentOutlined style={{ color: '#fff', fontSize: '1.2rem', marginRight: 6 }} />
              <span style={{ fontWeight: 500 }}>Madhapur:</span><br />
              <span style={{ marginLeft: 28 }}>
                2nd Floor, Above SBI Bank,<br />
                Kavuri Hills, Madhapur, Hyderabad - 500081,<br />
                Telangana, India.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div style={{ fontSize: '1.1rem', marginBottom: 10 }}>
        <PhoneOutlined style={{ marginRight: 6 }} />
        <span style={{ fontWeight: 500 }}>Contact Us:</span> 96661 69555, 93905 35851, 79952 97686
      </div>
      <div style={{ fontSize: '1.1rem', marginBottom: 10 }}>
        <MailOutlined style={{ marginRight: 6 }} />
        <span style={{ fontWeight: 500 }}>Email Us:</span> borigaminstitute@gmail.com
      </div>
      <div style={{ fontSize: '1.1rem', marginBottom: 10 }}>
        <img src="/images/whatsapp.png" alt="WhatsApp" style={{ width: 22, height: 22, marginRight: 6, verticalAlign: 'middle' }} />
        <span style={{ fontWeight: 500 }}>WhatsApp:</span> 79952 97686
      </div>
      <h3 style={{ ...styles.heading, fontSize: '1.2rem' }}>SOCIAL LINKS</h3>
      <div style={styles.iconContainer}>
        <a href="#"><FacebookOutlined style={styles.icon} /></a>
        <a href="https://x.com/Borigam_NIFTNID"><TwitterOutlined style={styles.icon} /></a>
        <a href="#"><LinkedinOutlined style={styles.icon} /></a>
        <a href="https://www.instagram.com/borigam_nift_nid_uceed_barch?igsh=Y2c0bDJkdWxvejE="><InstagramOutlined style={styles.icon} /></a>
        <a href="https://www.youtube.com/@BorigamDesignEntranceExam"><YoutubeOutlined style={styles.icon} /></a>
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
        minHeight: 'auto', // Prevent height jumping
        position: 'relative', // Ensure proper positioning
      }}
    >
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 15px',
        minHeight: '420px', // Increased minimum height to prevent bouncing
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        {isMobile ? (
          <Collapse 
            accordion 
            bordered={false} 
            style={{ 
              backgroundColor: 'transparent',
              // Removed invalid nested selector
            }}
            ghost // Use ghost mode to remove borders and background
          >
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
          <Row gutter={[32, 32]}> {/* Removed minHeight from Row to avoid double minHeight and bounce */}
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
          width: '100%', // Ensure full width
        }}
      >
        © 2024-2025 Borigam Institute. All Rights Reserved
        <a
          href="https://www.xtsservices.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#fff', textDecoration: 'none' }}
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
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: '18px',
    marginTop: '22px',
    letterSpacing: '1px',
  },
  text: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: 'white',
    marginBottom: '14px',
  },
  list: {
    listStyle: 'none',
    paddingLeft: '0',
    fontSize: '1.05rem',
    lineHeight: '2.1',
    margin: 0, 
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    transition: 'color 0.3s ease', 
    display: 'block', 
    padding: '2px 0', 
    fontSize: '1.05rem',
  },
  iconContainer: {
    display: 'flex',
    gap: '16px',
    marginTop: '12px',
  },
  icon: {
    fontSize: '22px',
    color: '#fff',
    transition: 'color 0.3s ease, transform 0.2s ease',
    cursor: 'pointer',
  },
  panel: {
    backgroundColor: 'transparent !important',
    border: 'none !important',
    color: '#fff',
  },
};

export default AppFooter;
