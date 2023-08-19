import React from "react";
import Button from "../UI/Button";
import Navbar from "./Navbar";
import { deviceSize } from "../Responsive";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  return (
    <section id="Home">
      <div className="w-full flex items-center justify-center md:justify-between gap-4 py-2 px-4 md:px-8 ">
        <img
          src="/Ajit_Logo.svg"
          alt=""
          className="shrink-0 w-48 md:w-56 h-auto"
        />
        <Navbar />
        {isMobile ? (
          <Button label="Hire me" standard />
        ) : (
          <Button label="Hire me" standard size="lg" />
        )}
      </div>
      <div className="flex items-start justify-between gap-0 w-full h-full md:items-center">
        <div className="flex flex-col p-4 gap-2 w-full md:w-1/2 md:p-6">
          <h3 className="text-2xl font-medium text-yellow-400">Hello, I'm</h3>
          <h1 className="text-6xl font-poppins font-bold text-gray-50/30 lg:text-8xl">
            Ajit
          </h1>
          <h2 className="text-7xl font-extrabold stroke-1 text-gray-50/30 lg:text-9xl ">
            Sharma
          </h2>
          <span className="text-xl text-gray-50/30">Frontend Developer</span>
          <p className="text-sm text-gray-50/30 py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            repudiandae cum dicta nam corrupti deserunt, sunt non nisi molestias
            fuga eius natus laborum voluptatem dolores minus numquam. Aliquid,
            ullam sunt.
          </p>
          <span className="flex items-center justify-center md:justify-start gap-3">
            {isMobile ? (
              <Button label="Download Resume" standard />
            ) : (
              <Button label="Download Resume" standard size="lg" />
            )}

            {isMobile ? (
              <Button label="Let's Talk" outline />
            ) : (
              <Button label="Let's Talk" outline size="lg" />
            )}
          </span>
        </div>
        <div className="hidden md:block shrink-0 w-1/2 h-full overflow-hidden">
          <img
            src="/Ajit_Sharma.png"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
