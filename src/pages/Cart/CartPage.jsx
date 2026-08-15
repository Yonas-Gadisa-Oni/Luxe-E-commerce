import "./CartPage.css";

import AnnouncementBar from "../../components/layout/AnnouncementBar";
import Navbar from "../../components/layout/Navbar";
import EmptyCart from "./EmptyCart";
import CartItems from "./CartItems";
import Footer from "../../components/layout/Footer";
import { useCart } from "./CartContext";

function CartPage() {
  const { cartItems } = useCart();

  const itemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <main className="cart-page">
      <AnnouncementBar />
      <Navbar />

      {/* Cart Header */}
      <section className="cart-header">
        <div className="cart-header-container">
          <div className="cart-breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <strong>Shopping Cart</strong>
          </div>

          <h1>
            Shopping Cart{" "}
            <span>
              ({itemCount} {itemCount === 1 ? "item" : "items"})
            </span>
          </h1>
        </div>
      </section>

      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <CartItems />
      )}

      <Footer />
    </main>
  );
}

export default CartPage;