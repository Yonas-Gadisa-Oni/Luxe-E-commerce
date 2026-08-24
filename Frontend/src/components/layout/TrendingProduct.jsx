import "../styles/TrendingProduct.css";

function TrendingProduct() {
  return (
    <div className="trending-product">
      <div className="trending-image">
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=200&q=80"
          alt="Chronos Elite shoe"
        />
      </div>

      <div className="trending-info">
        <span className="trending-label">TRENDING NOW</span>

        <h3>Chronos Elite</h3>

        <strong>$389</strong>
      </div>
    </div>
  );
}

export default TrendingProduct;