import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home/HomePage"
import CartPage from "./pages/Cart/CartPage";
import { CartProvider } from "./pages/Cart/CartContext";
import CartNotification from "./pages/Cart/CartNotification";

import "./App.css";

function App() {
  return (
    <CartProvider>
      <BrowserRouter basename="/Luxe-E-commerce/">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>

        <CartNotification />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;