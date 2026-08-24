import { BarChart3, ChevronRight, Package, Plus, Store, Wallet } from "lucide-react";
import { Link } from "react-router-dom";

import AnnouncementBar from "../../components/layout/AnnouncementBar";
import Navbar from "../../components/layout/Navbar";
import { vendors } from "../../data/marketplaceData";
import "./VendorDashboard.css";

const dashboardProducts = [
  { name: "Aeroform Trainer", category: "Performance", price: "$128", stock: 34, status: "Live" },
  { name: "All-Weather Shell", category: "Outerwear", price: "$210", stock: 12, status: "Low stock" },
  { name: "Recovery Knit", category: "Performance", price: "$76", stock: 0, status: "Draft" },
];

function VendorDashboard() {
  const vendor = vendors[0];

  return (
    <div className="vendor-dashboard-page">
      <AnnouncementBar />
      <Navbar />
      <main className="vendor-dashboard">
        <div className="vendor-dashboard-heading"><div><p className="dashboard-kicker">SELLER WORKSPACE</p><h1>Good morning, Northstar.</h1><p>Keep your shop moving. Here is what needs your attention today.</p></div><Link to="/" className="view-shop-link"><Store size={16} /> View shop</Link></div>
        <section className="dashboard-stats"><div><span className="dashboard-stat-icon blue"><Wallet size={18} /></span><p>Available balance</p><strong>$8,420.50</strong><small>+12.8% this month</small></div><div><span className="dashboard-stat-icon green"><BarChart3 size={18} /></span><p>Store visits</p><strong>12,486</strong><small>+8.4% this month</small></div><div><span className="dashboard-stat-icon orange"><Package size={18} /></span><p>Open orders</p><strong>28</strong><small>6 need shipping</small></div></section>
        <div className="dashboard-grid"><section className="dashboard-panel products-panel"><div className="dashboard-panel-heading"><div><p className="dashboard-kicker">CATALOG</p><h2>Your products</h2></div><button type="button"><Plus size={16} /> Add product</button></div><div className="dashboard-table"><div className="dashboard-table-row dashboard-table-head"><span>Product</span><span>Price</span><span>Stock</span><span>Status</span><span /></div>{dashboardProducts.map((product) => <div className="dashboard-table-row" key={product.name}><span><strong>{product.name}</strong><small>{product.category}</small></span><span>{product.price}</span><span>{product.stock}</span><span className={`product-status ${product.status.toLowerCase().replace(" ", "-")}`}>{product.status}</span><button type="button" aria-label={`Edit ${product.name}`}><ChevronRight size={16} /></button></div>)}</div></section><aside className="dashboard-panel profile-panel"><p className="dashboard-kicker">SHOP PROFILE</p><div className="profile-shop-mark">{vendor.logo}</div><h2>{vendor.name}</h2><p>{vendor.description}</p><div className="profile-detail"><span>Rating</span><strong>{vendor.rating} / 5.0</strong></div><div className="profile-detail"><span>Fulfillment</span><strong>98%</strong></div><button type="button">Edit shop profile <ChevronRight size={15} /></button></aside></div>
        <section className="dashboard-panel getting-started"><div><p className="dashboard-kicker">SELLER CHECKLIST</p><h2>Build trust before your next sale.</h2><p>Complete your shop details so buyers know exactly who they are supporting.</p></div><div className="checklist"><div className="complete"><span>1</span><p>Add your shop story<small>Completed</small></p></div><div className="complete"><span>2</span><p>Verify your payout details<small>Completed</small></p></div><div><span>3</span><p>Upload a shipping policy<small>Recommended</small></p></div></div></section>
      </main>
    </div>
  );
}

export default VendorDashboard;
