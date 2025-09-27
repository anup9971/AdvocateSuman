import React, { useEffect } from 'react';
import aboutImage from '../assests/new/female_advocate_image.webp';
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
    color: '#561c24',
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
              <link rel="canonical" href="https://www.sukhjurist.com/about" />
            </Helmet>
      <div className="banner ">
        <h1 className="banner-text" >About Us</h1>
      </div>

      <div className="container-fluid overflow-x-hidden">
        <section className="about-me-section" id="about">
  <div
  className="about-container"
  style={{
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: "30px",
    padding: "10px",
  }}
>
  {/* Left Side - Text */}
  <div style={{ flex: "1 1 50%", }}>
    <AboutMe/>
  </div>

  {/* Right Side - Image */}
  <div
    style={{
      flex: "1 1 40%",
      minWidth: "280px",
      display: "flex",
      justifyContent: "center",
    }}
  >
    <div
      style={{
        // border: "1px solid #561C24",
        padding: "10px",
        borderRadius: "8px",
        maxWidth: "350px", // ✅ restrict max width
        width: "100%",
      }}
    >
      <img loading="lazy"
        src={aboutImage}
        alt="Advocate Suman Khatri"
        style={{
          width: "100%", // ✅ responsive
          height: "auto",
          display: "block",
          borderRadius: "8px",
          objectFit: "cover",
        }}
      />
    </div>
  </div>
</div>


        </section>

        {/* Extended Content Section */}
        <section style={sectionStyle}>
          <div style={sectionWrapper}>
            <div data-aos="fade-up">
              <h2 style={headingStyle}>About Us</h2>
              <p style={{ ...paragraphStyle, ...hoverEffect }}>
               Here, you get professionally qualified advocates with a strong foundation in civil and criminal law. Our practice is rooted in integrity, careful strategy, and practical solutions for every client.
              </p>
            </div>
             <div data-aos="fade-up">
              <h2 style={headingStyle}>Our Philosophy</h2>
              <p style={{ ...paragraphStyle, ...hoverEffect }}>
             Justice is at the core of everything we do. We believe every client deserves attentive representation and the best possible outcome, no matter how complex their matter may be. Our commitment is to treat each case with care, diligence, and integrity.
              </p>
            </div>

            <div data-aos="fade-up">
              <h2 style={headingStyle}>Our Team</h2>
              <p style={{ ...paragraphStyle, ...hoverEffect }}>
               At SUKH JURIST, success is measured not just by victories in the courtroom but by the satisfaction, trust, and long-term relationship we build with our clients.
              </p>
              <p style={{ ...paragraphStyle, ...hoverEffect }}>
               Our firm brings together dedicated legal professionals with expertise spanning litigation, dispute resolution, regulatory and corporate advisory, and compliance matters. We are more than just lawyers; each team member serves as a trusted advisor, committed to the inherent principles of the firm.
              </p>
              <p style={{ ...paragraphStyle, ...hoverEffect }}>Our team is not only committed to excellence in the courtroom but also to building long-lasting trust through transparency, clarity, and consistent results.</p>
            </div>

            <div data-aos="fade-up">
              <h2 style={headingStyle}>Our Vision</h2>
                <p style={{ ...paragraphStyle, ...hoverEffect }}>
            To be recognized as a law firm where justice meets expertise, and where every client feels assured that their case is in the hands of professionals who truly care.
              </p>
            </div>

             <div data-aos="fade-up">
              <h2 style={headingStyle}>Our Promise</h2>
                <p style={{ ...paragraphStyle, ...hoverEffect }}>
           With adv. <strong>SUMAN KHATRI</strong> and a dedicated team of legal minds, we stand ready to protect your rights, defend your interests, and guide you through even the most complex legal challenges. </p>
            </div>

            <div data-aos="fade-up">
              <h2 style={headingStyle}>Why Choose Us?</h2>
                <p style={{ ...paragraphStyle, ...hoverEffect }}>
               consistent record of successful and practical legal outcomes
Personalised guidance and thoughtful legal strategies for each client.
              Clear and transparent communication through every step of your case
Ethical practice and professionalism at the heart of our work.

              </p>
            </div>
          </div>
        </section>
      </div>

      {/* <ContactHome/> */}
    </>
  );
};

export default About;
