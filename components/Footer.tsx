import {
  EnvironmentOutlined,
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
  TwitterOutlined,
  WhatsAppOutlined,
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
      <div style={{ fontSize: '1.1rem', marginBottom: 18, color: '#fff' }}>
        <strong style={{ color: '#fff', fontSize: '1.1rem' }}>Branches:</strong>
        <div style={{ borderBottom: '4px solid #fff', width: '10%', margin: '1.5px 0', borderRadius: '2px' }} /><br/>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 10, marginBottom: 10 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
            <div style={{ color: '#fff' }}>
              <EnvironmentOutlined style={{ color: '#fff', fontSize: '1.2rem', marginRight: 6 }} />
              <span style={{ fontWeight: 500, color: '#fff' }}>Begumpet:</span><br/>
              #1-11-206/A, Opposite Seasons Florists,
              Begumpet, Hyderabad,
              Telangana, <br/>India - 500016.
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
            <div style={{ color: '#fff' }}>
              <EnvironmentOutlined style={{ color: '#fff', fontSize: '1.2rem', marginRight: 6 }} />
              <span style={{ fontWeight: 500, color: '#fff' }}>Madhapur:</span><br/>
              2nd Floor, Above SBI Bank,
              Kavuri Hills, Madhapur, Hyderabad ,
              Telangana, <br/>India- 500081.
            </div>
          </div>
        </div>
      </div>
      <div style={{ fontSize: '1.1rem', marginBottom: 10, color: '#fff' }}>
        <PhoneOutlined style={{ marginRight: 6, color: '#fff' }} />
        <span style={{ fontWeight: 500, color: '#fff' }}>Contact Us:</span> <br/>96661 69555, 93905 35851, 79952 97686
      </div>
      <div style={{ fontSize: '1.1rem', marginBottom: 10, color: '#fff' }}>
        <MailOutlined style={{ marginRight: 6, color: '#fff' }} />
        <span style={{ fontWeight: 500, color: '#fff' }}>Email Us:</span> borigaminstitute@gmail.com
      </div>
      <div style={{ fontSize: '1.1rem', marginBottom: 10, color: '#fff' }}>
        <WhatsAppOutlined style={{ marginRight: 6, color: '#fff' }} />
        <span style={{ fontWeight: 500, color: '#fff' }}>WhatsApp:</span> 79952 97686
      </div>
      <h3 style={{ ...styles.heading, fontSize: '1.2rem' }}>SOCIAL LINKS</h3>
      <div style={styles.iconContainer}>
        {/* <a href="#"><FacebookOutlined className="footer-social-icon" /></a> */}
        <a href="https://x.com/Borigam_NIFTNID"><TwitterOutlined className="footer-social-icon" /></a>
        {/* <a href="#"><LinkedinOutlined className="footer-social-icon" /></a> */}
        <a href="https://www.instagram.com/borigam_nift_nid_uceed_barch?igsh=Y2c0bDJkdWxvejE="><InstagramOutlined className="footer-social-icon" /></a>
        <a href="https://www.youtube.com/@BorigamDesignEntranceExam"><YoutubeOutlined className="footer-social-icon" /></a>
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
    <>
      <style>{`
        .footer-link {
          color: #fff !important;
          text-decoration: none;
          font-size: 1rem;
          transition: color 0.3s ease, font-size 0.2s cubic-bezier(0.4,0,0.2,1);
        }
        .footer-link:hover {
          color: #fff !important;
          font-size: 1.02rem;
        }
        .footer-social-icon {
          font-size: 22px;
          color: #fff;
          transition: color 0.3s ease, font-size 0.2s cubic-bezier(0.4,0,0.2,1), transform 0.2s cubic-bezier(0.4,0,0.2,1);
          cursor: pointer;
        }
        .footer-social-icon:hover {
          color: #fff;
          font-size: 28px;
          transform: scale(1.18);
        }
        .footer-location-img {
          transition: transform 0.2s cubic-bezier(0.4,0,0.2,1), box-shadow 0.2s cubic-bezier(0.4,0,0.2,1);
        }
        .footer-location-img:hover {
          transform: scale(1.02);
          box-shadow: 0 6px 24px 0 rgba(0,0,0,0.18);
        }
        /* Force all text in footer to be white - Mobile & Desktop */
        .ant-layout-footer * {
          color: #fff !important;
        }
        .ant-collapse {
          background-color: transparent !important;
        }
        .ant-collapse > .ant-collapse-item {
          background-color: transparent !important;
          border-bottom: 1px solid rgba(255,255,255,0.3) !important;
        }
        .ant-collapse-header {
          background-color: transparent !important;
          color: #fff !important;
          padding: 12px 0 !important;
        }
        .ant-collapse-header * {
          color: #fff !important;
        }
        .ant-collapse-content {
          background-color: transparent !important;
        }
        .ant-collapse-content-box {
          background-color: transparent !important;
          padding: 16px 0 !important;
        }
        .ant-collapse-content-box * {
          color: #fff !important;
        }
        /* Ensure all text elements are white */
        footer h1, footer h2, footer h3, footer h4, footer h5, footer h6,
        footer p, footer span, footer div, footer li, footer a {
          color: #fff !important;
        }
        /* Override any inherited styles */
        .ant-layout-footer {
          color: #fff !important;
        }
        .ant-layout-footer .ant-collapse-item-active .ant-collapse-header {
          color: #fff !important;
        }
        /* Mobile responsive text fixes */
        @media (max-width: 768px) {
          .ant-layout-footer * {
            color: #fff !important;
          }
          .ant-collapse-header-text {
            color: #fff !important;
          }
          .footer-link {
            color: #fff !important;
          }
          /* Ensure mobile collapse panels stay transparent/orange background */
          .ant-collapse {
            background-color: transparent !important;
          }
          .ant-collapse-item {
            background-color: transparent !important;
            border: none !important;
          }
          .ant-collapse-content {
            background-color: transparent !important;
          }
        }
        /* Force white text on all footer elements regardless of screen size */
        .ant-layout-footer * {
          color: #fff !important;
        }
      `}</style>
      <Footer
      style={{
        backgroundColor: '#ff6600',
        paddingTop: '20px',
        paddingBottom: '20px',
       
        fontFamily: '"Open Sans", sans-serif',
        color: '#fff',
        minHeight: 'auto',
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: isMobile ? '100%' : '10000px',
          marginLeft: isMobile ? '0' : '100px',
          padding: isMobile ? '0 20px' : '0',
          minHeight: '420px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center', // Center horizontally
        }}
      >
        {isMobile ? (
          <Collapse
        accordion
        bordered={false}
        style={{
          backgroundColor: 'transparent',
        }}
        ghost
          >
        <Panel header="BORIGAM Info" key="borigam" style={styles.panel}>
          {renderContent()}
        </Panel>
        {sections.map((section, idx) => (
          <Panel header={section.title} key={idx} style={styles.panel}>
            <ul style={styles.list}>
          {section.items.map((item, i) => (
            <li key={i}><a href="#" className="footer-link">{item}</a></li>
          ))}
            </ul>
          </Panel>
        ))}
          </Collapse>
        ) : (
          <Row gutter={[56, 32]} style={{ width: '100%', justifyContent: 'center', alignItems: 'flex-start' }}>
        <Col xs={24} sm={12} md={6}>{renderContent()}</Col>
        <Col xs={24} sm={12} md={4}>
          <h3 style={styles.heading}>ENTRANCE EXAM COACHING</h3>
          <div style={styles.underline} />
          <ul style={styles.list}>
            {sections[0].items.map((item, i) => (
              <li key={i}><a href="#" className="footer-link">{item}</a></li>
            ))}
          </ul>
          <h3 style={styles.heading}>OUR CENTRES</h3>
          <div style={styles.underline} />
          <ul style={styles.list}>
            {sections[1].items.map((item, i) => (
              <li key={i}><a href="#" className="footer-link">{item}</a></li>
            ))}
          </ul>
        </Col>
        <Col xs={24} sm={12} md={4}>
          <h3 style={styles.heading}>STUDY MATERIAL</h3>
          <div style={styles.underline} />
          <ul style={styles.list}>
            {sections[2].items.map((item, i) => (
              <li key={i}><a href="#" className="footer-link">{item}</a></li>
            ))}
          </ul>
          <h3 style={styles.heading}>PAST YEAR PAPERS</h3>
          <div style={styles.underline} />
          <ul style={styles.list}>
            {sections[3].items.map((item, i) => (
              <li key={i}><a href="#" className="footer-link">{item}</a></li>
            ))}
          </ul>
        </Col>
        <Col xs={24} sm={12} md={4}>
          <h3 style={styles.heading}>MOCK TESTS</h3>
          <div style={styles.underline} />
          <ul style={styles.list}>
            {sections[4].items.map((item, i) => (
              <li key={i}><a href="#" className="footer-link">{item}</a></li>
            ))}
          </ul>
          <h3 style={styles.heading}>DESIGN RESOURCES</h3>
          <div style={styles.underline} />
          <ul style={styles.list}>
            {sections[5].items.map((item, i) => (
              <li key={i}><a href="#" className="footer-link">{item}</a></li>
            ))}
          </ul>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <h3 style={{ ...styles.heading, textAlign: 'left' }}>LOCATION</h3>
          <div style={{ ...styles.underline, marginLeft: 0 }} />
          <div style={{ fontSize: '1.05rem', lineHeight: '2.1', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <a href="https://maps.app.goo.gl/rXJwi3SfrX7UVS7m8" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'left' }}>
              <img
                src="/images/madhapur-map.jpg"
                alt="Madhapur BORIGAM Location Map"
                className="footer-location-img"
                style={{ width: '200px', height: '200px', border: '2px solid #fff', borderRadius: '6px', marginBottom: '4px' }}
              />
              <div style={{ color: '#fff', fontWeight: 500, marginBottom: '10px', fontSize: '1.05rem', textAlign: 'left' }}>Madhapur</div>
            </a>
            <a href="https://maps.app.goo.gl/Y6S88VjfoQbXEEvc7" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'left' }}>
              <img
                src="/images/begumpet-map.jpg"
                alt="Begumpet BORIGAM Location Map"
                className="footer-location-img"
                style={{ width: '200px', height: '200px', border: '2px solid #fff', borderRadius: '6px', marginBottom: '4px' }}
              />
              <div style={{ color: '#fff', fontWeight: 500, marginBottom: '10px', fontSize: '1.05rem', textAlign: 'left' }}>Begumpet</div>
            </a>
          </div>
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
          width: '100vw',
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          marginBottom: '-24px',
        }}
      >
        © 2025 Borigam Institute. All Rights Reserved
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
    </>
  );
};

const styles = {
  underline: {
    width: '40px',
    height: '3px',
    backgroundColor: '#fff',
    margin: '0 0 4px 0',
    borderRadius: '2px',
  },
  heading: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: '6px',
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
    padding: '0px 0',
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