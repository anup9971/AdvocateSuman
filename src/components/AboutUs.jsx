import React, { useEffect } from 'react';
import aboutImage from '../assests/hero.png';
import AboutMe from './partials/AboutMe';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
      <div className="banner">
        <h1 className="banner-text">About Us</h1>
      </div>

      <div className="container-fluid">
        <section className="about-me-section" id="about">
          <div className="about-container">
            <div className="about-left">
              <AboutMe />
            </div>
            <div className="about-right">
              <div className="image-wrapper">
                <img src={aboutImage} alt="Advocate Suman Khatri" className="about-img" />
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
                At our firm, we believe that justice is not just a concept but a commitment. Our goal is to ensure that every client receives the highest level of representation and the best possible outcome, regardless of the complexity of their case.
              </p>
            </div>

            <div data-aos="fade-up">
              <h2 style={headingStyle}>Our Team</h2>
              <p style={{ ...paragraphStyle, ...hoverEffect }}>
                We are a team of experienced legal professionals with deep expertise across various practice areas including litigation, dispute resolution, regulatory compliances, and corporate advisory. Our advocates are not just lawyers—they are trusted advisors to our clients.
              </p>
            </div>

            <div data-aos="fade-up">
              <h2 style={headingStyle}>Why Choose Us?</h2>
              <ul style={listStyle}>
                <li>✅ Proven track record of successful case resolutions</li>
                <li>✅ Personalized attention and strategic legal planning</li>
                <li>✅ Transparent communication throughout your legal journey</li>
                <li>✅ Ethical and professional conduct always at the forefront</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
