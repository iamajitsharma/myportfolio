import React from "react";
import SectionTitle from "../UI/SectionTitle";
import projects from "../../Assets/Data/Project";
import ProjectCard from "../UI/ProjectCard";
import "./Project.css";

const Project = (props) => {
  return (
    <section className="project">
      <SectionTitle>Project</SectionTitle>

      <div className="projects-grid">
        {projects.map((item) => (
          <ProjectCard projects={item} />
        ))}
      </div>
    </section>
  );
};

export default Project;
