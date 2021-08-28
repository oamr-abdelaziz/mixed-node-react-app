import React, { useState, useEffect } from "react";
import './Project.scss'
function Project(props) {
  const { img, backgroundColor, colorWhite, title, paragraph, projectPage } =
    props;
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <a href={`/${projectPage}`}>
      <img src={`./assets/${img}`} alt={`${img}`} />
      <i
        className={`fas fa-caret-right ${
          colorWhite === "true" ? "color-white" : ""
        }`}
      ></i>
      <div
        className={`tile__inner ${colorWhite === "true" ? "color-white" : ""}`}
        style={{ backgroundColor: backgroundColor }}
      >
        <div className="tile__inner-middle">
          <h4 className="headline-9">{title}</h4>
          <p className="tile__description">{paragraph}</p>
          <i className="cta-arrow fas fa-long-arrow-alt-right"></i>
        </div>
      </div>
    </a>
  );
}

export default Project;
