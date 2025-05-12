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

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (router.pathname !== "/") {
      router.push("/").then(() => {
        const enquireSection = document.getElementById("enquire-section");
        if (enquireSection) {
          enquireSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    } else {
      const enquireSection = document.getElementById("enquire-section");
      if (enquireSection) {
        enquireSection.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileMenuVisible(false);
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
    color: "#1890ff",
  };

  const activeLinkUnderline: React.CSSProperties = {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "2px",
    backgroundColor: "#1890ff",
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
    {
      key: "design",
      label: <Link href="/entrance/design">Design Entrance Coaching</Link>,
    },
  ];

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    {
      path: "/entrance",
      label: "Entrance Exam",
      dropdown: true,
      items: entranceMenuItems,
    },
    { path: "/careerOpportunities", label: "Career Opportunities" },
    { path: "/success-stories", label: "Success Stories" },
    { path: "#enquire", label: "Contact", onClick: handleContactClick },
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
            <div style={isActive ? activeLinkStyle : linkStyle}>
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
                <img src="/images/logo.png" alt="Borigam Logo" className="logo" />
              </Link>
            </div>
          </Col>

          <Col xs={0} sm={0} md={18} lg={18} xl={18}>
            <div className="right-section">
              <div className={`contact-info-container ${scrolled ? "hidden" : ""}`}>
                <div className="contact-info">
                  <Button
                    type="text"
                    icon={<PhoneOutlined />}
                    className="contact-button"
                    onClick={() => handlePhoneClick("9666169555")}
                  >
                    9666169555
                  </Button>
                  <Button
                    type="text"
                    icon={<PhoneOutlined />}
                    className="contact-button"
                    onClick={() => handlePhoneClick("7995297686")}
                  >
                    7995297686
                  </Button>
                  <Button
                    type="text"
                    icon={<MailOutlined />}
                    className="contact-button"
                    onClick={handleMailClick}
                  >
                    borigaminstitute@gmail.com
                  </Button>
                </div>
              </div>

              <div className="nav-section">
                <div className={`top-buttons ${scrolled ? "hidden" : ""}`}>
                  <Button
                    type={
                      router.pathname === "/borigam-portal"
                        ? "primary"
                        : "default"
                    }
                    className="header-button"
                    size="middle"
                    onClick={handlePortalClick}
                  >
                    Borigam Portal
                  </Button>
                  <Link href="/admissions">
                    <Button
                      type={
                        router.pathname === "/admissions" ? "primary" : "default"
                      }
                      className="header-button"
                      size="middle"
                    >
                      Admission Form
                    </Button>
                  </Link>
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
                type={
                  router.pathname === "/borigam-portal" ? "primary" : "default"
                }
                className="mobile-button"
                onClick={handlePortalClick}
              >
                Borigam Portal
              </Button>
              <Link href="/admissions">
                <Button
                  block
                  type={
                    router.pathname === "/admissions" ? "primary" : "default"
                  }
                  className="mobile-button"
                  onClick={() => setMobileMenuVisible(false)}
                >
                  Admission Form
                </Button>
              </Link>
            </div>

            <div className="mobile-nav-links">{renderNavLinks(true)}</div>
          </Space>
        </Drawer>
      </div>

      <style jsx global>{`
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

        .custom-header.scrolled .main-header-row {
          padding: 5px 0;
        }

        .right-section {
          margin-left: 120px;
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        .contact-info-container {
          display: flex;
          justify-content: flex-end;
          padding: 5px 0;
          transition: all 0.3s ease;
          max-height: 40px;
          overflow: hidden;
        }

        .contact-info-container.hidden {
          opacity: 0;
          max-height: 0;
          padding: 0;
        }

        .contact-info {
          display: flex;
          gap: 15px;
          align-items: center;
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

        .nav-section {
          transition: all 0.3s ease;
        }

        .top-buttons {
          display: flex;
          gap: 12px;
          justify-content: flex-end;
          padding: 5px 0;
          transition: all 0.3s ease;
          max-height: 40px;
          overflow: hidden;
        }

        .top-buttons.hidden {
          opacity: 0;
          max-height: 0;
          padding: 0;
        }

        .header-button {
          background-color: ${router.pathname === "/borigam-portal" ||
          router.pathname === "/admissions"
            ? "#1890ff"
            : "white"};
          border-color:hsl(5, 100.00%, 54.70%);
          color: ${router.pathname === "/borigam-portal" ||
          router.pathname === "/admissions"
            ? "white"
            : "#1890ff"};
          font-weight: 500;
        }

        .header-button:hover {
          background-color: ${router.pathname === "/borigam-portal" ||
          router.pathname === "/admissions"
            ? "#40a9ff"
            : "#e6f7ff"};
          border-color: ${router.pathname === "/borigam-portal" ||
          router.pathname === "/admissions"
            ? "#40a9ff"
            : "#1890ff"};
        }

        .desktop-nav {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding: 5px 0;
        }

        .logo-container {
          display: flex;
          align-items: center;
          height: 100%;
          margin-left: -150px;
          margin-top: -100px;
          margin-bottom: -100px;
          cursor: pointer;
        }

        .logo {
          height: ${scrolled ? "300px" : "300px"};
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
          background: #f0f9ff;
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

        .nav-dropdown .ant-dropdown-menu-item {
          padding: 8px 16px;
          transition: all 0.3s;
        }

        .nav-dropdown .ant-dropdown-menu-item:hover {
          background-color: #e6f7ff;
        }

        @media (max-width: 992px) {
          .contact-info {
            gap: 10px;
          }
          
          .contact-button span {
            display: none;
          }
          
          .contact-button .anticon {
            margin-right: 0;
          }
        }

        @media (max-width: 768px) {
          .header-content {
            padding: 0 16px;
          }

          .logo {
            height: 40px;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;