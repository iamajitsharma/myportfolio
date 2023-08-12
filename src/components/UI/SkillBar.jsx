import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const SkillBar = ({ skill, value, maxValue, icon }) => {
  return (
    <div className="bg-gray-600/40 h-24 p-2 rounded-md my-2">
      <div className="flex items-center justify-between text-slate-100">
        <span className="text-sm md:text-base">{skill}</span>
        <span className="text-4xl ">{icon}</span>
      </div>
      <ProgressBar
        completed={value}
        maxCompleted={maxValue}
        bgColor="white"
        baseBgColor="gray"
        className="py-4 text-black"
        labelColor="#2A2C39"
        animateOnRender={true}
        transitionDuration="2s"
        initCompletedOnAnimation={10}
        transitionTimingFunction="ease-in"
        height="16px"
      />
    </div>
  );
};

export default SkillBar;
