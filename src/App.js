import React from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skill from "./components/Skill/Skill";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <>
      <Header />
      <About />
      <Skill />
      <Project />
      <Contact />
    </>
  );
};

export default App;
