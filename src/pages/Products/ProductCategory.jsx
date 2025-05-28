import { useParams, Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import { getProductsBySubcategory } from '../../data/productsData';
import './ProductCategory.css'; // Make sure you have this CSS file

const ProductCategory = () => {
  // Get both categoryId and subcategoryId from URL parameters
  const { categoryId, subcategoryId } = useParams();

  // Category and subcategory mapping
  const categoryData = {
    'mens-apparel': {
      title: "Men's Apparel",
      subcategories: {
        'mens-shirts': { name: "Mens's Shirts", description: "Elegant shirts for every occasion" },
        'mens-polos': { name: "Men's Polos", description: "Classic polo shirts for men" },
        'mens-sweatshirts': { name: "Men's Sweatshirts", description: "Cozy sweatshirts for men" },
        'mens-sweaters': { name: "Men's Sweaters", description: "Warm sweaters for men" },
        'mens-hoodies': { name: "Men's Hoodies", description: "Comfortable hoodies for men" },
        'mens-jeans': { name: "Men's Jeans", description: "Stylish jeans for men" },
        'mens-jackets': { name: "Men's Jackets", description: "Fashionable jackets for men" },
        'mens-sportswear': { name: "Men's Sportswear", description: "Active wear for men" }
      }
    },
    'womens-apparel': {
      title: "Women's Apparel",
      subcategories: {
        'womens-tops': { name: "Women's Tops", description: "Fashionable tops for women" },
        'womens-dresses': { name: "Women's Dresses", description: "Elegant dresses for every occasion" },
        'womens-tshirts': { name: "Women's T-shirts", description: "Comfortable t-shirts for women" },
        'womens-polos': { name: "Women's Polos", description: "Classic polo shirts for women" },
        'womens-sweatshirts': { name: "Women's Sweatshirts", description: "Cozy sweatshirts for women" },
        'womens-sweaters': { name: "Women's Sweaters", description: "Warm sweaters for women" },
        'womens-hoodies': { name: "Women's Hoodies", description: "Comfortable hoodies for women" },
        'womens-jeans': { name: "Women's Jeans", description: "Stylish jeans for women" },
        'womens-jackets': { name: "Women's Jackets", description: "Fashionable jackets for women" },
        'womens-sportswear': { name: "Women's Sportswear", description: "Active wear for women" }
      }
    },
    'childrens-wear': {
      title: "Children's Wear",
      subcategories: {
        'boys-tops': { name: "Boys' Tops", description: "Fun tops for Boys" },
        'girls-tops': { name: "Girls' Tops", description: "Fun tops for Grils" }
      }
    },
    'home-textiles': {
      title: "Home Textiles",
      subcategories: {
        'bedding': { name: "Bedding", description: "Comfortable bedding solutions" }
      }
    },
    'accessories': {
      title: "Accessories",
      subcategories: {
        'bags': { name: "Bags", description: "Stylish bags and purses" },
        'hats': { name: "Hats", description: "Fashionable headwear" }
      }
    }
  };

  // Get products for this subcategory
  const products = getProductsBySubcategory(subcategoryId);

  // Handle cases where we only have subcategoryId (backward compatibility)
  let currentCategory, currentSubcategory;
  
  if (categoryId && subcategoryId) {
    // New nested structure
    currentCategory = categoryData[categoryId];
    currentSubcategory = currentCategory?.subcategories[subcategoryId];
  } else if (subcategoryId && !categoryId) {
    // Backward compatibility - find category by subcategory
    for (const [catId, catData] of Object.entries(categoryData)) {
      if (catData.subcategories[subcategoryId]) {
        currentCategory = catData;
        currentSubcategory = catData.subcategories[subcategoryId];
        break;
      }
    }
  }

  if (!currentSubcategory) {
    return (
      <div className="container" style={{ padding: '5rem 0', textAlign: 'center' }}>
        <h2>Products not found</h2>
        <p>The product category you are looking for does not exist.</p>
        <Link to="/" className="btn">Back to Home</Link>
      </div>
    );
  }

  return (
    <>
      <Hero 
        title={currentSubcategory.name}
        subtitle={currentSubcategory.description}
        backgroundImage={`/images/products/hero/${subcategoryId}-hero.jpg`}
      />

      <section className="product-listing">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link> &gt; 
            {categoryId && (
              <>
                <Link to={`/categories/${categoryId}`}>{currentCategory.title}</Link> &gt; 
              </>
            )}
            <span>{currentSubcategory.name}</span>
          </div>

          <div className="products-header">
            <h2 className="section-title">{currentSubcategory.name}</h2>
            <p className="products-count">{products.length} Products Available</p>
          </div>

          <div className="products-grid">
            {products.map((product) => (
              <div className="product-card" key={product.id}>
                <div className="product-image">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    onError={(e) => {
                      e.target.src = '/images/products/placeholder.jpg';
                      e.target.alt = 'Placeholder image';
                    }}
                  />
                </div>
                <div className="product-info">
                  <div className="product-actions">
                    <button className="btn btn-primary">{product.name}</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pagination">
            <button className="btn btn-outline">Previous</button>
            <span className="pagination-info">Page 1 of 1</span>
            <button className="btn btn-outline">Next</button>
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Interested in Bulk Orders?</h2>
            <p>Contact us for custom pricing and bulk order discounts. We specialize in wholesale and can accommodate large quantity orders.</p>
            <Link to="/contact" className="btn btn-primary">Get Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductCategory;