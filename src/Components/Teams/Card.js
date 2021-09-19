import React from 'react'
import "./Card.css"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Card() {
    return (
        <div className="single">
            <div className ="circle"></div>
            <div className ="inner">
                <h3 id="memberName">Brooke John</h3>
                <p id="memberDesignation">Web Designer</p>
                <div className ="image">
                    <img src="/team1.png" alt="" />
                </div>
                <div className ="social">
                    <a id="socialLinks" href="#"><FacebookOutlinedIcon className="socialIcons"/></a>
                    <a id="socialLinks" href="#"><TwitterIcon className="socialIcons"/></a>
                    <a id="socialLinks" href="#"><InstagramIcon className="socialIcons"/></a>
                </div>
            </div>
        </div>
    )
}

export default Card
