import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = ({ title, subtitle, buttonText, buttonLink, backgroundImage }) => {
  const heroStyle = backgroundImage 
    ? { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})` }
    : {};

  return (
    <section className="hero" style={heroStyle}>
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
          {buttonText && buttonLink && (
            <Link to={buttonLink} className="btn hero-btn">
              {buttonText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;