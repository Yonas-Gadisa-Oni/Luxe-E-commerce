import { ArrowLeft, Check, ImagePlus, PackagePlus, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

import AnnouncementBar from "../../components/layout/AnnouncementBar";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import "./ListProductsPage.css";

function ListProductsPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="list-products-page">
      <AnnouncementBar />
      <Navbar />
      <main>
        <section className="list-products-hero"><div><Link to="/" className="list-products-back"><ArrowLeft size={15} /> Back to marketplace</Link><p className="list-products-kicker"><PackagePlus size={15} /> SELL ON LUXE</p><h1>Give your best products a better place to be found.</h1><p>Set up your first listing in a few minutes. You stay in control of your work, story, and pricing.</p></div><div className="list-products-perks"><div><ShieldCheck size={19} /><span><strong>Verified community</strong>Trusted by thoughtful shoppers</span></div><div><Check size={19} /><span><strong>Simple listing tools</strong>Make edits whenever you need</span></div></div></section>
        <section className="list-products-content"><div className="listing-intro"><p className="list-products-kicker">NEW PRODUCT LISTING</p><h2>Tell us about your product</h2><p>Clear details help the right customers find it.</p></div>{submitted ? <div className="listing-success"><span><Check size={25} /></span><h2>Listing saved as a draft</h2><p>Your product is ready for a final review before it goes live.</p><div><Link to="/vendor/dashboard">View seller workspace</Link><button type="button" onClick={() => setSubmitted(false)}>Add another product</button></div></div> : <form className="listing-form" onSubmit={handleSubmit}><label>Product name<input required name="name" placeholder="e.g. Hand-finished ceramic vase" /></label><div className="listing-form-row"><label>Category<select required name="category" defaultValue=""><option value="" disabled>Select category</option><option>Performance</option><option>Clothing</option><option>Home</option><option>Accessories</option></select></label><label>Price<input required name="price" type="number" min="0" step="0.01" placeholder="$ 0.00" /></label></div><label>Description<textarea required name="description" rows="5" placeholder="What makes this product worth discovering?" /></label><label className="image-upload"><span><ImagePlus size={22} /><strong>Drop product photos here</strong><small>PNG or JPG up to 5MB</small></span><input name="image" type="file" accept="image/png, image/jpeg" /></label><div className="listing-form-footer"><span>Your listing will be reviewed before publishing.</span><button type="submit">Save product draft</button></div></form>}</section>
      </main>
      <Footer />
    </div>
  );
}

export default ListProductsPage;
