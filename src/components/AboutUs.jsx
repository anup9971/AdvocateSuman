import React, { useEffect } from 'react';
import aboutImage from '../assests/hero.png';
import AboutMe from './partials/AboutMe';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet-async';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const sectionStyle = {
    padding: '60px 20px',
    backgroundColor: '#f9f9f9',
    lineHeight: '1.7',
  };

  const sectionWrapper = {
    maxWidth: '1100px',
    margin: '0 auto',
  };

  const headingStyle = {
    fontSize: '28px',
    fontWeight: '700',
    color: '#003168',
    marginBottom: '15px',
    position: 'relative',
  };

  const paragraphStyle = {
    fontSize: '16px',
    marginBottom: '20px',
    color: '#333',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    padding: '10px',
    borderRadius: '6px',
  };

  const listStyle = {
    ...paragraphStyle,
    paddingLeft: '25px',
  };

  const hoverEffect = {
    ':hover': {
      transform: 'translateY(-3px)',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    },
  };

  return (
    <>

             <Helmet>
              <title> About - Advocate Sukhjurist</title>
              <meta
                name="description"
                content="Learn about Advocate Sukhjurist background, legal expertise, values & mission. Serving clients in Delhi with integrity, professionalism, and dedication."
              />
              <meta name="keywords" content="About - Advocate Sukhjurist" />
              <meta name="author" content="Your Name" />
    
              {/* SEO / Robots */}
              <meta name="robots" content="index, follow" />
              <meta name="googlebot" content="index, follow" />
    
              {/* Optional canonical URL */}
              <link rel="canonical" href="https://www.example.com/" />
            </Helmet>
      <div className="banner ">
        <h1 className="banner-text">About Us</h1>
      </div>

      <div className="container-fluid overflow-x-hidden">
        <section className="about-me-section" id="about">
          <div className="about-container">
            <div className="about-left">
              <AboutMe />
            </div>
            <div className="about-right">
              <div className="image-wrapper">
                <img src={aboutImage} alt="Advocate Sukhjurist Khatri" className="about-img" />
                <div className="image-border"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Extended Content Section */}
        <section style={sectionStyle}>
          <div style={sectionWrapper}>
            <div data-aos="fade-up">
              <h2 style={headingStyle}>Our Philosophy</h2>
              <p style={{ ...paragraphStyle, ...hoverEffect }}>
                Justice is at the core of everything we do. We believe every client deserves attentive representation and the best possible outcome, no matter how complex their matter may be. Our commitment is to treat each case with care, diligence, and integrity.
              </p>
            </div>

            <div data-aos="fade-up">
              <h2 style={headingStyle}>Our Team</h2>
              <p style={{ ...paragraphStyle, ...hoverEffect }}>
               Our firm brings together dedicated legal professionals with expertise spanning litigation, dispute resolution, regulatory and corporate advisory, and compliance matters. We are more than just lawyers—each team member serves as a trusted advisor, committed to the interests and well- being of our clients.
              </p>
            </div>

            <div data-aos="fade-up">
              <h2 style={headingStyle}>Why Choose Us?</h2>
              <ul style={listStyle}>
                <li>✅ Consistent record of successful and practical legal outcomes</li>
                <li>✅ Personalised guidance and thoughtful legal strategies for each client</li>
                <li>✅ Clear and transparent communication through every step of your case</li>
                <li>✅ Ethical practice and professionalism at the heart of our work</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
