import React from "react";
import { 
  FaSearch, 
  FaRulerCombined, 
  FaCheckDouble, 
  FaShippingFast,
  FaPalette,
  FaHandshake
} from "react-icons/fa";
import "./Services.css";

const services = [
  {
    title: "Apparel Sourcing",
    description: "Connect with our network of 200+ verified manufacturers in Bangladesh & Asia offering premium fabrics, trending styles, and scalable production solutions.",
    icon: <FaSearch className="service-icon" />,
    color: "bg-teal-100",
    border: "border-teal-500"
  },
  {
    title: "Custom Product Development",
    description: "From concept to creation - we help brands develop custom samples, tech packs, and prototypes with our in-house design team.",
    icon: <FaRulerCombined className="service-icon" />,
    color: "bg-amber-100",
    border: "border-amber-500"
  },
  {
    title: "Quality Assurance",
    description: "Multi-stage quality control process with on-site inspections to ensure consistency, durability, and compliance with international standards.",
    icon: <FaCheckDouble className="service-icon" />,
    color: "bg-emerald-100",
    border: "border-emerald-500"
  },
  {
    title: "Logistics & Fulfillment",
    description: "Door-to-door coordination including customs clearance, labeling, and inventory management with real-time tracking.",
    icon: <FaShippingFast className="service-icon" />,
    color: "bg-blue-100",
    border: "border-blue-500"
  },
  {
    title: "Design Consultancy",
    description: "Seasonal trend forecasting and design direction from our creative team to keep your collections fresh and market-relevant.",
    icon: <FaPalette className="service-icon" />,
    color: "bg-purple-100",
    border: "border-purple-500"
  },
  {
    title: "Brand Partnerships",
    description: "Exclusive collaborations with sustainable fabric producers and artisan communities for unique product offerings.",
    icon: <FaHandshake className="service-icon" />,
    color: "bg-green-100",
    border: "border-green-600"
  }
];

const Services = () => {
  return (
    <section className="services-container">
      <div className="services-header">
        <h1 className="services-title">Our Premium Services</h1>
        <p className="services-subtitle">End-to-end solutions for fashion retailers</p>
      </div>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div 
            key={index} 
            className={`service-card ${service.color} ${service.border}`}
          >
            <div className="service-icon-container">
              {service.icon}
            </div>
            <h2 className="service-name">{service.title}</h2>
            <p className="service-description">{service.description}</p>
            <div className="service-hover-content">
              <button className="service-button">
                Learn More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;