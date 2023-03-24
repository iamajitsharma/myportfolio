import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

const ProjectCard = ({ projects }) => {
  const { title, images, description, liveUrl, github } = projects;

  return (
    <div className="card">
      <div className="card-image">
        <img src={images} alt="" />
      </div>
      <div className="card-content">
        <h4 className="card-title">{title}</h4>
        <p className="description">{description}</p>

        <div className="card-action">
          <span>
            <Link to={liveUrl}>
              <i class="ri-mac-line"></i>
            </Link>
          </span>
          <span>
            <Link to={github}>
              <i class="ri-github-fill"></i>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
