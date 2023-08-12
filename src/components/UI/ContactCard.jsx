import React from "react";

const ContactCard = ({ title, icon }) => {
  return (
    <div className="flex justify-start items-center gap-6 py-4">
      <span className="flex items-center justify-center w-11 h-11 bg-transparent border-2 border-gray-300/50 rounded-full p-1 text-2xl text-yellow-400">
        {icon}
      </span>
      <span className="text-slate-100 text-lg">{title}</span>
    </div>
  );
};

export default ContactCard;
