import React, {useEffect} from 'react'
import './About.css'
import SVG from '../../SVGs/aboutUs.svg'
import whatWeDo from '../../SVGs/whatWeDo.svg'
import fewWords from '../../SVGs/fewWords.svg'
import SliderNews from '../News/SliderNews'
import AOS from "aos"
import 'aos/dist/aos.css';


const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, [])
    return (
        <>
            <div className="about">
                <div data-aos="fade-up-right">
                    <div className="aboutSVG"><img className="imgSection" src={SVG}/></div>
                </div>
               
                <div className="aboutContent">
                    <h1 data-aos="zoom-in" id="aboutHead">About Us</h1>
                    <p data-aos="zoom-in">Robotics club has been embodiment of innovation at NIT Patna. Being formed in year 2015-16 by Nripendra Saroj Sir ,our club boasts a glorious legacy. With our members ranging from seasoned coders to brilliant designers to hardware scientists, Our members have also represented our college at Smart India hackathon,headed by our current Captain Dheeraj Kumar Sir.We have been constantly working to enhance the students’ technical skills and making them aware of the fascinating world of automation,robotics and electronics which surrounds us.Boasting of a huge roster of exciting and engaging events, This year’s techno-cultural fest was nothing less than a rollercoaster ride for us.</p>
                </div>
                
            </div>

            <div className="whatWeDo">
                <div data-aos="fade-up-left" className="whatWEDoSVG"><img className="imgSection" src={whatWeDo}/></div>
                <div className="whatWeDoContent">
                    <h1 data-aos="zoom-in" id="whatWeDoHead">What We Do</h1>
                    <p data-aos="zoom-in">Does robots fascinates you and have you ever fantasized to build one for yourself? The Robotics club NIT Patna is the place! The Robotics club at NIT Patna strives to stimulate interest in robotics among the students of the institute.Today robotics is a rapidly growing field,as technological advances continue;researching,designing, and building new robots serve various practical purposes.Robotics is a field which is not limited to a particular branch and is way more diverse than our own imagination and so is our student club.We are a diverse group of robotics nerds who find roots across all academic departments of the Institute. We at Robotics club believe in working and growing together.You can know more about us from here. #Hail Robotics.</p>
                </div>
            </div>

            <div className="fewWords">
                <div data-aos="fade-up-right" className="fewWordsSVG"><img className="imgSection" src={fewWords}/></div>
                <div className="fewWordsContent">
                    <h1 data-aos="zoom-in" id="fewWordsHead">Few Words from Our PI</h1>
                    <p data-aos="zoom-in">It is my pleasure to introduce one of the most esteemed clubs of NIT Patna, the Robotics Club. Formed in the year 2015 by a bunch of not more than 8 students with vision of augmenting innovation and technical culture in the college. In this short span of time, Robotics Club managed to achieve an identity among college clubs at State-level. With its members ranging from coders to designers to hardware enthusiasts, they have been conducting an array of events around the year, thus enhancing the students' technical skills and making them aware of the fascinating world of automation, robotics, and electronics surrounding them. They are also promoting robotics among students of other nearby schools and colleges so that those students who lack resources also get equal opportunity to explore this fascinating domain. Members of this club have represented our college in several inter-college technical competitions, ideathons, and hackathons. The club has done a range of projects on IoT, drones, 3D designing, Bot fabrication, etc. Presently, members are actively engaged in working on a number of advanced projects like an AI-based attendance system and an automated bot for restaurants. Events like Robowars, Tiger's Nest, draws huge participation and audience. The club has been pretty successful in creating an atmosphere in the campus where people with different ideas could collaborate together to give shape to their ideas. I hope that the club continues doing so and keep making our college proud.</p>
                </div>
            </div>

            <div className="newsNotification">
            <SliderNews/>
            </div>
            
        </>
    )
}

export default About
