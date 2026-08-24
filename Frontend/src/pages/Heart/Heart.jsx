import { Heart as HeartIcon, ShoppingBag, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

import AnnouncementBar from "../../components/layout/AnnouncementBar";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { useCart } from "../Cart/CartContext";
import { useHeart } from "./useHeart";
import "./Heart.css";

function Heart() {
  const { favoriteItems, removeFromFavorites } = useHeart();
  const { addToCart } = useCart();

  return (
    <div className="heart-page">
      <AnnouncementBar />
      <Navbar />

      <main>
        <section className="heart-header">
          <div>
            <p className="heart-eyebrow"><HeartIcon size={15} fill="currentColor" /> YOUR COLLECTION</p>
            <h1>Favorite items <span>({favoriteItems.length})</span></h1>
            <p>Keep the pieces you love close by.</p>
          </div>
        </section>

        {favoriteItems.length === 0 ? (
          <section className="heart-empty">
            <HeartIcon size={42} strokeWidth={1.4} />
            <h2>Your favorites are waiting</h2>
            <p>Tap the heart on any product to save it here.</p>
            <Link to="/">Discover products</Link>
          </section>
        ) : (
          <section className="heart-content">
            <div className="heart-grid">
              {favoriteItems.map((item) => (
                <article className="heart-card" key={item.id}>
                  <div className="heart-card-image">
                    <img src={item.image} alt={item.name} />
                    <button type="button" onClick={() => removeFromFavorites(item.id)} aria-label={`Remove ${item.name} from favorites`}>
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <div className="heart-card-info">
                    <p>{item.brand || item.category || "Luxe marketplace"}</p>
                    <h2>{item.name}</h2>
                    <strong>{item.price}</strong>
                    <button type="button" onClick={() => addToCart(item)}><ShoppingBag size={16} /> Add to bag</button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Heart;
