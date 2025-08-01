import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assests/red-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setIsOpen(false); // close menu on desktop resize
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
       <Link to="/">
        <img src={logo} alt="Logo" style={styles.logo} />
       </Link>
        <p style={styles.subText}>law offices by suman khatri</p>

      </div>

      {isMobile && (
        <div style={styles.menuIcon} onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} color="#E8D8C4" /> : <FaBars size={24} color="#E8D8C4" />}
        </div>
      )}

      {/* Mobile full-screen menu */}
      {isMobile && isOpen && (
        <div style={styles.fullScreenMenu}>
          <Link to="/" style={styles.link} onClick={toggleMenu}>Home</Link>
          <Link to="/about" style={styles.link} onClick={toggleMenu}>About Us</Link>
          <Link to="/contact" style={styles.link} onClick={toggleMenu}>Contact Us</Link>
        </div>
      )}

      {/* Desktop menu */}
      {!isMobile && (
        <nav style={styles.navLinks}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/about" style={styles.link}>About Us</Link>
          <Link to="/contact" style={styles.link}>Contact Us</Link>
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
    padding: '10px 30px',
    backgroundColor: '#561C24',
    position: 'relative',
    zIndex: 1000,
    flexWrap: 'wrap'
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    height: '50px',
    width: '100px',
    objectFit: 'fill',
    marginBottom: '4px'
  },
  subText: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#E8D8C4',
    textTransform: 'lowercase',
    textAlign: 'center',
    margin: 0
  },
  menuIcon: {
    cursor: 'pointer',
    zIndex: 1100
  },
  navLinks: {
    display: 'flex',
    gap: '30px'
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
    fontWeight: '600'
  }
};

export default Navbar;
