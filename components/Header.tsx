import {
  MailOutlined,
  PhoneOutlined,
  MenuOutlined,
  CloseOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Dropdown, Button, Drawer, Row, Col, Space } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect, useCallback } from "react";
import type { MenuProps } from "antd";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const router = useRouter();
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800
  });
  const [scrolled, setScrolled] = useState(false);
  
  // Determine responsive breakpoints
  const isExtraSmall = screenSize.width < 576;
  const isSmall = screenSize.width >= 576 && screenSize.width < 768;
  const isMedium = screenSize.width >= 768 && screenSize.width < 992;
  const isLarge = screenSize.width >= 992 && screenSize.width < 1200;
  const isExtraLarge = screenSize.width >= 1200;
  
  // Combined check for mobile views
  const isMobile = screenSize.width < 768;
  const isTablet = screenSize.width >= 768 && screenSize.width < 992;

  // Debounced resize handler to prevent excessive re-renders
  const debounce = (fn: Function, ms = 300) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return function (this: any, ...args: any[]) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(this, args), ms);
    };
  };

  // Handle resize with useCallback to prevent unnecessary re-creations
  const handleResize = useCallback(
    debounce(() => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, 150),
    []
  );

  const handleScroll = useCallback(
    debounce(() => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    }, 50),
    [scrolled]
  );

  useEffect(() => {
    // Ensure we're running on client-side
    if (typeof window !== 'undefined') {
      // Set initial values
      handleResize();
      handleScroll();
      
      // Add event listeners
      window.addEventListener("resize", handleResize);
      window.addEventListener("scroll", handleScroll, { passive: true });
      
      // Cleanup
      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [handleResize, handleScroll]);

  // Close drawer when screen resizes from mobile to desktop
  useEffect(() => {
    if (!isMobile && mobileMenuVisible) {
      setMobileMenuVisible(false);
    }
  }, [isMobile, mobileMenuVisible]);

  const handleSectionClick = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    
    // Close mobile menu if open
    setMobileMenuVisible(false);
    
    // If not on homepage, navigate first then scroll
    if (router.pathname !== "/") {
      router.push(`/#${sectionId}`).then(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          const headerOffset = isMobile ? 70 : 100; // Different offset based on device
          window.scrollTo({
            top: section.offsetTop - headerOffset,
            behavior: "smooth"
          });
        }
      });
    } else {
      // If already on homepage, just scroll
      const section = document.getElementById(sectionId);
      if (section) {
        const headerOffset = isMobile ? 70 : 100; // Different offset based on device
        window.scrollTo({
          top: section.offsetTop - headerOffset,
          behavior: "smooth"
        });
      }
    }
  };

  const handlePhoneClick = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleMailClick = () => {
    window.location.href = "mailto:borigaminstitute@gmail.com";
  };

  const handlePortalClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = "http://13.233.33.133/";
  };

  const linkStyle: React.CSSProperties = {
    margin: isMobile ? "8px 0" : isTablet ? "0 8px" : "0 12px",
    textDecoration: "none",
    color: "black",
    fontSize: isTablet ? "0.9rem" : "0.95rem",
    transition: "all 0.3s",
    cursor: "pointer",
    padding: "6px 0",
    position: "relative",
    fontWeight: 500,
    display: "block", // Makes the full area clickable in mobile view
  };

  const activeLinkStyle: React.CSSProperties = {
    ...linkStyle,
    color: "#FF4E18",
  };

  const activeLinkUnderline: React.CSSProperties = {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "2px",
    backgroundColor: "#FF4E18",
    transform: "scaleX(1)",
    transition: "transform 0.3s",
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
    {
      key: "barch",
      label: <Link href="/entrance/barch">B.ARCH Entrance</Link>,
    },
  ];

  const navLinks = [
    { path: "/", label: "Home" },
    { 
      path: "#about-section", 
      label: "About Us",
      onClick: (e: React.MouseEvent) => handleSectionClick("about-section", e)
    },
    {
      path: "#entrance-section",
      label: "Entrance Exam",
      dropdown: true,
      items: entranceMenuItems,
      onClick: (e: React.MouseEvent) => handleSectionClick("entrance-section", e)
    },
    { path: "/careerOpportunities", label: "Career Opportunities" },
    { path: "/success-stories", label: "Success Stories" },
    // { 
    //   path: "#enquire-section", 
    //   label: "Contact",
    //   onClick: (e: React.MouseEvent) => handleSectionClick("enquire-section", e)
    // },
    { path: "/blog", label: "Blogs" },
  ];

  const renderNavLinks = (isMobileView = false) => {
    return navLinks.map((link) => {
      const isActive =
        router.pathname === link.path ||
        (link.path !== "/" && router.pathname.startsWith(link.path));

      if (link.dropdown) {
        return (
          <Dropdown
            key={link.path}
            menu={{ items: link.items }}
            trigger={isMobileView ? ["click"] : ["hover"]}
            placement={isMobileView ? "bottomLeft" : "bottom"}
            overlayClassName={`nav-dropdown ${isMobileView ? 'mobile-dropdown' : ''}`}
          >
            <div 
              style={isActive ? activeLinkStyle : linkStyle}
              onClick={link.onClick}
              className={isMobileView ? "mobile-dropdown-trigger" : ""}
            >
              {link.label}{" "}
              <DownOutlined style={{ fontSize: "0.7rem", marginLeft: 4 }} />
              {isActive && <span style={activeLinkUnderline} />}
            </div>
          </Dropdown>
        );
      }
      return (
        <Link
          key={link.path}
          href={link.path}
          style={isActive ? activeLinkStyle : linkStyle}
          onClick={
            link.onClick || (() => isMobileView && setMobileMenuVisible(false))
          }
        >
          <div style={{ position: "relative" }} className={isMobileView ? "mobile-nav-item" : ""}>
            {link.label}
            {isActive && <span style={activeLinkUnderline} />}
          </div>
        </Link>
      );
    });
  };

  // Logo sizing based on screen size and scroll state
  const getLogoSize = () => {
    if (isExtraSmall) return scrolled ? 30 : 40;
    if (isSmall) return scrolled ? 35 : 45;
    if (isMedium) return scrolled ? 40 : 50;
    if (isLarge) return scrolled ? 45 : 55;
    // Extra large
    return scrolled ? 250 : 300;
  };

  return (
    <header className={`custom-header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-content">
        <Row justify="space-between" align="middle" className="main-header-row">
          <Col xs={12} sm={12} md={5} lg={5} xl={6}>
<div 
  className={`logo-container ${isMobile ? 'mobile-logo-container' : ''} ${isTablet ? 'tablet-logo-container' : ''}`}
  style={{ 
    marginLeft: isMobile ? '0' : isTablet ? '-70px' : '-70px',
    marginTop: isMobile ? '0' : isTablet ? '-50px' : '-100px',
    marginBottom: isMobile ? '0' : isTablet ? '-50px' : '-100px',
  }}
>
  <Link href="/">
    <img 
      src="/images/logo.png" 
      alt="Borigam Logo" 
      className="logo" 
      style={{ 
        height: isMobile ? '50px' : `${getLogoSize()}px`,
        width: isMobile ? 'auto' : undefined
      }}
    />
  </Link>
</div>
          </Col>

          <Col xs={0} sm={0} md={19} lg={19} xl={18}>
            <div 
              className="right-section"
              style={{ marginLeft: isTablet ? '60px' : isMedium ? '80px' : '50px' }}
            >
              <div className={`contact-info-container ${scrolled ? "scrolled" : ""}`}>
                <div className="contact-info">
                  <Button
                    type="text"
                    icon={<PhoneOutlined />}
                    className={`contact-button ${isTablet ? 'tablet-contact' : ''}`}
                    onClick={() => handlePhoneClick("9666169555")}
                  >
                    {!isTablet && <span>9666169555</span>}
                  </Button>
                  <Button
                    type="text"
                    icon={<PhoneOutlined />}
                    className={`contact-button ${isTablet ? 'tablet-contact' : ''}`}
                    onClick={() => handlePhoneClick("7995297686")}
                  >
                    {!isTablet && <span>7995297686</span>}
                  </Button>
                  <Button
                    type="text"
                    icon={<MailOutlined />}
                    className={`contact-button ${isTablet ? 'tablet-contact' : ''}`}
                    onClick={handleMailClick}
                  >
                    {!isTablet && <span>borigaminstitute@gmail.com</span>}
                  </Button>
                </div>
              </div>

              <div className={`nav-section ${scrolled ? "scrolled" : ""}`}>
                <div className="top-buttons">
                 
                    <Link href="/ApplicationForm">
                    <Button
                      type={
                        router.pathname === "/ApplicationForm" ? "primary" : "default"
                      }
                      className="header-button admission-button"
                      size={isTablet ? "small" : "middle"}
                    >
                      Application Form
                    </Button>
                  </Link>
                   <Button
                    type={
                      router.pathname === "/borigam-portal"
                        ? "primary"
                        : "default"
                    }
                    className="header-button portal-button"
                    size={isTablet ? "small" : "middle"}
                    onClick={handlePortalClick}
                  >
                    Borigam Portal
                  </Button>
                </div>

                <nav className="desktop-nav">{renderNavLinks()}</nav>
              </div>
            </div>
          </Col>

          <Col xs={12} sm={12} md={0} lg={0} xl={0} style={{ textAlign: "right" }}>
            <Button
              icon={<MenuOutlined />}
              type="text"
              onClick={() => setMobileMenuVisible(true)}
              className="mobile-menu-button"
            />
          </Col>
        </Row>

        <Drawer
          title={
            <div className="drawer-header">
              <Link href="/">
                <img
                  src="/images/logo.png"
                  alt="Borigam Logo"
                  className="mobile-logo"
                />
              </Link>
              <Button
                icon={<CloseOutlined />}
                type="text"
                onClick={() => setMobileMenuVisible(false)}
                className="close-button"
              />
            </div>
          }
          placement="right"
          onClose={() => setMobileMenuVisible(false)}
          open={mobileMenuVisible}
          width={isExtraSmall ? "80%" : 280}
          closable={false}
          className="mobile-drawer"
        >
          <Space direction="vertical" className="mobile-nav">
            <div className="mobile-contact-info">
              <Button
                block
                icon={<PhoneOutlined />}
                type="text"
                className="mobile-contact-button"
                onClick={() => handlePhoneClick("9666169555")}
              >
                9666169555
              </Button>
              <Button
                block
                icon={<PhoneOutlined />}
                type="text"
                className="mobile-contact-button"
                onClick={() => handlePhoneClick("7995297686")}
              >
                7995297686
              </Button>
              <Button
                block
                icon={<MailOutlined />}
                type="text"
                className="mobile-contact-button"
                onClick={handleMailClick}
              >
                borigaminstitute@gmail.com
              </Button>
            </div>

            <div className="mobile-buttons">
              <Button
                block
                type={
                  router.pathname === "/borigam-portal" ? "primary" : "default"
                }
                className="mobile-button portal-button"
                onClick={handlePortalClick}
              >
                Borigam Portal
              </Button>
              {/* <Link href="/admissions">
                <Button
                  block
                  type={
                    router.pathname === "/admissions" ? "primary" : "default"
                  }
                  className="mobile-button admission-button"
                  onClick={() => setMobileMenuVisible(false)}
                >
                  Admission Form
                </Button>
              </Link> */}
            </div>

            <div className="mobile-nav-links">{renderNavLinks(true)}</div>
          </Space>
        </Drawer>
      </div>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        
        .custom-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background-color: white;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .header-content {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .main-header-row {
          padding: 10px 0;
          transition: all 0.3s ease;
        }

        .custom-header.scrolled {
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.15);
        }

        .custom-header.scrolled .main-header-row {
          padding: 5px 0;
        }

        .right-section {
          display: flex;
          flex-direction: column;
          width: 100%;
          transition: all 0.3s ease;
        }

        .contact-info-container {
          display: flex;
          justify-content: flex-end;
          padding: 5px 0;
          transition: all 0.3s ease;
          transform: translateX(0);
        }

        .contact-info-container.scrolled {
          justify-content: flex-start;
          transform: translateX(5rem);
        }

        .contact-info {
          display: flex;
          gap: 15px;
          align-items: center;
          transition: all 0.3s ease;
        }

        .contact-button {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #ff4e18;
          padding: 0 8px;
          font-size: 0.9rem;
          height: auto;
          border: none;
          background: transparent;
        }

        .contact-button:hover {
          color: #ff4e18;
          background: transparent;
        }

        .tablet-contact {
          padding: 4px;
          min-width: 32px;
          width: auto;
          display: flex;
          justify-content: center;
        }

        .nav-section {
          transition: all 0.3s ease;
          transform: translateY(0);
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .nav-section.scrolled {
          transform: translateY(-30px);
        }

        .top-buttons {
          display: flex;
          gap: 12px;
          justify-content: flex-end;
          padding: 5px 0;
          transition: all 0.3s ease;
        }

        /* Desktop Button Styles */
        .header-button.portal-button,
        .header-button.admission-button {
          border-color: #FF4E18;
          color: #FF4E18;
          font-weight: 500;
        }

        .header-button.portal-button.ant-btn-primary,
        .header-button.admission-button.ant-btn-primary {
          background-color: #FF4E18;
          color: white;
          border-color: #FF4E18;
        }

        .header-button.portal-button:not(.ant-btn-primary):hover,
        .header-button.admission-button:not(.ant-btn-primary):hover {
          background-color: #FF4E18;
          color: white;
          border-color: #FF4E18;
        }

        /* Mobile Button Styles */
        .mobile-button.portal-button,
        .mobile-button.admission-button {
          border-color: #FF4E18;
          color: #FF4E18;
          font-weight: 500;
        }

        .mobile-button.portal-button.ant-btn-primary,
        .mobile-button.admission-button.ant-btn-primary {
          background-color: #FF4E18;
          color: white;
          border-color: #FF4E18;
        }

        .mobile-button.portal-button:not(.ant-btn-primary):hover,
        .mobile-button.admission-button:not(.ant-btn-primary):hover {
          background-color: #FF4E18;
          color: white;
          border-color: #FF4E18;
        }

        .desktop-nav {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding: 5px 0;
          flex-wrap: wrap;
        }

        .logo-container {
          display: flex;
          align-items: center;
          height: 100%;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .mobile-logo-container {
          margin: 0 !important;
          height: auto;
          padding: 5px 0;
        }

        .tablet-logo-container {
          margin-left: -30px !important;
          margin-top: -30px !important;
          margin-bottom: -30px !important;
        }

        .logo {
          transition: all 0.3s ease;
          object-fit: contain;
        }

        .mobile-menu-button {
          font-size: 18px;
          width: 40px;
          height: 40px;
          color: #ff4e18;
        }

        .mobile-nav {
          display: flex;
          flex-direction: column;
          height: 100%;
          gap: 10px;
          overflow-y: auto;
        }

        .mobile-contact-info {
          margin-bottom: 20px;
        }

        .mobile-contact-button {
          text-align: left;
          padding: 8px 16px;
          height: auto;
          color: #ff4e18;
          border: none;
          box-shadow: none;
        }

        .mobile-contact-button:hover {
          color: #ff4e18;
          background: #FFF0EB;
        }

        .mobile-buttons {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 20px;
        }

        .mobile-button {
          height: 40px;
          font-weight: 500;
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 8px 0;
        }

        .mobile-nav-item {
          padding: 8px 0;
          border-bottom: 1px solid #f0f0f0;
        }

        .mobile-dropdown-trigger {
          padding: 8px 0;
          border-bottom: 1px solid #f0f0f0;
        }

        .drawer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 0;
          border-bottom: 1px solid #f0f0f0;
        }

        .mobile-logo {
          height: 50px;
          width: auto;
          object-fit: contain;
          cursor: pointer;
        }

        .close-button {
          font-size: 18px;
          color: #ff4e18;
        }

        .nav-dropdown {
          border-radius: 8px;
          padding: 8px 0;
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
        }

        .mobile-dropdown {
          width: 95% !important;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }

        .mobile-dropdown .ant-dropdown-menu {
          max-height: 60vh;
          overflow-y: auto;
        }

        .nav-dropdown .ant-dropdown-menu-item {
          padding: 8px 16px;
          transition: all 0.3s;
        }

        .nav-dropdown .ant-dropdown-menu-item:hover {
          background-color: #FFF0EB;
          color: #FF4E18;
        }

        .nav-dropdown .ant-dropdown-menu-item a {
          color: inherit;
        }

        .nav-dropdown .ant-dropdown-menu-item:hover a {
          color: #FF4E18;
        }

        /* Change hover color for all links */
        a:hover {
          color: #FF4E18 !important;
        }

        /* Active dropdown item styling */
        .nav-dropdown .ant-dropdown-menu-item-selected,
        .nav-dropdown .ant-dropdown-menu-item-selected a {
          background-color: #FFF0EB;
          color: #FF4E18;
          font-weight: 500;
        }

        /* Enhanced Responsive Styles */
        @media (max-width: 1200px) {
          .right-section {
            margin-left: 90px;
          }

          .contact-info-container.scrolled {
            transform: translateX(3rem);
          }
        }

        @media (max-width: 992px) {
          .right-section {
            margin-left: 60px;
          }

          .contact-info {
            gap: 10px;
          }
          
          .contact-button span {
            font-size: 0.8rem;
          }
          
          .desktop-nav {
            gap: 5px;
          }
          
          .contact-info-container.scrolled {
            transform: translateX(2rem);
          }
        }

        @media (max-width: 768px) {
          .header-content {
            padding: 0 16px;
          }

          .main-header-row {
            padding: 8px 0; 
          }

          .custom-header.scrolled .main-header-row {
            padding: 3px 0;
          }
        }

        @media (max-width: 576px) {

           .logo {
    height: 12rem !important;
    width: auto;
    margin-top:-60px;
        margin-bottom:-60px;
        margin-left:-20px

  }
          .header-content {
            padding: 0 10px;
          }

          .main-header-row {
            padding: 5px 0;
          }

          .mobile-menu-button {
            width: 36px;
            height: 36px;
          }
        }

        @media (orientation: landscape) and (max-height: 500px) {
          .mobile-drawer .ant-drawer-body {
            padding-top: 10px;
          }

          
          
          .mobile-nav {
            gap: 5px;
          }
          
          .mobile-contact-info {
            margin-bottom: 10px;
          }
          
          .mobile-buttons {
            margin-bottom: 10px;
          }
          
          .mobile-nav-links {
            gap: 8px;
          }
          
          .mobile-nav-item, .mobile-dropdown-trigger {
            padding: 4px 0;
          }
        }

        /* Fix for Safari */
        @supports (-webkit-touch-callout: none) {
          .contact-info-container.scrolled {
            -webkit-transform: translateX(5rem);
            transform: translateX(5rem);
          }
          
          .nav-section.scrolled {
            -webkit-transform: translateY(-30px);
            transform: translateY(-30px);
          }
        }
      `}</style>
    </header>
  );
};

export default Header;