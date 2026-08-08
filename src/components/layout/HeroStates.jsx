import "../styles/HeroStates.css";

function Hero() {
  const stats = [
    {
      value: "50K+",
      label: "Happy Customers",
    },
    {
      value: "4.9★",
      label: "Average Rating",
    },
    {
      value: "Free",
      label: "Returns Always",
    },
  ];

  return (
    <div className="hero-stats">
      {stats.map((stat) => (
        <div className="stat-item" key={stat.label}>
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </div>
  );
}

export default Hero;