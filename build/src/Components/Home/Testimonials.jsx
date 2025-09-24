import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>Successful Connections</h2>
      <div className="testimonial-card">
        <img src="/client.jpg" alt="Client" />
        <p>
          “Buildlinks made it easy for me to find a reliable electrician for my
          home. Highly recommend!”
        </p>
        <h4>Sarah K.</h4>
      </div>
    </section>
  );
};

export default Testimonials;
