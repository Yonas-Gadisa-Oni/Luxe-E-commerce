import AnnouncementBar from "../../components/layout/AnnouncementBar";
import Navbar from "../../components/layout/Navbar"

function CartPage() {
  return (
    <main className="cart-page">
      <AnnouncementBar />
      <Navbar />
      <h1>Your Cart</h1>

      <p>Your cart is currently empty.</p>
    </main>
  );
}

export default CartPage;