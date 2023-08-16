import React from "react";
import Container from "../UI/Container";
import Heading from "../UI/Heading";
import Input from "../UI/Input";
import TextArea from "../UI/TextArea";
import Button from "../UI/Button";
import { BsTelephone, BsGithub } from "react-icons/bs";
import { AiOutlineMail, AiOutlineGithub } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import ContactCard from "../UI/ContactCard";
import { BiLogoLinkedin } from "react-icons/bi";

const contactDetails = [
  { title: "+91 9038764817", icon: <BsTelephone /> },
  { title: "ajitsharma2021@gmail.com", icon: <AiOutlineMail /> },
  { title: "Kolkata, WB India", icon: <FiMapPin /> },
  { title: "https://github.com/iamajitsharma", icon: <AiOutlineGithub /> },
  {
    title: "/ajsharmapro/",
    icon: <BiLogoLinkedin />,
  },
];

const Contact = () => {
  return (
    <section id="Contact">
      <Heading heading="Contact" />
      <Container>
        <div className="flex flex-col md:flex-row justify-between gap-6 mt-16 w-full p-4">
          <div className="w-full md:w-1/2">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 w-full">
                <Input
                  type="text"
                  placeholder="Full Name"
                  className="col-span-2"
                />
                <Input
                  type="number"
                  placeholder="Number"
                  className="col-span-2 md:col-span-1"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  className="col-span-2 md:col-span-1"
                />
                <TextArea className="col-span-2" rows={6} />
              </div>
              <Button label="Submit" standard size="lg" />
            </form>
          </div>
          <div className="w-fulll md:w-1/2">
            {contactDetails.map((item) => (
              <ContactCard title={item.title} icon={item.icon} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
