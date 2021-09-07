import React from 'react'
import './Footer.css'
import logo from'../../logos/logo.png'


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                    <div className="logo">
                    <img src={logo} className="medium" alt="logo"></img>
                    </div>
                    <div className="socials">
                        <ul className="socials">
                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fa fa-envelope"></i></a></li>
                            <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
                    </ul></div>
                    <div className="location">
                        <p><i className="fa fa-map-marker"></i>Ashok Rajpath, National Institute of Technology Patna
                            Incubation Center 3rd Floor - 800005</p>
                  </div>  
           </div>
          <p>©️ Robotics Club NIT Patna 2021</p>
      </div>
    )
}
 
export default Footer