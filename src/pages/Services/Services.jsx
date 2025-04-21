// pages/Services.jsx
import React from "react";

const services = [
  {
    title: "Apparel Sourcing",
    description: "Connect with verified manufacturers across Asia offering quality fabrics, styles, and scalable production.",
    icon: "🧵",
  },
  {
    title: "Custom Product Development",
    description: "We help brands develop custom samples, tech packs, and prototypes tailored to their vision.",
    icon: "🧷",
  },
  {
    title: "Quality Assurance",
    description: "Our team oversees quality checks at every production stage to ensure consistency and compliance.",
    icon: "🔍",
  },
  {
    title: "Logistics & Fulfillment",
    description: "We coordinate international shipping, labeling, and fulfillment with transparency and efficiency.",
    icon: "🚚",
  },
];

const Services = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-emerald-800 text-center">Our Services</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 border-l-4 border-emerald-600">
            <h2 className="text-xl font-semibold mb-2 text-emerald-700">
              {service.icon} {service.title}
            </h2>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
