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
  const cssProjects = formattedProjects
    .filter((project) => project.type === "css")
    .sort((a, b) => a.order - b.order);
  const fullstackProjects = formattedProjects
    .filter((p) => p.type === "fullstack")
    .sort((a, b) => a.order - b.order);

  return (
    <>
      <Hero />
      <Projects title="CSS projects" projects={cssProjects} />
      <Projects title="basic react projects" projects={basicProjects} />
      <Projects title="MEARN projects" projects={fullstackProjects} />
    </>
  );
};

export default HomePage;