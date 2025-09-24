import React from "react";
import "./Hero.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <p className="welcome">Welcome to Buildlinks</p>
          <h1>
            Experts Near <span className="highlight">You</span>
          </h1>
          <p className="subtext">
            <span className="blue">Certified</span> builders, plumbers, and
            electricians across <span className="blue">Zimbabwe</span> — compare,
            connect, and hire with confidence.
          </p>
          <div className="hero-buttons">
            <button className="explore-btn">Explore more</button>
            <button className="play-btn">▶</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
