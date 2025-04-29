import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Button } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const linkStyle = {
    margin: "0 16px",
    textDecoration: "none",
    color: "black",
    fontSize: "1rem",
    transition: "color 0.3s",
    cursor: "pointer",
  };

  const activeLinkStyle = {
    ...linkStyle,
    fontWeight: "bold",
    color: "orange",
  };

  const entranceMenu = (
    <Menu>
      {[
        { key: "nift", label: "NIFT Entrance" },
        { key: "bfa", label: "BFA Entrance" },
        { key: "nid", label: "NID Entrance" },
        { key: "fddi", label: "FDDI Entrance" },
        { key: "ceed", label: "CEED Entrance" },
        { key: "aat", label: "AAT Entrance" },
        { key: "uceed", label: "UCEED Entrance" },
        { key: "nata", label: "NATA Entrance" },
        { key: "barch", label: "B.ARCH Entrance" },
        { key: "design", label: "Design Entrance Coaching" },
      ].map((item) => (
        <Menu.Item key={item.key}>
          <Link href={`/entrance/${item.key}`}>{item.label}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <>
      <header className="custom-header">
        {/* Login and Admission Buttons */}
        <div className="top-buttons">
          <Link href="/borigam-portal">
            <Button
              type={router.pathname === "/borigam-portal" ? "primary" : "default"}
              style={{
                backgroundColor:
                  router.pathname === "/borigam-portal" ? "orange" : "white",
                borderColor: "orange",
                color: router.pathname === "/borigam-portal" ? "white" : "orange",
                fontWeight: "bold",
              }}
              size="small"
            >
              Borigam Portal
            </Button>
          </Link>
          <Link href="/admissions">
            <Button
              type={router.pathname === "/admissions" ? "primary" : "default"}
              style={{
                backgroundColor:
                  router.pathname === "/admissions" ? "orange" : "white",
                borderColor: "orange",
                color: router.pathname === "/admissions" ? "white" : "orange",
                fontWeight: "bold",
              }}
              size="small"
            >
              Admission Form
            </Button>
          </Link>
        </div>

        {/* Logo and Contact Info */}
        <div className="logo-contact">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="logo"
          />
          <div className="contact-info">
            <p>
              <MailOutlined style={{ color: "orange" }} /> borigaminstitute@gmail.com
            </p>
            <p>
              <PhoneOutlined style={{ color: "orange" }} /> +1-234-567-890
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="nav-wrapper">
          <nav className="nav-menu">
            <Link href="/" style={router.pathname === "/" ? activeLinkStyle : linkStyle}>Home</Link>
            <Link href="/about" style={router.pathname === "/about" ? activeLinkStyle : linkStyle}>About</Link>
            <Dropdown overlay={entranceMenu} trigger={["hover"]}>
              <span style={linkStyle}>
                Entrance Exam <span style={{ fontSize: "0.7rem" }}>▼</span>
              </span>
            </Dropdown>
            <Link
              href="/success-stories"
              style={
                router.pathname === "/success-stories" ? activeLinkStyle : linkStyle
              }
            >
              Success Stories
            </Link>
            <Link href="/contact" style={router.pathname === "/contact" ? activeLinkStyle : linkStyle}>
              Contact
            </Link>
            <Link href="/blog" style={router.pathname === "/blog" ? activeLinkStyle : linkStyle}>
              Blog
            </Link>
          </nav>
        </div>
      </header>

      <style jsx>{`
        .custom-header {
          padding: 5px 10px 0px;
          background-color: #fff;
          border-bottom: 1px solid #ddd;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        .top-buttons {
          display: flex;
          justify-content: flex-end;
          padding: 15px 20px 0;
          gap: 20px;
          flex-wrap: wrap;
        }
        .logo-contact {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
        }
        .logo {
          width: 300px;
          marginBottom: 50px;
          margin-bottom: -73px;
          margin-top: -103px;
        }
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 0.8rem;
        }
        .nav-wrapper {
          display: flex;
          justify-content: flex-end;
          padding: 5px 20px 10px;
          flex-wrap: wrap;
        }
        .nav-menu {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
        }

        @media (max-width: 768px) {
          .logo {
            width: 160px;
          }
          .nav-wrapper {
            justify-content: center;
          }
          .top-buttons {
            justify-content: center;
          }
          .logo-contact {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .contact-info {
            margin-top: 10px;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
