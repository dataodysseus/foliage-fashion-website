import React from 'react';
import './ImageContainer.css';

const ImageContainer = ({ 
  src, 
  alt, 
  aspectRatio = '3/4', 
  maxHeight = 300,
  className = '',
  fallbackImage = '/images/products/placeholder.jpg'
}) => {
  const [ratio, setRatio] = React.useState('75%');
  
  React.useEffect(() => {
    const [width, height] = aspectRatio.split('/').map(Number);
    const calculatedRatio = (height / width) * 100;
    setRatio(`${calculatedRatio}%`);
  }, [aspectRatio]);

  return (
    <div 
      className={`image-container ${className}`}
      style={{
        maxHeight: `${maxHeight}px`,
        paddingBottom: ratio
      }}
    >
      <img
        src={src}
        alt={alt}
        onError={(e) => {
          e.target.src = fallbackImage;
          e.target.alt = 'Placeholder image';
        }}
      />
    </div>
  );
};

export default ImageContainer;