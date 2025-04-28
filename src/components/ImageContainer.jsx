import PropTypes from 'prop-types';
import './ImageContainer.css';

const ImageContainer = ({ 
  src, 
  alt, 
  aspectRatio = '3/4', 
  maxHeight = 300,
  className = '',
  fallbackImage = '/images/products/placeholder.jpg'
}) => {
  const [paddingBottom, setPaddingBottom] = React.useState('100%');
  
  React.useEffect(() => {
    // Calculate padding based on aspect ratio
    const [width, height] = aspectRatio.split('/').map(Number);
    const ratio = (height / width) * 100;
    setPaddingBottom(`${ratio}%`);
  }, [aspectRatio]);

  return (
    <div 
      className={`image-container ${className}`}
      style={{
        maxHeight: `${maxHeight}px`,
        paddingBottom
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

ImageContainer.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  aspectRatio: PropTypes.string,
  maxHeight: PropTypes.number,
  className: PropTypes.string,
  fallbackImage: PropTypes.string
};

export default ImageContainer;