import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home/HomePage"
import MarketplacePage from "./pages/Marketplace/MarketplacePage";
import CartPage from "./pages/Cart/CartPage";
import { CartProvider } from "./pages/Cart/CartContext";
import CartNotification from "./pages/Cart/CartNotification";
import User from "./pages/MyAccount/User";
import Heart from "./pages/Heart/Heart";
import HeartNotification from "./pages/Heart/HeartNotification";
import { HeartProvider } from "./pages/Heart/HeartContext.jsx";
import VendorDashboard from "./pages/VendorDashboard/VendorDashboard";
import VendorStorePage from "./pages/VendorStore/VendorStorePage";
import ShopsPage from "./pages/Shops/ShopsPage";
import ProductsPage from "./pages/Products/ProductsPage";
import ListProductsPage from "./pages/ListProducts/ListProductsPage";
import AddProduct from "./pages/AddProduct/AddProduct";

import "./App.css";

function App() {
  return (
    <CartProvider>
      <HeartProvider>
        <BrowserRouter basename="/Luxe-E-commerce/">
          <Routes>
          <Route path="/" element={<MarketplacePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/shop" element={<MarketplacePage />} />
          <Route path="/shops" element={<ShopsPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/list-products" element={<ListProductsPage />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/vendors/:vendorId" element={<VendorStorePage />} />
          <Route path="/vendor/dashboard" element={<VendorDashboard />} />
          <Route path="/cart" element={<CartPage />} />
            <Route path="/user" element={<User />} />
            <Route path="/heart" element={<Heart />} />
          </Routes>

          <CartNotification />
          <HeartNotification />
        </BrowserRouter>
      </HeartProvider>
    </CartProvider>
  );
}

export default App;