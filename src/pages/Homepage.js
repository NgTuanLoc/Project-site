import React from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import useFetch from "../hooks/useFetch";

const HomePage = () => {
  const { data: projects } = useFetch();

  const basicProjects = projects
    .filter((project) => project.type === "basic")
    .sort((a, b) => a.order - b.order);
  const cssProjects = projects
    .filter((project) => project.type === "css")
    .sort((a, b) => a.order - b.order);
  const fullstackProjects = projects
    .filter((project) => project.type === "fullstack")
    .sort((a, b) => a.order - b.order);
  return (
    <>
      <Hero />
      <Projects title="CSS projects" projects={cssProjects} />
      <Projects title="basic react projects" projects={basicProjects} />
      <Projects title="MERN projects" projects={fullstackProjects} />
    </>
  );
};

export default HomePage;
