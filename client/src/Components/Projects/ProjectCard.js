import React from "react";
import "./ProjectCard.css";

function ProjectCard({ heading, imageUrl, discription }) {
  const [status, setstatus] = React.useState(false);
  return (
    <div className="project_cardparent">
      <div className="project_imagecontainer">
        <img src={imageUrl} alt="" />
      </div>
      <div className="project_cardcontent">
        <div className="project_cardtitle">
          <h3>{heading}</h3>
        </div>
        <div
          className="project_cardbody"
          style={
            status
              ? { overflow: null }
              : {
                  overflow: "hidden",
                  height: "12.5vh",
                  transform: "ease-in-out",
                  transition: "0.3s",
                }
          }
        >
          {<p>{discription}</p>}
        </div>
        <div className="project_cardbutton">
          <button class="project_button" onClick={() => setstatus(!status)}>
            {status ? "show less" : "show more"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
