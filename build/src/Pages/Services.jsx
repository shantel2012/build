// src/pages/Service.js
import React from "react";
import ServiceHero from "../components/Service/ServiceHero";
import ServiceFilters from "../components/Service/ServiceFilters";
import TopRatedProviders from "../Components/Service/TopRatedProvider";
import ProvidersGrid from "../Components/Service/ProvidersGrid";

const Service = () => {
  return (
    <div>
      <ServiceHero />
      <ServiceFilters />
      <TopRatedProviders />
      <ProvidersGrid />
      {/* Footer is rendered app-wide, no need to include here */}
    </div>
  );
};

export default Service;
