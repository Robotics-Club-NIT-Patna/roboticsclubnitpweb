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
           <img className="waveUp" src={waveUp}/>
            <h1 id="teamName">Our Team</h1>
            <div className="cardContainer">
                <div data-aos="flip-left"  >
                    <Card img = "/PAWAN SINGH.png" name="PAWAN SINGH" designation="Captain" link="https://www.linkedin.com/in/pawan-singh-4b3b8618b/"/>
                </div>
                <div data-aos="flip-right"  >
                    <Card img = "/shivam tyagi.png" name="SHIVAM TYAGI" designation="Web Coordinator" link="https://www.linkedin.com/in/shivam-tyagi-57b7341a6/"/>
                </div>
                <div data-aos="flip-left"  >
                    <Card img = "/MOHD ZUBAIR.png" name="MOHD ZUBAIR" designation="Web Team Head" link="https://www.linkedin.com/in/mohd-zubair-3349871a1/"/>
                </div>
                <div data-aos="flip-right" data-aos-easing="ease-out">
                    <Card img = "/Srijan Jha.png" name="KUMAR SRIJAN" designation="Joint Secretary" link="https://www.linkedin.com/in/kumarsrijan8581/"/>
                </div >
             
                <div data-aos="flip-right" data-aos-easing="ease-out">
                    <Card img = "/NRIPENDRA.png" name="NRIPENDRA" designation="Club Ambassador" link="https://www.linkedin.com/in/nri4u/"/>
                </div >
                <div data-aos="flip-left" data-aos-easing="ease-out">
                    <Card img = "/SHAGUFTA IQBAL.png" name="SHAGUFTA IQBAL" designation="Secretary" link="https://www.linkedin.com/in/shaguftaiqbal/"/>
                </div >
                <div data-aos="flip-right" data-aos-easing="ease-out">
                    <Card img = "/SHIVAM MISHRA.png" name="SHIVAM MISHRA" designation="Project Management Coordinator" link="https://www.linkedin.com/in/shivam-mishra-02324a157/"/>
                </div >
                <div data-aos="flip-left" data-aos-easing="ease-out">
                    <Card img = "/SHIVAM KUMAR.png" name="SHIVAM KUMAR" designation="Event Management Coordinator" link="https://www.linkedin.com/in/shivam-kumar-103b50201/"/>
                </div >
                <div data-aos="flip-right" data-aos-easing="ease-out">
                    <Card img = "ANKIT KUMAR.png" name="ANKIT KUMAR" designation="Event Management Coordinator" link="https://www.linkedin.com/in/ankit-kumar-171a551a8/"/>
                </div >
                <div data-aos="flip-left" data-aos-easing="ease-out">
                    <Card img = "/JELSY SINGH.png" name="JELSY SINGH" designation="PR And Promotion Lead" link="https://www.linkedin.com/in/jelsy-singh-3598b0191/"/>
                </div >
                <div data-aos="flip-right" data-aos-easing="ease-out">
                    <Card img = "/ANUSHKA SINGH.png" name="ANUSHKA SINGH" designation="Member Development Coordinator" link="https://www.linkedin.com/in/anushka-singh-81900a201/"/>
                </div >
                <div data-aos="flip-right" data-aos-easing="ease-out">
                    <Card img = "TANU JIYA.png" name="TANU JIYA" designation="Member Development Coordinator" link="https://www.linkedin.com/in/tanu-jiya242001/"/>
                </div >
                <div data-aos="flip-left" data-aos-easing="ease-out">
                    <Card img = "/SHASHWAT AWASTHI.png" name="SHASHWAT AWASTHI" designation="Technical Lead" link="https://www.linkedin.com/in/shashwatawasthij12/"/>
                </div >
                <div data-aos="flip-right" data-aos-easing="ease-out">
                    <Card img = "/PRIYANKA KUMARI.png" name="PRIYANKA KUMARI" designation="Design Head" link="https://www.linkedin.com/in/priyanka404/"/>
                </div >
                <div data-aos="flip-right" data-aos-easing="ease-out">
                    <Card img = "SUMAN KUMARI.png" name="SUMAN KUMARI" designation="Content And Media Coordinator" link="https://www.linkedin.com/in/suman5501/"/>
                </div >
                <div data-aos="flip-left" data-aos-easing="ease-out">
                    <Card img = "/ASHUTOSH KUMAR SINGH.png" name="ASHUTOSH KUMAR SINGH" designation="PR And Promotional Lead" link="https://www.linkedin.com/in/ashutosh-kumar-singh-22279b202/"/>
                </div >
            
                <div data-aos="flip-right" data-aos-easing="ease-out">
                    <Card img = "/SHREYANSHI GUPTA.png" name="SHREYANSHI GUPTA" designation="Senior Member In Technical Team" link="https://www.linkedin.com/in/shreyanshi-gupta-014a51194/"/>
                </div >
                
  
                <div data-aos="flip-left"  >
                    <Card img = "/DARSHAN JAIN.png" name="DARSHAN JAIN" designation="Web Team And PR Team" link="https://www.linkedin.com/in/darshan-jain-6190aa203"/>
                </div>
                <div data-aos="flip-right"  >
                    <Card img = "/ISHITA SINGH.png" name="ISHITA SINGH" designation="Web Team" link="https://www.linkedin.com/in/ishita-singh-258801211"/>
                </div>
                <div data-aos="flip-left"  >
                    <Card img = "/HARSH ANAND.png" name="HARSH ANAND" designation="Web Team" link="https://www.linkedin.com/in/harsh-anand-3b369a210"/>
                </div>
                <div data-aos="flip-right" data-aos-easing="ease-out">
                    <Card img = "/PRIYA KUMARI.png" name="PRIYA KUMARI" designation="Web Team" link="https://www.linkedin.com/in/priya-kumari-32792a1bb"/>
                </div >
                <div data-aos="flip-left" data-aos-easing="ease-out">
                    <Card img = "/KRATIKA.png" name="KRATIKA" designation="Content Team" link="https://www.linkedin.com/in/kratika-5559a3202"/>
                </div >
                <div data-aos="flip-right" data-aos-easing="ease-out">
                    <Card img = "/AVINASH KUMARee.png" name="AVINASH KUMAR" designation="Technical Team" link="https://www.linkedin.com/in/avinash-singh-38bb01203"/>
                </div >
                <div data-aos="flip-left" data-aos-easing="ease-out">
                    <Card img = "/AVINASH KUMAR.png" name="AVINASH KUMAR" designation="Teachnical Team" link="https://www.linkedin.com/in/avinash-kumar-321590201"/>
                </div >
                <div data-aos="flip-right" data-aos-easing="ease-out">
                    <Card img = "/PRATIK ANAND.png" name="PRATIK ANAND" designation="Technical Team" link="https://www.linkedin.com/in/pratik-anand-/"/>
                </div >
                <div data-aos="flip-left" data-aos-easing="ease-out">
                    <Card img = "/RAUSHAN KUMAR.png" name="RAUSHAN KUMAR" designation="Events Team" link="https://www.linkedin.com/mwlite/in/raushan-kumar-592684201"/>
                </div >
                <div data-aos="flip-right" data-aos-easing="ease-out">
                    <Card img = "SWARAJ.png" name="SWARAJ" designation="Technical Team" link="#"/>
                </div >
                <div data-aos="flip-left" data-aos-easing="ease-out">
                    <Card img = "/PRIYANSHU SHEKHAR.png" name="PRIYANSHU SHEKHAR" designation="Design Team" link="https://www.linkedin.com/in/priyaanshu"/>
                </div >
                <div data-aos="flip-right" data-aos-easing="ease-out">
                    <Card img = "/ABHISHEK KUMAR.png" name="ABHISHEK KUMAR" designation="Content Team" link="https://www.linkedin.com/in/abhishek-kumar-a50136202"/>
                </div >
                <div data-aos="flip-right" data-aos-easing="ease-out">
                    <Card img = "/SUBHI SINGH.png" name="SUBHI SINGH" designation="Content Team" link="https://www.linkedin.com/in/subhi-singh-568899201"/>
                </div >
                <div data-aos="flip-left" data-aos-easing="ease-out">
                    <Card img = "/DIVYA BHARDWAJ.png" name="DIVYA BHARDWAJ" designation="Content Team" link="https://www.linkedin.com/in/divya-bhardwaj-5483ab20b"/>
                </div >
                <div data-aos="flip-right" data-aos-easing="ease-out">
                    <Card img = "/HARIOM KUMAR.png" name="HARIOM KUMAR" designation="Technical Team" link="https://www.linkedin.com/in/hariom-kumar-6a1514204"/>
                </div >
                <div data-aos="flip-right" data-aos-easing="ease-out">
                    <Card img = "ARNAV ANAND.png" name="ARNAV ANAND" designation="Technical Team" link="https://www.linkedin.com/in/arnav-anand-591206204"/>
                </div >
                <div data-aos="flip-left" data-aos-easing="ease-out">
                    <Card img = "/RICHA.png" name="RICHA" designation="Content Team" link="https://www.linkedin.com/in/richa-kumari-10364a202/"/>
                </div >
                <div data-aos="flip-right" data-aos-easing="ease-out">
                    <Card img = "/NAVEEN DHAKED.png" name="NAVEEN DHAKED" designation="PR Team" link="http://linkedin.com/in/naveen-dhaked-7002b6202"/>
                </div >
                <div data-aos="flip-left"  >
                    <Card img = "/AMAN AGRAHARI.png" name="AMAN AGRAHARI" designation="Technical Team" link="linkedin.com/in/aman-agrahari-6a20b3219/"/>
                </div>
                <div data-aos="flip-right"  >
                    <Card img = "/AKSHITA MAHESHWARI.png" name="AKSHITA MAHESHWARI" designation="Design Team" link="https://www.linkedin.com/in/akshita-maheshwari-b6a8a01b8/"/>
                </div>
                <div data-aos="flip-left"  >
                    <Card img = "/ANKITA DUBEY.png" name="ANKITA DUBEY" designation="Events Team" link="https://www.linkedin.com/in/ankita-dubey-7a9b21216/"/>
                </div>
                <div data-aos="flip-right" data-aos-easing="ease-out">
                    <Card img = "/PRIYA SINGH.png" name="PRIYA SINGH" designation="Events Team" link="https://www.linkedin.com/in/priya-singh-022b59202"/>
                </div >
                <div data-aos="flip-left" data-aos-easing="ease-out">
                    <Card img = "/ANKUNJ SURAJ.png" name="ANKUNJ SURAJ" designation="Technical Team" link="https://www.linkedin.com/in/ankunj-suraj-5b1136203"/>
                </div >
                <div data-aos="flip-right" data-aos-easing="ease-out">
                    <Card img = "/PRAGATI VERMA.png" name="PRAGATI VERMA" designation="PR Team" link="https://www.linkedin.com/in/pragati-verma-654639212"/>
                </div >
                <div data-aos="flip-left" data-aos-easing="ease-out">
                    <Card img = "/TANVI TANYA.png" name="TANVI TANYA" designation="Events Team" link="https://www.linkedin.com/in/tanvi-tanya-3a7b58213"/>
                </div >
                <div data-aos="flip-right" data-aos-easing="ease-out">
                    <Card img = "/MRIDUL TIWARI.png" name="MRIDUL TIWARI" designation="Technical Team" link="https://www.linkedin.com/in/mridul-tiwari-01056b216/"/>
                </div >
                <div data-aos="flip-left" data-aos-easing="ease-out">
                    <Card img = "/FIRDAUS JAWED.png" name="FIRDAUS JAWED" designation="Design Team" link="https://www.linkedin.com/in/firdaus-jawed-7ab61b208/"/>
                </div >
                <div data-aos="flip-right" data-aos-easing="ease-out">
                    <Card img = "RAJ MORE.png" name="RAJ MORE" designation="Technical Team" link="https://www.linkedin.com/in/raj-more-50b543202"/>
                </div >
                <div data-aos="flip-left" data-aos-easing="ease-out">
                    <Card img = "/SRESTHA DAS.png" name="SRESTHA DAS" designation="Design Team" link="https://www.linkedin.com/in/srestha-das-33b09220b"/>
                </div >
                <div data-aos="flip-right" data-aos-easing="ease-out">
                    <Card img = "/RITI RAJ.png" name="RITI RAJ" designation="PR Team" link="#"/>
                </div >
                <div data-aos="flip-right" data-aos-easing="ease-out">
                    <Card img = "/AYUSH GUPTA.png" name="AYUSH GUPTA" designation="Web Team" link="https://www.linkedin.com/in/ayush-gupta-9a0573214"/>
                </div >
                <div data-aos="flip-left" data-aos-easing="ease-out">
                    <Card img = "/SUDHANSHU RANJAN.png" name="SUDHANSHU RANJAN" designation="Technical Team" link="https://www.linkedin.com/in/sudhanshu-ranjan-a1779b202"/>
                </div >
                <div data-aos="flip-right" data-aos-easing="ease-out">
                    <Card img = "/NITISH KUMAR.png" name="MADHAPUR NITISH KUMAR" designation="Technical Team" link="http://linkedin.com/in/mnk17arts"/>
                </div >
            </div>
            <img className="waveDown" src={waveDown}/>
        </div>
    )
}

export default Teams
