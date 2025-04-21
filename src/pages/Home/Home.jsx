import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import { FaTshirt, FaHandshake, FaShippingFast, FaSearchDollar, FaMedal } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <>
      <Hero 
        title="Premium Apparel Solutions for US Retailers"
        subtitle="Connecting quality manufacturers with retailers across the United States. From sourcing to delivery, we handle it all."
        buttonText="Explore Products"
        buttonLink="/products"
        backgroundImage="/api/placeholder/1200/800"
      />

      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Foliage Fashion?</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FaTshirt />
              </div>
              <h3>Quality Products</h3>
              <p>We source only the finest materials and work with certified manufacturers to ensure premium quality.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaHandshake />
              </div>
              <h3>Reliable Partnerships</h3>
              <p>Build long-term relationships with manufacturers who understand your specific requirements.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaSearchDollar />
              </div>
              <h3>Competitive Pricing</h3>
              <p>Get the best value for your investment with our transparent and competitive pricing structure.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaShippingFast />
              </div>
              <h3>Efficient Logistics</h3>
              <p>Our experienced team ensures timely delivery and hassle-free customs clearance process.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaMedal />
              </div>
              <h3>Industry Compliance</h3>
              <p>All our partners adhere to international standards and ethical manufacturing practices.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="categories">
        <div className="container">
          <h2 className="section-title">Our Product Categories</h2>
          <div className="category-grid">
            <div className="category-card">
              <div className="category-image">
                <img src="/api/placeholder/400/300" alt="Men's Apparel" />
              </div>
              <h3>Men's Apparel</h3>
              <Link to="/products" className="btn-outline">View Collection</Link>
            </div>

            <div className="category-card">
              <div className="category-image">
                <img src="/api/placeholder/400/300" alt="Women's Apparel" />
              </div>
              <h3>Women's Apparel</h3>
              <Link to="/products" className="btn-outline">View Collection</Link>
            </div>

            <div className="category-card">
              <div className="category-image">
                <img src="/api/placeholder/400/300" alt="Activewear" />
              </div>
              <h3>Activewear</h3>
              <Link to="/products" className="btn-outline">View Collection</Link>
            </div>

            <div className="category-card">
              <div className="category-image">
                <img src="/api/placeholder/400/300" alt="Accessories" />
              </div>
              <h3>Accessories</h3>
              <Link to="/products" className="btn-outline">View Collection</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Apparel Supply Chain?</h2>
            <p>Partner with Foliage Fashion for a seamless sourcing experience. Our team is ready to help you find the perfect manufacturing solutions for your brand.</p>
            <Link to="/contact" className="btn">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;