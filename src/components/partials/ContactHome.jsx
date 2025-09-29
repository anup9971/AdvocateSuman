import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import phone from '../../assests/Phone.png';

import linkedin from '../../assests/linkedin.png';
import email from '../../assests/new/mail.png';
import ContactForm from '../partials/ContactForm';
import loc from '../../assests/loc.png';

const ContactHome = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleMouseEnter = (name) => setHoveredLink(name);
  const handleMouseLeave = () => setHoveredLink(null);

  return (
    <div className="container-fluid">
      <section className="contact-section">
       <div className="container-fluid" style={{ padding: "40px 20px", background: "#f8f8f8", paddingTop:"40px", borderRadius:"10px", marginTop:"15px" }}>
      <section className="contact-section">

        {/* WHY CHOOSE US */}
        <div className="text-center mb-5">
          <h2
            style={{
              fontSize: "1.8rem",
              fontWeight: "700",
              color: "#561C24",
              marginBottom: "20px",
            }}
          >
            Why Choose Us?
          </h2>

          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              textAlign: "left",
              fontSize: "1rem",
              lineHeight: "1.7",
              color: "#333",
            }}
          >
            <p> <span style={{color:"#c44618"}}>✔</span> Consistent record of successful and practical legal outcomes</p>
            <p> <span style={{color:"#c44618"}}>✔</span> Personalised guidance and thoughtful legal strategies for each client</p>
            <p> <span style={{color:"#c44618"}}>✔</span> Clear and transparent communication through every step of your case</p>
            <p> <span style={{color:"#c44618"}}>✔</span> Ethical practice and professionalism at the heart of our work</p>
          </div>
        </div>

        <hr style={{ margin: "40px 0" }} />
     

        {/* CONTACT + OFFICE SECTION */}
        <Row className="justify-content-center">
          {/* Contact Form */}
          <Col md={6} className="mb-4">
            <div
            >
              
              <ContactForm />
            </div>
          </Col>


          <Col md={6} className="mb-4">
  <div
    className="p-4"
    style={{
      borderRadius: "10px",
      background: "#fff",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    }}
  >
    <h4 className="mb-3"   style={{
    color: "#561C24",
    textAlign: "center",
    fontSize: window.innerWidth <= 768 ? "25px" : "31px", // mobile vs desktop
  }}>
      Office & Chambers
    </h4>

    <ul className="list-unstyled" style={{ lineHeight: "1.8", color: "#333" }}>
      <li style={{ display: "flex", alignItems: "flex-start", marginBottom: "10px" }}>
        <img loading="lazy" src={loc} style={{ height: "25px", width: "30px", marginRight: "10px" }} alt="Contact us" />
        <span>
          Kh.no.1031/1, Mahipalpur, <br /> 
          Vasant Kunj Bypass Road, <br /> 
          Mahipalpur Extension, New Delhi, <br /> 
          Delhi 110037
        </span>
      </li>

      <li style={{ display: "flex", alignItems: "flex-start", marginBottom: "10px" }}>
        <img loading="lazy" src={loc} style={{ height: "25px", width: "30px", marginRight: "10px" }} alt="Contact us" />
        <span>
          Splendor Trade Tower, <br /> 
          C36F+786, Golf Course Extension Rd, <br /> 
          Sec 65, Gurugram, Haryana 122101
        </span>
      </li>
    </ul>

    <p style={{ display: "flex", alignItems: "center", gap: "15px" }}>
      <img  loading="lazy" src={email} style={{height:"33px", width:"30px"}} alt="Contact us" /> 
      <a style={{color:"#561C24"}} href="mailto:Info@sukhjurist.com">Info@sukhjurist.com</a>
    </p>

    <p style={{ display: "flex", alignItems: "center", gap: "15px" }}>
      <img loading="lazy" src={phone} style={{height:"25px", width:"30px"}} alt="Contact us" /> 
      <a style={{color:"#561C24"}} href="tel:+919911077828">+91 8800417772</a>
    </p>

    <p style={{ display: "flex", alignItems: "center", gap: "15px" }}>
      <img  loading="lazy"src={linkedin} style={{height:"28px", width:"30px"}} alt="Contact us" /> 
      <a style={{color:"#561C24"}} href="https://www.linkedin.com/in/sumankhatri12/">Sukh Jurist</a>
    </p>
  </div>
