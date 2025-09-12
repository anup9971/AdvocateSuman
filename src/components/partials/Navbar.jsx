import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

// Assets
import headerBg from "../../assests/header.png";
import logo from "../../assests/sukhjurist llogo 2@2x.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [active, setActive] = useState("/");

  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Disable scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen && isMobile ? "hidden" : "auto";
  }, [isOpen, isMobile]);

  // Helper function to render links
  const renderLink = (to, label) => (
    <Link
      to={to}
      onClick={() => {
        setActive(to);
        if (isMobile) toggleMenu();
      }}
      style={{
        ...styles.link,
        borderBottom:
          active === to ? "2px solid #E8D8C4" : "2px solid transparent",
      }}
      onMouseEnter={(e) =>
        (e.target.style.borderBottom = "2px solid #E8D8C4")
      }
      onMouseLeave={(e) =>
        (e.target.style.borderBottom =
          active === to ? "2px solid #E8D8C4" : "2px solid transparent")
      }
    >
      {label}
    </Link>
  );

  return (
    <header
      style={{
        ...styles.header,
        backgroundImage: `url(${headerBg})`,
        height: isMobile ? "120px" : "120px",
        padding: isMobile ? "0 20px" : "0 40px",
      }}
    >
      {/* Logo */}
      <div style={styles.logoContainer}>
        <Link to="/" style={{ display: "inline-block" }}>
          <img
            src={logo}
            alt="Logo"
            style={{ ...styles.logo, height: isMobile ? "100px" : "120px" }}
          />
        </Link>
      </div>

      {/* Mobile menu icon */}
      {isMobile && (
        <div style={styles.menuIcon} onClick={toggleMenu}>
          {isOpen ? (
            <FaTimes size={26} color="#E8D8C4" />
          ) : (
            <FaBars size={26} color="#E8D8C4" />
          )}
        </div>
      )}

      {/* Mobile full-screen menu */}
      {isMobile && isOpen && (
        <div style={styles.fullScreenMenu}>
          {renderLink("/", "Home")}
          {renderLink("/about", "About Us")}
          {renderLink("/contact", "Contact Us")}
        </div>
      )}

      {/* Desktop menu */}
      {!isMobile && (
        <nav style={styles.navLinks}>
          {renderLink("/", "Home")}
          {renderLink("/about", "About Us")}
          {renderLink("/contact", "Contact Us")}
        </nav>
      )}
    </header>
  );
};

const styles = {
  header: {
    
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    zIndex: 1000,
    flexWrap: "wrap",
    overflowX: "hidden",
    // overflow-x: "hidden",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    margin: 0,
    padding: 0,
    height: "100%",
  },
  logo: {
    width: "auto",
    margin: 0,
    padding: 0,
    display: "block",
    objectFit: "contain",
    transition: "height 0.3s ease",
  },
  menuIcon: {
    cursor: "pointer",
    zIndex: 1100,
  },
  navLinks: {
    display: "flex",
    gap: "30px",
  },
  fullScreenMenu: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "#561C24",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
    zIndex: 1000,
    transition: "all 0.3s ease",
  },
  link: {
    textDecoration: "none",
    color: "#E8D8C4",
    fontSize: "20px",
    fontWeight: "600",
    paddingBottom: "4px",
    transition: "all 0.3s ease",
  },
};

export default Navbar;
