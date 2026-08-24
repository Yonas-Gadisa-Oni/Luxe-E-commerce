import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

import "./EmptyCart.css";

function EmptyCart() {
  return (
    <section className="empty-cart">
      <div className="empty-cart-content">

        <div className="empty-cart-icon">
          <ShoppingBag size={38} strokeWidth={1.5} />
        </div>

        <h1>Your cart is empty</h1>

        <p>
          Looks like you haven't added anything yet. Let's fix that!
        </p>

        <Link to="/" className="empty-cart-button">
          Browse Products
        </Link>

      </div>
    </section>
  );
}

export default EmptyCart;