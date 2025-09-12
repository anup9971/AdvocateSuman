import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="full-footer">
      <div className="footer-inner">

        {/* Left Section */}
        <div className="footer-left">
          <h3>Chambers of Name</h3>
          <p>Advocates & Solicitors</p>
          <p>Established 2019 · Serving Pan India</p>
        </div>

        {/* Center Contact Section */}
        <div className="footer-center">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="tel:+918800417772" aria-label="Call">
                <FaPhoneAlt style={{ marginRight: '8px' }} />
                +91 8800 417772
              </a>
            </li>
            <li>
              <a href="mailto:info@sumankhatri.in" aria-label="Email">
                <FaEnvelope style={{ marginRight: '8px' }} />
                info@name.in
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin style={{ marginRight: '12px' }} />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram style={{ marginRight: '12px' }} />
                Instagram
              </a>
            </li>
          </ul>
        </div>

        {/* Right: Embedded Map */}
        {/* <div className="footer-right">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.7179143871945!2d77.21565591508348!3d28.610143982423364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3b58d7b7d2f%3A0xa3d21810e07e2f1e!2sSaket%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1687881879734!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div> */}
       <div className="footer-right" style={{ width: '100%', height: '300px' }}>
    <iframe
      title="V Hotel The Grand Shoba Location"
      src="https://maps.google.com/maps?q=Hotel%20The%20Grand%20Shoba%20Mahipalpur%20New%20Delhi&output=embed"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
    />
  </div>

      </div>

      {/* Bottom Strip */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sukh Jurist. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
