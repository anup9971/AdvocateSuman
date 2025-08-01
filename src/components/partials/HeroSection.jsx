import React from 'react';
import { HashLink } from 'react-router-hash-link';

const HeroSection = () => {
  return (
   <section className="hero-section">
  <div className="hero-overlay">
    <div className="hero-content">
          <h1>
            Professional Legal Representation with Integrity and Experience
          </h1>
          <p>
            Welcome to the official website of Advocate <strong>Suman Khatri</strong>, a trusted legal professional offering comprehensive legal services across civil law, criminal law, and ADR.
            <br /><br />
            Practicing since 2019, I bring deep legal knowledge, courtroom expertise, and a client-focused approach to every case. Whether you require expert legal drafting, litigation services, or confidential legal advice, my mission is to provide strategic, result-oriented solutions tailored to your needs.
          </p>
          <div className="hero-buttons">
        <a href="/contact" className="btn primary">Consultation Now</a>
        <HashLink smooth to="/#about" className="btn outline">Start Exploring ↓</HashLink>
      </div>
    </div>
  </div>
</section>
  );
};

export default HeroSection;
