import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>

      <div className="contact-grid">
        {/* Contact Details */}
        <div className="contact-details">
          <div className="contact-card">
            <h2 className="contact-card-title">USA Office</h2>
            <div className="contact-info">
              <p>Foliage Fashion LLC</p>
              <p>123 Greenway Blvd</p>
              <p>Edison, NJ 08817</p>
              <p><span className="contact-label">Email:</span> contact@foliagefashion.com</p>
              <p><span className="contact-label">Phone:</span> +1 (908) 555-0199</p>
            </div>
          </div>

          <div className="contact-card">
            <h2 className="contact-card-title">Bangladesh Office</h2>
            <div className="contact-info">
              <p>Foliage Fashion Sourcing</p>
              <p>56/A Dhanmondi Road 4</p>
              <p>Dhaka 1209, Bangladesh</p>
              <p><span className="contact-label">Email:</span> dhaka@foliagefashion.com</p>
              <p><span className="contact-label">Phone:</span> +880 1999-123456</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-container">
          <h2 className="contact-form-title">Send Us a Message</h2>
          <form
            action="https://formsubmit.co/info@foliagefashion.com"
            method="POST"
            className="space-y-4"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://foliagefashion.com/thank-you" />
            <input type="text" name="_honey" style={{ display: 'none' }} />
            <div className="form-group">
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                required
                placeholder="Your Message"
                rows="5"
                className="form-textarea"
              />
            </div>
            <button
              type="submit"
              className="submit-button"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;