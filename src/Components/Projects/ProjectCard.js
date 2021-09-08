import React from 'react'
import "./ProjectCard.css"
import img from "./robotics.jpg"
const ProjectCard = () => {
    return ( 
      <>
        <div className="container">
          <div className="type" >
            <h3 className="type-text">Model</h3></div>
          <img src={img} alt="project image" className="project-image"/>
          <h1 className="project-title">Smart Dustbin</h1>
          <h4 className="date">Monday June 30, 2021</h4>
          <h4 className="description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas tempora aliquam, omnis quaerat nesciunt culpa. Sequi, voluptate corrupti? Nulla, blanditiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, error?
          </h4>
          <div className="interactions">
          <div className="views inter"><i className ="fa fa-eye"></i> 20</div>
          <div className="forks inter"><i className ="fa fa-code-fork"></i> 7</div>
          <div className="stars inter"><i className ="fa fa-star"></i> 5</div>
          </div>

          <div className="bottom">
            <button class="repository-link">Repository Link</button>
            <a href="http://" className="live-url">Live URL &gt;</a>
          </div>
        </div>
        </>
    )
}

export default ProjectCard
