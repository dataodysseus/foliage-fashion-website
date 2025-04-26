// pages/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <div className="space-y-10 p-6 md:p-12">
      <h1 className="text-4xl font-bold text-emerald-800 text-center">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Details */}
        <div className="space-y-6">
          <div className="bg-emerald-50 p-6 rounded-2xl shadow">
            <h2 className="text-xl font-semibold text-emerald-700">USA Office</h2>
            <p>Foliage Fashion LLC</p>
            <p>123 Greenway Blvd</p>
            <p>Edison, NJ 08817</p>
            <p>Email: contact@foliagefashion.com</p>
            <p>Phone: +1 (908) 555-0199</p>
          </div>

          <div className="bg-emerald-50 p-6 rounded-2xl shadow">
            <h2 className="text-xl font-semibold text-emerald-700">Bangladesh Office</h2>
            <p>Foliage Fashion Sourcing</p>
            <p>56/A Dhanmondi Road 4</p>
            <p>Dhaka 1209, Bangladesh</p>
            <p>Email: dhaka@foliagefashion.com</p>
            <p>Phone: +880 1999-123456</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-emerald-700 mb-6">Send Us a Message</h2>
          <form
            action="https://formsubmit.co/info@foliagefashion.com"
            method="POST"
            className="space-y-4"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <textarea
              name="message"
              required
              placeholder="Your Message"
              rows="5"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <button
              type="submit"
              className="w-full bg-emerald-600 text-white font-semibold py-3 rounded-lg hover:bg-emerald-700 transition"
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
