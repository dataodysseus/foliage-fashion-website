import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import './Products.css';

const productCategories = {
  'womens-tops': {
    title: "Women's Tops",
    subtitle: "Explore our collection of stylish and comfortable women's tops",
    heroImage: "/api/placeholder/1200/400",
    subcategories: [
      {
        name: "Casual Tops",
        products: [
          { id: "WT-CT-001", name: "Basic Cotton Tee", image: "/api/placeholder/300/400" },
          { id: "WT-CT-002", name: "V-Neck Blouse", image: "/api/placeholder/300/400" },
          { id: "WT-CT-003", name: "Button-Up Shirt", image: "/api/placeholder/300/400" },
          { id: "WT-CT-004", name: "Sleeveless Top", image: "/api/placeholder/300/400" }
        ]
      },
      {
        name: "Formal Tops",
        products: [
          { id: "WT-FT-001", name: "Silk Blouse", image: "/api/placeholder/300/400" },
          { id: "WT-FT-002", name: "Tailored Shirt", image: "/api/placeholder/300/400" },
          { id: "WT-FT-003", name: "Peplum Top", image: "/api/placeholder/300/400" },
          { id: "WT-FT-004", name: "Ruffle Detail Top", image: "/api/placeholder/300/400" }
        ]
      }
    ]
  },
  'womens-dresses': {
    title: "Women's Dresses",
    subtitle: "Elegant dresses for every occasion",
    heroImage: "/api/placeholder/1200/400",
    subcategories: [
      {
        name: "Casual Dresses",
        products: [
          { id: "WD-CD-001", name: "T-Shirt Dress", image: "/api/placeholder/300/400" },
          { id: "WD-CD-002", name: "Sundress", image: "/api/placeholder/300/400" },
          { id: "WD-CD-003", name: "Wrap Dress", image: "/api/placeholder/300/400" },
          { id: "WD-CD-004", name: "Shirt Dress", image: "/api/placeholder/300/400" }
        ]
      },
      {
        name: "Formal Dresses",
        products: [
          { id: "WD-FD-001", name: "Cocktail Dress", image: "/api/placeholder/300/400" },
          { id: "WD-FD-002", name: "Evening Gown", image: "/api/placeholder/300/400" },
          { id: "WD-FD-003", name: "A-Line Dress", image: "/api/placeholder/300/400" },
          { id: "WD-FD-004", name: "Sheath Dress", image: "/api/placeholder/300/400" }
        ]
      }
    ]
  },
  'tshirts': {
    title: "T-Shirts",
    subtitle: "Classic and graphic t-shirts for every style",
    heroImage: "/api/placeholder/1200/400",
    subcategories: [
      {
        name: "Crew Neck",
        products: [
          { id: "TS-CN-001", name: "Basic Cotton Tee", image: "/api/placeholder/300/400" },
          { id: "TS-CN-002", name: "Graphic Print Tee", image: "/api/placeholder/300/400" },
          { id: "TS-CN-003", name: "Striped Tee", image: "/api/placeholder/300/400" },
          { id: "TS-CN-004", name: "Long Sleeve Tee", image: "/api/placeholder/300/400" }
        ]
      },
      {
        name: "V-Neck",
        products: [
          { id: "TS-VN-001", name: "Basic V-Neck", image: "/api/placeholder/300/400" },
          { id: "TS-VN-002", name: "Pocket V-Neck", image: "/api/placeholder/300/400" },
          { id: "TS-VN-003", name: "Distressed V-Neck", image: "/api/placeholder/300/400" },
          { id: "TS-VN-004", name: "Premium V-Neck", image: "/api/placeholder/300/400" }
        ]
      }
    ]
  },
  'polos': {
    title: "Polos",
    subtitle: "Premium polo shirts for a smart casual look",
    heroImage: "/api/placeholder/1200/400",
    subcategories: [
      {
        name: "Classic Polos",
        products: [
          { id: "PO-CP-001", name: "Cotton Piqué Polo", image: "/api/placeholder/300/400" },
          { id: "PO-CP-002", name: "Slim Fit Polo", image: "/api/placeholder/300/400" },
          { id: "PO-CP-003", name: "Striped Polo", image: "/api/placeholder/300/400" },
          { id: "PO-CP-004", name: "Logo Polo", image: "/api/placeholder/300/400" }
        ]
      },
      {
        name: "Performance Polos",
        products: [
          { id: "PO-PP-001", name: "Moisture-Wicking Polo", image: "/api/placeholder/300/400" },
          { id: "PO-PP-002", name: "Golf Polo", image: "/api/placeholder/300/400" },
          { id: "PO-PP-003", name: "Stretch Fabric Polo", image: "/api/placeholder/300/400" },
          { id: "PO-PP-004", name: "Long Sleeve Polo", image: "/api/placeholder/300/400" }
        ]
      }
    ]
  },
  'sweatshirts': {
    title: "Sweat Shirts",
    subtitle: "Cozy sweatshirts for layering and comfort",
    heroImage: "/api/placeholder/1200/400",
    subcategories: [
      {
        name: "Crew Neck Sweatshirts",
        products: [
          { id: "SS-CN-001", name: "Basic Crew Sweatshirt", image: "/api/placeholder/300/400" },
          { id: "SS-CN-002", name: "Graphic Sweatshirt", image: "/api/placeholder/300/400" },
          { id: "SS-CN-003", name: "Fleece Sweatshirt", image: "/api/placeholder/300/400" },
          { id: "SS-CN-004", name: "Vintage Wash Sweatshirt", image: "/api/placeholder/300/400" }
        ]
      },
      {
        name: "Quarter-Zip Sweatshirts",
        products: [
          { id: "SS-QZ-001", name: "Classic Quarter-Zip", image: "/api/placeholder/300/400" },
          { id: "SS-QZ-002", name: "Fleece Quarter-Zip", image: "/api/placeholder/300/400" },
          { id: "SS-QZ-003", name: "Performance Quarter-Zip", image: "/api/placeholder/300/400" },
          { id: "SS-QZ-004", name: "Pullover Quarter-Zip", image: "/api/placeholder/300/400" }
        ]
      }
    ]
  },
  'sweaters': {
    title: "Sweaters",
    subtitle: "Warm and stylish sweaters in various knits and patterns",
    heroImage: "/api/placeholder/1200/400",
    subcategories: [
      {
        name: "Cardigans",
        products: [
          { id: "SW-CD-001", name: "Button-Up Cardigan", image: "/api/placeholder/300/400" },
          { id: "SW-CD-002", name: "Open Front Cardigan", image: "/api/placeholder/300/400" },
          { id: "SW-CD-003", name: "Chunky Knit Cardigan", image: "/api/placeholder/300/400" },
          { id: "SW-CD-004", name: "Longline Cardigan", image: "/api/placeholder/300/400" }
        ]
      },
      {
        name: "Pullovers",
        products: [
          { id: "SW-PO-001", name: "Crew Neck Pullover", image: "/api/placeholder/300/400" },
          { id: "SW-PO-002", name: "V-Neck Pullover", image: "/api/placeholder/300/400" },
          { id: "SW-PO-003", name: "Turtleneck Sweater", image: "/api/placeholder/300/400" },
          { id: "SW-PO-004", name: "Cable Knit Sweater", image: "/api/placeholder/300/400" }
        ]
      }
    ]
  },
  'hoodies': {
    title: "Hoodies",
    subtitle: "Comfortable hoodies for active lifestyles and casual wear",
    heroImage: "/api/placeholder/1200/400",
    subcategories: [
      {
        name: "Pullover Hoodies",
        products: [
          { id: "HD-PO-001", name: "Basic Pullover Hoodie", image: "/api/placeholder/300/400" },
          { id: "HD-PO-002", name: "Graphic Hoodie", image: "/api/placeholder/300/400" },
          { id: "HD-PO-003", name: "Fleece-Lined Hoodie", image: "/api/placeholder/300/400" },
          { id: "HD-PO-004", name: "Oversized Hoodie", image: "/api/placeholder/300/400" }
        ]
      },
      {
        name: "Zip-Up Hoodies",
        products: [
          { id: "HD-ZU-001", name: "Full-Zip Hoodie", image: "/api/placeholder/300/400" },
          { id: "HD-ZU-002", name: "Lightweight Zip Hoodie", image: "/api/placeholder/300/400" },
          { id: "HD-ZU-003", name: "Tech Fleece Zip Hoodie", image: "/api/placeholder/300/400" },
          { id: "HD-ZU-004", name: "Sherpa-Lined Zip Hoodie", image: "/api/placeholder/300/400" }
        ]
      }
    ]
  },
  'jeans': {
    title: "Jeans",
    subtitle: "Quality denim jeans in various cuts, washes, and styles",
    heroImage: "/api/placeholder/1200/400",
    subcategories: [
      {
        name: "Men's Jeans",
        products: [
          { id: "JN-MJ-001", name: "Straight Fit Jeans", image: "/api/placeholder/300/400" },
          { id: "JN-MJ-002", name: "Slim Fit Jeans", image: "/api/placeholder/300/400" },
          { id: "JN-MJ-003", name: "Relaxed Fit Jeans", image: "/api/placeholder/300/400" },
          { id: "JN-MJ-004", name: "Distressed Jeans", image: "/api/placeholder/300/400" }
        ]
      },
      {
        name: "Women's Jeans",
        products: [
          { id: "JN-WJ-001", name: "Skinny Jeans", image: "/api/placeholder/300/400" },
          { id: "JN-WJ-002", name: "High-Waisted Jeans", image: "/api/placeholder/300/400" },
          { id: "JN-WJ-003", name: "Boyfriend Jeans", image: "/api/placeholder/300/400" },
          { id: "JN-WJ-004", name: "Straight Leg Jeans", image: "/api/placeholder/300/400" }
        ]
      }
    ]
  },
  'jackets': {
    title: "Jackets",
    subtitle: "Trendy and functional jackets for all seasons",
    heroImage: "/api/placeholder/1200/400",
    subcategories: [
      {
        name: "Casual Jackets",
        products: [
          { id: "JK-CJ-001", name: "Denim Jacket", image: "/api/placeholder/300/400" },
          { id: "JK-CJ-002", name: "Bomber Jacket", image: "/api/placeholder/300/400" },
          { id: "JK-CJ-003", name: "Windbreaker", image: "/api/placeholder/300/400" },
          { id: "JK-CJ-004", name: "Track Jacket", image: "/api/placeholder/300/400" }
        ]
      },
      {
        name: "Outerwear",
        products: [
          { id: "JK-OW-001", name: "Parka", image: "/api/placeholder/300/400" },
          { id: "JK-OW-002", name: "Puffer Jacket", image: "/api/placeholder/300/400" },
          { id: "JK-OW-003", name: "Rain Jacket", image: "/api/placeholder/300/400" },
          { id: "JK-OW-004", name: "Trench Coat", image: "/api/placeholder/300/400" }
        ]
      }
    ]
  },
  'sportswear': {
    title: "Sports Wear",
    subtitle: "Performance sportswear designed for comfort and functionality",
    heroImage: "/api/placeholder/1200/400",
    subcategories: [
      {
        name: "Athletic Tops",
        products: [
          { id: "SP-AT-001", name: "Performance Tee", image: "/api/placeholder/300/400" },
          { id: "SP-AT-002", name: "Training Tank", image: "/api/placeholder/300/400" },
          { id: "SP-AT-003", name: "Long Sleeve Athletic Top", image: "/api/placeholder/300/400" },
          { id: "SP-AT-004", name: "Compression Shirt", image: "/api/placeholder/300/400" }
        ]
      },
      {
        name: "Athletic Bottoms",
        products: [
          { id: "SP-AB-001", name: "Training Shorts", image: "/api/placeholder/300/400" },
          { id: "SP-AB-002", name: "Athletic Leggings", image: "/api/placeholder/300/400" },
          { id: "SP-AB-003", name: "Joggers", image: "/api/placeholder/300/400" },
          { id: "SP-AB-004", name: "Track Pants", image: "/api/placeholder/300/400" }
        ]
      }
    ]
  }
};

