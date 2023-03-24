import React from "react";
import "../../index.css";

const SectionTitle = (props) => {
  const classes = `section-title + ${props.className}`;
  return (
    <div className={classes}>
      <h1>{props.children}</h1>
    </div>
  );
};

export default SectionTitle;
