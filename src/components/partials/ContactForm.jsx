import React, { useState } from 'react';
import "../../assests/style.css";
import toast from 'react-hot-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Input change handler
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://advocatesuman-backend.onrender.com/api/contact", {  
        // 👆 abhi backend local rakha h, deploy ke baad yaha backend ka final URL daal dena
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
         toast.success("Message sent successfully!")
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("❌ Failed to send message");
      }
    } catch (err) {
      console.error(err);
      alert("⚠️ Error connecting to server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-wrapper" style={{ marginLeft: "-40px" }}>
      <div className="form-container">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange}  />
          </div>

          <button type="submit" className="bubble-button" disabled={loading}>
            <span>{loading ? "Sending..." : "Send Message"}</span>
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
