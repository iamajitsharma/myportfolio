import React from "react";
import AjitSharma from "../../Assets/Images/Ajit_Sharma.png";
import { Link } from "react-router-dom";
import "./Header.css";
import CTA from "./CTA";

const Header = (props) => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, I'm</h3>
        <h1>Ajit Sharma</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          illum voluptas facere libero expedita, sint vitae reprehenderit? Velit
          iste nihil repudiandae doloribus expedita asperiores, debitis,
          blanditiis veniam in eaque illo.
        </p>
        <div className="social-media">
          <Link to="www.facebook.com" className="ri-linkedin-fill"></Link>
          <Link to="www.facebook.com" className="ri-twitter-line"></Link>
          <Link to="www.facebook.com" className="ri-instagram-line"></Link>
          <Link to="www.facebook.com" className="ri-youtube-line"></Link>
        </div>
        <CTA />
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
        <img src={AjitSharma} alt="Ajit Sharma Portfolio" />
      </div>
    </section>
  );
};

export default Header;
