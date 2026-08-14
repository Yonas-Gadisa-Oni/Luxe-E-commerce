import { ShoppingCart } from "lucide-react";
import "../styles/Footer.css";

function Footer() {
  const footerColumns = [
    {
      title: "Shop",
      links: [
        "New Arrivals",
        "Best Sellers",
        "Sale",
        "Brands",
        "Gift Cards",
      ],
    },
    {
      title: "Support",
      links: [
        "Help Center",
        "Order Status",
        "Returns",
        "Size Guide",
        "Contact Us",
      ],
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Careers",
        "Press",
        "Sustainability",
        "Affiliates",
      ],
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">

          <a href="/" className="footer-logo">
            <span className="footer-logo-icon">
              <ShoppingCart
                size={16}
                strokeWidth={2.5}
              />
            </span>

            <span>Luxe</span>
          </a>

          <p className="footer-description">
            Premium lifestyle products curated for the
            discerning shopper. Quality guaranteed.
          </p>

          {/* Social Links */}
          <div className="footer-socials">

            <a
              href="#"
              className="footer-social"
              aria-label="Instagram"
            >
              ◎
            </a>

            <a
              href="#"
              className="footer-social"
              aria-label="Facebook"
            >
              f
            </a>

            <a
              href="#"
              className="footer-social"
              aria-label="Twitter"
            >
              𝕏
            </a>

          </div>

        </div>

        {/* Footer Columns */}
        <div className="footer-columns">

          {footerColumns.map((column) => (
            <div
              className="footer-column"
              key={column.title}
            >
              <h3>{column.title}</h3>

              <nav>
                {column.links.map((link) => (
                  <a href="#" key={link}>
                    {link}
                  </a>
                ))}
              </nav>
            </div>
          ))}

        </div>

      </div>
    </footer>
  );
}

export default Footer;