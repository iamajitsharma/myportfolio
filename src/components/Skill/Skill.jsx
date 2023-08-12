import React from "react";
import Container from "../UI/Container";
import Heading from "../UI/Heading";
import SkillBar from "../UI/SkillBar";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaReact, FaCss3 } from "react-icons/fa";
import { SiRedux, SiJavascript, SiTailwindcss, SiFigma } from "react-icons/si";
import { GoInfinity } from "react-icons/go";

const skills = [
  { skill: "React", value: 70, maxValue: 100, icon: <FaReact /> },
  { skill: "Redux", value: 70, maxValue: 100, icon: <SiRedux /> },
  { skill: "JavaScript", value: 70, maxValue: 100, icon: <SiJavascript /> },
  { skill: "HTML", value: 90, maxValue: 100, icon: <AiOutlineHtml5 /> },
  { skill: "CSS", value: 80, maxValue: 100, icon: <FaCss3 /> },
  { skill: "Tailwind CSS", value: 90, maxValue: 100, icon: <SiTailwindcss /> },
  { skill: "Figma", value: 75, maxValue: 100, icon: <SiFigma /> },
  { skill: "DSA", value: 30, maxValue: 100, icon: <GoInfinity /> },
];

const Skill = () => {
  return (
    <section>
      <Heading heading="Skill" />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {skills.map((item) => (
            <SkillBar
              key={item.skill}
              skill={item.skill}
              value={item.value}
              maxValue={item.maxValue}
              icon={item.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skill;
