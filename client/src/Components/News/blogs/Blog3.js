import React, { useState } from "react";
import waveUp from '../../../SVGs/wave-8.svg'
import waveDown from '../../../SVGs/wave-5.svg'
import Sharex from '../ShareNews/Share'
import './blog.css'
const Blog3 = () => {

    const [showSharex, setShowSharex] = useState(false);
    const handleSharex = () => {
        setShowSharex(!showSharex);
    }
    var blogTitle = "How useful have robots been during this Pandemic ?";
    var blogCredits = ["Name", "Branch", "RollNo"];

    return (
        <div className="blog_parent">
             <img className="waveUp" alt="" src={waveUp} />

            <Sharex
                show={showSharex}
                title={"\n Read this amazing blog *" + blogTitle + "* on \n"}
                shortInfo={"We all know that its COVID time. Nobody can touch each other. Think of a thing, even when it touches we don't have risk, but yet..."}
                shareUrl="https://roboticsnitp.co.in/news/third"
            />
            <span
                className={showSharex ? "toggle_sharex_btn fa fa-close" : "toggle_sharex_btn fa fa-share"}
                onClick={() => { handleSharex() }}
                title="Share this Blog" />

            <div className={showSharex ? "blog_me blurbg" : "blog_me"} style={{ transition: "0.8ms" }}>

            <h1 className="blog_title"> {blogTitle} </h1>
            <div className="blog_image">
                <img src="https://images.news18.com/ibnlive/uploads/2021/01/1611812585_untitled-design-2021-01-28t111232.738.jpg?impolicy=website&width=0&height=0" alt="blog"></img>
            </div>
            <div className="blog_content">
                <p>
                    We all know that its COVID time. Nobody can touch each other. Think of a thing, even when it touches we don't have risk, but yet it could help us. Yes its Robots. During this Pandemic we all cannot touch each other.</p>
                <p>
                    It's okay for us, as we stay at home, we can maintain it. But think of Doctors, nurses and other hospital staff, who treat patients. Can they treat patients without touching them. Is it possible? I know they are given kits but yet there may be chances of them coming in contact with patients. This is where we can make use of robots.</p>
                <p>
                    They may not completely replace doctors but yet they could be of great help. Instead of a person standing near the entrance and checking temperature of the staff, a robot could be a better option. What do you think? Similarly a job of a nurse could be replaced by a robot to a maximum extent. </p>
                <p>
                    Moreover, the most affected sectors will be manufacture, hospitality, retail and food, since its where this type of jobs are more common. Furthermore due to developments on artificial intelligence, computer systems are increasingly gaining cognitve capabilities so they will eventually also be able to substitute high- skilled work activities.</p>
                <p>
                    Did you know that robots have been helping doctors, nurses and others in various parts of the world during this Pandemic? Here are few cases where robots have been of a great help:
                    <ol>
                        <li>Robot in Kerala polling booth tells voters to follow Covid-19 norms. The robot is programmed to greet voters, take their temperature, dispense sanitizer and advise them to maintain social distancing.</li>
                        <li>Central Railway (CR) has set a fine example of combating COVID-19 with the effective use of the latest technology by introducing the Febri Eye and Robotic Captain Arjun. Both these robotic devices are thermal-based screening systems, which use heat sensors to read and record body temperatures. Railway officials said, with these robots, they will help the frontline staff in dealing with passengers and help in treating positive cases in a safe and efficient manner.</li>
                        <li>In April, Bengaluru-based Invento Robotics launched C-Astra, a robot that helps screen for COVID-19 symptoms and disinfects common areas. The autonomous mobile unit can move around lobbies, hallways, and rooms sanitising them. The Robot navigates around the hospital wards, guided by facial recognition technology and with a chest-mounted tablet that allows patients and their loved ones to see each other.</li>
                        <li>In March, Kochi-based Asimov Robotics developed two humanoid robots as part of theKerala Startup Mission. These robots were the first in the country to raise awareness aboutthe spread of coronavirus among people in Kerala. They stream videos and brief people aboutsocial distancing and other precautionary steps.
                        </li>
                    </ol></p>
                <p><b>"Necessity is the mother of invention"</b>.
                    This proverb was proved many times. And its proved again. Many robots have been developed to cope up with the Pandemic. And the robots now do many jobs that they didn't do earlier. There has been a lot of advancement in robots during this Pandemic and there will be, in the coming future.</p>
            </div>
            <div className="blog_credits">
                This article is contributed by <b>{blogCredits[0]}</b> {blogCredits[1]}, Roll Number: {blogCredits[2]}
            </div>
            </div>
            <img className="waveDown" alt="" src={waveDown} />
        </div>
    )
}

export default Blog3;