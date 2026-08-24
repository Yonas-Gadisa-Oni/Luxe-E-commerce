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
import { useCart } from "../../pages/Cart/CartContext";
import { useHeart } from "../../pages/Heart/useHeart";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { cartItems } = useCart();
  const { favoriteItems } = useHeart();

  const navLinks = [
    { label: "Discover", href: "/" },
    { label: "Shops", href: "/shops" },
    { label: "Products", href: "/products" },
    { label: "List products", href: "/list-products" },
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
            <Link to={link.href} key={link.label}>
              {link.label}
            </Link>
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
          <Link to="/heart" className="nav-icon-link" aria-label={`Favorites (${favoriteItems.length})`}>
            <Heart size={20} />
            {favoriteItems.length > 0 && <span className="nav-count">{favoriteItems.length}</span>}
          </Link>

          <Link to="/cart" className="nav-icon-link" aria-label={`Shopping bag (${cartItems.length})`}>
            <ShoppingBag size={20} />
            {cartItems.length > 0 && <span className="nav-count">{cartItems.length}</span>}
          </Link>

          <Link to="/user" aria-label="Account">
            <UserRound size={20} />
          </Link>
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
            <Link
              to={link.href}
              key={link.label}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mobile-actions">
          <Link to="/heart">
            <Heart size={20} />
            Favorites {favoriteItems.length > 0 && <span className="mobile-nav-count">{favoriteItems.length}</span>}
          </Link>

          <Link to="/cart">
            <ShoppingBag size={20} />
            Bag {cartItems.length > 0 && <span className="mobile-nav-count">{cartItems.length}</span>}
          </Link>

          <Link to="/user">
            <UserRound size={20} />
            Account
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;