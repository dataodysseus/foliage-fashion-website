import { useParams, Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import './Categories.css';

const Categories = () => {
  const mainCategories = {
    'mens-apparel': {
      title: "Men's Apparel",
      description: "High-quality men's clothing for all occasions",
      subcategories: [
        { id: 'mens-shirts', name: "Mens's Shirts"},
        { id: 'mens-polos', name: "Men's Polos"},
        { id: 'mens-sweatshirts', name: "Men's Sweatshirts"},
        { id: 'mens-sweaters', name: "Men's Sweaters"},
        { id: 'mens-hoodies', name: "Men's Hoodies"},
        { id: 'mens-jeans', name: "Men's Jeans"},
        { id: 'mens-jackets', name: "Men's Jackets"},
        { id: 'mens-sportswear', name: "Men's Sportswear"}        
      ]
    },
    'womens-apparel': {
      title: "Women's Apparel",
      description: "Stylish women's clothing for every occasion",
      subcategories: [
        { id: 'womens-tops', name: "Women's Tops" },
        { id: 'womens-dresses', name: "Women's Dresses" },
        { id: 'womens-tshirts', name: "Women's Tshirts" },
        { id: 'womens-polos', name: "Women's Polos" },
        { id: 'womens-sweatshirts', name: "Women's Sweatshirts" },
        { id: 'womens-sweaters', name: "Women's Sweaters" },
        { id: 'womens-hoodies', name: "Women's Hoodies" },
        { id: 'womens-jeans', name: "Women's Jeans" },         
        { id: 'womens-jackets', name: "Women's Jackets" },
        { id: 'womens-sportswear', name: "Women's Sportswear" }                              
      ]
    },
    'childrens-wear': {
      title: "Children's Wear",
      description: "Adorable and comfortable clothing for kids",
      subcategories: [
        { id: 'boys-tops', name: "Boys' Tops" },
        { id: 'girls-tops', name: "Girls' Tops" }
      ]
    },
    'home-textiles': {
      title: "Home Textiles",
      description: "Quality fabrics for your home",
      subcategories: [
        { id: 'bedding', name: "Bedding" }
      ]
    },
    'accessories': {
      title: "Accessories",
      description: "Complementary items to complete your look",
      subcategories: [
        { id: 'bags', name: "Bags" },
        { id: 'hats', name: "Hats" }
      ]
    }
  };

  const { categoryId } = useParams();
  const category = mainCategories[categoryId];

  if (!category) {
    return (
      <div className="container" style={{ padding: '5rem 0', textAlign: 'center' }}>
        <h2>Category not found</h2>
        <p>The category you are looking for does not exist.</p>
        <Link to="/" className="btn">Back to Home</Link>
      </div>
    );
  }

  return (
    <>
      <Hero 
        title={category.title}
        subtitle={category.description}
        backgroundImage={`/images/products/hero/${categoryId}-hero.jpg`}
      />

      <section className="category-subcategories">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link> &gt; <span>{category.title}</span>
          </div>

          <h2 className="section-title">Browse {category.title}</h2>
          <div className="subcategories-grid">
            {category.subcategories.map((subcategory) => (
              <div className="subcategory-card" key={subcategory.id}>
                <div className="subcategory-image">
                  <img 
                    src={`/images/products/subcategories/${subcategory.id}.jpg`} 
                    alt={subcategory.name}
                    onError={(e) => {
                      e.target.src = '/images/products/placeholder.jpg';
                      e.target.alt = 'Placeholder image';
                    }}
                  />
                </div>
                <div className="subcategory-info">
                  <h3>{subcategory.name}</h3>
                  {/* Updated link to use nested structure */}
                  <Link to={`/categories/${categoryId}/${subcategory.id}`} className="btn">
                    View Products
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;