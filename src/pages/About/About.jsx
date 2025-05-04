import Hero from '../../components/Hero/Hero';
import './About.css';
import { FaCheck } from 'react-icons/fa';

const About = () => {
  return (
    <>
      <Hero 
        title="About Foliage Fashion"
        subtitle="Learn about our journey, values, and commitment to quality apparel solutions"
        backgroundImage="/images/products/hero/about-hero.jpg"
      />

      <section className="about-intro">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2>Our Story</h2>
              <p>Founded in 2024, Foliage Fashion has grown from a small local enterprise to a respected name in the international apparel trade industry. What started as a passion for connecting quality manufacturers with discerning retailers has evolved into a comprehensive trade house operation serving clients across the United States.</p>
              <p>Our journey has been shaped by a deep understanding of both manufacturing capabilities and retail requirements, allowing us to bridge the gap between producers and sellers effectively.</p>
              <h2>Our Mission</h2>
              <p>At Foliage Fashion, we strive to transform the global apparel supply chain by creating sustainable, transparent, and mutually beneficial relationships between manufacturers and retailers. We aim to be the most trusted partner for US retailers seeking quality apparel products at competitive prices.</p>
            </div>
            <div className="about-image">
              <img src="/images/products/features/headquarters.jpg" alt="Foliage Fashion headquarters" />
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
              <h3>Salah Uddin</h3>
              <p className="position">Co-Founder & CEO</p>
              <p>Drawing on a decade of experience in supply chain, analytics, and consulting, Salah bridges U.S.-based buyers with Bangladesh’s top apparel manufacturers, combining data-driven insight with global perspective.</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src="/api/placeholder/300/300" alt="COO" />
              </div>
              <h3>Tanvir Alam</h3>
              <p className="position">Co-Founder & COO</p>
              <p>A seasoned textile engineer with two decades of leadership in manufacturing and merchandising, our COO ensures every factory partnership meets the highest standards of quality, efficiency, and trust.</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src="/api/placeholder/300/300" alt="CFO" />
              </div>
              <h3>Samiul Islam</h3>
              <p className="position">Co-Founder & CFO</p>
              <p>An accomplished finance professional, Samiul brings over 20 years of expertise in banking, trading, and foreign exchange to guide our global operations with strategic precision and fiscal discipline.</p>
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
              <img src="/images/products/features/team.jpg" alt="Team working with manufacturers" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;