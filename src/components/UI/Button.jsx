import React from "react";

const Button = ({ outline, standard, size, props, label }) => {
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium max-w-fit transition-colors focus:outline-none focus:ring-0 disabled:opacity-50  disabled:pointer-events-none data-[state=open]:bg-slate-100 h-10 py-2 px-4
    ${
      outline
        ? "bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-slate-100"
        : "border-none"
    }
    ${standard ? "bg-yellow-400 text-neutral-800" : ""}
    ${size === "lg" ? "h-11 px-8 rounded-md" : "h-9 px-2 rounded-md"}
    `}
    >
      {label}
    </button>
  );
};

export default Button;
