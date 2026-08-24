import { Link } from "react-router-dom";
import { Trash2, ChevronLeft, LockKeyhole } from "lucide-react";
import { useState } from "react";

import { useCart } from "./CartContext";
import "./CartItems.css";

function CartItems() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
  } = useCart();

  const [promoCode, setPromoCode] = useState("");

  const subtotal = cartItems.reduce(
    (sum, item) =>
      sum +
      parseFloat(item.price.replace("$", "")) * item.quantity,
    0
  );

  const shipping = 0;

  const tax = subtotal * 0.08;

  const total = subtotal + shipping + tax;

  const handlePromo = () => {
    if (promoCode.trim()) {
      alert(`Promo code "${promoCode}" applied`);
    }
  };

  return (
    <section className="cart-content">
      <div className="cart-container">

        {/* LEFT SIDE */}
        <div className="cart-left">

          <div className="cart-items-list">

            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>

                {/* Product Image */}
                <div className="cart-item-image-wrapper">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />
                </div>

                {/* Product Information */}
                <div className="cart-item-details">

                  <span className="cart-item-brand">
                    {item.brand}
                  </span>

                  <h2>{item.name}</h2>

                  <p className="cart-item-category">
                    {item.category || "Footwear"}
                  </p>

                  {/* Quantity */}
                  <div className="cart-quantity">

                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          Math.max(1, item.quantity - 1)
                        )
                      }
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.quantity + 1
                        )
                      }
                      aria-label="Increase quantity"
                    >
                      +
                    </button>

                  </div>
                </div>

                {/* Remove */}
                <button
                  type="button"
                  className="cart-remove"
                  onClick={() => removeFromCart(item.id)}
                  aria-label={`Remove ${item.name}`}
                >
                  <Trash2 size={18} />
                </button>

                {/* Price */}
                <strong className="cart-item-price">
                  $
                  {(
                    parseFloat(item.price.replace("$", "")) *
                    item.quantity
                  ).toFixed(2)}
                </strong>

              </div>
            ))}

          </div>

          {/* Continue Shopping */}
          <Link to="/" className="continue-shopping">
            <ChevronLeft size={17} />
            Continue Shopping
          </Link>

        </div>

        {/* RIGHT SIDE */}
        <aside className="order-summary">

          <h2>Order Summary</h2>

          {/* Promo */}
          <div className="promo-section">

            <label htmlFor="promo">
              Promo Code
            </label>

            <div className="promo-input-row">

              <input
                id="promo"
                type="text"
                placeholder="Enter code"
                value={promoCode}
                onChange={(e) =>
                  setPromoCode(e.target.value)
                }
              />

              <button
                type="button"
                onClick={handlePromo}
              >
                Apply
              </button>

            </div>

            <span className="promo-hint">
              Try: SAVE20
            </span>

          </div>

          {/* Prices */}
          <div className="summary-prices">

            <div>
              <span>Subtotal</span>
              <strong>
                ${subtotal.toFixed(2)}
              </strong>
            </div>

            <div>
              <span>Shipping</span>
              <strong>Free</strong>
            </div>

            <div>
              <span>Tax (8%)</span>
              <strong>
                ${tax.toFixed(2)}
              </strong>
            </div>

          </div>

          {/* Total */}
          <div className="summary-total">
            <span>Total</span>

            <strong>
              ${total.toFixed(2)}
            </strong>
          </div>

          {/* Checkout */}
          <button
            type="button"
            className="checkout-button"
          >
            Proceed to Checkout
            <span>→</span>
          </button>

          {/* Payment Methods */}
          <div className="payment-methods">

            <span>Visa</span>
            <span>MC</span>
            <span>Amex</span>
            <span>PayPal</span>

          </div>

          {/* SSL */}
          <div className="ssl-message">
            <LockKeyhole size={12} />
            Secure SSL encrypted checkout
          </div>

        </aside>

      </div>
    </section>
  );
}

export default CartItems;