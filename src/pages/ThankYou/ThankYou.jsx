// pages/ThankYou.jsx
import React from "react";

const ThankYou = () => {
  return (
    <div className="flex items-center justify-center h-[70vh]">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-emerald-700">Thank You!</h1>
        <p className="text-lg text-gray-700">
          Your message has been sent successfully. We’ll get back to you soon.
        </p>
        <a
          href="/"
          className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default ThankYou;
