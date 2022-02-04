import React from 'react';
import ProjectCard from './ProjectCard';
import image from '../Gallery/18.JPG'
import './Project.css'
import waveUp from '../../SVGs/wave-8.svg'
import waveDown from '../../SVGs/wave-5.svg'

const projects = [
      {
        name : "ROBO WAR",
        imgUrl:image,
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      },
      {
        name : "ROBO WAR",
        imgUrl:image,
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      },
      {
        name : "ROBO WAR",
        imgUrl:image,
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      },
      {
        name : "ROBO WAR",
        imgUrl:image,
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      },
      {
        name : "ROBO WAR",
        imgUrl:image,
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      },
      {
        name : "ROBO WAR",
        imgUrl:image,
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      },
]


const Project = () => {

  function getProjects() {
    return (
      <div className="project-grid">
        {projects.map((project, id) => {
          return (
            <ProjectCard
              className="cardColumn"
              heading={project.name}
              imageUrl={project.imgUrl}
              discription={project.description}
            ></ProjectCard>
          );
        })}
      </div>
    );
  }


  return <div className="project_back">
       <img src={waveUp} alt=""/>
     <div className = {"title"}>
                Our Projects
            </div>
      {getProjects()}
    <img className="waveDown"  alt="" src={waveDown} />
  </div>
};

export default Project;
