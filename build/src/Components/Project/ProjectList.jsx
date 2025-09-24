import React from "react";
import "./ProjectList.css";

const ProjectsList = () => {
  const projects = [
    {
      img: "/project1.jpg",
      title: "Modern Cottage Build",
      desc: "A modern family cottage with elegant finishes.",
      price: "$120,000",
    },
    {
      img: "/project2.jpg",
      title: "Urban Apartment Block",
      desc: "Stylish apartments designed for city living.",
      price: "$300,000",
    },
    {
      img: "/project3.jpg",
      title: "Classic Double Storey",
      desc: "Traditional home design with modern upgrades.",
      price: "$220,000",
    },
    {
      img: "/project4.jpg",
      title: "Eco-Friendly Home",
      desc: "Sustainable materials and smart design.",
      price: "$180,000",
    },
  ];

  return (
    <section className="projects-section">
      <h2 className="section-title">Latest Projects</h2>
      <div className="projects-grid">
        {projects.map((p, index) => (
          <div className="project-card" key={index}>
            <img src={p.img} alt={p.title} />
            <div className="project-info">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <span className="price">{p.price}</span>
              <button className="btn">See More</button>
            </div>
          </div>
        ))}
      </div>

      <div className="load-more">
        <button className="btn">Load More</button>
      </div>
    </section>
  );
};

export default ProjectsList;