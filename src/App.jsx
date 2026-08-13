import { BrowserRouter, Routes, Route } from "react-router-dom";


import AnnouncementBar from "./components/layout/AnnouncementBar";
import Navbar from "./components/layout/Navbar";
import Cart from "./components/layout/Cart";
import Hero from "./components/layout/Hero";
import BenefitsBar from "./components/layout/BenefitsBar";
import CategorySection from "./components/layout/CategorySection";
import TrendingSection from "./components/layout/TrendingSection"; 

import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AnnouncementBar />

        <div className = "nav">
          <Navbar />
          <Routes>

            
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
        <Hero />
        <BenefitsBar />
        <CategorySection />
        <TrendingSection />
      
    </div>
  );
}

export default App;