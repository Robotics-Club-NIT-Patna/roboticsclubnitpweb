import React,{useContext} from "react";
import ProjectCard from "./ProjectCard";
import "./Project.css";
import waveUp from "../../SVGs/wave-8.svg";
import waveDown from "../../SVGs/wave-5.svg";
import { urlFor } from "../../client";
import RoboContext from "../../context/RoboContext";
import { Loader1 } from "../Loader/Loader";


const Project = () => {
  const { projects, projectsLoading } = useContext(RoboContext);

  return (
    <div className="project_back">
      <img src={waveUp} alt="" />
      <div className={"title"}>Our Projects</div>
      <div className="project-grid">
        {projectsLoading ? (
          <Loader1/>
        ) : (
          projects.map((project, id) => (
            <div key={id} data-aos="flip-left" data-aos-easing="ease-out">
              <ProjectCard
                className="cardColumn"
                heading={project.name}
                imageUrl={urlFor(project.image)}
                discription={project.detail}
              />
            </div>
          ))
        )}
      </div>
      <img className="waveDown" alt="" src={waveDown} />
    </div>
  );
};

export default Project;
