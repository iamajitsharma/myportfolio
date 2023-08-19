import React from "react";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../Responsive";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { PiMedal } from "react-icons/pi";
import { BiPhoneCall } from "react-icons/bi";

const navLinks = [
  { display: "Home", icon: <AiOutlineHome /> },
  { display: "About", icon: <AiOutlineUser /> },
  { display: "Skill", icon: <PiMedal /> },
  { display: "Project", icon: <AiOutlineFundProjectionScreen /> },
  { display: "Contact", icon: <BiPhoneCall /> },
];

const Navbar = () => {
  const isTablet = useMediaQuery({ maxWidth: deviceSize.tablet });

  return (
    <div className="fixed bottom-3 bg-black/30 backdrop-blur-md w-max px-8 py-4  transform left-1/2 -translate-x-1/2 rounded-full">
      <ul className="flex items-center gap-3 justify-center text-2xl text-white sm:gap-5 ">
        {navLinks.map((item) => (
          <li
            className="bg-slate-800 w-10 h-10 flex items-center justify-center rounded-full shadow-md"
            key={item.display}
          >
            <a className="" href={`#${item.display}`}>
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
