import React from 'react';
import { HashLink } from 'react-router-hash-link';

const HeroSection = () => {
  return (
   <section className="hero-section">
  <div className="hero-overlay">
    <div className="hero-content">
          <h1>
            “Guiding you through every legal challenge with care and clarity”
          </h1>
          <p>
           Welcome to <strong style={{color:"#561c24"}}>SUKH JURIST,</strong> a comprehensive legal expertise from corporate and commercial matters to family law, property disputes, criminal defense, civil litigation, arbitration, and more. We cover the entire spectrum of legal fields.
            <br /><br />
           While we proudly serve clients all across India, our strong presence in the Delhi-NCR region gives us an edge in navigating local laws, courts, and regulations with precision. <br />
           Every case is unique, and we take time to understand your specific needs. We combine legal strategy with practical solutions, ensuring your interests are protected at every stage.
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
