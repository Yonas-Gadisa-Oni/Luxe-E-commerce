import {
  Truck,
  RotateCcw,
  LockKeyhole,
  Trophy,
} from "lucide-react";

import "../styles/BenefitsBar.css";

function BenefitsBar() {
  const benefits = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "On orders over $75",
    },
    {
      icon: RotateCcw,
      title: "Free Returns",
      description: "30-day return policy",
    },
    {
      icon: LockKeyhole,
      title: "Secure Payments",
      description: "SSL encrypted checkout",
    },
    {
      icon: Trophy,
      title: "Premium Quality",
      description: "Authenticity guaranteed",
    },
  ];

  return (
    <section className="benefits-bar">
      <div className="benefits-container">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <div className="benefit-item" key={benefit.title}>
              <div className="benefit-icon">
                <Icon size={20} />
              </div>

              <div className="benefit-content">
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default BenefitsBar;