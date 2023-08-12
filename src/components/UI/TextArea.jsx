import React from "react";

const TextArea = ({ className, ...props }) => {
  return (
    <div
      className={`
      w-full
    border-2
    border-gray-400/70
      rounded-md
      ${className}
        `}
    >
      <textarea
        className=" 
        bg-transparent
        text-slate-100
        py-3
        px-2
        w-full
        focus:outline-none
        focus:ring-0"
        {...props}
      ></textarea>
    </div>
  );
};

export default TextArea;
