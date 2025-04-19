import React, { useState } from 'react';
import { FaHeartbeat, FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <FaHeartbeat className="logo-icon" />
          <span>HeartShield</span>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-links">
          <Link to="/">Home</Link>  {/* Update: Replaced anchor tag with Link */}
          <Link to="#corporate">Corporate Screening</Link>  {/* Update: Using Link */}
          <Link to="#check-risk">Check Heart Risk</Link>  {/* Update: Using Link */}
          <Link to="/contact">Contact Us</Link>
          <button className="navbar-cta">Book Screening</button>
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-btn" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <Link to="/">Home</Link>  {/* Update: Replaced anchor tag with Link */}
        <Link to="#corporate">Corporate Screening</Link>  {/* Update: Using Link */}
        <Link to="#check-risk">Check Heart Risk</Link>  {/* Update: Using Link */}
        <Link to="/contact">Contact Us</Link>
        <button className="mobile-cta">Book Screening</button>
      </div>
    </nav>
  );
};

export default Navbar;
