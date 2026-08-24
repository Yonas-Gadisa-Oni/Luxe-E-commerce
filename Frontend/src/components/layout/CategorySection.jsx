import "../styles/CatagorySection.css";

function CategorySection() {
  const categories = [
    {
      name: "Footwear",
      items: "284 items",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=85",
    },
    {
      name: "Accessories",
      items: "173 items",
      image:
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=700&q=85",
    },
    {
      name: "Clothing",
      items: "512 items",
      image:
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=700&q=85",
    },
    {
      name: "Electronics",
      items: "98 items",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=700&q=85",
    },
    {
      name: "Sports",
      items: "341 items",
      image:
        "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=700&q=85",
    },
    {
      name: "Lifestyle",
      items: "207 items",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=700&q=85",
    },
  ];

  return (
    <section className="category-section">
      <div className="section-container">

        <div className="section-heading">
          <div>
            <span className="section-eyebrow blue">
              EXPLORE
            </span>

            <h2>Shop by Category</h2>
          </div>

          <a href="#" className="view-all">
            View All <span>›</span>
          </a>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <a
              href="#"
              className="category-card"
              key={category.name}
            >
              <img
                src={category.image}
                alt={category.name}
              />

              <div className="category-overlay"></div>

              <div className="category-info">
                <h3>{category.name}</h3>
                <p>{category.items}</p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

export default CategorySection;