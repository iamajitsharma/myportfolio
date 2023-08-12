import React from "react";

const Heading = ({ heading, large }) => {
  return (
    <div className="relative w-full text-center py-4">
      <h3
        className="
      text-yellow-400 
        text-xl
        uppercase 
        w-full
        before:w-36
        before:h-[2px] 
      before:bg-gray-50/30 
        before:absolute 
        before:block 
        before:transform 
        before:-translate-x-1/2 
        before:left-1/2 
        before:top-1/2 
        before:my-8
        md:before:my-4
        after:w-20
        after:h-[2px] 
      	after:bg-yellow-400 
        after:absolute 
        after:block 
        after:transform 
        after:-translate-x-1/2 
        after:left-1/2 
        after:top-1/2 
        after:my-8
        md:after:my-4
        
        "
      >
        {heading}
      </h3>
      <h1
        className="
        text-5xl
        md:text-7xl
        font-bold
        uppercase
        text-slate-500/10
        absolute
        top-3
        text-center
        w-full
      
      "
      >
        {heading}
      </h1>
    </div>
  );
};

export default Heading;
