import React from 'react'
import Card from "./Card"
import './Teams.css'
import waveUp from '../../SVGs/wave-8.svg'
import waveDown from '../../SVGs/wave-5.svg'

const Teams = () => {
    return (
        <div className="Teams">
            <img className="waveUp" src={waveUp}/>
            <h1 id="teamName">Our Team</h1>
            <div  className="cardContainer">
                <Card />
                <Card/>
                <Card/>
                <Card/>
                <Card />
                <Card/>
                <Card/>
                <Card/>
            </div>
            <img className="waveDown" src={waveDown}/>
        </div>
    )
}

export default Teams
