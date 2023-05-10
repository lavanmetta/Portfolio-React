import React from "react";
import "./projects.css";
import { getMyProject } from "../Data/data";
import { useState, useEffect } from "react";

import Slider from "react-slick";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(getMyProject());
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          initialSlide: 3,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  const renderProjects = () => {
    return projects.map((each) => (
      <a href={each.link} target="_blank" rel="noreferrer">
        <div className="project-box" key={each.id}>
          <img src={each.projectImg} alt="img" />
          <h3>{each.projectName}</h3>
          <p>{each.projectDescribe}</p>
        </div>
      </a>
    ));
  };

  return (
    <div className="projects-container" id="projects">
      <div className="project-heading">
        <h2>Few Project Samples</h2>
      </div>
      <div className="projects">
        <Slider {...settings}>{renderProjects()}</Slider>
      </div>
    </div>
  );
}
