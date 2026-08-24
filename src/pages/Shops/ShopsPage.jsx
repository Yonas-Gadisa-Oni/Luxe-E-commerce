import { ArrowRight, MapPin, Star, Store } from "lucide-react";
import { Link } from "react-router-dom";

import AnnouncementBar from "../../components/layout/AnnouncementBar";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { vendors } from "../../data/marketplaceData";
import "./ShopsPage.css";

function ShopsPage() {
  return (
    <div className="directory-page">
      <AnnouncementBar />
      <Navbar />
      <main>
        <section className="directory-hero"><div><p className="directory-kicker"><Store size={15} /> THE LUXE DIRECTORY</p><h1>Meet the shops behind the things you love.</h1><p>Browse independent product makers, thoughtful studios, and small teams building something worth bringing home.</p></div></section>
        <section className="directory-content"><div className="directory-heading"><div><p className="directory-kicker">INDEPENDENT COLLECTIONS</p><h2>Find your next favorite shop</h2></div><span>{vendors.length} featured shops</span></div><div className="shop-directory-grid">{vendors.map((vendor) => <article className="directory-shop-card" key={vendor.id}><div className="directory-shop-image"><img src={vendor.image} alt={vendor.name} /><span style={{ backgroundColor: vendor.accent }}>{vendor.logo}</span></div><div className="directory-shop-body"><div className="directory-shop-meta"><span>{vendor.category}</span><strong><Star size={13} fill="currentColor" /> {vendor.rating}</strong></div><h3>{vendor.name}</h3><p>{vendor.description}</p><div className="directory-shop-location"><MapPin size={14} /> {vendor.location}<span>{vendor.sales} sales</span></div><Link to={`/vendors/${vendor.id}`}>Visit shop <ArrowRight size={15} /></Link></div></article>)}</div></section>
        <section className="directory-bottom-cta"><div><p className="directory-kicker">BUILD YOUR OWN CORNER</p><h2>Have products people should discover?</h2><p>Create a shop on Luxe and reach a community that values independent work.</p></div><Link to="/list-products">Start listing <ArrowRight size={16} /></Link></section>
      </main>
      <Footer />
    </div>
  );
}

export default ShopsPage;
