import React from "react";
import Ajit from "../../Assets/Images/Ajit-01.svg";
import "./About.css";
import SectionTitle from "../UI/SectionTitle";
const About = (props) => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="featured_img">
          <img src={Ajit} alt="" />
        </div>
        <div className="about-content">
          <SectionTitle className="about-title">About Me</SectionTitle>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            voluptas fugit amet. Eos perferendis assumenda ipsa ex maxime fugit,
            earum vero dolorem adipisci velit enim, atque vel cumque asperiores
            aut. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Cupiditate voluptas fugit amet. Eos perferendis assumenda ipsa ex
            maxime fugit, earum vero dolorem adipisci velit enim, atque vel
            cumque asperiores aut. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Cupiditate voluptas fugit amet. Eos perferendis
            assumenda ipsa ex maxime fugit, earum vero dolorem adipisci velit
            enim, atque vel cumque asperiores aut.
          </p>
          <button className="btn-primary">Download CV</button>
        </div>
      </div>
    </section>
  );
};

export default About;
