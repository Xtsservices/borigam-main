import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Dropdown, Menu } from 'antd';
import { MailOutlined, PhoneOutlined } from '@ant-design/icons'; 


const Header = () => {
  const router = useRouter();

  const linkStyle = {
    margin: '0 8px',
    textDecoration: 'none',
    color: 'black',
    fontSize: '0.75rem',
    transition: 'color 0.3s', // Smooth transition for hover effect
  };

  const activeLinkStyle = {
    ...linkStyle,
    fontWeight: 'bold',
    color: 'orange', // Active link color
  };

  const isCoursesActive = router.pathname.startsWith('/courses');

  const menu = (
    <Menu>
      <Menu.Item key="1">
        <Link
          href="/courses/web-development"
          style={router.pathname === '/courses/web-development' ? activeLinkStyle : linkStyle}
        >
          Web Development
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link
          href="/courses/data-science"
          style={router.pathname === '/courses/data-science' ? activeLinkStyle : linkStyle}
        >
          Data Science
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link
          href="/courses/design"
          style={router.pathname === '/courses/design' ? activeLinkStyle : linkStyle}
        >
          Design
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <header
      style={{
        padding: '5px 10px', // Reduced padding
        backgroundColor: '#fff',
        borderBottom: '1px solid #ddd',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        position: 'sticky', // Sticky header
        top: 0, // Sticks to the top
        zIndex: 1000, // Ensures it stays above other elements
      }}
    >
      {/* Top Section */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          flexWrap: 'wrap', // Ensures wrapping on smaller screens
          marginBottom: '-10px', // Moves the navigation bar slightly up
        }}
      >
        {/* Logo Section */}
        <div style={{ marginLeft: '20px' }}>
          <img
            src="/images/logo.png"
            alt="Logo"
            style={{ width: '120px' }} // Reduced logo size
          />
        </div>

        {/* Contact Info Section */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: '16px',
            fontSize: '0.8rem', // Slightly smaller font size
            flexWrap: 'wrap', // Ensures wrapping on smaller screens
          }}
        >
          <p style={{ margin: '0', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MailOutlined style={{ color: 'orange' }} /> contact@mywebsite.com
          </p>
          <p style={{ margin: '0', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <PhoneOutlined style={{ color: 'orange' }} /> +1-234-567-890
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: '-5px', // Moves the navigation bar slightly up
          flexWrap: 'wrap', // Ensures wrapping on smaller screens
        }}
      >
        <nav style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
          <Link
            href="/"
            style={router.pathname === '/' ? activeLinkStyle : linkStyle}
          >
            Home
          </Link>
          <Link
            href="/about"
            style={router.pathname === '/about' ? activeLinkStyle : linkStyle}
          >
            About
          </Link>
          <Dropdown overlay={menu} trigger={['hover']}>
            <span
              style={isCoursesActive ? activeLinkStyle : linkStyle}
            >
              Courses <span style={{ fontSize: '0.6rem' }}>▼</span> {/* Dropdown arrow */}
            </span>
          </Dropdown>
          <Link
            href="/success-stories"
            style={router.pathname === '/success-stories' ? activeLinkStyle : linkStyle}
          >
            Success Stories
          </Link>
          <Link
            href="/testimonials"
            style={router.pathname === '/testimonials' ? activeLinkStyle : linkStyle}
          >
            Testimonials
          </Link>
          <Link
            href="/contact"
            style={router.pathname === '/contact' ? activeLinkStyle : linkStyle}
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          header {
            padding: 8px; // Reduced padding for smaller screens
          }
          img {
            width: 80px; // Reduced logo size for smaller screens
          }
          nav {
            justify-content: center;
          }
          div[style*='justify-content: flex-end'] {
            justify-content: center !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;