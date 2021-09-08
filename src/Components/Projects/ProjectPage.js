import React from 'react'
import ProjectCard from './ProjectCard'
import "./ProjectPage.css"
import waveUp from '../../SVGs/wave-8.svg'
import waveDown from '../../SVGs/wave-5.svg'

const ProjectPage = () => {
    return ( <>
        <div className="project">
        <img className="waveUp" src={waveUp}/>
        <h1 id="heading">Projects</h1>
        <div class="base">
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
        </div>
         <img className="waveDown" src={waveDown}/>
         </div>
        </>
    )
}

export default ProjectPage
