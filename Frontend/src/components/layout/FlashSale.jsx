import { useEffect, useState } from "react";
import "../styles/FlashSale.css";

function FlashSale() {
  const products = [
    {
      id: 1,
      brand: "Nike",
      name: "Air Precision Runner",
      image: "https://images.unsplash.com/photo-1625860191460-10a66c7384fb?w=600&h=600&fit=crop&auto=format",
      price: 129,
      oldPrice: 179,
      discount: "-28%",
    },
    {
      id: 2,
      brand: "Adidas",
      name: "Shadow Series Sneaker",
      image: "https://images.unsplash.com/photo-1710553455491-482fa1751dc4?w=600&h=600&fit=crop&auto=format",
      price: 149,
      oldPrice: 199,
      discount: "-25%",
    },
    {
      id: 3,
      brand: "Nike",
      name: "Aurora Low-Top",
      image: "https://images.unsplash.com/photo-1757485945255-4cc5ab1813a8?w=600&h=600&fit=crop&auto=format",
      price: 95,
      oldPrice: 130,
      discount: "-27%",
    },
  ];

  /*
    Countdown starts at 5 hours, 38 minutes and 15 seconds.

    You can change this value if you want the sale
    to last longer.
  */
  const [timeLeft, setTimeLeft] = useState({
    hours: 5,
    minutes: 38,
    seconds: 15,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((previousTime) => {
        let { hours, minutes, seconds } = previousTime;

        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;

          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;

            if (hours > 0) {
              hours -= 1;
            }
          }
        }

        return {
          hours,
          minutes,
          seconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  /*
    Makes single digit numbers look like:

    05
    08
    09

    instead of:

    5
    8
    9
  */
  const formatTime = (number) => {
    return String(number).padStart(2, "0");
  };

  return (
    <section className="flash-sale">
      <div className="flash-sale-container">

        {/* =========================
            HEADER
        ========================= */}

        <div className="flash-sale-header">

          <div className="flash-sale-title">

            <span className="flash-sale-badge">
              <span className="flash-icon">ϟ</span>
              Flash Sale
            </span>

            <h2>Today's Best Deals</h2>

            <p>
              Exclusive discounts — limited time only
            </p>

          </div>

          {/* =========================
              COUNTDOWN
          ========================= */}

          <div className="flash-countdown">

            <div className="countdown-item">
              <div className="countdown-number">
                {formatTime(timeLeft.hours)}
              </div>

              <span>H</span>
            </div>

            <div className="countdown-item">
              <div className="countdown-number">
                {formatTime(timeLeft.minutes)}
              </div>

              <span>M</span>
            </div>

            <div className="countdown-item">
              <div className="countdown-number">
                {formatTime(timeLeft.seconds)}
              </div>

              <span>S</span>
            </div>

          </div>

        </div>

        {/* =========================
            PRODUCTS
        ========================= */}

        <div className="flash-products">

          {products.map((product) => (
            <article
              className="flash-product-card"
              key={product.id}
            >

              {/* Product Image */}
              <div className="flash-product-image">

                <img
                  src={product.image}
                  alt={product.name}
                />

              </div>

              {/* Product Information */}
              <div className="flash-product-info">

                <span className="flash-product-brand">
                  {product.brand}
                </span>

                <h3>
                  {product.name}
                </h3>

                <div className="flash-product-bottom">

                  <div className="flash-product-price">

                    <span className="current-price">
                      ${product.price}
                    </span>

                    <span className="old-price">
                      ${product.oldPrice}
                    </span>

                  </div>

                  <span className="discount">
                    {product.discount}
                  </span>

                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FlashSale;