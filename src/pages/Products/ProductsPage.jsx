import { useMemo, useState } from "react";
import { Heart, Plus, Search, Star } from "lucide-react";

import AnnouncementBar from "../../components/layout/AnnouncementBar";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { useCart } from "../Cart/CartContext";
import { useHeart } from "../Heart/useHeart";
import { marketplaceProducts } from "../../data/marketplaceData";
import "./ProductsPage.css";

const categories = ["All", "Performance", "Clothing", "Home"];

function ProductsPage() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const { addToCart } = useCart();
  const { addToFavorites } = useHeart();
  const products = useMemo(() => marketplaceProducts.filter((product) => {
    const matchesCategory = category === "All" || product.category === category;
    const matchesQuery = `${product.name} ${product.brand}`.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  }), [category, query]);

  return (
    <div className="products-page">
      <AnnouncementBar />
      <Navbar />
      <main>
        <section className="products-page-heading"><div><p className="products-kicker">THE FULL COLLECTION</p><h1>Products with a point of view.</h1><p>Explore the complete Luxe marketplace, from daily essentials to small-batch objects.</p></div></section>
        <section className="products-catalog"><div className="catalog-toolbar"><div className="catalog-tabs">{categories.map((item) => <button type="button" className={category === item ? "active" : ""} key={item} onClick={() => setCategory(item)}>{item}</button>)}</div><label className="catalog-search"><Search size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search products" aria-label="Search products" /></label></div><div className="catalog-result-line"><span>{products.length} products</span><span>Curated across independent shops</span></div><div className="catalog-grid">{products.map((product) => <article className="catalog-card" key={product.id}><div className="catalog-card-image"><img src={product.image} alt={product.name} /><span>{product.badge}</span><button type="button" onClick={() => addToFavorites(product)} aria-label={`Add ${product.name} to favorites`}><Heart size={16} /></button></div><div className="catalog-card-body"><p>{product.brand}</p><h2>{product.name}</h2><div className="catalog-card-meta"><span><Star size={13} fill="currentColor" /> {product.rating} ({product.reviews})</span><strong>{product.price}</strong></div><button className="catalog-add" type="button" onClick={() => addToCart(product)}><Plus size={15} /> Add to bag</button></div></article>)}</div>{products.length === 0 && <div className="products-empty">No products found. Try another search.</div>}</section>
      </main>
      <Footer />
    </div>
  );
}

export default ProductsPage;
