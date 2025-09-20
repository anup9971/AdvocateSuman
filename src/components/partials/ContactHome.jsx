import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import phone from '../../assests/Phone.png';
import instagram from '../../assests/instagram.png';
import linkedin from '../../assests/linkedin.png';
import twitter from '../../assests/x-logo.png';
import ContactForm from '../partials/ContactForm';

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
            <p>✔ Consistent record of successful and practical legal outcomes</p>
            <p>✔ Personalised guidance and thoughtful legal strategies for each client</p>
            <p>✔ Clear and transparent communication through every step of your case</p>
            <p>✔ Ethical practice and professionalism at the heart of our work</p>
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

          {/* Office Details */}
          <Col md={6} className="mb-4">
            <div
              className="p-4"
              style={{
                borderRadius: "10px",
                background: "#fff",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            >
              <h4 className="mb-3" style={{ color: "#561C24" }}>
                Office & Chambers
              </h4>
              <ul className="list-unstyled" style={{ lineHeight: "1.8", color: "#333" }}>
                <li>
                  📍 1031, Mahipalpur, Vasant Kunj Bypass Road, Mahipalpur
                  Extension, New Delhi, Delhi 110037
                </li>
              </ul>
              <p>
                ✉️ <a href="mailto:Info@sukhjurist.com">Info@sukhjurist.com</a>
              </p>
              <p>📞 <a href="tel:+919911077828">8800417772</a></p>
            </div>
          </Col>
        </Row>
      </section>
    </div>

        {/* Contact With Us Section */}
       

        <Container>
  <h2 className="contact-heading text-center my-5">Contact With Us</h2>

  {/* ----------- Desktop View (md and above): single row ----------- */}
  <Row className="justify-content-center d-none d-md-flex mb-5">
    {[ 
      { name: 'Phone', icon: phone, link: 'tel:+918800417772', label: '+91 8800417772' },
      { name: 'Instagram', icon: instagram, link: 'https://instagram.com', label: 'Instagram' },
      { name: 'LinkedIn', icon: linkedin, link: 'https://linkedin.com', label: 'LinkedIn' },
      { name: 'Twitter', icon: twitter, link: 'https://twitter.com', label: 'Twitter' },
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
          <img src={item.icon} width={50} height={50} alt={item.name} />
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
          <img src={phone} width={50} height={50} alt="Phone" />
          <p style={styles.text}>+91 8800417772</p>
        </a>
      </Col>
    </Row>

    {/* Instagram-left and LinkedIn-right */}
    <Row className="justify-content-between mb-4">
      <Col xs={6} className="contact-item text-start">
        <a
          href="https://instagram.com"
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
          <img src={instagram} width={50} height={50} alt="Instagram" />
          <p style={styles.text}>Instagram</p>
        </a>
      </Col>

      <Col xs={6} className="contact-item text-end">
        <a
          href="https://linkedin.com"
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
          <img src={linkedin} width={50} height={50} alt="LinkedIn" />
          <p style={styles.text}>LinkedIn</p>
        </a>
      </Col>
    </Row>

    {/* Twitter - bottom center */}
    <Row className="justify-content-center">
      <Col xs="auto" className="contact-item text-center">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noreferrer"
          className="social-link"
          onMouseEnter={() => handleMouseEnter('Twitter')}
          onMouseLeave={handleMouseLeave}
          style={{
            ...styles.link,
            textDecoration: hoveredLink === 'Twitter' ? 'underline' : 'none',
            textDecorationColor: hoveredLink === 'Twitter' ? '#561C24' : 'transparent',
          }}
        >
          <img src={twitter} width={50} height={50} alt="Twitter" />
          <p style={styles.text}>Twitter</p>
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
