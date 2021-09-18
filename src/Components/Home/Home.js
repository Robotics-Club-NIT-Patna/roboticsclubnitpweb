import React from 'react'
import './Home.css'
import svgLogo from '../../SVGs/svg1.svg'
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <>
        <div className="home">
            <img className="svgLogo" src={svgLogo} alt="logo"/>
            <div className="container">
                <h1 className="heading1 neonText">ROBOTICS CLUB</h1>
                <h1 className="heading2 neonText">NATIONAL INSTITUTE OF TECHNOLOGY PATNA</h1>
            </div>
            
        </div>
        
        </>
    )
}

export default Home
