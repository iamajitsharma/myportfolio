import React from "react";
import Heading from "../UI/Heading";
import Container from "../UI/Container";
import Button from "../UI/Button";

const aboutMe = [
  { title: "Birthday", value: "05th Jan 1990" },
  { title: "Phone", value: "+91 9038764817" },
  { title: "Email", value: "ajitsharma2021@gmail.com" },
  { title: "From", value: "Kolkata West Bengal" },
  { title: "Language", value: "English, Hindi, Bengali" },
  { title: "Freelance", value: "Available" },
];

const About = () => {
  return (
    <section id="About">
      <Heading heading="About Me" />
      <Container>
        <div className="flex flex-col md:flex-row w-full items-center justify-center py-6 mx-auto">
          <div className="w-full md:w-1/2 shrink-0 h-full">
            <img
              src="/about_pic.png"
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className="flex flex-col gap-8 w-full">
              <div>
                <h4 className="text-white text-xl md:text-2xl">
                  Hi There! I'm Ajit Sharma
                </h4>
                <p className="text-sm text-slate-50/70 py-6">
                  I am a Visual Designer with a strong focus on digital
                  branding. Visul design seeks to attract, inspire, create
                  desires and otivate people to respond to messages, with a view
                  to making a favorable impact.
                </p>
              </div>

              <ul className="text-slate-50/70 w-full">
                {aboutMe.map((item) => (
                  <li
                    className="flex items-center gap-4 py-3 text-sm lg:text-base"
                    key={item.title}
                  >
                    <span className="w-20 lg:w-40">{item.title}</span>
                    <span className="">:</span>
                    <span className="">{item.value}</span>
                  </li>
                ))}
              </ul>
              <div className="mx-auto md:mx-0">
                <Button label="Download Resume" size="lg" standard />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
