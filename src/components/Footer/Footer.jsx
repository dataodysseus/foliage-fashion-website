import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-column">
          <Link to="/" className="footer-logo">
            <img src="/images/logo.png" alt="Foliage Fashion Logo" className="footer-logo-img" />
            <span className="footer-brand">Foliage Fashion</span>
          </Link>
          <p className="footer-description">
            Premium apparel trade house connecting quality manufacturers with US retailers and brands.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Our Services</h3>
          <ul className="footer-links">
            <li><Link to="/services">Sourcing</Link></li>
            <li><Link to="/services">Manufacturing</Link></li>
            <li><Link to="/services">Quality Control</Link></li>
            <li><Link to="/services">Logistics</Link></li>
            <li><Link to="/services">Customization</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact Us</h3>
          <ul className="contact-info">
            <li>
              <FaMapMarkerAlt />
              <span> Yale Avenue, Hillside, USA</span>
            </li>
            <li>
              <FaPhone />
              <span>+1 970 208 4674</span>
            </li>
            <li>
              <FaEnvelope />
              <span>info@foliagefashion.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="copyright">
        <div className="container">
          <p>&copy; {currentYear} Foliage Fashion. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;