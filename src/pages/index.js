import React from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import data from "../data/data";

const HomePage = () => {
  const formattedProjects = data.map((project) => {
    return {
      id: project.id,
      ...project.data,
      image: project.image,
    };
  });

  const basicProjects = formattedProjects
    .filter((project) => project.type === "basic")
    .sort((a, b) => a.order - b.order);
  const advancedProjects = formattedProjects
    .filter((project) => project.type === "advanced")
    .sort((a, b) => a.order - b.order);
  const finalProjects = formattedProjects
    .filter((p) => p.type === "final")
    .sort((a, b) => a.order - b.order);

  return (
    <>
      <Hero />
      <Projects title="basic projects" projects={basicProjects} />
      {/* <Projects title="course exclusive" projects={advancedProjects} /> */}
      {/* <Projects title="large-scale projects" projects={finalProjects} /> */}
    </>
  );
};

export default HomePage;
