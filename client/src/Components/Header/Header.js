import React, { useState, useEffect } from "react";
import logo from "../../logos/logo1.png";
import "./Header.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import RoomIcon from "@material-ui/icons/Room";
import { Link } from "react-router-dom";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const [colorChange, setColorchange] = useState(false);
  const showSideBar = () => setSidebar(!sidebar);

  const changeNavbarColor = () => {
    if (window.scrollY >= 100) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);

  useEffect(() => {
    sidebar
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [sidebar]);

  return (
    <div className="header">
      <div className="headercontainer">
        <img
          src={logo}
          className={colorChange ? "medium display-invisible" : "medium"}
          alt="logo"
        />
        <div className="hamburger" onClick={showSideBar}>
          <div className={sidebar ? "normal active_normal" : "normal"}></div>
          <div className={sidebar ? "active_fade" : "fade"}></div>
        </div>
        <div className={sidebar ? "menu_left menu_left_active" : "menu_left"}>
          <Link to="/" onClick={showSideBar}>
            <span>01 </span>Home
          </Link>
          <Link to="/events" onClick={showSideBar}>
            <span>02 </span>Events
          </Link>
          <Link to="/projects" onClick={showSideBar}>
            <span>03 </span>Projects
          </Link>
          <Link to="/team" onClick={showSideBar}>
            <span>04 </span>Team
          </Link>
          <Link to="/news" onClick={showSideBar}>
            <span>05 </span>News
          </Link>
          <Link to="/gallery" onClick={showSideBar}>
            <span>06 </span>Gallery
          </Link>
        </div>
        <div
          className={sidebar ? "menu_right menu_right_active" : "menu_right"}
        >
          <div className="clubInfo">
            <img src={logo} className="big" alt="logo" />
            <h1 className="name">Robotics Club NIT Patna</h1>
            <p className="address">
              <RoomIcon style={{ color: "gray" }} />
              &nbsp;&nbsp; Ashok Rajpath, National Institute of Technology Patna{" "}
              <br />
              &nbsp;&nbsp; Incubation Center 3rd Floor - 800005
            </p>
          </div>

          <div className="connectAt">
            <a
              href="https://www.instagram.com/robotics_club_nitp/"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              <InstagramIcon className="icons" style={{ color: "white" }} />
            </a>
            <a
              href="http://facebook.com/robonitp"
              rel="noreferrer"
              target="_blank"
            >
              <FacebookIcon className="icons" style={{ color: "white" }} />
            </a>
            <a
              href="https://www.linkedin.com/company/robotics-club-nit-patna/"
              rel="noreferrer"
              target="_blank"
            >
              <LinkedInIcon className="icons" style={{ color: "white" }} />
            </a>
            <a
              href="mailto:roboticsclub@nitp.ac.in"
              rel="noreferrer"
              target="_blank"
            >
              <EmailIcon className="icons" style={{ color: "white" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
