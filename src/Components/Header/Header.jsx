import React from "react";
import AjitSharma from "../../Assets/Images/Ajit.png";

import "./Header.css";
import CTA from "./CTA";

const Header = (props) => {
  const rorate = ["--i:0", "--i:1", "--i:2", "--i:3"];
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, I'm</h3>
        <h1>Ajit Sharma</h1>

        <div className="social-media">
          <a href="#">
            <i class="ri-linkedin-fill"></i>
          </a>
          <a href="#">
            <i class="ri-twitter-line"></i>
          </a>
          <a href="#">
            <i class="ri-instagram-line"></i>
          </a>
        </div>
        <a href="#" className="btn">
          Download
        </a>
      </div>
      <div className="profession-container">
        <div className="profession-box">
          <div className="profession">
            <i class="ri-code-s-slash-line"></i>
            <h3>Web Developer</h3>
          </div>
          <div className="circle"></div>
        </div>
        <div className="overlay"></div>
      </div>
      <div className="home-img">
        <img src={AjitSharma} />
      </div>
    </section>
  );
};

export default Header;
