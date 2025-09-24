// src/components/TopRatedProviders.js
import React from "react";
import "./TopRatedProvider.css";

const TopRatedProviders = () => {
  const providers = [
    { id: 1, name: "Bright Electricals", role: "Electrician", img: "/provider1.jpg" },
    { id: 2, name: "Aqua Plumb", role: "Plumber", img: "/provider2.jpg" },
    { id: 3, name: "Solid Builders", role: "Builder", img: "/provider3.jpg" },
  ];

  return (
    <section className="top-rated">
      <div className="container">
        <h2>Meet Top Rated Providers</h2>
        <p className="muted">Top rated professionals in your area — verified and reviewed.</p>
        <div className="top-grid">
          {providers.map(p => (
            <article key={p.id} className="top-card">
              <img src={p.img} alt={p.name} />
              <div className="top-meta">
                <h3>{p.name}</h3>
                <p>{p.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRatedProviders;
