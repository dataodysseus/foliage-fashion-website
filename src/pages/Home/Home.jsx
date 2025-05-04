import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import ImageContainer from '../../components/ImageContainer/ImageContainer';
import { 
  FaTshirt, 
  FaHandshake, 
  FaShippingFast, 
  FaSearchDollar, 
  FaMedal,
  FaLeaf,
  FaUserTie,
  FaChartLine,
  FaAward
} from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const categories = [
    {
      id: 'mens-apparel',
      name: "Men's Apparel",
      image: "/images/products/categories/mens-apparel.jpg",
      link: "/products"
    },
    {
      id: 'womens-apparel',
      name: "Women's Apparel",
      image: "/images/products/categories/womens-apparel.jpg",
      link: "/products"
    },
    {
      id: 'activewear',
      name: "Activewear",
      image: "/images/products/categories/activewear.jpg",
      link: "/products"
    },
    {
      id: 'accessories',
      name: "Accessories",
      image: "/images/products/categories/accessories.jpg",
      link: "/products"
    }
  ];

  const businessHighlights = [
    {
      icon: <FaLeaf className="highlight-icon" />,
      title: "Sustainable Sourcing",
      description: "Ethically produced apparel using eco-friendly materials and processes",
      stat: "100+",
      statLabel: "Eco-Certified Products"
    },
    {
      icon: <FaUserTie className="highlight-icon" />,
      title: "Industry Experts",
      description: "50+ years combined experience in fashion manufacturing",
      stat: "500+",
      statLabel: "Manufacturing Sources"
    },
    {
      icon: <FaShippingFast className="highlight-icon" />,
      title: "Reliable Logistics",
      description: "On-time delivery with real-time tracking",
      stat: "98%",
      statLabel: "On-Time Rate"
    },
  ];

  return (
    <>
      <Hero 
        title="Premium Apparel Solutions for US Retailers"
        subtitle="Connecting quality manufacturers with retailers across the United States. From sourcing to delivery, we handle it all."
        buttonText="Explore Products"
        buttonLink="/products"
        backgroundImage="/images/products/hero/hero-banner.jpg"
      />

      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Foliage Fashion?</h2>
          <div className="highlight-grid">
            {businessHighlights.map((highlight, index) => (
              <div className="highlight-card" key={index}>
                <div className="highlight-icon-container">
                  {highlight.icon}
                </div>
                <div className="highlight-content">
                  <h3>{highlight.title}</h3>
                  <p>{highlight.description}</p>
                  <div className="highlight-stats">
                    <span className="stat-number">{highlight.stat}</span>
                    <span className="stat-label">{highlight.statLabel}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="categories">
        <div className="container">
          <h2 className="section-title">Our Product Categories</h2>
          <div className="category-grid">
            {categories.map((category) => (
              <div className="category-card" key={category.id}>
                <ImageContainer 
                  src={category.image}
                  alt={category.name}
                  aspectRatio="4/3"
                  maxHeight={250}
                  className="category-image"
                />
                <h3>{category.name}</h3>
                <Link to={category.link} className="btn-outline">View Collection</Link>
              </div>
            ))}
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