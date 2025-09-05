import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProductById } from '../../data/productsData';
import Hero from '../../components/Hero/Hero';
import './RequestQuote.css';

const RequestQuote = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get quote data from navigation state
  const quoteData = location.state?.quoteData;
  
  // Form state
  const [formData, setFormData] = useState({
    // Company Information
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    country: '',
    address: '',
    
    // Order Details
    customizations: '',
    packagingRequirements: '',
    shippingMethod: 'Sea Freight',
    paymentTerms: 'T/T (Telegraphic Transfer)',
    advancePayment: '30%',
    
    // Additional Requirements
    qualityCertificates: [],
    labeling: '',
    specialInstructions: '',
    
    // Timeline
    requiredDeliveryDate: '',
    urgentOrder: false,
    
    // Comments
    additionalComments: ''
  });

  // Image upload state
  const [uploadedImages, setUploadedImages] = useState([]);
  const [imageError, setImageError] = useState('');

  // Get product details if quote data exists
  const product = quoteData ? getProductById(quoteData.productId) : null;

  useEffect(() => {
    // If no quote data, redirect to home
    if (!quoteData) {
      navigate('/');
    }
  }, [quoteData, navigate]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Map FormSubmit field names back to state field names
    const fieldMapping = {
      'Company Name': 'companyName',
      'Contact Person': 'contactPerson',
      'Email': 'email',
      'Phone': 'phone',
      'Country': 'country',
      'Address': 'address',
      'Customizations': 'customizations',
      'Packaging Requirements': 'packagingRequirements',
      'Labeling Requirements': 'labeling',
      'Shipping Method': 'shippingMethod',
      'Payment Terms': 'paymentTerms',
      'Advance Payment': 'advancePayment',
      'Required Delivery Date': 'requiredDeliveryDate',
      'Urgent Order': 'urgentOrder',
      'Special Instructions': 'specialInstructions',
      'Additional Comments': 'additionalComments'
    };
    
    const stateFieldName = fieldMapping[name] || name;
    
    setFormData(prev => ({
      ...prev,
      [stateFieldName]: type === 'checkbox' ? checked : value
    }));
  };

  const handleCheckboxArrayChange = (value, arrayName) => {
    setFormData(prev => ({
      ...prev,
      [arrayName]: prev[arrayName].includes(value)
        ? prev[arrayName].filter(item => item !== value)
        : [...prev[arrayName], value]
    }));
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImageError('');
    
    // Validate files
    const maxSize = 5 * 1024 * 1024; // 5MB per file
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
    const maxFiles = 5;
    
    if (uploadedImages.length + files.length > maxFiles) {
      setImageError(`Maximum ${maxFiles} images allowed`);
      return;
    }
    
    for (let file of files) {
      if (!allowedTypes.includes(file.type)) {
        setImageError('Only JPG, PNG, and GIF files are allowed');
        return;
      }
      if (file.size > maxSize) {
        setImageError('Each image must be less than 5MB');
        return;
      }
    }
    
    // Create preview URLs and add to state
    const newImages = files.map(file => ({
      file,
      preview: URL.createObjectURL(file),
      name: file.name
    }));
    
    setUploadedImages(prev => [...prev, ...newImages]);
  };

  // Remove image
  const removeImage = (index) => {
    setUploadedImages(prev => {
      const newImages = [...prev];
      URL.revokeObjectURL(newImages[index].preview); // Clean up memory
      newImages.splice(index, 1);
      return newImages;
    });
  };

  // Clean up object URLs on unmount
  useEffect(() => {
    return () => {
      uploadedImages.forEach(img => URL.revokeObjectURL(img.preview));
    };
  }, []);

  const handleSubmit = (e) => {
    // Don't prevent default - let the form submit naturally
    // FormSubmit will handle the redirect automatically
  };

  if (!quoteData || !product) {
    return (
      <div className="container" style={{ padding: '5rem 0', textAlign: 'center' }}>
        <h2>No Quote Data Found</h2>
        <p>Please select a product and configure your options first.</p>
        <Link to="/" className="btn">Back to Home</Link>
      </div>
    );
  }

  const qualityCertificateOptions = [
    'OEKO-TEX Standard 100',
    'GOTS (Global Organic Textile Standard)',
    'BCI (Better Cotton Initiative)',
    'Cradle to Cradle Certified',
    'WRAP (Worldwide Responsible Accredited Production)',
    'ISO 9001 Quality Management',
    'ISO 14001 Environmental Management'
  ];

  return (
    <>
      <Hero 
        title="Request Quote"
        subtitle="Get Your Custom Pricing for Bulk Orders"
        backgroundImage="/images/products/hero/quote-bg.jpg"
      />

      <section className="request-quote">
        <div className="container">
          <div className="quote-layout">
            {/* Order Summary Sidebar */}
            <div className="order-summary">
              <h3>Order Summary</h3>
              
              <div className="product-summary">
                <div className="product-image">
                  <img 
                    src={product.images?.[0] || product.image} 
                    alt={product.name}
                    onError={(e) => {
                      e.target.src = '/images/products/placeholder.jpg';
                    }}
                  />
                </div>
                
                <div className="product-details">
                  <h4>{product.name}</h4>
                  <p className="product-id">ID: {product.id}</p>
                  
                  <div className="selected-options">
                    {quoteData.selectedColor && (
                      <div className="option">
                        <span>Color:</span> {quoteData.selectedColor}
                      </div>
                    )}
                    {quoteData.selectedSize && (
                      <div className="option">
                        <span>Size:</span> {quoteData.selectedSize}
                      </div>
                    )}
                    {quoteData.selectedMaterial && (
                      <div className="option">
                        <span>Material:</span> {quoteData.selectedMaterial}
                      </div>
                    )}
                    <div className="option">
                      <span>Quantity:</span> {quoteData.quantity} pieces
                    </div>
                    <div className="option">
                      <span>Unit Price:</span> ${quoteData.unitPrice}
                    </div>
                    <div className="option total">
                      <span>Estimated Total:</span> ${quoteData.totalPrice}
                    </div>
                    <div className="option">
                      <span>Lead Time:</span> {quoteData.leadTime}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Form */}
            <div className="quote-form-container">
              <form 
                onSubmit={handleSubmit} 
                className="quote-form"
                action="https://formsubmit.co/info@foliagefashion.com"
                method="POST"
                encType="multipart/form-data"
              >
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value={`${window.location.origin}/thank-you`} />
                <input type="text" name="_honey" style={{ display: 'none' }} />
                
                {/* Hidden fields for product information */}
                <input type="hidden" name="Form Type" value="Quote Request" />
                <input type="hidden" name="Quote ID" value={`QT-${Date.now()}`} />
                <input type="hidden" name="Product Name" value={product.name} />
                <input type="hidden" name="Product ID" value={quoteData.productId} />
                <input type="hidden" name="Selected Color" value={quoteData.selectedColor || 'Not specified'} />
                <input type="hidden" name="Selected Size" value={quoteData.selectedSize || 'Not specified'} />
                <input type="hidden" name="Selected Material" value={quoteData.selectedMaterial || 'Not specified'} />
                <input type="hidden" name="Quantity" value={`${quoteData.quantity} pieces`} />
                <input type="hidden" name="Unit Price" value={`${quoteData.unitPrice}`} />
                <input type="hidden" name="Total Price" value={`${quoteData.totalPrice}`} />
                <input type="hidden" name="Lead Time" value={quoteData.leadTime} />
                <input type="hidden" name="Quality Certificates" value={formData.qualityCertificates.join(', ') || 'None requested'} />
                
                {/* Company Information */}
                <div className="form-section">
                  <h3>Company Information</h3>
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="companyName">Company Name *</label>
                      <input
                        type="text"
                        id="companyName"
                        name="Company Name"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="contactPerson">Contact Person *</label>
                      <input
                        type="text"
                        id="contactPerson"
                        name="Contact Person"
                        value={formData.contactPerson}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="Phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="country">Country *</label>
                      <input
                        type="text"
                        id="country"
                        name="Country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="form-group full-width">
                      <label htmlFor="address">Complete Address</label>
                      <textarea
                        id="address"
                        name="Address"
                        value={formData.address}
                        onChange={handleInputChange}
                        rows="3"
                      />
                    </div>
                  </div>
                </div>

                {/* Design Requirements with Image Upload */}
                <div className="form-section">
                  <h3>Design Requirements</h3>
                  
                  <div className="form-group">
                    <label htmlFor="customizations">Customizations Required</label>
                    <textarea
                      id="customizations"
                      name="Customizations"
                      value={formData.customizations}
                      onChange={handleInputChange}
                      placeholder="Describe any custom designs, prints, embroidery, or modifications needed..."
                      rows="4"
                    />
                  </div>

                  {/* Image Upload Section */}
                  <div className="form-group">
                    <label htmlFor="designImages">Upload Design References</label>
                    <p className="upload-help">
                      Upload image (JPG, PNG, GIF) to help us understand your design requirements. 
                      Single image, Maximum 5MB. You can submit additional images after submitting the 
                      quote request.
                    </p>
                    
                    <div className="image-upload-container">
                      <input
                        type="file"
                        id="designImages"
                        name="attachment"
                        accept="image/*"
                        multiple
                        onChange={handleImageUpload}
                        className="image-upload-input"
                      />
                      <label htmlFor="designImages" className="image-upload-label">
                        <span className="upload-icon">📁</span>
                        Choose Images
                      </label>
                    </div>

                    {imageError && (
                      <div className="error-message">{imageError}</div>
                    )}

                    {/* Image Previews */}
                    {uploadedImages.length > 0 && (
                      <div className="image-previews">
                        {uploadedImages.map((image, index) => (
                          <div key={index} className="image-preview">
                            <img src={image.preview} alt={`Design reference ${index + 1}`} />
                            <div className="image-info">
                              <span className="image-name">{image.name}</span>
                              <button
                                type="button"
                                onClick={() => removeImage(index)}
                                className="remove-image"
                                title="Remove image"
                              >
                                ×
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Order Specifications */}
                <div className="form-section">
                  <h3>Order Specifications</h3>
                  
                  <div className="form-group">
                    <label htmlFor="packagingRequirements">Packaging Requirements</label>
                    <textarea
                      id="packagingRequirements"
                      name="Packaging Requirements"
                      value={formData.packagingRequirements}
                      onChange={handleInputChange}
                      placeholder="Individual packaging, hang tags, care labels, boxes, etc..."
                      rows="3"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="labeling">Labeling Requirements</label>
                    <textarea
                      id="labeling"
                      name="Labeling Requirements"
                      value={formData.labeling}
                      onChange={handleInputChange}
                      placeholder="Brand labels, size labels, care instructions, country of origin..."
                      rows="3"
                    />
                  </div>
                </div>

                {/* Quality Certificates */}
                <div className="form-section">
                  <h3>Quality Certificates Required</h3>
                  <div className="checkbox-grid">
                    {qualityCertificateOptions.map((cert) => (
                      <label key={cert} className="checkbox-label">
                        <input
                          type="checkbox"
                          name="Quality Certificates"
                          value={cert}
                          checked={formData.qualityCertificates.includes(cert)}
                          onChange={() => handleCheckboxArrayChange(cert, 'qualityCertificates')}
                        />
                        <span>{cert}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Shipping & Payment */}
                <div className="form-section">
                  <h3>Shipping & Payment Terms</h3>
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="shippingMethod">Preferred Shipping Method</label>
                      <select
                        id="shippingMethod"
                        name="Shipping Method"
                        value={formData.shippingMethod}
                        onChange={handleInputChange}
                      >
                        <option value="Sea Freight">Sea Freight (Economical)</option>
                        <option value="Air Freight">Air Freight (Faster)</option>
                        <option value="Express Courier">Express Courier (Fastest)</option>
                        <option value="Land Transport">Land Transport</option>
                      </select>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="paymentTerms">Payment Terms</label>
                      <select
                        id="paymentTerms"
                        name="Payment Terms"
                        value={formData.paymentTerms}
                        onChange={handleInputChange}
                      >
                        <option value="T/T (Telegraphic Transfer)">T/T (Telegraphic Transfer)</option>
                        <option value="L/C (Letter of Credit)">L/C (Letter of Credit)</option>
                        <option value="D/P (Documents against Payment)">D/P (Documents against Payment)</option>
                        <option value="D/A (Documents against Acceptance)">D/A (Documents against Acceptance)</option>
                        <option value="Western Union">Western Union</option>
                        <option value="PayPal">PayPal</option>
                      </select>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="advancePayment">Advance Payment</label>
                      <select
                        id="advancePayment"
                        name="Advance Payment"
                        value={formData.advancePayment}
                        onChange={handleInputChange}
                      >
                        <option value="0%">0% Advance</option>
                        <option value="30%">30% Advance</option>
                        <option value="50%">50% Advance</option>
                        <option value="100%">100% Advance</option>
                        <option value="Custom">Custom Terms</option>
                      </select>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="requiredDeliveryDate">Required Delivery Date</label>
                      <input
                        type="date"
                        id="requiredDeliveryDate"
                        name="Required Delivery Date"
                        value={formData.requiredDeliveryDate}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="Urgent Order"
                        checked={formData.urgentOrder}
                        onChange={handleInputChange}
                        value={formData.urgentOrder ? "Yes" : "No"}
                      />
                      <span>This is an urgent order (may incur additional charges)</span>
                    </label>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="form-section">
                  <h3>Additional Information</h3>
                  
                  <div className="form-group">
                    <label htmlFor="specialInstructions">Special Instructions</label>
                    <textarea
                      id="specialInstructions"
                      name="Special Instructions"
                      value={formData.specialInstructions}
                      onChange={handleInputChange}
                      placeholder="Any special handling, delivery instructions, or requirements..."
                      rows="3"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="additionalComments">Additional Comments</label>
                    <textarea
                      id="additionalComments"
                      name="Additional Comments"
                      value={formData.additionalComments}
                      onChange={handleInputChange}
                      placeholder="Any other information you'd like to share..."
                      rows="4"
                    />
                  </div>
                </div>

                {/* Submit Buttons */}
                <div className="form-actions">
                  <button type="submit" className="btn btn-primary">
                    Submit Quote Request
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-outline"
                    onClick={() => navigate(-1)}
                  >
                    Back to Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RequestQuote;