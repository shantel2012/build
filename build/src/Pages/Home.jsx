import React from "react";
import Hero from "../Components/Hero";
import SearchBar from "../Components/Home/SearchBar";
import Partners from "../Components/Home/Partners";
import WhyChooseUs from "../Components/Home/WhyChooseUs";
import Providers from "../Components/Home/Providers";
import Testimonials from "../Components/Home/Testimonials";
import JobRequestForm from "../Components/Home/JobRequestForm";
import CorePrinciple from "../Components/Home/CorePrinciple";

const Home = () => {
  return (
    <div>
      <Hero />
      <SearchBar />
      <Partners />
      <WhyChooseUs />
      <CorePrinciple />
      <Providers />
      <Testimonials />
      <JobRequestForm />
    </div>
  );
};

export default Home;
