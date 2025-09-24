// src/components/ServiceFilters.js
import React from "react";
import "./ServiceFilters.css";

const ServiceFilters = () => {
  return (
    <div className="service-filters-wrapper">
      <div className="filter-card">
        <input type="search" placeholder="Search" />
        <select aria-label="Category">
          <option>Builders</option>
          <option>Plumbers</option>
          <option>Electricians</option>
        </select>
        <select aria-label="Location">
          <option>Harare</option>
          <option>Bulawayo</option>
          <option>Mutare</option>
        </select>
        <button className="filter-search">Search</button>
      </div>
    </div>
  );
};

export default ServiceFilters;
