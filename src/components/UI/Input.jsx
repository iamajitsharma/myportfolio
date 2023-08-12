import React from "react";

const Input = ({ type, placeholder, className }) => {
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
      <input
        type={type}
        className="
        bg-transparent
        text-slate-100
        py-3
        px-2
        w-full
        focus:outline-none
        focus:ring-0
        "
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
