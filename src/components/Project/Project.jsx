import React from "react";
import Container from "../UI/Container";
import Heading from "../UI/Heading";
import ProjectCard from "../UI/ProjectCard";

const projects = [
  {
    title: "Goa Adventure",
    image: "/goaadventure.jpg",
    url: "https://travel-website-dun-sigma.vercel.app/",
  },
  {
    title: "Kitchen Master",
    image: "/kitchenmaster.jpg",
    url: "https://iamajitsharma.github.io/kitchenmaster/",
  },
  {
    title: "Bizland Clone",
    image: "/bizland.jpg",
    url: "https://iamajitsharma.github.io/bizland-clone/",
  },
];

const Project = () => {
  return (
    <section>
      <Heading heading="Projects" />
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full items-center justify-items-center mt-14 overflow-hidden">
          {projects.map((item) => (
            <ProjectCard title={item.title} image={item.image} url={item.url} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Project;
