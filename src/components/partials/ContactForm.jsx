// 2.
import React from 'react';
import "../../assests/style.css";

const ContactForm = () => {
  return (
    <div className="form-wrapper">
      <div className="form-container">
        <h2 >Contact Us</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" required />
          </div>

                  <button type="submit" className="bubble-button">
            <span>Send Message</span>
            <div className="bubbles">
              <span></span><span></span><span></span><span></span>
              <span></span><span></span><span></span><span></span>
            </div>
          </button>
        </form>
      </div>
    </div> 
  );
};

export default ContactForm;
