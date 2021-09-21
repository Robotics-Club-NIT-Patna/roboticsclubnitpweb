import React from 'react'
import './Footer.css'
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import RoomIcon from '@material-ui/icons/Room';
import logo from '../../logos/logo1.png'

const Footer = () => {
    return (
        <div className="Footer">

            {/* <div className="FooterStrip">
                <h1> Eat <SyncAltIcon style={{backgroundColor:'black', width:'40px', height:'40px', borderRadius:'100%', padding:'5px', color:'white'}}/> Code <SyncAltIcon style={{backgroundColor:'black', width:'40px', height:'40px', borderRadius:'100%', padding:'5px', color:'white'}}/> Repeat </h1>
            </div> */}

            <div className="FooterElement">
                <div className="upper clubInfo">
                    <img src={logo} className="big" alt="logo"/>
                    <h1 className="name">Robotics Club NIT Patna</h1>
                    <p className="address"><RoomIcon style={{color:'gray'}}/>&nbsp;&nbsp; Ashok Rajpath, National Institute of Technology Patna <br/>&nbsp;&nbsp; Incubation Center 3rd Floor - 800005</p>
                </div>
                <div className="middle"></div>
                <div className="lower"></div>
            </div>
        </div>
    )
}

export default Footer

