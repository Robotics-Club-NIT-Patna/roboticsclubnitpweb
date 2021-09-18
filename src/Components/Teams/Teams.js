import React, { useEffect } from 'react'
import Card from "./Card"
import './Teams.css'
import waveUp from '../../SVGs/wave-8.svg'
import waveDown from '../../SVGs/wave-5.svg'
import Footer from '../Footer/Footer';
import AOS from "aos"
import 'aos/dist/aos.css';

const Teams = () => {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, [])
    return (
        <>
        <div className="Teams">
           
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

        </div>
        <div className="teams-footer"> <Footer/></div>
        </>
    )
}

export default Teams
