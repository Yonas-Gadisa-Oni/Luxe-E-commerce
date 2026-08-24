import { Heart } from "lucide-react";
import { useHeart } from "../../pages/Heart/useHeart";
import "../styles/BestSellers.css";

function BestSellers() {
  const { addToFavorites } = useHeart();
  const products = [
    {
      id: 1,
      badge: "Sale",
      badgeType: "sale",
      brand: "NIKE",
      name: "Air Precision Runner",
      image: "https://images.unsplash.com/photo-1625860191460-10a66c7384fb?w=600&h=600&fit=crop&auto=format",
      rating: 5,
      reviews: "2,341",
      price: 129,
      oldPrice: 179,
      discount: "-28%",
      colors: ["white", "black", "blue", "orange"],
    },
    {
      id: 2,
      badge: "Trending",
      badgeType: "trending",
      brand: "ADIDAS",
      name: "Shadow Series Sneaker",
      image: "https://images.unsplash.com/photo-1710553455491-482fa1751dc4?w=600&h=600&fit=crop&auto=format",
      rating: 5,
      reviews: "1,623",
      price: 149,
      oldPrice: 199,
      discount: "-25%",
      colors: ["black", "red", "blue"],
    },
    {
      id: 3,
      badge: null,
      badgeType: "",
      brand: "ADIDAS",
      name: "Cloud Runner Elite",
      image: "https://images.unsplash.com/photo-1632993819204-3ad5253a4a72?w=600&h=600&fit=crop&auto=format",
      rating: 5,
      reviews: "1,102",
      price: 175,
      oldPrice: null,
      discount: null,
      colors: ["white", "purple", "orange"],
    },
  ];

  return (
    <section className="best-sellers">
      <div className="best-sellers-container">

        {/* Section Heading */}
        <div className="best-sellers-heading">
          <span className="best-sellers-label">
            CUSTOMER FAVORITES
          </span>

          <h2>Best Sellers</h2>
        </div>

        {/* Product Grid */}
        <div className="best-sellers-grid">

          {products.map((product) => (
            <article
              className="best-seller-card"
              key={product.id}
            >

              {/* =========================
                  PRODUCT IMAGE
              ========================= */}

              <div className="best-seller-image-wrapper">

                <img
                  className="best-seller-image"
                  src={product.image}
                  alt={product.name}
                />

                {/* Product Badge */}
                {product.badge && (
                  <span
                    className={`best-seller-badge ${product.badgeType}`}
                  >
                    {product.badge}
                  </span>
                )}

                {/* Wishlist */}
                <button
                  className="best-seller-wishlist"
                  type="button"
                  onClick={() => addToFavorites(product)}
                  aria-label={`Add ${product.name} to wishlist`}
                >
                  <Heart
                    size={17}
                    strokeWidth={1.6}
                  />
                </button>

              </div>

              {/* =========================
                  PRODUCT INFORMATION
              ========================= */}

              <div className="best-seller-info">

                <span className="best-seller-brand">
                  {product.brand}
                </span>

                <h3>{product.name}</h3>

                {/* Rating */}
                <div className="best-seller-rating">

                  <div className="stars">
                    {Array.from(
                      { length: product.rating },
                      (_, index) => (
                        <span key={index}>★</span>
                      )
                    )}
                  </div>

                  <span className="review-count">
                    ({product.reviews})
                  </span>

                </div>

                {/* Price */}
                <div className="best-seller-price-row">

                  <div className="best-seller-prices">

                    <span className="best-seller-current-price">
                      ${product.price}
                    </span>

                    {product.oldPrice && (
                      <span className="best-seller-old-price">
                        ${product.oldPrice}
                      </span>
                    )}

                    {product.discount && (
                      <span className="best-seller-discount">
                        {product.discount}
                      </span>
                    )}

                  </div>

                </div>

                {/* Colors */}
                <div className="best-seller-colors">

                  {product.colors.map((color, index) => (
                    <button
                      key={`${product.id}-${color}`}
                      type="button"
                      className={`color-option color-${color} ${
                        index === 0 ? "selected" : ""
                      }`}
                      aria-label={`Select ${color} color`}
                    />
                  ))}

                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default BestSellers;