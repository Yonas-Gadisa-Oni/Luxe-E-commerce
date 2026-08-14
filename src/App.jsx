import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home/HomePage"
import CartPage from "./pages/Cart/CartPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename="/Luxe-E-commerce/">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;