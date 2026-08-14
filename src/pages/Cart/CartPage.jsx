// import { ShoppingBag } from "lucide-react";
import "./CartPage.css";

import AnnouncementBar from "../../components/layout/AnnouncementBar";
import Navbar from "../../components/layout/Navbar";
import EmptyCart from "./EmptyCart";
import Footer from "../../components/layout/Footer";

function CartPage() {
  return (
    <main className="cart-page">
      <AnnouncementBar />
      <Navbar />
      <div className="cart-page">
        <main className="cart-main">
          <EmptyCart />
        </main>

        <Footer />
      </div>
      {/* <div className = "cart-container">
        <div className = "cart-logo">
          <span className = "cart-logo-icon">
            <ShoppingBag size={50} strokeWidth={2.5} />
          </span>
          <h3>Your cart is empty</h3>
          <p>Look like you haven't added anything yet. Let's fix that!</p>
          <button>
            Browse Products
          </button>
        </div>

        <div className = "footer">
            <h3>This is footer</h3>
            <div className="footer-left">

            </div>
        </div>
      </div> */}
    </main>
  );
}

export default CartPage;