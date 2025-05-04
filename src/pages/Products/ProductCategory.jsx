import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import './Products.css';

const productCategories = {
  'womens-tops': {
    title: "Women's Tops",
    subtitle: "Explore our collection of stylish and comfortable women's tops",
    heroImage: "/images/products/hero/womens-tops-hero.jpg",
    subcategories: [
      {
        name: "Casual Tops",
        products: [
          { id: "WT-CT-001", name: "Basic Cotton Tee", image: "/images/products/womens-tops/wt-ct-001.jpg" },
          { id: "WT-CT-002", name: "V-Neck Blouse", image: "/images/products/womens-tops/wt-ct-002.jpg" },
          { id: "WT-CT-003", name: "Button-Up Shirt", image: "/images/products/womens-tops/wt-ct-003.jpg" },
          { id: "WT-CT-004", name: "Sleeveless Top", image: "/images/products/womens-tops/wt-ct-004.jpg" }
        ]
      },
      {
        name: "Formal Tops",
        products: [
          { id: "WT-FT-001", name: "Silk Blouse", image: "/images/products/womens-tops/wt-ft-001.jpg" },
          { id: "WT-FT-002", name: "Tailored Shirt", image: "/images/products/womens-tops/wt-ft-002.jpg" },
          { id: "WT-FT-003", name: "Peplum Top", image: "/images/products/womens-tops/wt-ft-003.jpg" },
          { id: "WT-FT-004", name: "Ruffle Detail Top", image: "/images/products/womens-tops/wt-ft-004.jpg" }
        ]
      }
    ]
  },
  'womens-dresses': {
    title: "Women's Dresses",
    subtitle: "Elegant dresses for every occasion",
    heroImage: "/images/products/hero/womens-dresses-hero.jpg",
    subcategories: [
      {
        name: "Casual Dresses",
        products: [
          { id: "WD-CD-001", name: "T-Shirt Dress", image: "/images/products/womens-dresses/wd-cd-001.jpg" },
          { id: "WD-CD-002", name: "Sundress", image: "/images/products/womens-dresses/wd-cd-002.jpg" },
          { id: "WD-CD-003", name: "Wrap Dress", image: "/images/products/womens-dresses/wd-cd-003.jpg" },
          { id: "WD-CD-004", name: "Shirt Dress", image: "/images/products/womens-dresses/wd-cd-004.jpg" }
        ]
      },
      {
        name: "Formal Dresses",
        products: [
          { id: "WD-FD-001", name: "Cocktail Dress", image: "/images/products/womens-dresses/wd-fd-001.jpg" },
          { id: "WD-FD-002", name: "Evening Gown", image: "/images/products/womens-dresses/wd-fd-002.jpg" },
          { id: "WD-FD-003", name: "A-Line Dress", image: "/images/products/womens-dresses/wd-fd-003.jpg" },
          { id: "WD-FD-004", name: "Sheath Dress", image: "/images/products/womens-dresses/wd-fd-004.jpg" }
        ]
      }
    ]
  },
  'tshirts': {
    title: "T-Shirts",
    subtitle: "Classic and graphic t-shirts for every style",
    heroImage: "/images/products/hero/tshirts-hero.jpg",
    subcategories: [
      {
        name: "Crew Neck",
        products: [
          { id: "TS-CN-001", name: "Basic Cotton Tee", image: "/images/products/tshirts/ts-cn-001.jpg" },
          { id: "TS-CN-002", name: "Graphic Print Tee", image: "/images/products/tshirts/ts-cn-002.jpg" },
          { id: "TS-CN-003", name: "Striped Tee", image: "/images/products/tshirts/ts-cn-003.jpg" },
          { id: "TS-CN-004", name: "Long Sleeve Tee", image: "/images/products/tshirts/ts-cn-004.jpg" }
        ]
      },
      {
        name: "V-Neck",
        products: [
          { id: "TS-VN-001", name: "Basic V-Neck", image: "/images/products/tshirts/ts-vn-001.jpg" },
          { id: "TS-VN-002", name: "Pocket V-Neck", image: "/images/products/tshirts/ts-vn-002.jpg" },
          { id: "TS-VN-003", name: "Distressed V-Neck", image: "/images/products/tshirts/ts-vn-003.jpg" },
          { id: "TS-VN-004", name: "Premium V-Neck", image: "/images/products/tshirts/ts-vn-004.jpg" }
        ]
      }
    ]
  },
  'polos': {
    title: "Polos",
    subtitle: "Premium polo shirts for a smart casual look",
    heroImage: "/images/products/hero/polos-hero.jpg",
    subcategories: [
      {
        name: "Classic Polos",
        products: [
          { id: "PO-CP-001", name: "Cotton Piqué Polo", image: "/images/products/polos/po-cp-001.jpg" },
          { id: "PO-CP-002", name: "Slim Fit Polo", image: "/images/products/polos/po-cp-002.jpg" },
          { id: "PO-CP-003", name: "Striped Polo", image: "/images/products/polos/po-cp-003.jpg" },
          { id: "PO-CP-004", name: "Logo Polo", image: "/images/products/polos/po-cp-004.jpg" }
        ]
      },
      {
        name: "Performance Polos",
        products: [
          { id: "PO-PP-001", name: "Moisture-Wicking Polo", image: "/images/products/polos/po-pp-001.jpg" },
          { id: "PO-PP-002", name: "Golf Polo", image: "/images/products/polos/po-pp-002.jpg" },
          { id: "PO-PP-003", name: "Stretch Fabric Polo", image: "/images/products/polos/po-pp-003.jpg" },
          { id: "PO-PP-004", name: "Long Sleeve Polo", image: "/images/products/polos/po-pp-004.jpg" }
        ]
      }
    ]
  },
  'sweatshirts': {
    title: "Sweat Shirts",
    subtitle: "Cozy sweatshirts for layering and comfort",
    heroImage: "/images/products/hero/sweatshirts-hero.jpg",
    subcategories: [
      {
        name: "Crew Neck Sweatshirts",
        products: [
          { id: "SS-CN-001", name: "Basic Crew Sweatshirt", image: "/images/products/sweatshirts/ss-cn-001.jpg" },
          { id: "SS-CN-002", name: "Graphic Sweatshirt", image: "/images/products/sweatshirts/ss-cn-002.jpg" },
          { id: "SS-CN-003", name: "Fleece Sweatshirt", image: "/images/products/sweatshirts/ss-cn-003.jpg" },
          { id: "SS-CN-004", name: "Vintage Wash Sweatshirt", image: "/images/products/sweatshirts/ss-cn-004.jpg" }
        ]
      },
      {
        name: "Quarter-Zip Sweatshirts",
        products: [
          { id: "SS-QZ-001", name: "Classic Quarter-Zip", image: "/images/products/sweatshirts/ss-qz-001.jpg" },
          { id: "SS-QZ-002", name: "Fleece Quarter-Zip", image: "/images/products/sweatshirts/ss-qz-002.jpg" },
          { id: "SS-QZ-003", name: "Performance Quarter-Zip", image: "/images/products/sweatshirts/ss-qz-003.jpg" },
          { id: "SS-QZ-004", name: "Pullover Quarter-Zip", image: "/images/products/sweatshirts/ss-qz-004.jpg" }
        ]
      }
    ]
  },
  'sweaters': {
    title: "Sweaters",
    subtitle: "Warm and stylish sweaters in various knits and patterns",
    heroImage: "/images/products/hero/sweaters-hero.jpg",
    subcategories: [
      {
        name: "Cardigans",
        products: [
          { id: "SW-CD-001", name: "Button-Up Cardigan", image: "/images/products/sweaters/sw-cd-001.jpg" },
          { id: "SW-CD-002", name: "Open Front Cardigan", image: "/images/products/sweaters/sw-cd-002.jpg" },
          { id: "SW-CD-003", name: "Chunky Knit Cardigan", image: "/images/products/sweaters/sw-cd-003.jpg" },
          { id: "SW-CD-004", name: "Longline Cardigan", image: "/images/products/sweaters/sw-cd-004.jpg" }
        ]
      },
      {
        name: "Pullovers",
        products: [
          { id: "SW-PO-001", name: "Crew Neck Pullover", image: "/images/products/sweaters/sw-po-001.jpg" },
          { id: "SW-PO-002", name: "V-Neck Pullover", image: "/images/products/sweaters/sw-po-002.jpg" },
          { id: "SW-PO-003", name: "Turtleneck Sweater", image: "/images/products/sweaters/sw-po-003.jpg" },
          { id: "SW-PO-004", name: "Cable Knit Sweater", image: "/images/products/sweaters/sw-po-004.jpg" }
        ]
      }
    ]
  },
  'hoodies': {
    title: "Hoodies",
    subtitle: "Comfortable hoodies for active lifestyles and casual wear",
    heroImage: "/images/products/hero/hoodies-hero.jpg",
    subcategories: [
      {
        name: "Pullover Hoodies",
        products: [
          { id: "HD-PO-001", name: "Basic Pullover Hoodie", image: "/images/products/hoodies/hd-po-001.jpg" },
          { id: "HD-PO-002", name: "Graphic Hoodie", image: "/images/products/hoodies/hd-po-002.jpg" },
          { id: "HD-PO-003", name: "Fleece-Lined Hoodie", image: "/images/products/hoodies/hd-po-003.jpg" },
          { id: "HD-PO-004", name: "Oversized Hoodie", image: "/images/products/hoodies/hd-po-004.jpg" }
        ]
      },
      {
        name: "Zip-Up Hoodies",
        products: [
          { id: "HD-ZU-001", name: "Full-Zip Hoodie", image: "/images/products/hoodies/hd-zu-001.jpg" },
          { id: "HD-ZU-002", name: "Lightweight Zip Hoodie", image: "/images/products/hoodies/hd-zu-002.jpg" },
          { id: "HD-ZU-003", name: "Tech Fleece Zip Hoodie", image: "/images/products/hoodies/hd-zu-003.jpg" },
          { id: "HD-ZU-004", name: "Sherpa-Lined Zip Hoodie", image: "/images/products/hoodies/hd-zu-004.jpg" }
        ]
      }
    ]
  },
  'jeans': {
    title: "Jeans",
    subtitle: "Quality denim jeans in various cuts, washes, and styles",
    heroImage: "/images/products/hero/jeans-hero.jpg",
    subcategories: [
      {
        name: "Men's Jeans",
        products: [
          { id: "JN-MJ-001", name: "Straight Fit Jeans", image: "/images/products/jeans/jn-mj-001.jpg" },
          { id: "JN-MJ-002", name: "Slim Fit Jeans", image: "/images/products/jeans/jn-mj-002.jpg" },
          { id: "JN-MJ-003", name: "Relaxed Fit Jeans", image: "/images/products/jeans/jn-mj-003.jpg" },
          { id: "JN-MJ-004", name: "Distressed Jeans", image: "/images/products/jeans/jn-mj-004.jpg" }
        ]
      },
      {
        name: "Women's Jeans",
        products: [
          { id: "JN-WJ-001", name: "Skinny Jeans", image: "/images/products/jeans/jn-wj-001.jpg" },
          { id: "JN-WJ-002", name: "High-Waisted Jeans", image: "/images/products/jeans/jn-wj-002.jpg" },
          { id: "JN-WJ-003", name: "Boyfriend Jeans", image: "/images/products/jeans/jn-wj-003.jpg" },
          { id: "JN-WJ-004", name: "Straight Leg Jeans", image: "/images/products/jeans/jn-wj-004.jpg" }
        ]
      }
    ]
  },
  'jackets': {
    title: "Jackets",
    subtitle: "Trendy and functional jackets for all seasons",
    heroImage: "/images/products/hero/jackets-hero.jpg",
    subcategories: [
      {
        name: "Casual Jackets",
        products: [
          { id: "JK-CJ-001", name: "Denim Jacket", image: "/images/products/jackets/jk-cj-001.jpg" },
          { id: "JK-CJ-002", name: "Bomber Jacket", image: "/images/products/jackets/jk-cj-002.jpg" },
          { id: "JK-CJ-003", name: "Windbreaker", image: "/images/products/jackets/jk-cj-003.jpg" },
          { id: "JK-CJ-004", name: "Track Jacket", image: "/images/products/jackets/jk-cj-004.jpg" }
        ]
      },
      {
        name: "Outerwear",
        products: [
          { id: "JK-OW-001", name: "Parka", image: "/images/products/jackets/jk-ow-001.jpg" },
          { id: "JK-OW-002", name: "Puffer Jacket", image: "/images/products/jackets/jk-ow-002.jpg" },
          { id: "JK-OW-003", name: "Rain Jacket", image: "/images/products/jackets/jk-ow-003.jpg" },
          { id: "JK-OW-004", name: "Trench Coat", image: "/images/products/jackets/jk-ow-004.jpg" }
        ]
      }
    ]
  },
  'sportswear': {
    title: "Sports Wear",
    subtitle: "Performance sportswear designed for comfort and functionality",
    heroImage: "/images/products/hero/sportswear-hero.jpg",
    subcategories: [
      {
        name: "Athletic Tops",
        products: [
          { id: "SP-AT-001", name: "Performance Tee", image: "/images/products/sportswear/sp-at-001.jpg" },
          { id: "SP-AT-002", name: "Training Tank", image: "/images/products/sportswear/sp-at-002.jpg" },
          { id: "SP-AT-003", name: "Long Sleeve Athletic Top", image: "/images/products/sportswear/sp-at-003.jpg" },
          { id: "SP-AT-004", name: "Compression Shirt", image: "/images/products/sportswear/sp-at-004.jpg" }
        ]
      },
      {
        name: "Athletic Bottoms",
        products: [
          { id: "SP-AB-001", name: "Training Shorts", image: "/images/products/sportswear/sp-ab-001.jpg" },
          { id: "SP-AB-002", name: "Athletic Leggings", image: "/images/products/sportswear/sp-ab-002.jpg" },
          { id: "SP-AB-003", name: "Joggers", image: "/images/products/sportswear/sp-ab-003.jpg" },
          { id: "SP-AB-004", name: "Track Pants", image: "/images/products/sportswear/sp-ab-004.jpg" }
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