import React from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "./Skills.css";
const Skills = () => {
  return (
    <section className="skills-container">
      <div className="skills-heading">
        <h1>Skills</h1>
      </div>
      <div className="skills">
        <div className="skill">
          <CircularProgressbarWithChildren value={60}>
            <div className="skill-title">
              <span>HTML</span>
              <span>80%</span>
            </div>
          </CircularProgressbarWithChildren>
        </div>
        <div className="skill">
          <CircularProgressbarWithChildren value={60}>
            <div className="skill-title">
              <span>CSS</span>
              <span>75%</span>
            </div>
          </CircularProgressbarWithChildren>
        </div>
        <div className="skill">
          <CircularProgressbarWithChildren value={60}>
            <div className="skill-title">
              <span>JavaScript</span>
              <span>75%</span>
            </div>
          </CircularProgressbarWithChildren>
        </div>
        <div className="skill">
          <CircularProgressbarWithChildren value={60}>
            <div className="skill-title">
              <span>React</span>
              <span>75%</span>
            </div>
          </CircularProgressbarWithChildren>
        </div>
        <div className="skill">
          <CircularProgressbarWithChildren value={60}>
            <div className="skill-title">
              <span>Node</span>
              <span>75%</span>
            </div>
          </CircularProgressbarWithChildren>
        </div>
        <div className="skill">
          <CircularProgressbarWithChildren value={60}>
            <div className="skill-title">
              <span>DSA</span>
              <span>35%</span>
            </div>
          </CircularProgressbarWithChildren>
        </div>
        <div className="skill">
          <CircularProgressbarWithChildren value={60}>
            <div className="skill-title">
              <span>Figma</span>
              <span>70%</span>
            </div>
          </CircularProgressbarWithChildren>
        </div>
        <div className="skill">
          <CircularProgressbarWithChildren value={60}>
            <div className="skill-title">
              <span>Illustrator</span>
              <span>50%</span>
            </div>
          </CircularProgressbarWithChildren>
        </div>
      </div>
    </section>
  );
};

export default Skills;
