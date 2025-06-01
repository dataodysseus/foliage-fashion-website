import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getProductById, getProductsBySubcategory } from '../../data/productsData';
import Hero from '../../components/Hero/Hero';
import './ProductDetail.css';

const ProductDetail = () => {
  const { categoryId, subcategoryId, productId } = useParams();
  const navigate = useNavigate();
  
  // Get the product by ID
  const product = getProductById(productId);
  
  // State for selected options
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState(0);
  const [quantity, setQuantity] = useState(product?.minOrderQuantity || 50);

  if (!product) {
    return (
      <div className="container" style={{ padding: '5rem 0', textAlign: 'center' }}>
        <h2>Product not found</h2>
        <p>The product you are looking for does not exist.</p>
        <Link to="/" className="btn">Back to Home</Link>
      </div>
    );
  }

  // Initialize selected options with first available options
  if (!selectedColor && product.colors?.length > 0) {
    setSelectedColor(product.colors[0]);
  }
  if (!selectedSize && product.sizes?.length > 0) {
    setSelectedSize(product.sizes[0]);
  }

  // Get pricing based on quantity
  const getPricing = () => {
    const ranges = Object.keys(product.pricing);
    for (const range of ranges) {
      if (range.includes('+')) {
        const minQty = parseInt(range.replace('+', ''));
        if (quantity >= minQty) return product.pricing[range];
      } else {
        const [min, max] = range.split('-').map(Number);
        if (quantity >= min && quantity <= max) return product.pricing[range];
      }
    }
    return product.pricing[ranges[0]];
  };

  // Get lead time based on quantity
  const getLeadTime = () => {
    const ranges = Object.keys(product.leadTimes);
    for (const range of ranges) {
      if (range.includes('+')) {
        const minQty = parseInt(range.replace('+', ''));
        if (quantity >= minQty) return product.leadTimes[range];
      } else {
        const [min, max] = range.split('-').map(Number);
        if (quantity >= min && quantity <= max) return product.leadTimes[range];
      }
    }
    return product.leadTimes[ranges[0]];
  };

  const currentPrice = getPricing();
  const currentLeadTime = getLeadTime();
  const totalPrice = (currentPrice * quantity).toFixed(2);

  return (
    <>
      <Hero 
        title={product.name}
        subtitle="Premium Quality Apparel for Wholesale"
        backgroundImage={product.images?.[0] || product.image}
      />

      <section className="product-detail">
        <div className="container">
          {/* Breadcrumb */}
          <div className="breadcrumb">
            <Link to="/">Home</Link> &gt; 
            {categoryId && (
              <>
                <Link to={`/categories/${categoryId}`}>Category</Link> &gt; 
              </>
            )}
            {subcategoryId && (
              <>
                <Link to={`/categories/${categoryId}/${subcategoryId}`}>Products</Link> &gt; 
              </>
            )}
            <span>{product.name}</span>
          </div>

          <div className="product-detail-content">
            {/* Product Images */}
            <div className="product-images">
              <div className="main-image">
                <img 
                  src={product.images?.[selectedImage] || product.image} 
                  alt={product.name}
                  onError={(e) => {
                    e.target.src = '/images/products/placeholder.jpg';
                  }}
                />
              </div>
              {product.images && product.images.length > 1 && (
                <div className="image-thumbnails">
                  {product.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className={selectedImage === index ? 'active' : ''}
                      onClick={() => setSelectedImage(index)}
                      onError={(e) => {
                        e.target.src = '/images/products/placeholder.jpg';
                      }}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="product-info">
              <h1 className="product-title">{product.name}</h1>
              <p className="product-id">Product ID: {product.id}</p>
              
              <div className="product-description">
                <p>{product.description}</p>
              </div>

              {/* Features */}
              {product.features && (
                <div className="product-features">
                  <h3>Features</h3>
                  <ul>
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Material Selection */}
              {product.materials && (
                <div className="product-option">
                  <h4>Material Options</h4>
                  <div className="material-options">
                    {product.materials.map((material, index) => (
                      <label key={index} className="material-option">
                        <input
                          type="radio"
                          name="material"
                          checked={selectedMaterial === index}
                          onChange={() => setSelectedMaterial(index)}
                        />
                        <span>{material.name}</span>
                        {material.price !== 0 && (
                          <span className="price-diff">
                            {material.price > 0 ? '+' : ''}${material.price}
                          </span>
                        )}
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Color Selection */}
              {product.colors && (
                <div className="product-option">
                  <h4>Available Colors</h4>
                  <div className="color-options">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        className={`color-option ${selectedColor === color ? 'active' : ''}`}
                        onClick={() => setSelectedColor(color)}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selection */}
              {product.sizes && (
                <div className="product-option">
                  <h4>Available Sizes</h4>
                  <div className="size-options">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        className={`size-option ${selectedSize === size ? 'active' : ''}`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity and Pricing */}
              <div className="pricing-section">
                <div className="quantity-selector">
                  <label htmlFor="quantity">Quantity (Min: {product.minOrderQuantity})</label>
                  <input
                    type="number"
                    id="quantity"
                    min={product.minOrderQuantity}
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(product.minOrderQuantity, parseInt(e.target.value) || product.minOrderQuantity))}
                  />
                </div>

                <div className="pricing-info">
                  <div className="unit-price">
                    <span>Unit Price: </span>
                    <strong>${currentPrice}</strong>
                    {product.materials && product.materials[selectedMaterial].price !== 0 && (
                      <span className="material-adjustment">
                        {product.materials[selectedMaterial].price > 0 ? ' + ' : ' - '}
                        ${Math.abs(product.materials[selectedMaterial].price)}
                      </span>
                    )}
                  </div>
                  <div className="total-price">
                    <span>Total Price: </span>
                    <strong>${totalPrice}</strong>
                  </div>
                  <div className="lead-time">
                    <span>Lead Time: </span>
                    <strong>{currentLeadTime}</strong>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="product-actions">
                <Link to="/contact" className="btn btn-primary">
                  Request Quote
                </Link>
                <button 
                  className="btn btn-outline"
                  onClick={() => navigate(-1)}
                >
                  Back to Products
                </button>
              </div>
            </div>
          </div>

          {/* Pricing Table */}
          <div className="pricing-table-section">
            <h3>Bulk Pricing</h3>
            <div className="pricing-table">
              <div className="pricing-header">
                <span>Quantity Range</span>
                <span>Unit Price</span>
                <span>Lead Time</span>
              </div>
              {Object.entries(product.pricing).map(([range, price]) => (
                <div key={range} className="pricing-row">
                  <span>{range} pieces</span>
                  <span>${price}</span>
                  <span>{product.leadTimes[range]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;