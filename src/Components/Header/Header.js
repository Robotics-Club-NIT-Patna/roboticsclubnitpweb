import React from 'react'
import logo from '../../logos/logo1.png'
import './Header.css'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import RoomIcon from '@material-ui/icons/Room';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className="header">
            <div className="headercontainer">
                <img src={logo} className="medium" alt="logo"/>
                <input type="checkbox" className="toggler"/>
                <div className="hamburger">
                    <div className="normal"></div>
                    <div className="fade"></div>
                </div>
                <div className="menu_left">
                    
                        <Link to='/'><span>01 </span>Home</Link>
                        <Link to='/about'><span>02 </span>About Us</Link>
                        <Link to='/team'><span>03 </span>Contact</Link>
                        <Link to='/team'><span>04 </span>Team</Link>
                        <Link><span>05 </span>News</Link>
                   
                </div>
                <div className="menu_right">
                    <div className="clubInfo">
                        <img src={logo} className="big" alt="logo"/>
                        <h1 className="name">Robotics Club NIT Patna</h1>
                        <p className="address"><RoomIcon style={{color:'gray'}}/>&nbsp;&nbsp; Ashok Rajpath, National Institute of Technology Patna <br/>&nbsp;&nbsp; Incubation Center 3rd Floor - 800005</p>
                    </div>
                    
                    <div className="connectAt">
                        <InstagramIcon className="icons" style={{color:'white', }}/>
                        <FacebookIcon className="icons" style={{color:'white'}}/>
                        <LinkedInIcon className="icons" style={{color:'white'}}/>
                        <EmailIcon className="icons" style={{color:'white'}}/>
                    </div>
                    
                </div>
            </div>
        </div>
        
    )
}

export default Header
