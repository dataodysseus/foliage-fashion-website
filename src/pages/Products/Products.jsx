import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import './Products.css';

const Products = () => {
  const categories = [
    {
      id: 'womens-tops',
      name: "Women's Tops",
      image: "/images/products/categories/womens-tops.jpeg",
      description: "Stylish and comfortable tops for women in various designs and fabrics."
    },
    {
      id: 'womens-dresses',
      name: "Women's Dresses",
      image: "/images/products/categories/womens-dresses.jpg",
      description: "Elegant dresses for every occasion, from casual to formal wear."
    },
    {
      id: 'tshirts',
      name: "T-shirts",
      image: "/images/products/categories/tshirts.jpg",
      description: "Classic and graphic t-shirts for everyday comfort and style."
    },
    {
      id: 'polos',
      name: "Polos",
      image: "/images/products/categories/polos.jpg",
      description: "Premium polo shirts for a smart casual look."
    },
    {
      id: 'sweatshirts',
      name: "Sweat Shirts",
      image: "/images/products/categories/sweatshirts.jpg",
      description: "Cozy sweatshirts perfect for layering in cooler weather."
    },
    {
      id: 'sweaters',
      name: "Sweaters",
      image: "/images/products/categories/sweaters.jpg",
      description: "Warm and stylish sweaters in various knits and patterns."
    },
    {
      id: 'hoodies',
      name: "Hoodies",
      image: "/images/products/categories/hoodies.jpg",
      description: "Comfortable hoodies for active lifestyles and casual wear."
    },
    {
      id: 'jeans',
      name: "Jeans",
      image: "/images/products/categories/jeans.jpg",
      description: "Quality denim jeans in various cuts, washes, and styles."
    },
    {
      id: 'jackets',
      name: "Jackets",
      image: "/images/products/categories/jackets.jpg",
      description: "Trendy and functional jackets for all seasons."
    },
    {
      id: 'sportswear',
      name: "Sports Wear",
      image: "/images/products/categories/sportswear.jpg",
      description: "Performance sportswear designed for comfort and functionality."
    }
  ];

  return (
    <>
      <Hero 
        title="Our Product Collections"
        subtitle="Explore our wide range of high-quality apparel products for every style and season"
        backgroundImage="/images/products/hero/collections-hero.jpg"
      />

      <section className="product-categories">
        <div className="container">
          <h2 className="section-title">Browse By Category</h2>
          <div className="categories-grid">
            {categories.map((category) => (
              <div className="category-card" key={category.id}>
                <div className="category-image">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    onError={(e) => {
                      e.target.src = '/images/products/placeholder.jpg';
                      e.target.alt = 'Placeholder image';
                    }}
                  />
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
              <img 
                src="/images/products/features/quality-assurance.jpg" 
                alt="Quality assurance process"
                onError={(e) => {
                  e.target.src = '/images/products/placeholder.jpg';
                  e.target.alt = 'Placeholder image';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="customization">
        <div className="container">
          <div className="features-grid reverse">
            <div className="feature-image">
              <img 
                src="/images/products/features/customization.jpg" 
                alt="Customization options"
                onError={(e) => {
                  e.target.src = '/images/products/placeholder.jpg';
                  e.target.alt = 'Placeholder image';
                }}
              />
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