import React from "react";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../Responsive";
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
  { display: "Resume", icon: <HiOutlineDocumentText /> },
  { display: "Skill", icon: <PiMedal /> },
  { display: "Project", icon: <AiOutlineFundProjectionScreen /> },
  { display: "Contact", icon: <BiPhoneCall /> },
];

const Navbar = () => {
  const isTablet = useMediaQuery({ maxWidth: deviceSize.tablet });

  return (
    <>
      {isTablet ? (
        <div className="fixed bottom-0 bg-slate-700 backdrop-blur-md max-w-xs sm:max-w-sm w-full px-1 py-4  transform left-1/2 -translate-x-1/2 rounded-full">
          <ul className="flex items-center gap-2 justify-center text-2xl text-white sm:gap-5 ">
            {navLinks.map((item) => (
              <li className="bg-slate-400 w-10 h-10 flex items-center justify-center rounded-full">
                <a className="" href={`#${item.display}`}>
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <ul className="flex items-center md:gap-5 lg:gap-8 text-slate-200 text-base uppercase">
          {navLinks.map((item) => (
            <li>
              <a href={`#${item.display}`}>{item.display}</a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Navbar;
