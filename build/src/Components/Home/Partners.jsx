import React from "react";
import "./Partners.css";
import ref from "../../assets/images/ref.jpg";
import pet from "../../assets/images/pet.jpg";
import cop from "../../assets/images/cop.jpg";
import top from "../../assets/images/top.jpg"; 

const Partners = () => {
  return (
    <section className="partners">
      <h2>Where Our Links</h2>
      <div className="partners-logos">
        <img src={ref} alt="Ref" />
        <img src={pet} alt="Pet" />
        <img src={cop} alt="Cop" />
        <img src={top} alt="Top" />
      </div>
    </section>
  );
};

export default Partners;
