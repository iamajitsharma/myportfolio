import React from "react";
import { LuView } from "react-icons/lu";
import { Link } from "react-router-dom";

const ProjectCard = ({ title, image, url }) => {
  return (
    <div className="w-full h-64 p-4 relative overflow-hidden  hover:bg-slate-800/80 hover:transition-all hover:ease-in-out hover:duration-500 hover:delay-150">
      <img
        src={image}
        alt=""
        className="
        absolute
        top-0 left-0
        right-0
        bottom-0 
        object-cover 
        w-full h-full 
        object-top
        -z-10
        
        "
      />
      <div
        className="
      opacity-0
      border-[1px]
    border-slate-200 
      w-full h-full 
      flex 
      flex-col
      gap-2
      items-center 
      justify-center z-50
      transition-all
      hover:opacity-100
      hover:ease-in-out
      hover:duration-500
      hover:delay-200
      "
      >
        <a href={url} target="_blank">
          <span className="flex items-center justify-center w-14 h-14 bg-gray-300/50 rounded-full p-1">
            <LuView className="text-4xl text-yellow-400" />
          </span>
        </a>

        <span className="text-white">{title}</span>
      </div>
    </div>
  );
};

export default ProjectCard;
