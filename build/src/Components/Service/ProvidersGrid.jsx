// src/components/ProvidersGrid.js
import React from "react";
import "./ProvidersGrid.css";

const ProvidersGrid = () => {
  const items = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    name: `Provider ${i + 1}`,
    role: ["Electrician","Plumber","Builder"][i % 3],
    img: `/provider${(i % 3) + 1}.jpg`
  }));

  return (
    <section className="providers-grid-section">
      <div className="container">
        <h2>Other Featured Providers</h2>
        <div className="providers-grid">
          {items.map(item => (
            <div className="provider-card" key={item.id}>
              <img src={item.img} alt={item.name} />
              <div className="provider-info">
                <h4>{item.name}</h4>
                <p>{item.role}</p>
                <div className="provider-stats">
                  <span>⭐ 4.8</span>
                  <span>•</span>
                  <span>120 jobs</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvidersGrid;
