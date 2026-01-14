import React, { useState, useEffect } from "react";
import "./Header.css";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

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

  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault();
    const query = searchTerm.trim();
    if (!query) return;
    navigate(`/categories?q=${encodeURIComponent(query)}`);
  };

  return (
    <header className="header">

      {/* LOGO */}
      <div className="logo">LOGO</div>

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

      <div className="desktop-search">
        <form className="search-bar" onSubmit={handleSearchSubmit}>
          <FiSearch className="search-icon" onClick={handleSearchSubmit} />
          <input
            type="text"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </div>

      <div className="mobile-icons">

        {!searchOpen ? (
          <FiSearch className="icon" onClick={() => setSearchOpen(true)} />
        ) : (
          <input
            className="mobile-search"
            type="text"
            placeholder="Search..."
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearchSubmit(e);
                setSearchOpen(false);
              }
            }}
            onBlur={() => setSearchOpen(false)}
          />
        )}

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
