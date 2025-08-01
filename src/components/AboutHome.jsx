import React from 'react';
import aboutImage from '../assests/hero.png';
import AboutMe from './partials/AboutMe';
// import { Link } from 'react-router-dom';

const AboutHome = () => {
  return (
   <>
   
   <div className="container-fluid">
     <section className="about-me-section" id="about">
       
      <div className="about-container">
        {/* Text Content */}
        <div className="about-left">
        <AboutMe/>
        </div>
        {/* Image Content */}
        <div className="about-right">
          <div className="image-wrapper">
            <img src={aboutImage} alt="Advocate Suman Khatri" className="about-img" />
            <div className="image-border"></div>
          </div>
        </div>
      </div>
    </section>
   </div>
   </>
  );
};

export default AboutHome;