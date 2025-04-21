import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import './Products.css';

const Products = () => {
  const categories = [
    {
      id: 'womens-tops',
      name: "Women's Tops",
      image: "/api/placeholder/400/300",
      description: "Stylish and comfortable tops for women in various designs and fabrics."
    },
    {
      id: 'womens-dresses',
      name: "Women's Dresses",
      image: "/api/placeholder/400/300",
      description: "Elegant dresses for every occasion, from casual to formal wear."
    },
    {
      id: 'tshirts',
      name: "T-shirts",
      image: "/api/placeholder/400/300",
      description: "Classic and graphic t-shirts for everyday comfort and style."
    },
    {
      id: 'polos',
      name: "Polos",
      image: "/api/placeholder/400/300",
      description: "Premium polo shirts for a smart casual look."
    },
    {
      id: 'sweatshirts',
      name: "Sweat Shirts",
      image: "/api/placeholder/400/300",
      description: "Cozy sweatshirts perfect for layering in cooler weather."
    },
    {
      id: 'sweaters',
      name: "Sweaters",
      image: "/api/placeholder/400/300",
      description: "Warm and stylish sweaters in various knits and patterns."
    },
    {
      id: 'hoodies',
      name: "Hoodies",
      image: "/api/placeholder/400/300",
      description: "Comfortable hoodies for active lifestyles and casual wear."
    },
    {
      id: 'jeans',
      name: "Jeans",
      image: "/api/placeholder/400/300",
      description: "Quality denim jeans in various cuts, washes, and styles."
    },
    {
      id: 'jackets',
      name: "Jackets",
      image: "/api/placeholder/400/300",
      description: "Trendy and functional jackets for all seasons."
    },
    {
      id: 'sportswear',
      name: "Sports Wear",
      image: "/api/placeholder/400/300",
      description: "Performance sportswear designed for comfort and functionality."
    }
  ];

  return (
    <>
      <Hero 
        title="Our Product Collections"
        subtitle="Explore our wide range of high-quality apparel products for every style and season"
        backgroundImage="/api/placeholder/1200/400"
      />

      <section className="product-categories">
        <div className="container">
          <h2 className="section-title">Browse By Category</h2>
          <div className="categories-grid">
            {categories.map((category) => (
              <div className="category-card" key={category.id}>
                <div className="category-image">
                  <img src={category.image} alt={category.name} />
                </div>
                <div className="category-info">
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                  <Link to={`/products/${category.id}`} className="btn">View Products</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="product-features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-content">
              <h2>Quality Assurance</h2>
              <p>At Foliage Fashion, quality is our top priority. Every product in our collection undergoes rigorous quality checks before shipping to our clients. We work with certified manufacturers who follow international standards to ensure the best quality fabrics, stitching, and finishing.</p>
              <p>Our dedicated quality control team inspects each batch to ensure consistency and excellence across all our product lines.</p>
            </div>
            <div className="feature-image">
              <img src="/api/placeholder/500/300" alt="Quality assurance process" />
            </div>
          </div>
        </div>
      </section>

      <section className="customization">
        <div className="container">
          <div className="features-grid reverse">
            <div className="feature-image">
              <img src="/api/placeholder/500/300" alt="Customization options" />
            </div>
            <div className="feature-content">
              <h2>Customization Options</h2>
              <p>Looking for custom-made products? We offer comprehensive customization services for all our product categories. From fabric selection to design modifications, we can adapt our products to meet your specific requirements.</p>
              <p>Contact our team to discuss your customization needs and learn how we can bring your vision to life.</p>
              <Link to="/contact" className="btn">Request Custom Order</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;