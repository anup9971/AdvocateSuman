import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import logo from '../../assests/sukhjurist_logo_image.png';
import headerBg from '../../assests/sukhjurist_header_bg.jpg';

import logo from '../../assests/sukhjurist logo for website@2x.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [active, setActive] = useState("/"); // active link track karne ke liye

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setIsOpen(false); // close menu on desktop resize
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // helper function link render karne ke liye
  const renderLink = (to, label) => (
    <Link
      to={to}
      onClick={() => {
        setActive(to);
        if (isMobile) toggleMenu();
      }}
      style={{
        ...styles.link,
        borderBottom: active === to ? "2px solid #E8D8C4" : "2px solid transparent",
        transition: "border-color 0.3s ease",
      }}
      onMouseEnter={(e) => (e.target.style.borderBottom = "2px solid #E8D8C4")}
      onMouseLeave={(e) =>
        (e.target.style.borderBottom = active === to ? "2px solid #E8D8C4" : "2px solid transparent")
      }
    >
      {label}
    </Link>
  );

  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <Link to="/" style={{ display: "inline-block" }}>
          <img src={logo} alt="Logo" style={styles.logo} />
        </Link>
      </div>

      {isMobile && (
        <div style={styles.menuIcon} onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} color="#E8D8C4" /> : <FaBars size={24} color="#E8D8C4" />}
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 40px',
    // backgroundColor: '#561C24',
    backgroundImage: `url(${headerBg})`,

    zIndex: 1000,
    flexWrap: 'wrap',
    height: '90px',
    overflow: 'hidden',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 0,
    padding: 0,
    height: '100%',
  },
  logo: {
    height: '85px',
    width: 'auto',
    margin: 0,
    padding: 0,
    display: 'block',
    objectFit: 'contain',
  },
  menuIcon: {
    cursor: 'pointer',
    zIndex: 1100,
  },
  navLinks: {
    display: 'flex',
    gap: '30px',
  },
  fullScreenMenu: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: '#561C24',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '40px',
    zIndex: 1000,
  },
  link: {
    textDecoration: 'none',
    color: '#E8D8C4',
    fontSize: '20px',
    fontWeight: '600',
    paddingBottom: '4px',
  },
};

export default Navbar;
