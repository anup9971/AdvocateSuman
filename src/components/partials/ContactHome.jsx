import React from 'react';
import { Container, Row, Col,  } from 'react-bootstrap';
import { FaPhone, FaInstagram, FaLinkedin,  FaTwitter } from 'react-icons/fa';
import ContactForm from '../partials/ContactForm';

const     ContactHome = () => {
  return (
 <>
<div className="container-fluid">
 
 <section className="contact-section">
 <div className="contact-row">
  <div className="contact-col left">
    <ContactForm />
  </div>
  <div className="contact-col right">
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
      <span className="icon">✉️</span> Emails: 
      {/* <a href="mailto:lawyersandhya@gmail.com">lawyersandhya@gmail.com</a>,  */}
      <a href="mailto:advocatesandhya@yahoo.in">advocatesandhya@yahoo.in</a>
    </p>
    <p className="info">
      <span className="icon">📞</span> Mob: 9911077828, 9811177828
    </p>
  </div>
</div>

   <Container>
         
        <h2 className="contact-heading text-center my-5" >Contact With Us</h2>
        <Row className="text-center justify-content-center">
          <Col xs={12} md={4} className="mb-4 contact-item">
            <FaPhone size={40} className="contact-icon gold" />
            <p className="contact-text">+91 1234567890</p>
          </Col>

          <Col xs={6} sm={4} md={2} className="mb-4 contact-item">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-link">
              <FaInstagram size={35} style={{ color: '#E1306C' }} />
              <p>Instagram</p>
            </a>
          </Col>

          <Col xs={6} sm={4} md={2} className="mb-4 contact-item">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-link">
              <FaLinkedin size={35} style={{ color: '#0077B5' }} />
              <p>LinkedIn</p>
            </a>
          </Col>

          <Col xs={6} sm={4} md={2} className="mb-4 contact-item">
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-link">
              <FaTwitter size={35} style={{ color: '#1DA1F2' }} />
              <p>Twitter</p>
            </a>
          </Col>
        </Row>

        <div className="text-center mt-4">
          {/* <Button style={{backgroundColor:"#561C24"}} className="connect-btn">
            Let's Connect
          </Button> */}
        </div>
      </Container>
    </section>
</div>


 
 </>
   
  );
};

export default ContactHome;
