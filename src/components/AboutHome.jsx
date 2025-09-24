import React from 'react';
import aboutImage from '../assests/new/female_advocate_image.webp';
import AboutMe from './partials/AboutMe';

const AboutHome = () => {
  return (
    <div className="about-container-fluid">
      <section className="about-section" id="about">
        <div className="about-container">

          {/* Text Content (Left side) */}
          <div className="about-left">
            <AboutMe />
          </div>

          {/* Image Content (Right side) */}
          <div className="about-right">
            <div className="image-wrapper">
              <img loading="lazy"
              
                src="/images/lady.webp"
                alt="Advocate Sukhjurist"
                className="about-image"
              />
              {/* <div className="image-border"></div> */}
            </div>
          </div>

        </div>
      </section>

      {/* Styles */}
      <style>
        {`
          .about-container-fluid {
            width: 100%;
          }

          .about-section {
            padding: 60px 40px;
            background-color: #E8D8C4;
          }

          .about-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 40px;
            max-width: 1200px;
            margin: 0 auto;
          }

          .about-left {
            flex: 1 1 50%;
            text-align: left;
          }

          .about-right {
            flex: 1 1 50%;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .image-wrapper {
            position: relative;
            max-width: 340px;
            max-height: 430px;
            width: 100%;
            margin: 0 auto;
            overflow: hidden;
          }

          .about-image {
            width: 100%;
            height: 100%;
            object-fit: contain;
            border-radius: 8px;
            display: block;
            transition: transform 0.4s ease, box-shadow 0.4s ease;
          }

          .about-image:hover {
            transform: scale(1);
            box-shadow: 0 8px 25px rgba(0,0,0,0.3);
          }

          .image-border {
            position: absolute;
            top: 12px;
            left: 12px;
            right: -12px;
            bottom: -12px;
            border: 2px solid #561C24;
            z-index: -1;
            border-radius: 8px;
          }

          /* ✅ Responsive Design */
          @media (max-width: 768px) {
            .about-container {
              flex-direction: column;
              text-align: center;
              gap: 20px;
            }

            .about-left {
              flex: 1 1 100%;
              margin-bottom: 20px;
            }

            .about-right {
              flex: 1 1 100%;
            }

            .image-wrapper {
              max-width: 280px;
              max-height: 360px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default AboutHome;
