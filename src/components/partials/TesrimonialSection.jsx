import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    text: "Advocate Suman Khatri handled my property dispute with remarkable professionalism and attention to detail. Her strategic approach saved me both time and money.",
    author: "Ramesh Nair",
    role: "Business Owner",
  },
  {
    text: "I was wrongly implicated in a criminal case and had lost hope. Advocate Suman's diligent work and courtroom expertise secured my acquittal.",
    author: "Manoj Sharma",
    role: "Government Employee",
  },
  {
    text: "Suman Khatri helped draft a complex commercial agreement that protected my interests while maintaining business relationships. Her legal acumen is exceptional.",
    author: "Divya Malhotra",
    role: "Entrepreneur",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(autoSlide);
  }, []);

  const goToSlide = (index) => setCurrentIndex(index);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="testimonial-section">
      {/* SVG Decoration - Top Left */}
      <svg className="decorative-svg-top" width="200" height="200" viewBox="0 0 200 200" preserveAspectRatio="none">
        <path 
          d="M0,0 L200,0 L0,200 Z" 
          fill="#d0c0a9" 
          fillOpacity="0.2"
        />
      </svg>

      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Client Testimonials</h2>
          <p className="section-subtitle">Hear what our clients say about our services</p>
          <div className="divider"></div>
        </div>

        <div className="carousel-wrapper">
          <div className="carousel-inner">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
              >
                <div className="testimonial-card">
                  <FaQuoteLeft className="quote-icon" />
                  <p className="testimonial-text">{item.text}</p>
                  <div className="author-info">
                    <p className="author-name">{item.author}</p>
                    <p className="author-role">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>

          <button
            className="carousel-control-next"
            type="button"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </button>
        </div>

        <div className="carousel-indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* SVG Decoration - Bottom Right */}
      <svg className="decorative-svg-bottom" width="200" height="200" viewBox="0 0 200 200" preserveAspectRatio="none">
        <path 
          d="M200,200 L0,200 L200,0 Z" 
          fill="#292e4c" 
          fillOpacity="0.1"
        />
      </svg>
    </section>
  );
};

export default TestimonialSection;