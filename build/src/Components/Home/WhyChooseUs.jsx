import React from "react";
import "./WhyChooseUs.css";
import il from "../../assets/images/il.png"; // single main image
import aya from "../../assets/images/aya.jpg"; // Ayanda's image

const AboutSection = () => {
  return (
     <section className="about">
        <div className="about-img">
          <img src="../src/assets/Group 950.png" alt="About Buildlink" />
        </div>
      
        <div className="about-text">
          <span className="tag">About us</span>
          <h2 className="title">
            Who we <span>are</span>
          </h2>
          <p>
            At <strong>Buildlink Zimbabwe</strong>, we believe in building stronger communities—
            one project at a time. Whether you’re constructing a new home,
            fixing a burst pipe, or rewiring your office.
          </p>
          <ul className="features-list">
            <li>Our services are cheap and we accept credit discount. Prices that are affordable for you.</li>
            <li>We provide reliable plumbing and electrical solutions with experience you can trust.</li>
            <li>Affordable pricing while maintaining quality and customer satisfaction.</li>
          </ul>
          <a href="#" className="btn-read">Read more</a>
      
          <div className="author">
            <img src="https://via.placeholder.com/40" alt="Ayanda Masango" />
            <div className="author-info">
              <h5>Ayanda Masango</h5>
              <small>Call our office for help</small>
            </div>
          </div>
        </div>
      </section>
  );
};

export default AboutSection;
