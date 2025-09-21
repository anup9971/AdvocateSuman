import React from "react";
import { FaPhoneAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="full-footer">
      <div className="footer-inner">

        {/* Center Contact Section */}
        <div className="footer-center">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="tel:+918800417772" aria-label="Call">
                <FaPhoneAlt className="icon" />
                +91 8800 417772
              </a>
            </li>
            <li>
              <a href="mailto:info@sukhjurist.com" aria-label="Email">
                <FaEnvelope className="icon" />
                info@sukhjurist.com
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/sumankhatri12/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="icon" />
                Sukh Jurist
              </a>
            </li>
          </ul>
        </div>

        {/* Right: Embedded Map */}
        <div className="footer-right">
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

      {/* Footer Styles */}
      <style jsx>{`
        .full-footer {
          position: relative;
          color: #fff;
          padding: 40px 20px 10px;
          z-index: 1;
          overflow: hidden;
        }

        /* Background image with overlay */
        .full-footer::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: url("/footer-bg.jpg") no-repeat center center/cover;
          opacity: 0.4;   /* Dark overlay */
          z-index: -1;
        }

        .footer-inner {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        }

        .footer-center ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-center li {
          margin-bottom: 10px;
        }

        .footer-center a {
          color: #fff;
          text-decoration: none;
          display: flex;
          align-items: center;
        }

        .footer-center a:hover {
          color: #f0c040;
        }

        .icon {
          margin-right: 8px;
        }

        .footer-right {
          flex: 1;
          min-width: 300px;
          height: 250px;
        }

        .footer-bottom {
          text-align: center;
          border-top: 1px solid rgba(255, 255, 255, 0.3);
          margin-top: 20px;
          padding-top: 10px;
          font-size: 14px;
          opacity: 0.8;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
