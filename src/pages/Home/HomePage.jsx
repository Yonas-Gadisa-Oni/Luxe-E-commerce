import AnnouncementBar from "../../components/layout/AnnouncementBar";
import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/layout/Hero";
import BenefitsBar from "../../components/layout/BenefitsBar";
import CategorySection from "../../components/layout/CategorySection";
import TrendingSection from "../../components/layout/TrendingSection"; 
import Footer from "../../components/layout/Footer"

function HomePage() {
  return (
    <div>
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <BenefitsBar />
      <CategorySection />
      <TrendingSection />
      <Footer />
    </div>
  );
}

export default HomePage;