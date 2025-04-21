import Hero from '../../components/Hero/Hero';
import './About.css';
import { FaCheck } from 'react-icons/fa';

const About = () => {
  return (
    <>
      <Hero 
        title="About Foliage Fashion"
        subtitle="Learn about our journey, values, and commitment to quality apparel solutions"
        backgroundImage="/api/placeholder/1200/600"
      />

      <section className="about-intro">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2>Our Story</h2>
              <p>Founded in 2015, Foliage Fashion has grown from a small local enterprise to a respected name in the international apparel trade industry. What started as a passion for connecting quality manufacturers with discerning retailers has evolved into a comprehensive trade house operation serving clients across the United States.</p>
              <p>Our journey has been shaped by a deep understanding of both manufacturing capabilities and retail requirements, allowing us to bridge the gap between producers and sellers effectively.</p>
              <h2>Our Mission</h2>
              <p>At Foliage Fashion, we strive to transform the global apparel supply chain by creating sustainable, transparent, and mutually beneficial relationships between manufacturers and retailers. We aim to be the most trusted partner for US retailers seeking quality apparel products at competitive prices.</p>
            </div>
            <div className="about-image">
              <img src="/api/placeholder/500/600" alt="Foliage Fashion headquarters" />
            </div>
          </div>
        </div>
      </section>

      <section className="values">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Quality</h3>
              <p>We never compromise on quality and work only with manufacturers who share our commitment to excellence.</p>
            </div>
            <div className="value-card">
              <h3>Transparency</h3>
              <p>We believe in open communication and transparent business practices throughout the supply chain.</p>
            </div>
            <div className="value-card">
              <h3>Reliability</h3>
              <p>We honor our commitments and ensure timely delivery of products that meet or exceed expectations.</p>
            </div>
            <div className="value-card">
              <h3>Sustainability</h3>
              <p>We promote environmentally responsible manufacturing practices and ethical labor standards.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team">
        <div className="container">
          <h2 className="section-title">Our Leadership Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img src="/api/placeholder/300/300" alt="CEO" />
              </div>
              <h3>Jane Doe</h3>
              <p className="position">CEO & Founder</p>
              <p>With over 20 years of experience in the apparel industry, Jane has established strong relationships with manufacturers worldwide.</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src="/api/placeholder/300/300" alt="COO" />
              </div>
              <h3>John Smith</h3>
              <p className="position">Chief Operations Officer</p>
              <p>John oversees our logistics and ensures smooth operations from order placement to delivery.</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src="/api/placeholder/300/300" alt="Quality Director" />
              </div>
              <h3>Emily Chen</h3>
              <p className="position">Quality Assurance Director</p>
              <p>Emily leads our quality control team and implements rigorous standards for all products.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-us">
        <div className="container">
          <div className="why-us-grid">
            <div className="why-us-content">
              <h2>Why Partner With Us?</h2>
              <ul className="benefits-list">
                <li><FaCheck /> Direct access to verified manufacturers</li>
                <li><FaCheck /> Competitive pricing and flexible terms</li>
                <li><FaCheck /> Rigorous quality control at every stage</li>
                <li><FaCheck /> Comprehensive logistics support</li>
                <li><FaCheck /> Customized solutions for your specific needs</li>
                <li><FaCheck /> Ethical and sustainable sourcing options</li>
              </ul>
            </div>
            <div className="why-us-image">
              <img src="/api/placeholder/500/400" alt="Team working with manufacturers" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;