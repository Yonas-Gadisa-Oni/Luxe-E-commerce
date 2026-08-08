import HeroStats from "./HeroStates";
import TrendingProduct from "./TrendingProduct";
import "../styles/Hero.css";

function Hero() {
  return (
    <main className="hero">

      {/* Background shoe */}
      <div className="hero-background-image">
        <img
          src="../../../public/images/background-shoes.avif"
          alt=""
          aria-hidden="true"
        />
      </div>

      {/* Dark overlay */}
      <div className="hero-overlay"></div>

      {/* Hero content */}
      <div className="hero-container">

        <div className="hero-content">

          <div className="hero-badge">
            ✦ New Season Collection - SS26
          </div>

          <h1>
            Wear What
            <span>Defines You</span>
          </h1>

          <p className="hero-description">
            Curated premium products from the world's best
            <br className="desktop-break" />
            brands. Discover new arrivals and timeless classics.
          </p>

          <div className="hero-buttons">
            <a href="#" className="primary-button">
              Shop Collection <span>→</span>
            </a>

            <a href="#" className="secondary-button">
              View Lookbook
            </a>
          </div>

          <div className="hero-divider"></div>

          <HeroStats />

        </div>
      </div>

      <TrendingProduct />

    </main>
  );
}

export default Hero;