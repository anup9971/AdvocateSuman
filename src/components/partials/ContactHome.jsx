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
        <div className="contact-row">
          <div className="contact-col left">
            <ContactForm />
          </div>

          <div className="contact-col right" style={{ marginLeft: '-20px' }}>
            <h2>Office & Chambers</h2>
            <ul className="address-list">
              <li>
                <span className="icon">📍</span>
                201, Second Floor, Sincere Tower, Commercial Complex, Preet Vihar Near Petrol Pump, Delhi-110092.
              </li>
              <li>
                <span className="icon">📍</span>
                23, Lawyers’ Chamber, Supreme Court of India, New Delhi-110001.
              </li>
              <li>
                <span className="icon">📍</span>
                Chamber No. 189, Tis Hazari Court, Delhi-110054.
              </li>
              <li>
                <span className="icon">📍</span>
                G-401 Lawyers' Chamber, Karkardooma Court, Delhi-110032.
              </li>
            </ul>
            <p className="info">
              <span className="icon">✉️</span> Emails:{" "}
              <a href="mailto:advocatesandhya@yahoo.in">advocatesandhya@yahoo.in</a>
            </p>
            <p className="info">
              <span className="icon">📞</span> Mob:{" "}
              <a href="tel:+919911077828">9911077828</a>,{" "}
              <a href="tel:+919811177828">9811177828</a>
            </p>
          </div>
        </div>

        {/* Contact With Us Section */}
        <Container>
          <h2 className="contact-heading text-center my-5">Contact With Us</h2>

          {/* Phone top center */}
          <Row className="justify-content-center mb-4">
            <Col xs="auto" className="contact-item text-center">
              <a
                href="tel:+911234567890"
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
                <p style={styles.text}>+91 1234567890</p>
              </a>
            </Col>
          </Row>

          {/* Instagram (left) and LinkedIn (right) */}
          <Row className="justify-content-between mb-4">
            <Col xs={6} md={4} className="contact-item text-start">
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

            <Col xs={6} md={4} className="contact-item text-end">
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

          {/* Twitter bottom center */}
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
