import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo-container">
          <img src="/images/logo.png" alt="Foliage Fashion Logo" className="logo" />
          <span className="brand-name">Foliage Fashion</span>
        </Link>

        <div className="mobile-nav">
          <button className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li><NavLink to="/" className={({isActive}) => isActive ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>About</NavLink></li>
            <li><NavLink to="/services" className={({isActive}) => isActive ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Services</NavLink></li>
            <li><NavLink to="/products" className={({isActive}) => isActive ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Products</NavLink></li>
            <li><NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;