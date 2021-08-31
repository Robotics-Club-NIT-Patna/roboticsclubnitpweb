import React from 'react'
import "./Card.css"

function Card() {
    return (
        <div className ="single">
            <div className ="circle"></div>
            <div className ="inner">
                <h3 id="memberName">Brooke John</h3>
                <p id="memberDesignation">Web Designer</p>
                <div className ="image">
                    <img src="/team1.png" alt="" />
                </div>
                <div className ="social">
                    <a id="socialLinks" href="#"><i className ="fa fa-facebook"></i></a>
                    <a id="socialLinks" href="#"><i className ="fa fa-twitter"></i></a>
                    <a id="socialLinks" href="#"><i className ="fa fa-instagram"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Card
