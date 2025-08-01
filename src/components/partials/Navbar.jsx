import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from "../../assests/Advocate LOGO (1).png"
 const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="custom-navbar">
      <div className="navbar-logo">
       <a href="/">
        <img src={logo} alt="Logo" / >
       </a>
        {/* <div className="brand-text">
          <h3>Suman Khatri</h3>
          <p>LAW OFFICES INDIA</p>
        </div> */}
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <nav className={`navbar-links ${isOpen ? 'active' : ''}`}>
      <Link to="/">Home</Link>
        {/* <Link to="/blog">Blog</Link> */}
        {/* <Link to="/practice">Practice Area</Link> */}
        {/* <Link to="/articles">Articles</Link> */}
        {/* <Link to="/career">Career</Link> */}
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
    </header>
  );
};

export default Navbar;
