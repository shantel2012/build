import React from "react";
import "./GalleryGrid.css";

const GalleryGrid = () => {
  const galleryImages = [
    "/gallery1.jpg",
    "/gallery2.jpg",
    "/gallery3.jpg",
    "/gallery4.jpg",
    "/gallery5.jpg",
    "/gallery6.jpg",
    "/gallery7.jpg",
    "/gallery8.jpg",
  ];

  return (
    <section className="gallery-section">
      <h2 className="section-title">
        <span>Our</span> Work
      </h2>
      <div className="gallery-grid">
        {galleryImages.map((img, index) => (
          <div className="gallery-card" key={index}>
            <img src={img} alt={`Gallery ${index}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GalleryGrid;