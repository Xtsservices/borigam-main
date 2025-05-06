import { MailOutlined, PhoneOutlined, MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Button, Drawer, Row, Col, Space } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import type { MenuProps } from "antd";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const router = useRouter();
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const linkStyle: React.CSSProperties = {
    margin: "0 16px",
    textDecoration: "none",
    color: "black",
    fontSize: "1rem",
    transition: "color 0.3s",
    cursor: "pointer",
  };

  const activeLinkStyle: React.CSSProperties = {
    ...linkStyle,
    fontWeight: "bold",
    color: "orange",
  };


  const entranceMenuItems: MenuProps["items"] = [
    { key: "nift", label: <Link href="/entrance/nift">NIFT Entrance</Link> },
    { key: "bfa", label: <Link href="/entrance/bfa">BFA Entrance</Link> },
    { key: "nid", label: <Link href="/entrance/nid">NID Entrance</Link> },
    { key: "fddi", label: <Link href="/entrance/fddi">FDDI Entrance</Link> },
    { key: "ceed", label: <Link href="/entrance/ceed">CEED Entrance</Link> },
    { key: "aat", label: <Link href="/entrance/aat">AAT Entrance</Link> },
    { key: "uceed", label: <Link href="/entrance/uceed">UCEED Entrance</Link> },
    { key: "nata", label: <Link href="/entrance/nata">NATA Entrance</Link> },
    { key: "barch", label: <Link href="/entrance/barch">B.ARCH Entrance</Link> },
    { key: "design", label: <Link href="/entrance/design">Design Entrance Coaching</Link> },
  ];

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { 
      path: "/entrance", 
      label: "Entrance Exam", 
      dropdown: true,
      items: entranceMenuItems 
    },
    { 
      path: "/careerOpportunities", 
      label: "Career Opportunities", 
    },
    { path: "/success-stories", label: "Success Stories" },
    { path: "/contact", label: "Contact" },
    { path: "/blog", label: "Blog" },
  ];

  const renderNavLinks = (isMobileView = false) => {
    return navLinks.map((link) => {
      if (link.dropdown) {
        return (
          <Dropdown 
            key={link.path}
            menu={{ items: link.items }}
            trigger={isMobileView ? ["click"] : ["hover"]}
            placement={isMobileView ? "topLeft" : "bottom"}
          >
            <span style={router.pathname === link.path ? activeLinkStyle : linkStyle}>
              {link.label} <span style={{ fontSize: "0.7rem" }}>▼</span>
            </span>
          </Dropdown>
        );
      }
      return (
        <Link
          key={link.path}
          href={link.path}
          style={router.pathname === link.path ? activeLinkStyle : linkStyle}
          onClick={() => isMobileView && setMobileMenuVisible(false)}
        >
          {link.label}
        </Link>
      );
    });
  };

  const setVisible = (visible: boolean) => {
    setMobileMenuVisible(visible);
  };

  return (
    <header className="custom-header">
      {/* Top Buttons Row */}
      <Row justify="space-between" align="middle" className="top-row">
          <Col xs={24} sm={24} md={0} lg={0} xl={0}>
            <Button
              icon={<MenuOutlined />}
              type="text"
              onClick={() => setVisible(true)}
              style={{ marginLeft: 16 }}
            />
          </Col>
          <Col xs={0} sm={0} md={24} lg={24} xl={24}>
            <div className="top-buttons">
              <Link href="/borigam-portal">
                <Button
                  type={router.pathname === "/borigam-portal" ? "primary" : "default"}
                  className="header-button"
                >
                  Borigam Portal
                </Button>
              </Link>
              <Link href="/admissions">
                <Button
                  type={router.pathname === "/admissions" ? "primary" : "default"}
                  className="header-button"
                >
                  Admission Form
                </Button>
              </Link>
            </div>
          </Col>
        </Row>

      {/* Logo and Contact Info */}
      <Row justify="space-between" align="middle" className="logo-contact-row">
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div className="logo-container">
            <img
              src="/images/logo.png"
              alt="Borigam Logo"
              className="logo"
            />
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div className="contact-info">
            <p>
              <MailOutlined style={{ color: "orange" }} /> borigaminstitute@gmail.com
            </p>
            <p>
              <PhoneOutlined style={{ color: "orange" }} /> 9666169555
            </p>
          </div>
        </Col>
      </Row>

      {/* Desktop Navigation - Only shows on larger screens */}
      {!isMobile && (
        <Row className="desktop-nav">
          <Col span={24}>
            <nav className="nav-menu">
              {renderNavLinks()}
            </nav>
          </Col>
        </Row>
      )}

      {/* Mobile Drawer Menu */}
      <Drawer
        title={
          <div className="drawer-header">
            <span>Menu</span>
            <Button 
              icon={<CloseOutlined />} 
              type="text" 
              onClick={() => setMobileMenuVisible(false)}
            />
          </div>
        }
        placement="left"
        onClose={() => setMobileMenuVisible(false)}
        open={mobileMenuVisible}
        width={300}
        closable={false}
        className="mobile-drawer"
      >
        <Space direction="vertical" className="mobile-nav">
          <Link href="/borigam-portal">
            <Button
              block
              type={router.pathname === "/borigam-portal" ? "primary" : "default"}
              className="mobile-button"
              onClick={() => setMobileMenuVisible(false)}
            >
              Borigam Portal
            </Button>
          </Link>
          <Link href="/admissions">
            <Button
              block
              type={router.pathname === "/admissions" ? "primary" : "default"}
              className="mobile-button"
              onClick={() => setMobileMenuVisible(false)}
            >
              Admission Form
            </Button>
          </Link>
          <div className="mobile-nav-links">
            {renderNavLinks(true)}
          </div>
          <div className="mobile-contact-info">
            <p>
              <MailOutlined style={{ color: "orange" }} /> borigaminstitute@gmail.com
            </p>
            <p>
              <PhoneOutlined style={{ color: "orange" }} /> 9666169555
            </p>
          </div>
        </Space>
      </Drawer>

      <style jsx>{`
        .custom-header {
          padding: 0;
          background-color: #fff;
          border-bottom: 0px solid #ddd;
          position: sticky;
          top: 0;
          z-index: 1000;
          margin-left: 0px;
          margin-right: 0px;
        }

        .top-row {
          padding: 8px 0;
          background: #f8f8f8;
        }

        .mobile-menu-button {
          width: 100%;
          text-align: left;
          font-weight: bold;
          padding-left: 20px;
          height: 40px;
        }

        .top-buttons {
          display: flex;
          justify-content: flex-end;
          padding: 0 20px;
          gap: 15px;
          padding:  15px 10px;
        }

        .header-button {
          background-color: ${router.pathname === "/borigam-portal" || router.pathname === "/admissions" 
            ? "orange" : "white"};
          border-color: orange;
          color: ${router.pathname === "/borigam-portal" || router.pathname === "/admissions" 
            ? "white" : "orange"};
          font-weight: bold;
        }

        .logo-contact-row {
          padding: 10px 20px;
        }

        .logo-container {
          display: flex;
          justify-content: flex-start;

        }
        .logo {
          height: auto;
          max-width: 400px;
          object-fit: contain;
          margin: 0;
          height: 400px;
          margin-bottom: -155px;
          margin-top: -195px;
          margin-left: -15px;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 0.9rem;
          text-align: right;
          padding: 0px 0;
          margin-right: 20px;
          }

        .nav-menu {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          padding: 15px 0;
          margin-left: 496px;
          margin-top: -5px;
          border-top: 0px solid #eee;
        }

        .desktop-nav {
          display: block;
        }

        .mobile-nav {
          display: flex;
          flex-direction: column;
          height: 100%;
          gap: 10px;
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-top: 20px;
        }

        .mobile-button {
          margin-bottom: 10px;
          height: 40px;
        }

        .mobile-contact-info {
          margin-top: auto;
          padding-top: 20px;
          font-size: 0.9rem;
        }

        .drawer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        @media (max-width: 768px) {
          .logo {
            max-width: 310px;
            margin-top: -185px;
            margin-left: 10;

          }

          .logo-container {
            justify-content: center;
          }

          .contact-info {
            text-align: center;
            margin-top: 5px;
            margin-left: 50;
          }

          .top-buttons {
            justify-content: center;
          }
        }

        @media (min-width: 769px) {
          .mobile-menu-button {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;