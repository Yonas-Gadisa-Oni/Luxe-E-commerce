import AnnouncementBar from "./components/layout/AnnouncementBar";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/layout/Hero";
import BenefitsBar from "./components/layout/BenefitsBar";
import CategorySection from "./components/layout/CategorySection";
import TrendingSection from "./components/layout/TrendingSection"; 

import "./App.css";

function App() {
  return (
    <div className="app">
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <BenefitsBar />
      <CategorySection />
      <TrendingSection />
    </div>
  );
}

export default App;