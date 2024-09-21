import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from '@mui/icons-material'; // Importing the ShoppingCart icon from Material-UI
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [clickedLink, setClickedLink] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setClickedLink(true);
    setTimeout(() => {
      setClickedLink(false);
    }, 200); // Reset clickedLink after 200 milliseconds
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo-container">
        <Link
          to="/"
          className={`navbar-logo ${clickedLink ? 'link-clicked' : ''}`}
          onClick={() => { setIsOpen(false); setClickedLink(true); }}
        >
          JNBStore
        </Link>
      </div>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <Link to="/" onClick={() => { setIsOpen(false); handleLinkClick(); }}>Home</Link>
        <Link to="/men" onClick={() => { setIsOpen(false); handleLinkClick(); }}>Men</Link>
        <Link to="/women" onClick={() => { setIsOpen(false); handleLinkClick(); }}>Women</Link>
        <Link to="/contact" onClick={() => { setIsOpen(false); handleLinkClick(); }}>Contact</Link>
      </div>
      <div className="auth-buttons">
        <Link to="/login" className="login-link" onClick={handleLinkClick}>
          Login
        </Link>
        <Link to="/signup" className="signup-link" onClick={handleLinkClick}>
          Sign Up
        </Link>
        <Link to="/cart" className="cart-link" onClick={handleLinkClick}>
          <ShoppingCart className="cart-icon" /> {/* Using the ShoppingCart icon */}
        </Link>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776;
      </div>
    </nav>
  );
};

export default Navbar;