const ProductCategory = () => {
  const { categoryId } = useParams();
  const category = productCategories[categoryId];

  if (!category) {
    return (
      <div className="container" style={{ padding: '5rem 0', textAlign: 'center' }}>
        <h2>Category not found</h2>
        <p>The product category you are looking for does not exist.</p>
        <Link to="/products" className="btn">Back to Products</Link>
      </div>
    );
  }

  return (
    <>
      <Hero 
        title={category.title}
        subtitle={category.subtitle}
        backgroundImage={category.heroImage}
      />

      <section className="product-subcategories">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/products">Products</Link> &gt; <span>{category.title}</span>
          </div>

          {category.subcategories.map((subcategory, index) => (
            <div className="subcategory-section" key={index}>
              <h2 className="subcategory-title">{subcategory.name}</h2>
              <div className="products-grid">
                {subcategory.products.map((product) => (
                  <div className="product-card" key={product.id}>
                    <div className="product-image">
                      <img src={product.image} alt={product.name} />
                    </div>
                    <div className="product-info">
                      <h3>{product.name}</h3>
                      <div className="product-meta">
                        <span className="product-id">ID: {product.id}</span>
                        <Link to="/contact" className="btn inquiry-btn">Inquire</Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="related-info">
        <div className="container">
          <h2 className="section-title">Production Information</h2>
          <div className="info-grid">
            <div className="info-card">
              <h3>Manufacturing Process</h3>
              <p>Our {category.title.toLowerCase()} are manufactured in state-of-the-art facilities with cutting-edge technology and skilled craftsmanship. Each piece goes through a meticulous production process to ensure quality and durability.</p>
            </div>
            <div className="info-card">
              <h3>Materials Used</h3>
              <p>We source premium materials for our {category.title.toLowerCase()} including high-quality fabrics, trims, and accessories. Our commitment to using superior materials ensures comfort, durability, and aesthetic appeal.</p>
            </div>
            <div className="info-card">
              <h3>Customization Options</h3>
              <p>Looking for custom designs? We offer various customization options for our {category.title.toLowerCase()} including fabric selection, color variations, sizing adjustments, and design modifications to suit your brand's specific requirements.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductCategory;