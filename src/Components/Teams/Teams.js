import React, { useEffect } from 'react'
import Card from "./Card"
import './Teams.css'
import waveUp from '../../SVGs/wave-8.svg'
import waveDown from '../../SVGs/wave-5.svg'
import AOS from "aos"
import 'aos/dist/aos.css';

const Teams = () => {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, [])
    return (
        <div className="Teams">
            <img className="waveUp" src={waveUp} />
            <h1 id="teamName">Our Team</h1>
            <div className="cardContainer">
                <div data-aos="flip-left"  >
                    <Card />
                </div>
                <div data-aos="flip-right"  >
                    <Card />
                </div>
                <div data-aos="flip-left"  >
                    <Card />
                </div>
                <div data-aos="flip-right" data-aos-anchor-placement="center-center" data-aos-easing="ease-out">
                    <Card />
                </div >
                <div data-aos="flip-left" data-aos-anchor-placement="center-center" data-aos-easing="ease-out">
                    <Card />
                </div >
                <div data-aos="flip-right" data-aos-anchor-placement="center-center" data-aos-easing="ease-out">
                    <Card />
                </div >
                <div data-aos="flip-left" data-aos-anchor-placement="center-center" data-aos-easing="ease-out">
                    <Card />
                </div >
                <div data-aos="flip-right" data-aos-anchor-placement="center-center" data-aos-easing="ease-out">
                    <Card />
                </div >
                <div data-aos="flip-left" data-aos-anchor-placement="center-center" data-aos-easing="ease-out">
                    <Card />
                </div >
                <div data-aos="flip-right" data-aos-anchor-placement="center-center" data-aos-easing="ease-out">
                    <Card />
                </div >
                <div data-aos="flip-left" data-aos-anchor-placement="center-center" data-aos-easing="ease-out">
                    <Card />
                </div >
                <div data-aos="flip-right" data-aos-anchor-placement="center-center" data-aos-easing="ease-out">
                    <Card />
                </div >
            </div>
            <img className="waveDown" src={waveDown} />
        </div>
    )
}

export default Teams
