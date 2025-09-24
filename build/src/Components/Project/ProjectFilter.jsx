import React from "react";
import "./ProjectFilter.css";

const ProjectsFilter = () => {
  return (
    <section className="projects-filter">
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <select>
          <option>Builders</option>
          <option>Plumbers</option>
          <option>Electricians</option>
        </select>
        <select>
          <option>Location</option>
          <option>Harare</option>
          <option>Bulawayo</option>
          <option>Mutare</option>
        </select>
        <button className="btn">Search</button>
      </div>

      <div className="filter-buttons">
        <button className="filter active">All</button>
        <button className="filter">Builders</button>
        <button className="filter">Plumber</button>
        <button className="filter">Company</button>
        <button className="filter">Party home</button>
        <button className="filter">Job</button>
      </div>
    </section>
  );
};

export default ProjectsFilter;