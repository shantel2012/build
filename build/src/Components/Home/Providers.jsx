import React from "react";
import "./Providers.css";

const Providers = () => {
  return (
    <section className="providers">
      <h2>Meet Top Rated Providers</h2>
      <div className="provider-grid">
        <div className="provider-card">
          <img src="/provider1.jpg" alt="Provider 1" />
          <h3>John Doe</h3>
          <p>Electrician</p>
        </div>
        <div className="provider-card">
          <img src="/provider2.jpg" alt="Provider 2" />
          <h3>Jane Smith</h3>
          <p>Plumber</p>
        </div>
        <div className="provider-card">
          <img src="/provider3.jpg" alt="Provider 3" />
          <h3>Michael Lee</h3>
          <p>Builder</p>
        </div>
      </div>
    </section>
  );
};

export default Providers;
