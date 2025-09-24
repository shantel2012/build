// src/components/ServiceHero.js
import React from "react";
import "./ServiceHero.css";

const ServiceHero = () => {
  return (
    <section className="service-hero">
      <div className="service-hero-overlay">
        <p className="small-welcome">Welcome to Buildlinks</p>
        <h1 className="service-title">Experts Near <span className="highlight">You</span></h1>
        <p className="service-sub">
          <span className="certified">Certified</span> builders, plumbers, and electricians across <span className="country">Zimbabwe</span> — compare, connect, and hire with confidence.
        </p>
        <div className="hero-actions">
          <button className="explore-btn">Explore more</button>
          <button className="play-btn" aria-label="play">▶</button>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
