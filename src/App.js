import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Project from "./Components/Projects/Project";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Project />
    </>
  );
};

export default App;