</Col>

        </Row>
      </section>
    </div>

        {/* Contact With Us Section */}
       

        <Container>
  <h2 className="contact-heading text-center my-5">Connect with Us</h2>

  {/* ----------- Desktop View (md and above): single row ----------- */}
  <Row className="justify-content-center d-none d-md-flex mb-5">
    {[ 
      { name: 'Phone', icon: phone, link: 'tel:+918800417772', label: '+91 8800417772' },
      { name: 'Email', icon: email, link: 'mailto:Info@sukhjurist.com', label: 'Email',height:"53px" },
      { name: 'LinkedIn', icon: linkedin, link: 'https://www.linkedin.com/in/sumankhatri12/', label: 'LinkedIn' },
    ].map((item, idx) => (
      <Col key={idx} xs={6} md={3} className="contact-item text-center mb-3">
        <a
          href={item.link}
          target={item.name === 'Phone' ? '_self' : '_blank'}
          rel="noreferrer"
          className="social-link"
          onMouseEnter={() => handleMouseEnter(item.name)}
          onMouseLeave={handleMouseLeave}
          style={{
            ...styles.link,
            textDecoration: hoveredLink === item.name ? 'underline' : 'none',
            textDecorationColor: hoveredLink === item.name ? '#561C24' : 'transparent',
          }}
        >
          <img  loading="lazy" src={item.icon} width={50} height={ item.height? item.height :"43"} alt="Contact us" />
          <p style={styles.text}>{item.label}</p>
        </a>
      </Col>
    ))}
  </Row>

  {/* ----------- Mobile View (below md): Zig-zag pattern ----------- */}
  <div className="d-block d-md-none">
    {/* Phone - top center */}
    <Row className="justify-content-center mb-4">
      <Col xs="auto" className="contact-item text-center">
        <a
          href="tel:+918800417772"
          className="social-link"
          onMouseEnter={() => handleMouseEnter('Phone')}
          onMouseLeave={handleMouseLeave}
          style={{
            ...styles.link,
            textDecoration: hoveredLink === 'Phone' ? 'underline' : 'none',
            textDecorationColor: hoveredLink === 'Phone' ? '#561C24' : 'transparent',
          }}
        >
          <img loading="lazy" src={phone} width={50} height={50} alt="Contact us" />
          <p style={styles.text}>+91 8800417772</p>
        </a>
      </Col>
    </Row>

    {/* Instagram-left and LinkedIn-right */}
    <Row className="justify-content-between mb-4">
      <Col xs={6} className="contact-item text-start">
        <a
          href="mailto:Info@sukhjurist.com"
          target="_blank"
          rel="noreferrer"
          className="social-link"
          onMouseEnter={() => handleMouseEnter('Instagram')}
          onMouseLeave={handleMouseLeave}
          style={{
            ...styles.link,
            textDecoration: hoveredLink === 'Instagram' ? 'underline' : 'none',
            textDecorationColor: hoveredLink === 'Instagram' ? '#561C24' : 'transparent',
          }}
        >
          <img loading="lazy" src={email} width={48} height={63} alt="Contact us" />
          <p style={styles.text}>Email</p>
        </a>
      </Col>

      <Col xs={6} className="contact-item text-end">
        <a
          href="https://www.linkedin.com/in/sumankhatri12/"
          target="_blank"
          rel="noreferrer"
          className="social-link"
          onMouseEnter={() => handleMouseEnter('LinkedIn')}
          onMouseLeave={handleMouseLeave}
          style={{
            ...styles.link,
            textDecoration: hoveredLink === 'LinkedIn' ? 'underline' : 'none',
            textDecorationColor: hoveredLink === 'LinkedIn' ? '#561C24' : 'transparent',
          }}
        >
          <img loading="lazy" src={linkedin} width={50} height={50} alt="Contact us" />
          <p style={styles.text}>LinkedIn</p>
        </a>
      </Col>
    </Row>

  </div>
</Container>

      </section>
    </div>
  );
};

const styles = {
  link: {
    transition: 'all 0.3s ease',
  },
  text: {
    color: '#561C24',
    marginTop: '8px',
    fontWeight: '500',
  },
};

export default ContactHome;
