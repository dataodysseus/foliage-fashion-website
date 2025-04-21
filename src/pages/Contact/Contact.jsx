// pages/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold text-emerald-800 text-center">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Details */}
        <div className="space-y-6">
          <div className="bg-emerald-50 p-4 rounded shadow">
            <h2 className="text-xl font-semibold text-emerald-700">USA Office</h2>
            <p className="text-gray-700">Foliage Fashion LLC</p>
            <p className="text-gray-700">123 Greenway Blvd</p>
            <p className="text-gray-700">Edison, NJ 08817</p>
            <p className="text-gray-700">Email: contact@foliagefashion.com</p>
            <p className="text-gray-700">Phone: +1 (908) 555-0199</p>
          </div>

          <div className="bg-emerald-50 p-4 rounded shadow">
            <h2 className="text-xl font-semibold text-emerald-700">Bangladesh Office</h2>
            <p className="text-gray-700">Foliage Fashion Sourcing</p>
            <p className="text-gray-700">56/A Dhanmondi Road 4</p>
            <p className="text-gray-700">Dhaka 1209, Bangladesh</p>
            <p className="text-gray-700">Email: dhaka@foliagefashion.com</p>
            <p className="text-gray-700">Phone: +880 1999-123456</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-xl font-semibold text-emerald-700 mb-4">Send Us a Message</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 p-2 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 p-2 rounded"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full border border-gray-300 p-2 rounded"
            />
            <button
              type="submit"
              className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
