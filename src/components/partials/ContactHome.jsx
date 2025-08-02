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
              <span className="icon">✉️</span> Emails:{' '}
              <a href="mailto:advocatesandhya@yahoo.in">advocatesandhya@yahoo.in</a>
            </p>
            <p className="info">
              <span className="icon">📞</span> Mob:{' '}
              <a href="tel:+919911077828">9911077828</a>,{' '}
              <a href="tel:+919811177828">9811177828</a>
            </p>
          </div>
        </div>

        <Container>
          <h2 className="contact-heading text-center my-5">Contact With Us</h2>
          <Row className="text-center justify-content-center">
            {socialLinks.map((item) => (
              <Col key={item.name} xs={6} sm={4} md={2} className="mb-4 contact-item">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                  style={{
                    ...styles.link,
                    textDecoration: hoveredLink === item.name ? 'underline' : 'none',
                    textDecorationColor: hoveredLink === item.name ? '#561C24' : 'transparent',
                    display: 'inline-block',
                  }}
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <img src={item.icon} width={50} height={50} alt={item.name} />
                  <p style={styles.text}>{item.name}</p>
                </a>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

const socialLinks = [
  {
    name: 'Phone',
    link: 'tel:+911234567890',
    icon: phone,
  },
  {
    name: 'Instagram',
    link: 'https://instagram.com',
    icon: instagram,
  },
  {
    name: 'LinkedIn',
    link: 'https://linkedin.com',
    icon: linkedin,
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com',
    icon: twitter,
  },
];

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
