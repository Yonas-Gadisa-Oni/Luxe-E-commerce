import { useMemo, useState } from "react";
import { ArrowRight, Check, MapPin, Plus, Search, ShieldCheck, Star, Store, Users } from "lucide-react";
import { Link } from "react-router-dom";

import AnnouncementBar from "../../components/layout/AnnouncementBar";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { useCart } from "../Cart/CartContext";
import { useHeart } from "../Heart/useHeart";
import { marketplaceProducts, vendors } from "../../data/marketplaceData";
import "./MarketplacePage.css";

const categories = ["All products", "Performance", "Clothing", "Home"];

function MarketplacePage() {
  const [activeCategory, setActiveCategory] = useState("All products");
  const [searchTerm, setSearchTerm] = useState("");
  const { addToCart } = useCart();
  const { addToFavorites } = useHeart();

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return marketplaceProducts.filter((product) => {
      const matchesCategory = activeCategory === "All products" || product.category === activeCategory;
      const matchesSearch = !normalizedSearch || `${product.name} ${product.brand} ${product.category}`.toLowerCase().includes(normalizedSearch);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <div className="marketplace-page">
      <AnnouncementBar />
      <Navbar />

      <main>
        <section className="marketplace-hero">
          <div className="marketplace-hero-content">
            <p className="marketplace-kicker"><Store size={16} /> THE INDEPENDENT MARKETPLACE</p>
            <h1>Good things come from <em>more than one place.</em></h1>
            <p className="marketplace-hero-copy">Discover original products from independent product makers, all in one considered space.</p>
            <div className="marketplace-hero-actions">
              <a href="#products" className="marketplace-primary-action">Explore products <ArrowRight size={17} /></a>
              <Link to="/vendor/dashboard" className="marketplace-secondary-action">Open a product shop</Link>
            </div>
            <div className="marketplace-trust-row">
              <span><Check size={15} /> Seller verified</span>
              <span><Check size={15} /> Buyer protected</span>
              <span><Check size={15} /> One simple checkout</span>
            </div>
          </div>
          <div className="marketplace-hero-art">
            <div className="hero-art-image hero-art-image-main"><img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=85" alt="Independent fashion collection" /></div>
            <div className="hero-art-card"><span>LIVE THIS WEEK</span><strong>86</strong><small>independent sellers</small></div>
            <div className="hero-art-image hero-art-image-small"><img src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=500&q=85" alt="Curated home object" /></div>
          </div>
        </section>

        <section className="marketplace-stats" aria-label="Marketplace benefits">
          <div><Users size={20} /><span><strong>86</strong> independent product shops</span></div>
          <div><ShieldCheck size={20} /><span><strong>100%</strong> seller verified</span></div>
          <div><MapPin size={20} /><span><strong>24</strong> cities represented</span></div>
        </section>

        <section className="vendor-section">
          <div className="marketplace-section-heading"><div><p className="marketplace-kicker">MEET THE MAKERS</p><h2>Shops worth knowing</h2></div><a href="#vendors">View all product shops <ArrowRight size={16} /></a></div>
          <div className="vendor-grid" id="vendors">
            {vendors.map((vendor) => (
              <article className="vendor-card" key={vendor.id}>
                <div className="vendor-card-image"><img src={vendor.image} alt={vendor.name} /><span className="vendor-logo" style={{ backgroundColor: vendor.accent }}>{vendor.logo}</span></div>
                <div className="vendor-card-body"><div className="vendor-card-topline"><span>{vendor.category}</span><span><Star size={13} fill="currentColor" /> {vendor.rating}</span></div><h3>{vendor.name}</h3><p>{vendor.description}</p><div className="vendor-card-footer"><span>{vendor.sales} sales</span><Link to={`/vendors/${vendor.id}`}>Visit shop <ArrowRight size={14} /></Link></div></div>
              </article>
            ))}
          </div>
        </section>

        <section className="marketplace-product-section" id="products">
          <div className="marketplace-section-heading product-heading"><div><p className="marketplace-kicker">CURATED FOR YOU</p><h2>Shop the marketplace</h2></div><div className="product-search"><Search size={17} /><input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Search products or shops" aria-label="Search products or shops" /></div></div>
          <div className="marketplace-category-tabs" role="tablist">{categories.map((category) => <button className={activeCategory === category ? "active" : ""} key={category} type="button" onClick={() => setActiveCategory(category)}>{category}</button>)}</div>
          <div className="marketplace-product-grid">
            {filteredProducts.map((product) => (
              <article className="marketplace-product-card" key={product.id}><div className="marketplace-product-image"><img src={product.image} alt={product.name} /><span>{product.badge}</span><button type="button" onClick={() => addToFavorites(product)} aria-label={`Add ${product.name} to favorites`}><span>♡</span></button></div><div className="marketplace-product-info"><p>{product.brand}</p><h3>{product.name}</h3><div className="marketplace-product-meta"><span><Star size={13} fill="currentColor" /> {product.rating} ({product.reviews})</span><strong>{product.price}</strong></div><button className="add-to-bag" type="button" onClick={() => addToCart(product)}><Plus size={16} /> Add to bag</button></div></article>
            ))}
          </div>
          {filteredProducts.length === 0 && <p className="marketplace-empty">No products match that search yet.</p>}
        </section>

        <section className="vendor-cta"><div><p className="marketplace-kicker">YOUR CRAFT HAS A PLACE HERE</p><h2>Turn your work into a storefront.</h2><p>Join a growing community of independent sellers reaching customers who care where their things come from.</p></div><Link to="/add-product">Start selling <ArrowRight size={17} /></Link></section>
      </main>
      <Footer />
    </div>
  );
}

export default MarketplacePage;
