import React, { useState, useEffect } from "react";
import './ThankYou.css';

const ThankYou = () => {
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadedCount, setUploadedCount] = useState(0);
  const [totalFiles, setTotalFiles] = useState(0);
  const [uploadedImageUrls, setUploadedImageUrls] = useState([]);
  const [submissionId] = useState(() => `SUB-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`);
  const [totalUploadedImages, setTotalUploadedImages] = useState(0);
  const [uploadLimitReached, setUploadLimitReached] = useState(false);

  // Cloudinary configuration
  const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

  // File validation settings
  const MAX_FILES_PER_BATCH = 5;
  const MAX_TOTAL_FILES_PER_QUOTE = 5; // Total limit per quote request
  const MAX_SIZE = 10 * 1024 * 1024; // 10MB
  const ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];

  // Load existing upload count from localStorage
  useEffect(() => {
    const savedCount = localStorage.getItem(`upload_count_${submissionId}`);
    if (savedCount) {
      const count = parseInt(savedCount, 10);
      setTotalUploadedImages(count);
      if (count >= MAX_TOTAL_FILES_PER_QUOTE) {
        setUploadLimitReached(true);
      }
    }
  }, [submissionId]);

  const validateFiles = (files) => {
    const errors = [];
    
    // Check if upload limit is already reached
    if (uploadLimitReached || totalUploadedImages >= MAX_TOTAL_FILES_PER_QUOTE) {
      errors.push(`Upload limit reached. Maximum ${MAX_TOTAL_FILES_PER_QUOTE} images allowed per quote request`);
      return errors;
    }
    
    // Check if current selection would exceed total limit
    const remainingSlots = MAX_TOTAL_FILES_PER_QUOTE - totalUploadedImages;
    if (files.length > remainingSlots) {
      errors.push(`You can only upload ${remainingSlots} more image(s). Total limit: ${MAX_TOTAL_FILES_PER_QUOTE} images per quote request`);
      return errors;
    }
    
    if (files.length > MAX_FILES_PER_BATCH) {
      errors.push(`Maximum ${MAX_FILES_PER_BATCH} images allowed per upload batch`);
    }

    files.forEach((file, index) => {
      if (!ALLOWED_TYPES.includes(file.type.toLowerCase())) {
        errors.push(`File ${index + 1}: Only JPG, PNG, GIF, and WebP files are allowed`);
      }
      if (file.size > MAX_SIZE) {
        errors.push(`File ${index + 1}: File size must be less than 10MB`);
      }
    });

    return errors;
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    setUploadError('');
    
    if (files.length === 0) return;

    const errors = validateFiles(files);
    if (errors.length > 0) {
      setUploadError(errors.join('. '));
      return;
    }

    // Create file objects with preview URLs
    const fileObjects = files.map((file, index) => ({
      id: `${Date.now()}-${index}`,
      file,
      preview: URL.createObjectURL(file),
      name: file.name,
      size: file.size
    }));

    setSelectedFiles(fileObjects);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove('dragover');
    const files = Array.from(e.dataTransfer.files).filter(file => 
      file.type.startsWith('image/')
    );
    
    if (files.length > 0) {
      const event = { target: { files } };
      handleFileSelect(event);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.currentTarget.classList.add('dragover');
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove('dragover');
  };

  const removeFile = (fileId) => {
    setSelectedFiles(prev => {
      const updated = prev.filter(file => file.id !== fileId);
      // Revoke object URL to prevent memory leaks
      const fileToRemove = prev.find(file => file.id === fileId);
      if (fileToRemove) {
        URL.revokeObjectURL(fileToRemove.preview);
      }
      return updated;
    });
    setUploadError('');
  };

  const cancelUpload = () => {
    // Clean up object URLs
    selectedFiles.forEach(file => URL.revokeObjectURL(file.preview));
    setSelectedFiles([]);
    setUploadError('');
    setUploadSuccess(false);
    setUploadedCount(0);
    setTotalFiles(0);
    setUploadedImageUrls([]);
  };

  const submitImages = async () => {
    if (selectedFiles.length === 0) {
      setUploadError('Please select at least one image to upload');
      return;
    }

    setUploading(true);
    setUploadError('');
    setUploadSuccess(false);
    setTotalFiles(selectedFiles.length);
    setUploadedCount(0);

    const uploadedUrls = [];
    const uploadPromises = [];

    // Upload each file to Cloudinary
    selectedFiles.forEach((fileObj, index) => {
      const formData = new FormData();
      const uniquePublicId = `quote_requests/${submissionId}/image_${index + 1}_${Date.now()}`;
      
      formData.append('file', fileObj.file);
      formData.append('upload_preset', UPLOAD_PRESET);
      formData.append('public_id', uniquePublicId);
      formData.append('folder', 'quote_requests'); // Main folder
      formData.append('tags', `quote,${submissionId},additional_images`); // Add tags for better organization

      const uploadPromise = fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
        method: 'POST',
        body: formData,
      })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          throw new Error(data.error.message);
        }
        setUploadedCount(prev => prev + 1);
        uploadedUrls.push({
          url: data.secure_url,
          publicId: data.public_id,
          originalName: fileObj.name,
        });
        return data;
      })
      .catch(error => {
        console.error('Upload error:', error);
        throw error;
      });

      uploadPromises.push(uploadPromise);
    });

    try {
      await Promise.all(uploadPromises);
      
      // Update total uploaded count
      const newTotalCount = totalUploadedImages + uploadedUrls.length;
      setTotalUploadedImages(newTotalCount);
      localStorage.setItem(`upload_count_${submissionId}`, newTotalCount.toString());
      
      // Check if limit is now reached
      if (newTotalCount >= MAX_TOTAL_FILES_PER_QUOTE) {
        setUploadLimitReached(true);
      }
      
      setUploadedImageUrls(uploadedUrls);
      setUploadSuccess(true);
      
      // Log the upload details (you can send this to your backend or email service)
      console.log('Images uploaded successfully:', {
        submissionId,
        uploadedUrls,
        timestamp: new Date().toISOString(),
        folder: 'quote_requests',
        tags: ['quote', submissionId, 'additional_images'],
        totalImagesForThisQuote: newTotalCount,
        limitReached: newTotalCount >= MAX_TOTAL_FILES_PER_QUOTE,
        organization: `All images are tagged and stored in quote_requests folder with submission ID: ${submissionId}`
      });
      
      // Clean up object URLs after successful upload
      selectedFiles.forEach(file => URL.revokeObjectURL(file.preview));
      
    } catch (error) {
      setUploadError(`Upload failed: ${error.message}`);
    } finally {
      setUploading(false);
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  // Cleanup effect
  useEffect(() => {
    return () => {
      selectedFiles.forEach(file => URL.revokeObjectURL(file.preview));
    };
  }, []);

  return (
    <div className="thank-you-container">
      <div className="thank-you-content">
        
        {/* Main Thank You Section */}
        <div className="thank-you-header">
          <div className="success-icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="thank-you-title">Thank You!</h1>
          <p className="thank-you-subtitle">
            Your quote request has been sent successfully.
          </p>
          <p className="thank-you-description">
            We'll get back to you soon with a detailed quotation.
          </p>
        </div>

        {/* Additional Images Upload Section */}
        <div className="upload-section">
          <div className="upload-header">
            <h2 className="upload-title">
              Upload Additional Design References
            </h2>
            <p className="upload-description">
              Help us better understand your requirements by uploading additional images
            </p>
          </div>

          {!showUploadForm && !uploadSuccess ? (
            <div style={{ textAlign: 'center' }}>
              {uploadLimitReached ? (
                <div style={{ padding: '2rem' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚫</div>
                  <h3 style={{ color: '#dc2626', marginBottom: '0.5rem' }}>Upload Limit Reached</h3>
                  <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>
                    You have already uploaded the maximum of {MAX_TOTAL_FILES_PER_QUOTE} images for this quote request.
                  </p>
                  <p style={{ color: '#059669', fontSize: '0.9rem' }}>
                    Total uploaded: {totalUploadedImages} of {MAX_TOTAL_FILES_PER_QUOTE} images
                  </p>
                </div>
              ) : (
                <button
                  onClick={() => setShowUploadForm(true)}
                  className="upload-trigger-btn"
                >
                  📸 Upload Additional Images
                  {totalUploadedImages > 0 && (
                    <span style={{ display: 'block', fontSize: '0.9rem', marginTop: '0.25rem' }}>
                      ({totalUploadedImages}/{MAX_TOTAL_FILES_PER_QUOTE} uploaded)
                    </span>
                  )}
                </button>
              )}
            </div>
          ) : uploadSuccess ? (
            /* Success State */
            <div className="success-state">
              <div className="success-state-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="success-title">Images Uploaded Successfully!</h3>
              <p className="success-message">
                <span className="success-count">{uploadedImageUrls.length}</span> of <span className="success-count">{uploadedImageUrls.length}</span> images uploaded successfully
              </p>
              <div className="submission-info">
                <p className="submission-id">
                  <strong>Submission ID:</strong> {submissionId}
                </p>
                <p className="submission-folder">
                  Your images have been organized in folder: quote_requests/{submissionId}
                </p>
              </div>
              
              <div className="action-buttons">
                <div className="action-buttons-row">
                  <button
                    onClick={() => {
                      setShowUploadForm(true);
                      setUploadSuccess(false);
                      setSelectedFiles([]);
                      setUploadedImageUrls([]);
                    }}
                    disabled={uploadLimitReached}
                    className="btn btn-outline"
                  >
                    {uploadLimitReached ? 'Upload Limit Reached' : 'Upload More Images'}
                  </button>
                  <a href="/" className="btn btn-primary btn-large">
                    🏠 Back to Home
                  </a>
                </div>
              </div>
            </div>
          ) : (
            /* Upload Form */
            <div>
              
              {/* File Upload Area */}
              <div
                className="file-upload-area"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onClick={() => document.getElementById('imageUpload').click()}
              >
                <div className="upload-icon">📁</div>
                <p className="upload-text">
                  Drop images here or click to select
                </p>
                <p className="upload-subtext">
                  Upload up to {MAX_FILES_PER_BATCH} images per batch • Total limit: {MAX_TOTAL_FILES_PER_QUOTE} images per quote • JPG, PNG, GIF, WebP • Max 10MB each
                  {totalUploadedImages > 0 && (
                    <span style={{ display: 'block', marginTop: '0.5rem', color: '#059669', fontWeight: '600' }}>
                      {totalUploadedImages} of {MAX_TOTAL_FILES_PER_QUOTE} images uploaded so far
                    </span>
                  )}
                </p>
                <input
                  type="file"
                  id="imageUpload"
                  multiple
                  accept=".jpg,.jpeg,.png,.gif,.webp"
                  onChange={handleFileSelect}
                  className="file-input"
                />
              </div>

              {/* Error Message */}
              {uploadError && (
                <div className="error-message">
                  <div className="error-content">
                    <div className="error-icon">
                      <svg viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="error-text">{uploadError}</p>
                  </div>
                </div>
              )}

              {/* Selected Files Preview */}
              {selectedFiles.length > 0 && (
                <div className="file-preview-section">
                  <h4 className="file-preview-header">
                    Selected Images ({selectedFiles.length}/{MAX_FILES_PER_BATCH}) • Total Progress: {totalUploadedImages + selectedFiles.length}/{MAX_TOTAL_FILES_PER_QUOTE}
                  </h4>
                  <div className="file-preview-grid">
                    {selectedFiles.map((file) => (
                      <div key={file.id} className="file-preview-item">
                        <div className="file-image-container">
                          <img
                            src={file.preview}
                            alt={file.name}
                            className="file-preview-image"
                          />
                        </div>
                        <div className="file-info">
                          <p className="file-name" title={file.name}>
                            {file.name}
                          </p>
                          <p className="file-size">
                            {formatFileSize(file.size)}
                          </p>
                        </div>
                        <button
                          onClick={() => removeFile(file.id)}
                          className="remove-file-btn"
                          title="Remove image"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Upload Progress */}
              {uploading && (
                <div className="upload-progress">
                  <div className="progress-content">
                    <div className="progress-spinner"></div>
                    <div className="progress-info">
                      <p className="progress-title">Uploading images...</p>
                      <p className="progress-subtitle">
                        {uploadedCount} of {totalFiles} images uploaded
                      </p>
                    </div>
                  </div>
                  <div className="progress-bar-container">
                    <div 
                      className="progress-bar"
                      style={{ width: `${(uploadedCount / totalFiles) * 100}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="action-buttons">
                <div className="action-buttons-row">
                  <button
                    onClick={cancelUpload}
                    disabled={uploading}
                    className="btn btn-secondary"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setShowUploadForm(false)}
                    disabled={uploading}
                    className="btn btn-secondary"
                  >
                    Skip for Now
                  </button>
                  <button
                    onClick={submitImages}
                    disabled={selectedFiles.length === 0 || uploading}
                    className="btn btn-primary"
                  >
                    {uploading ? 'Uploading...' : `Submit ${selectedFiles.length} Image${selectedFiles.length !== 1 ? 's' : ''}`}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Navigation - Show only if not in upload process */}
        {!showUploadForm && !uploadSuccess && (
          <div className="bottom-navigation">
            <a href="/" className="home-btn">
              🏠 Back to Home
            </a>
          </div>
        )}

      </div>
    </div>
  );
};

export default ThankYou;