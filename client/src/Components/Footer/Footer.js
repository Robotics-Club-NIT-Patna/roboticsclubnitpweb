import React from "react";
import "./Footer.css";
import RoomIcon from "@material-ui/icons/Room";
import logo from "../../logos/logo1.png";
import { Link } from "react-router-dom";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";

const Footer = () => {
  return (
    <div className="Footer">
      {/* <div className="FooterStrip">
                <h1> Eat <SyncAltIcon style={{backgroundColor:'black', width:'40px', height:'40px', borderRadius:'100%', padding:'5px', color:'white'}}/> Code <SyncAltIcon style={{backgroundColor:'black', width:'40px', height:'40px', borderRadius:'100%', padding:'5px', color:'white'}}/> Repeat </h1>
            </div> */}

      <div className="FooterElementLeft">
        <div className="upper clubInfo">
          <img src={logo} className="big" alt="logo" />
          <h1 className="name">Robotics Club NIT Patna</h1>
          <p className="address">
            <RoomIcon style={{ color: "gray" }} />
            &nbsp;&nbsp; Ashok Rajpath, National Institute of Technology Patna{" "}
            <br />
            &nbsp;&nbsp; Incubation Center 3rd Floor - 800005
          </p>
        </div>
        <div className="middle">
          <div className="first">
            <Link className="Links" to="/">
              Home
            </Link>
            <Link className="Links" to="/events">
              Events
            </Link>
            <Link className="Links" to="/projects">
              Projects
            </Link>
          </div>
          <div className="first">
            <Link className="Links" to="/team">
              Team
            </Link>
            <Link className="Links" to="/news">
              News
            </Link>
          </div>
          <div className="first">
            <Link className="Links" to="/gallery">
              Gallery
            </Link>
          </div>
        </div>
        <div className="lower"></div>
      </div>

      <div className="FooterElementMiddle">
        <h1>Stay Tuned To Our Upcoming Events</h1>
        <div>
          <a
            href="/"
            rel="noreferrer"
            target="_blank"
          >
            Freshers' Orientation
          </a>
          <a
            href="https://hack.roboticsnitp.online"
            rel="noreferrer"
            target="_blank"
          >
            Hack O Heist
          </a>
          <a
            href="https://eventnitprobotics.herokuapp.com/"
            rel="noreferrer"
            target="_blank"
          >
            Abhiyuthan
          </a>
        </div>
      </div>
      <div className="FooterElementRight">
        <div className="connectAt">
          <a
            href="https://www.instagram.com/robotics_club_nitp/"
            rel="noreferrer"
            target="_blank"
          >
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
  );
};

export default Footer;
