import React from 'react'
import './Footer.css'
import logo from'../../logos/logo1.png'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import RoomIcon from '@material-ui/icons/Room';

const Footer = () => {
    return (
       
        <div className="footer">
            <div className="footer-content">
                    <div className="logo">
                    <img src={logo} className="medium" alt="logo"></img>
                    </div>
                    <div className="connectAt">
                        <InstagramIcon className="icons" style={{color:'white', }}/>
                        <FacebookIcon className="icons" style={{color:'white'}}/>
                        <LinkedInIcon className="icons" style={{color:'white'}}/>
                        <EmailIcon className="icons" style={{color:'white'}}/>
                    </div>
                    <div className="location">
                        {/* <p><i className="fa fa-map-marker"></i>Ashok Rajpath, National Institute of Technology Patna
                            Incubation Center 3rd Floor - 800005</p> */}
                            <p className="address"><RoomIcon style={{color:'white'}}/>&nbsp;&nbsp; Ashok Rajpath, National Institute of &nbsp;&nbsp; Technology Patna <br/>&nbsp;&nbsp; Incubation Center 3rd Floor - 800005</p>
                  </div>  
           </div>
          <p>©️ Robotics Club NIT Patna 2021</p>
      </div>
    )
}

export default Footer 