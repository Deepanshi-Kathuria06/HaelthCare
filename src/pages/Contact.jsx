import React, { useState } from 'react';
import './Contact.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import aboutImage from '../assets/aboutc.png'; // Import the image from assets folder

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Left Side: About HeartShield */}
        <div className="contact-left">
          <div className="about-us">
            <h2>About HeartShield</h2>
            <p>
              Founded to combat India’s growing heart health crisis, HeartShield aims to bring preventive cardiology to every workplace. With a focus on early detection and actionable reporting, we’re building a future where wellness comes to you.
            </p>
            <h3>Our Vision</h3>
            <p>
              To make heart health screenings routine and accessible, saving lives through prevention.
            </p>
            <div className="about-us-image">
              {/* Using imported image */}
              <img src={aboutImage} alt="HeartShield" />
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="contact-right">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

          

            <div className="form-group">
              <label htmlFor="message">Message / Query</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="submit-btn">Submit</button>
          </form>

          <h3>Quick Contact</h3>
          <div className="contact-info">
            <p><FaEnvelope /> hello@heartshield.in</p>
            <p><FaWhatsapp /> +91-7002507547</p>
            <p><FaMapMarkerAlt /> Service Location: Delhi NCR (expanding soon)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
