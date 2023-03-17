import React from "react";
import { Container, Row, Col } from "reactstrap";
import AjitSharma from "../../Assets/Images/AjitSharma_Profile.png";
import AjitSharmaSVG from "../../Assets/Images/AjitSharma_VecotrProfile-01.svg";
import "./Header.css";
import CTA from "./CTA";

const Header = () => {
  return (
    <header id="header">
      <Container>
        <Row className="align-items-center">
          <Col lg="6" className="header_left ">
            <div className="hero_caption mb-5">
              <span>Hello</span>
              <h1>I 'm Ajit Sharma</h1>
              <span>Frontend Developer</span>
            </div>
            <CTA />
          </Col>
          <Col lg="6" className="hero_img">
            <img src={AjitSharmaSVG} alt="Ajit Sharma" />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
