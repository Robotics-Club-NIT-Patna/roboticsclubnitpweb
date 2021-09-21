import React from 'react'
import './Card.css'

const Card = ({link,name, position}) => {
    return (
        <div className="ClubOfficialsCard">
            <div className="front">
                <div className="imgae">
                    <img src={link} alt=""/>
                </div>
                <div className="frontLower">
                    <h1>{name}</h1>
                    <h2>{position}</h2>
                </div>
            </div>
        </div>
    )
}

export default Card
