import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import ImageContainer from '../../components/ImageContainer/ImageContainer';
import './Products.css';

const Products = () => {
  return (
    <>
      <Hero 
        title="Our Product Collections"
        subtitle="Explore our wide range of high-quality apparel products for every style and season"
        backgroundImage="/images/products/hero/collections-hero.jpg"
      />

      <section className="all-categories">
        <div className="container">
          <h2 className="section-title">Browse All Categories</h2>
          <div className="categories-grid">
            <div className="category-card">
              <div className="category-image">
                <img src="/images/products/categories/mens-apparel.jpg" alt="Men's Apparel" />
              </div>
              <div className="category-info">
                <h3>Men's Apparel</h3>
                <p>Quality clothing for men including tops, bottoms, and outerwear</p>
                <Link to="/categories/mens-apparel" className="btn">View Collection</Link>
              </div>
            </div>
            <div className="category-card">
              <div className="category-image">
                <img src="/images/products/categories/womens-apparel.jpg" alt="Women's Apparel" />
              </div>
              <div className="category-info">
                <h3>Women's Apparel</h3>
                <p>Stylish women's clothing for every occasion</p>
                <Link to="/categories/womens-apparel" className="btn">View Collection</Link>
              </div>
            </div>
            <div className="category-card">
              <div className="category-image">
                <img src="/images/products/categories/childrens-wear.jpg" alt="Children's Wear" />
              </div>
              <div className="category-info">
                <h3>Children's Wear</h3>
                <p>Adorable and comfortable clothing for kids</p>
                <Link to="/categories/childrens-wear" className="btn">View Collection</Link>
              </div>
            </div>  
            <div className="category-card">
              <div className="category-image">
                <img src="/images/products/categories/home-textiles.jpg" alt="Home Textiles" />
              </div>
              <div className="category-info">
                <h3>Home Textiles</h3>
                <p>Quality fabrics for your home</p>
                <Link to="/categories/home-textiles" className="btn">View Collection</Link>
              </div>
            </div>
            <div className="category-card">
              <div className="category-image">
                <img src="/images/products/categories/accessories.jpg" alt="Accessories" />
              </div>
              <div className="category-info">
                <h3>Accessories</h3>
                <p>Complementary items to complete your look</p>
                <Link to="/categories/accessories" className="btn">View Collection</Link>
              </div>
            </div>                                  
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