import React from "react";
import ProjectHero from "../Components/Project/ProjectHero";
import ProjectsList from "../Components/Project/ProjectList";
import ProjectsFilter from "../Components/Project/ProjectFilter";


const ProjectsPage = () => {
  return (
    <div>
      <ProjectHero />
      <ProjectsList />
      <ProjectsFilter />
    </div>
  );
};
export default ProjectsPage;