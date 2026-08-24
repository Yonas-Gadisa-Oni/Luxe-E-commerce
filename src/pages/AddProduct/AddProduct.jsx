import { ArrowLeft, ImagePlus, PackagePlus, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import "./AddProduct.css";

function AddProduct() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="add-product-page">
      <div className="add-product-backdrop" aria-hidden="true" />
      <section className="add-product-modal" aria-labelledby="add-product-title">
        <div className="add-product-modal-header">
          <Link to="/" className="add-product-back"><ArrowLeft size={15} /> Back to marketplace</Link>
          <button type="button" className="add-product-close" onClick={() => navigate(-1)} aria-label="Close add product form"><X size={19} /></button>
        </div>
        <div className="add-product-heading">
          <span className="add-product-icon"><PackagePlus size={20} /></span>
          <div><p>NEW PRODUCT</p><h1 id="add-product-title">Tell us about your product</h1><span>Give shoppers the details they need to discover it.</span></div>
        </div>
        {submitted ? <div className="add-product-success"><strong>Your product draft is saved.</strong><span>We will review the details before it goes live.</span><button type="button" onClick={() => setSubmitted(false)}>Add another product</button></div> : <form className="add-product-form" onSubmit={handleSubmit}>
          <label>Product name<input required name="name" placeholder="e.g. Hand-finished ceramic vase" /></label>
          <div className="add-product-row"><label>Category<select required name="category" defaultValue=""><option value="" disabled>Select category</option><option>Performance</option><option>Clothing</option><option>Home</option><option>Accessories</option></select></label><label>Price<input required name="price" type="number" min="0" step="0.01" placeholder="$ 0.00" /></label></div>
          <label>Description<textarea required name="description" rows="4" placeholder="What makes this product worth discovering?" /></label>
          <label className="add-product-upload"><ImagePlus size={20} /><span><strong>Add product photo</strong><small>PNG or JPG up to 5MB</small></span><input name="image" type="file" accept="image/png, image/jpeg" /></label>
          <button className="add-product-submit" type="submit">Save product draft</button>
        </form>}
      </section>
    </main>
  );
}

export default AddProduct;