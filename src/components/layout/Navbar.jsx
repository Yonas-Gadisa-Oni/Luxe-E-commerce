import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  ShoppingBag,
  UserRound,
  Search,
  Menu,
  X,
} from "lucide-react";

import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navLinks = [
    { label: "New Arrivals", href: "/new-arrivals" },
    { label: "Men", href: "/men" },
    { label: "Women", href: "/women" },
    { label: "Sale", href: "/sale" },
    { label: "Brands", href: "/brands" },
  ];

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    setSearchOpen(false);
  };

  const toggleSearch = () => {
    setSearchOpen((prev) => !prev);
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="logo">
          <span className="logo-icon">
            <ShoppingBag size={14} strokeWidth={2.5} />
          </span>

          <span className="logo-text">
            Luxe
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a href={link.href} key={link.label}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Search */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Search products..."
            aria-label="Search products"
          />

          <Search size={15} />
        </div>

        {/* Desktop Actions */}
        <div className="nav-actions">
          <button aria-label="Wishlist">
            <Heart size={20} />
          </button>

          <Link to="/cart" aria-label="Shopping bag">
            <ShoppingBag size={20} />
          </Link>

          <button aria-label="Account">
            <UserRound size={20} />
          </button>
        </div>

        {/* Mobile Search Button */}
        <button
          className="mobile-search-button"
          onClick={toggleSearch}
          aria-label="Open search"
        >
          {searchOpen ? <X size={22} /> : <Search size={22} />}
        </button>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          onClick={toggleMenu}
          aria-label="Open menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

      </div>

      {/* Mobile Search */}
      <div className={`mobile-search ${searchOpen ? "open" : ""}`}>
        <Search size={15} />

        <input
          type="text"
          placeholder="Search products..."
          aria-label="Search products"
        />
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <nav>
          {navLinks.map((link) => (
            <a
              href={link.href}
              key={link.label}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mobile-actions">
          <button>
            <Heart size={20} />
            Wishlist
          </button>

          <button>
            <ShoppingBag size={20} />
            Bag
          </button>

          <button>
            <UserRound size={20} />
            Account
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;