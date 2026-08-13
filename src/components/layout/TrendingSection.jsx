import {
  Heart,
} from "lucide-react";

import { useState } from "react";
import "../styles/TrendingSection.css";

function TrendingSection() {
  const [hoveredProduct, setIsHoveredProduct] = useState(null);
  const products = [
    {
      brand: "NIKE",
      name: "Cloud Runner",
      price: "$129",
      oldPrice: "$159",
      badge: "Sale",
      badgeType: "sale",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=85",
      cart: "Quick Add",
    },
    {
      brand: "TISSOT",
      name: "Classic Timepiece",
      price: "$289",
      oldPrice: "250",
      badge: "Premium",
      badgeType: "premium",
      image:
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=800&q=85",
      cart: "Quick Add",
    },
    {
      brand: "Jordan",
      name: "Velocity Pro",
      price: "$179",
      oldPrice: "$200",
      badge: "Trending",
      badgeType: "trending",
      image:
        "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=85",
      cart: "Quick Add",
    },
    {
      brand: "TISSOT",
      name: "Prestige Strap Watch",
      price: "$349",
      oldPrice: "$400",
      badge: "",
      badgeType: "",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=85",
      cart: "Quick Add",    
    },
  ];

  return (
    <section className="trending-section">
      <div className="trending-container">

        <div className="trending-heading">
          <div>
            <span className="trending-eyebrow">
              HOT RIGHT NOW
            </span>

            <h2>Trending Products</h2>
          </div>

          <a href="#" className="trending-view-all">
            View All <span>›</span>
          </a>
        </div>

        <div className="products-grid">
          {products.map((product, index) => (
            <article
              key={index}
              className="product-card"
              onMouseEnter={() => setIsHoveredProduct(index)}
              onMouseLeave={() => setIsHoveredProduct(null)}
            >
              <div className="product-image-container">

                <img
                  src={product.image}
                  alt={product.name}
                />

                {product.badge && (
                  <span
                    className={`product-badge ${product.badgeType}`}
                  >
                    {product.badge}
                  </span>
                )}

                <button
                  className="product-wishlist"
                  aria-label={`Add ${product.name} to wishlist`}
                >
                  <Heart size={16} />
                </button>

                <div className={`product-cart ${
                  hoveredProduct === index ? "show" : ""
                  }`}
                >
                  <button>{product.cart}</button>
                </div>

              </div>

              <div className="product-details">
                <span className="product-brand">
                  {product.brand}
                </span>
                <h3>{product.name}</h3>

                <div className="product-price">
                  <strong>{product.price}</strong>

                  {product.oldPrice && (
                    <del>{product.oldPrice}</del>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TrendingSection;