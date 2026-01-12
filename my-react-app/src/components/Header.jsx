import React, { useState, useEffect } from "react";
import "./Header.css";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Close mobile search/menu when window becomes desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
        setSearchOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="header">

      {/* LOGO */}
      <div className="logo">LOGO</div>

      {/* DESKTOP NAVIGATION */}
      <nav className="nav desktop-nav">
        <NavLink to="/home" className="nav-link">
          Home
        </NavLink>

        <NavLink to="/categories" className="nav-link">
          Categories
        </NavLink>

        <NavLink to="/account" className="nav-link">
          Account
        </NavLink>

        <NavLink to="/cart" className="nav-link">
          Cart
        </NavLink>

        <NavLink to="/contact" className="nav-link">
          Contact
        </NavLink>
      </nav>

      {/* DESKTOP SEARCH BAR */}
      <div className="desktop-search">
        <div className="search-bar">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Search for products..." />
        </div>
      </div>

      {/* MOBILE ICONS */}
      <div className="mobile-icons">

        {/* MOBILE SEARCH TOGGLE */}
        {!searchOpen ? (
          <FiSearch className="icon" onClick={() => setSearchOpen(true)} />
        ) : (
          <input
            className="mobile-search"
            type="text"
            placeholder="Search..."
            autoFocus
            onBlur={() => setSearchOpen(false)}
          />
        )}

        {/* MOBILE MENU ICON */}
        {!menuOpen ? (
          <FiMenu className="icon" onClick={() => setMenuOpen(true)} />
        ) : (
          <FiX className="icon" onClick={() => setMenuOpen(false)} />
        )}
      </div>

      {/* MOBILE DRAWER NAV */}
      <div className={`mobile-nav-drawer ${menuOpen ? "open" : ""}`}>
        <NavLink to="/home" className="mobile-link" onClick={() => setMenuOpen(false)}>
          Home
        </NavLink>

        <NavLink to="/categories" className="mobile-link" onClick={() => setMenuOpen(false)}>
          Categories
        </NavLink>

        <NavLink to="/account" className="mobile-link" onClick={() => setMenuOpen(false)}>
          Account
        </NavLink>

        <NavLink to="/cart" className="mobile-link" onClick={() => setMenuOpen(false)}>
          Cart
        </NavLink>

        <NavLink to="/contact" className="mobile-link" onClick={() => setMenuOpen(false)}>
          Contact
        </NavLink>
      </div>

    </header>
  );
};

export default Header;
