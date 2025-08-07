import React from 'react';
import { HashLink } from 'react-router-hash-link';

const HeroSection = () => {
  return (
   <section className="hero-section">
  <div className="hero-overlay">
    <div className="hero-content">
          <h1>
            Trusted Legal Counsel with Integrity and Focus
          </h1>
          <p>
            Welcome to the official website of Advocate  <strong>Suman Khatri—</strong>your dependable lawyer in New Delhi for civil, criminal, and ADR matters. Every client receives honest advice, clear communication, and tailored legal support.
            <br /><br />
            Whether you need legal drafting, courtroom representation, or confidential guidance, I am committed to providing ethical, solution-focused legal services with respect for your needs.
          </p>
          <div className="hero-buttons">
        <a href="/contact" className="btn primary">Consult Now !</a>
        <HashLink smooth to="/#about" className="btn outline">Start Exploring ↓</HashLink>
      </div>
    </div>
  </div>
</section>
  );
};

export default HeroSection;
