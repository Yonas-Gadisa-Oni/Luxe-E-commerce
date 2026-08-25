import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Heart,
  ShoppingBag,
  UserRound,
  Search,
  Menu,
  X,
} from "lucide-react";

import { useCart } from "../../pages/Cart/CartContext";
import { useHeart } from "../../pages/Heart/useHeart";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
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

  const handleSearch = (event) => {
    event.preventDefault();
    const normalizedSearch = searchTerm.trim();

    navigate(normalizedSearch ? `/products?search=${encodeURIComponent(normalizedSearch)}` : "/products");
    setSearchOpen(false);
  };

  return (
    <header className="fixed top-[30px] right-0 left-0 z-[1000] h-[60px] w-full border-b border-[#e7e9ed] bg-white max-[761px]:mt-[-10px] max-[761px]:h-[54px]">
      <div className="relative mx-auto flex h-full w-[calc(100%_-_40px)] max-w-[1200px] items-center gap-5 max-[761px]:gap-2.5">

        {/* Logo */}
        <Link to="/" className="flex shrink-0 items-center gap-1.5 text-[#202b3d] no-underline">
          <span className="flex size-[30px] items-center justify-center rounded bg-[#1769ed] text-white">
            <ShoppingBag size={14} strokeWidth={2.5} />
          </span>

          <span className="text-[17px] font-bold tracking-[-0.2px]">Luxe</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="ml-5 flex items-center gap-[25px] whitespace-nowrap max-[900px]:gap-3 max-[761px]:hidden">
          {navLinks.map((link) => (
            <Link className="text-[15px] font-medium text-[#374151] no-underline transition-colors duration-200 hover:text-[#1769ed]" to={link.href} key={link.label}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Search */}
        <form className="ml-5 flex h-[38px] w-[min(360px,30vw)] items-center rounded-full border border-[#dfe4eb] bg-[#f7f8fa] py-0 pr-1.5 pl-3.5 transition-[background,border-color,box-shadow] duration-200 focus-within:border-[#1769ed] focus-within:bg-white focus-within:shadow-[0_0_0_3px_rgba(23,105,237,0.12)] max-[900px]:w-[150px] max-[761px]:hidden" onSubmit={handleSearch} role="search">
          <input
            className="h-full w-full border-0 bg-transparent text-[13px] text-[#273142] outline-none placeholder:text-[#a6adb8]"
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search products"
            aria-label="Search products"
          />

          <button className="grid size-7 shrink-0 place-items-center rounded-full border-0 bg-[#1769ed] p-0 text-white transition-colors hover:bg-[#0f55c7]" type="submit" aria-label="Search products">
            <Search size={16} />
          </button>
        </form>

        {/* Desktop Actions */}
        <div className="ml-auto flex items-center gap-5 max-[900px]:gap-[9px] max-[761px]:mr-[-190px] max-[761px]:gap-[30px] max-[400px]:mr-[-160px] max-[400px]:gap-5">
          <Link to="/heart" className="relative flex items-center text-[#263244] no-underline transition-colors hover:text-[#1769ed]" aria-label={`Favorites (${favoriteItems.length})`}>
            <Heart size={20} />
            {favoriteItems.length > 0 && <span className="absolute top-[-9px] right-[-10px] grid h-4 min-w-4 place-items-center rounded-full bg-[#d44b62] px-1 text-[9px] font-extrabold leading-none text-white">{favoriteItems.length}</span>}
          </Link>

          <Link to="/cart" className="relative flex items-center text-[#263244] no-underline transition-colors hover:text-[#1769ed]" aria-label={`Shopping bag (${cartItems.length})`}>
            <ShoppingBag size={20} />
            {cartItems.length > 0 && <span className="absolute top-[-9px] right-[-10px] grid h-4 min-w-4 place-items-center rounded-full bg-[#d44b62] px-1 text-[9px] font-extrabold leading-none text-white">{cartItems.length}</span>}
          </Link>

          <Link to="/user" aria-label="Account">
            <UserRound size={20} />
          </Link>
        </div>

        {/* Mobile Search Button */}
        <button
          className="hidden items-center justify-center border-0 bg-transparent p-1.5 text-[#263244] max-[761px]:flex"
          onClick={toggleSearch}
          aria-label="Open search"
        >
          {searchOpen ? <X size={22} /> : <Search size={22} />}
        </button>

        {/* Mobile Menu Button */}
        <button
          className="ml-auto hidden items-center justify-center border-0 bg-transparent p-1.5 text-[#263244] max-[761px]:flex"
          onClick={toggleMenu}
          aria-label="Open menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

      </div>

      {/* Mobile Search */}
      <form className={`absolute top-[54px] right-2.5 left-2.5 z-[1100] flex h-11 items-center gap-2 rounded-full border border-[#e1e5eb] bg-white py-0 pr-2 pl-3.5 shadow-[0_6px_16px_rgba(0,0,0,0.06)] transition-[opacity,transform,visibility] duration-[220ms] ${searchOpen ? "visible translate-y-0 scale-100 opacity-100 pointer-events-auto" : "invisible translate-y-[-6px] scale-[0.98] opacity-0 pointer-events-none"} focus-within:border-[#1769ed] focus-within:shadow-[0_0_0_3px_rgba(23,105,237,0.12),0_6px_16px_rgba(0,0,0,0.06)]`} onSubmit={handleSearch} role="search">
        <Search className="shrink-0 text-[#8b95a5]" size={15} />

        <input
          className="w-full border-0 bg-transparent text-[13px] text-[#273142] outline-none placeholder:text-[#a6adb8]"
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search products"
          aria-label="Search products"
        />
        <button className="grid size-7 shrink-0 place-items-center rounded-full border-0 bg-[#1769ed] p-0 text-white transition-colors hover:bg-[#0f55c7]" type="submit" aria-label="Search products">
          <Search size={16} />
        </button>
      </form>

      {/* Mobile Menu */}
      <div className={`invisible absolute top-[54px] left-0 z-[1050] w-full border-t border-[#edf0f4] border-b border-[#e5e8ed] bg-white px-5 py-[18px] opacity-0 shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition-[opacity,transform,visibility] duration-[280ms] ${menuOpen ? "visible translate-y-0 opacity-100 pointer-events-auto" : "translate-y-[-8px] pointer-events-none"}`}>
        <nav className="flex flex-col">
          {navLinks.map((link) => (
            <Link
              className={`border-b border-[#f0f2f5] py-[13px] text-[14px] font-medium text-[#263244] no-underline transition-[opacity,transform] duration-[260ms] ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-[-4px] opacity-0"}`}
              style={{ transitionDelay: menuOpen ? `${navLinks.indexOf(link) * 40}ms` : "0ms" }}
              to={link.href}
              key={link.label}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex justify-between pt-[18px]">
          <Link className="flex items-center gap-1.5 text-[12px] text-[#374151] no-underline" to="/heart">
            <Heart size={20} />
            Favorites {favoriteItems.length > 0 && <span className="ml-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-[#d44b62] px-1 text-[9px] font-extrabold leading-none text-white">{favoriteItems.length}</span>}
          </Link>

          <Link className="flex items-center gap-1.5 text-[12px] text-[#374151] no-underline" to="/cart">
            <ShoppingBag size={20} />
            Bag {cartItems.length > 0 && <span className="ml-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-[#d44b62] px-1 text-[9px] font-extrabold leading-none text-white">{cartItems.length}</span>}
          </Link>

          <Link className="flex items-center gap-1.5 text-[12px] text-[#374151] no-underline" to="/user">
            <UserRound size={20} />
            Account
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;