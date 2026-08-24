import { ArrowLeft, ArrowRight, MapPin, Plus, Star } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import AnnouncementBar from "../../components/layout/AnnouncementBar";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { useCart } from "../Cart/CartContext";
import { useHeart } from "../Heart/useHeart";
import { marketplaceProducts, vendors } from "../../data/marketplaceData";
import "../Marketplace/MarketplacePage.css";
import "./VendorStorePage.css";

function VendorStorePage() {
  const { vendorId } = useParams();
  const { addToCart } = useCart();
  const { addToFavorites } = useHeart();
  const vendor = vendors.find((item) => item.id === vendorId) || vendors[0];
  const products = marketplaceProducts.filter((product) => product.vendorId === vendor.id);

  return (
    <div className="vendor-store-page marketplace-page">
      <AnnouncementBar />
      <Navbar />
      <main>
        <section className="vendor-store-hero">
          <div className="vendor-store-image"><img src={vendor.image} alt={vendor.name} /></div>
          <div className="vendor-store-intro"><Link to="/" className="store-back-link"><ArrowLeft size={15} /> Back to marketplace</Link><p className="marketplace-kicker">INDEPENDENT SHOP</p><div className="vendor-store-mark" style={{ backgroundColor: vendor.accent }}>{vendor.logo}</div><h1>{vendor.name}</h1><p>{vendor.description}</p><div className="vendor-store-details"><span><MapPin size={15} /> {vendor.location}</span><span><Star size={15} fill="currentColor" /> {vendor.rating} rating</span><span>{vendor.sales} sales</span></div></div>
        </section>
        <section className="vendor-store-products"><div className="marketplace-section-heading"><div><p className="marketplace-kicker">THE COLLECTION</p><h2>Made by {vendor.name}</h2></div><span>{products.length} products</span></div><div className="marketplace-product-grid">{products.map((product) => <article className="marketplace-product-card" key={product.id}><div className="marketplace-product-image"><img src={product.image} alt={product.name} /><span>{product.badge}</span><button type="button" onClick={() => addToFavorites(product)} aria-label={`Add ${product.name} to favorites`}><span>♡</span></button></div><div className="marketplace-product-info"><p>{product.category}</p><h3>{product.name}</h3><div className="marketplace-product-meta"><span><Star size={13} fill="currentColor" /> {product.rating} ({product.reviews})</span><strong>{product.price}</strong></div><button className="add-to-bag" type="button" onClick={() => addToCart(product)}><Plus size={16} /> Add to bag</button></div></article>)}</div></section>
        <section className="vendor-store-note"><div><p className="marketplace-kicker">SHOP WITH CONFIDENCE</p><h2>Every shop has a real story.</h2><p>Luxe verifies every seller before they list. Your purchase supports an independent business directly.</p></div><Link to="/">Explore other shops <ArrowRight size={16} /></Link></section>
      </main>
      <Footer />
    </div>
  );
}

export default VendorStorePage;
