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
import { useState, useEffect } from "react";
import type { MenuProps } from "antd";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const router = useRouter();
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const handleSectionClick = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    
    // Close mobile menu if open
    setMobileMenuVisible(false);
    
    // If not on homepage, navigate first then scroll
    if (router.pathname !== "/") {
      router.push(`/#${sectionId}`).then(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          window.scrollTo({
            top: section.offsetTop - 100,
            behavior: "smooth"
          });
        }
      });
    } else {
      // If already on homepage, just scroll
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 100,
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
    margin: "0 12px",
    textDecoration: "none",
    color: "black",
    fontSize: "0.95rem",
    transition: "all 0.3s",
    cursor: "pointer",
    padding: "6px 0",
    position: "relative",
    fontWeight: 500,
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
    { path: "/blog", label: "Blog" },
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
            placement={isMobileView ? "topLeft" : "bottom"}
            overlayClassName="nav-dropdown"
          >
            <div 
              style={isActive ? activeLinkStyle : linkStyle}
              onClick={link.onClick}
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
          <div style={{ position: "relative" }}>
            {link.label}
            {isActive && <span style={activeLinkUnderline} />}
          </div>
        </Link>
      );
    });
  };

  return (
    <header className={`custom-header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-content">
        <Row justify="space-between" align="middle" className="main-header-row">
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className="logo-container">
              <Link href="/">
                <img 
                  src="/images/logo.png" 
                  alt="Borigam Logo" 
                  className={`logo ${isMobile ? "mobile-logo" : ""}`} 
                />
              </Link>
            </div>
          </Col>

          <Col xs={0} sm={0} md={18} lg={18} xl={18}>
            <div className="right-section">
              <div className={`contact-info-container ${scrolled ? "scrolled" : ""}`}>
                <div className="contact-info">
                  <Button
                    type="text"
                    icon={<PhoneOutlined />}
                    className="contact-button"
                    onClick={() => handlePhoneClick("9666169555")}
                  >
                    <span className="contact-text">9666169555</span>
                  </Button>
                  <Button
                    type="text"
                    icon={<PhoneOutlined />}
                    className="contact-button"
                    onClick={() => handlePhoneClick("7995297686")}
                  >
                    <span className="contact-text">7995297686</span>
                  </Button>
                  <Button
                    type="text"
                    icon={<MailOutlined />}
                    className="contact-button"
                    onClick={handleMailClick}
                  >
                    <span className="contact-text">borigaminstitute@gmail.com</span>
                  </Button>
                </div>
              </div>

              <div className={`nav-section ${scrolled ? "scrolled" : ""}`}>
                <div className="top-buttons">
                  <Button
                    type={
                      router.pathname === "/borigam-portal"
                        ? "primary"
                        : "default"
                    }
                    className="header-button portal-button"
                    size="middle"
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
  width={280}
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
        type={router.pathname === "/borigam-portal" ? "primary" : "default"}
        className="mobile-button portal-button"
        onClick={handlePortalClick}
      >
        Borigam Portal
      </Button>
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

        .logo-container {
          display: flex;
          align-items: center;
          height: 100%;
          cursor: pointer;
        }

        .logo {
          height: 17rem;
          margin-top: -10rem;
          margin-bottom: -10rem;
          margin-left: -11rem;
          transition: all 0.3s ease;
          object-fit: contain;
        }

        .logo.mobile-logo {
          height: 60px;
        }

        .custom-header.scrolled .logo {
          height: 15rem;
        }

        .custom-header.scrolled .logo.mobile-logo {
          height: 50px;
        }

        .right-section {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        .contact-info-container {
          display: flex;
          justify-content: flex-end;
          padding: 5px 0;
          transition: all 0.3s ease;
        }

        .contact-info-container.scrolled {
          transform: translateY(-10px);
          opacity: 0;
          height: 0;
          padding: 0;
          overflow: hidden;
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

        .contact-text {
          white-space: nowrap;
        }

        .nav-section {
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .top-buttons {
          display: flex;
          gap: 12px;
          justify-content: flex-end;
          padding: 5px 0;
          transition: all 0.3s ease;
        }

        /* Desktop Button Styles */
        .header-button.portal-button {
          border-color: #FF4E18;
          color: #FF4E18;
          font-weight: 500;
        }

        .header-button.portal-button.ant-btn-primary {
          background-color: #FF4E18;
          color: white;
          border-color: #FF4E18;
        }

        .header-button.portal-button:not(.ant-btn-primary):hover {
          background-color: #FF4E18;
          color: white;
          border-color: #FF4E18;
        }

        /* Mobile Button Styles */
        .mobile-button.portal-button {
          border-color: #FF4E18;
          color: #FF4E18;
          font-weight: 500;
        }

        .mobile-button.portal-button.ant-btn-primary {
          background-color: #FF4E18;
          color: white;
          border-color: #FF4E18;
        }

        .mobile-button.portal-button:not(.ant-btn-primary):hover {
          background-color: #FF4E18;
          color: white;
          border-color: #FF4E18;
        }

        .desktop-nav {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding: 5px 0;
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
        //    border-bottom: none !important;
        // text-decoration: none !important;
        }

        .drawer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 0;
          border-bottom: 1px solid #f0f0f0;
        }

        .drawer-logo {
          height: 40px;
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

        @media (max-width: 1200px) {
          .header-content {
            padding: 0 15px;
          }
          
          .contact-text {
            font-size: 0.8rem;
          }
        }

        @media (max-width: 992px) {
          .contact-info {
            gap: 8px;
          }
          
          .contact-button span.anticon {
            margin-right: 0;
          }
          
          .contact-text {
            display: none;
          }
          
          .logo {
            height: 70px;
          }
          
          .logo.mobile-logo {
            height: 50px;
          }
        }

        @media (max-width: 768px) {
          .header-content {
            padding: 0 10px;
          }
          
          .logo {
            height: 60px;
          }
          
          .logo.mobile-logo {
            height: 17rem;
            margin-top: -6rem;
            margin-bottom: -6rem;
          }
          
          .custom-header.scrolled .logo {
            height: 50px;
          }
          
          .custom-header.scrolled .logo.mobile-logo {
            height: 12rem;
            margin-top: -4rem;
            margin-bottom: -4rem;
            margin-left: -1rem;
          }
        }

        @media (max-width: 576px) {
          .logo {
            height: 50px;
          }
          
          .logo.mobile-logo {
            height: 12rem;
            margin-left: -1.5rem;
            margin-top: -4rem;
            margin-bottom: -4rem;
          }
          
          .mobile-menu-button {
            width: 30px;
            height: 30px;
            font-size: 22px;
            margin-top: -4rem;
            margin-right:1rem;
          }

          
        }
      `}</style>
    </header>
  );
};

export default Header;