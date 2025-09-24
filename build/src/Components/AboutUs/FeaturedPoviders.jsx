import React from "react";
import "./FeaturedProviders.css";

const FeaturedProviders = () => {
  return (
    <div className="featured-page">
      {/* Hero Section */}
      <header className="hero">
        <div className="overlay">
          <nav className="navbar">
            <div className="logo">Buildlinks</div>
            <ul className="nav-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
            <button className="register-btn">Register</button>
          </nav>
          <div className="hero-content">
            <h2>
              Featured <span>Providers</span>
            </h2>
            <p>Find reliable services near you with Buildlinks</p>
          </div>
        </div>
      </header>

      {/* Search Filters */}
      <section className="search-filters">
        <input type="text" placeholder="Search..." />
        <input type="text" placeholder="Builders" />
        <input type="text" placeholder="Plumber" />
        <input type="text" placeholder="Location" />
        <button className="search-btn">Search</button>
        <div className="tags">
          <button>All</button>
          <button>Builders</button>
          <button>Plumber</button>
          <button>Company</button>
          <button>Party Home</button>
        </div>
      </section>

      {/* Featured Logos */}
      <section className="featured-logos">
        <img src="/images/logo1.png" alt="Company 1" />
        <img src="/images/logo2.png" alt="Company 2" />
        <img src="/images/logo3.png" alt="Company 3" />
        <img src="/images/logo4.png" alt="Company 4" />
      </section>

      {/* Search Results */}
      <section className="search-results">
        <div className="section-header">
          <h3>Search Results</h3>
          <a href="#">More</a>
        </div>
        <div className="results-grid">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="card">
              <img src={`/images/provider${i+1}.jpg`} alt="Provider" />
              <h4>Provider Name</h4>
              <p>Category | Location</p>
              <button>View Profile</button>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Projects */}
      <section className="latest-projects">
        <h3>Latest Projects</h3>
        <div className="projects-grid">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="project-card">
              <img src={`/images/project${i+1}.jpg`} alt="Project" />
              <h4>Modern Cottage Build</h4>
              <p>High-quality building work for clients across Zimbabwe</p>
              <button>See More</button>
            </div>
          ))}
        </div>
      </section>
      </div>
  );
};

export default FeaturedProviders;