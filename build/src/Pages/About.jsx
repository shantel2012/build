import React from "react";
// import AboutSection from "../components/AboutSection";
// import MissionSection from "../components/MissionSection";
// import Testimonials from "../components/Testimonials";
// import JobRequestForm from "../components/JobRequestForm";
import FeaturedProviders from "../Components/AboutUs/FeaturedPoviders";

export default function About(){
  return (
    <div style={{paddingTop:80}}>
      <FeaturedProviders />
      {/* <MissionSection />
      <Testimonials />
      <JobRequestForm /> */}
    </div>
  );
}