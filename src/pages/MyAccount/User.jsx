import { useState } from "react";
import {
  Bell,
  CreditCard,
  Heart,
  MapPin,
  Package,
  Settings,
  Star,
  UserRound,
} from "lucide-react";
import "./User.css";

import AnnouncementBar from "../../components/layout/AnnouncementBar";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

function MyAccount() {
  // =========================================
  // USER DATA
  // =========================================

  const [user, setUser] = useState({
    firstName: "Yonas",
    lastName: "Gadisa",
    email: "yonasgadisa2@gmail.com",
    phone: "+251947292943",
    memberSince: "2024",
    image: `${import.meta.env.BASE_URL}images/photo.jpg`,
  });

  // =========================================
  // FORM STATE
  // =========================================

  const [formData, setFormData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phone: user.phone,
  });

  const [message, setMessage] = useState("");

  // =========================================
  // SIDEBAR ITEMS
  // =========================================

  const menuItems = [
    {
      id: "profile",
      icon: UserRound,
      label: "Profile",
      active: true,
    },
    {
      id: "orders",
      icon: Package,
      label: "Orders",
      count: 4,
    },
    {
      id: "wishlist",
      icon: Heart,
      label: "Wishlist",
    },
    {
      id: "addresses",
      icon: MapPin,
      label: "Addresses",
    },
    {
      id: "payment",
      icon: CreditCard,
      label: "Payment",
    },
    {
      id: "notifications",
      icon: Bell,
      label: "Notifications",
    },
    {
      id: "settings",
      icon: Settings,
      label: "Settings",
    },
  ];

  // =========================================
  // HANDLE INPUT
  // =========================================

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  // =========================================
  // SAVE CHANGES
  // =========================================

  const handleSubmit = (event) => {
    event.preventDefault();

    setUser((previousUser) => ({
      ...previousUser,
      ...formData,
    }));

    setMessage("Changes saved successfully.");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  // =========================================
  // PROFILE PHOTO
  // =========================================

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    const imageUrl = URL.createObjectURL(file);

    setUser((previousUser) => ({
      ...previousUser,
      image: imageUrl,
    }));
  };

  return (
    <>
      <AnnouncementBar />
      <Navbar />
      

      <main className="account-page">

      {/* =====================================
          ACCOUNT HEADER
      ===================================== */}

      <section className="account-header">

        <div className="account-header-container">

          {/* Breadcrumb */}
          <div className="account-breadcrumb">
            <span>Home</span>
            <span className="breadcrumb-divider">/</span>
            <strong>My Account</strong>
          </div>

          {/* User Header */}
          <div className="account-user-header">

            <img
              src={user.image}
              alt={`${user.firstName} ${user.lastName}`}
              className="account-header-avatar"
            />

            <div className="account-user-info">

              <h1>
                {user.firstName} {user.lastName}
              </h1>

              <p>
                {user.email}
                <span> · </span>
                Member since {user.memberSince}
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          MAIN ACCOUNT AREA
      ===================================== */}

      <section className="account-content">

        <div className="account-content-container">

          {/* =================================
              SIDEBAR
          ================================= */}

          <aside className="account-sidebar">

            <nav className="account-navigation">

              {menuItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`account-menu-item ${
                    item.active ? "active" : ""
                  }`}
                >

                  <span className="account-menu-icon">
                    <item.icon size={16} strokeWidth={1.8} />
                  </span>

                  <span className="account-menu-label">
                    {item.label}
                  </span>

                  {item.count && (
                    <span className="account-menu-count">
                      {item.count}
                    </span>
                  )}

                </button>
              ))}

            </nav>

          </aside>


          {/* =================================
              RIGHT SIDE
          ================================= */}

          <div className="account-main">

            {/* =================================
                PERSONAL INFORMATION
            ================================= */}

            <section className="personal-card">

              <h2>Personal Information</h2>

              {/* Profile Photo */}
              <div className="profile-photo-section">

                <img
                  src={user.image}
                  alt={`${user.firstName} ${user.lastName}`}
                  className="profile-main-avatar"
                />

                <div className="profile-photo-actions">

                  <label
                    htmlFor="profile-photo"
                    className="change-photo-button"
                  >
                    Change Photo
                  </label>

                  <input
                    id="profile-photo"
                    type="file"
                    accept="image/png, image/jpeg"
                    onChange={handlePhotoChange}
                    hidden
                  />

                  <span>
                    JPG, PNG max 5MB
                  </span>

                </div>

              </div>


              {/* Form */}
              <form
                className="account-form"
                onSubmit={handleSubmit}
              >

                {/* First Name */}
                <div className="form-group">

                  <label htmlFor="firstName">
                    First Name
                  </label>

                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                  />

                </div>


                {/* Last Name */}
                <div className="form-group">

                  <label htmlFor="lastName">
                    Last Name
                  </label>

                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                  />

                </div>


                {/* Email */}
                <div className="form-group">

                  <label htmlFor="email">
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />

                </div>


                {/* Phone */}
                <div className="form-group">

                  <label htmlFor="phone">
                    Phone
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                  />

                </div>


                {/* Save */}
                <div className="form-actions">

                  <button
                    type="submit"
                    className="save-button"
                  >
                    Save Changes
                  </button>

                  {message && (
                    <span className="save-message">
                      {message}
                    </span>
                  )}

                </div>

              </form>

            </section>


            {/* =================================
                STATISTICS
            ================================= */}

            <section className="account-statistics">

              {/* Orders */}
              <div className="stat-card">

                <div className="stat-icon">
                  <Package size={19} strokeWidth={1.8} />
                </div>

                <strong>24</strong>

                <span>Total Orders</span>

              </div>


              {/* Wishlist */}
              <div className="stat-card">

                <div className="stat-icon">
                  <Heart size={19} strokeWidth={1.8} />
                </div>

                <strong>0</strong>

                <span>Wishlist Items</span>

              </div>


              {/* Points */}
              <div className="stat-card">

                <div className="stat-icon">
                  <Star size={19} strokeWidth={1.8} />
                </div>

                <strong>1,240</strong>

                <span>Points Earned</span>

              </div>

            </section>

          </div>

        </div>

      </section>

      </main>
      <Footer />
    </>
    
  );
}

export default MyAccount;