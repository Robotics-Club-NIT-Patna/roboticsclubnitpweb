import React, { useState } from "react";
import waveUp from '../../../SVGs/wave-8.svg'
import waveDown from '../../../SVGs/wave-5.svg'
import Sharex from '../ShareNews/Share'
import './blog.css'
const Blog6 = () => {

    const [showSharex, setShowSharex] = useState(false);
    const handleSharex = () => {
      setShowSharex(!showSharex);
    }
    var blogTitle = "5G Technology";
     var blogCredits = ["Richa", "Civil Engineering", "2003028"];
  
    return (
      <div className="blog_parent" >
        <img className="waveUp" alt="" src={waveUp} />
  
        <Sharex
          show={showSharex}
          title={"\n Read this amazing blog *" + blogTitle + "* on \n"}
          shortInfo={"From the year 2017, Bitcoin and blockchain were all the rage, But the two things are not synonyms and blockchain has uses far..."}
          shareUrl="https://roboticsnitp.co.in/news/second"
        />
        <span
          className={showSharex ? "toggle_sharex_btn fa fa-close" : "toggle_sharex_btn fa fa-share"}
          onClick={() => { handleSharex() }}
          title="Share this Blog" />
  
        <div className={showSharex ? "blog_me blurbg" : "blog_me"} style={{ transition: "0.8ms" }}>
          <h1 className="blog_title"> {blogTitle} </h1>
          <div className="blog_image">
   
            <img src="https://i2.wp.com/krazytech.com/wp-content/uploads/5G-Wireless-Technology.jpg?fit=624%2C350&ssl=1" alt="blog"></img>
          </div>
          <div className="blog_content">
              <p>
              <b>“The 5G World will be a collaborative ecosystem, and the role of what each of us will do in that remains to be thought through.”         Borje Ekholm.</b>

              </p>
              <p>
              The introduction of first 5G network was developed by 3GPP by South Korea Wireless Technologies have been growing actively all around the World. As you all know that today the mobile technologies 4G or LTE  which has been rolled out in India, the next evolution of the technology called 5G is a game changer. It is much different from 4G because 4G was only for mobile but 5G is going to be for industrial development. 5G is going to be basically driving all future industries, the future driverless car, the robotics, the mass production in all the automated factories or even the drones that will fly all of that is going to be driven by the fact GSMA expects India to have 920 million mobile subscribers by 2025.
              </p>
              <p>
              5G will open a door for new wireless architecture and smart services. According to the reports download speeds will be 10 to 20 times faster than 4G, this is going to be a significant step towards revolutionising the tech world. Bharti Airtel and Huawei  were first to conduct a demo on India’s first 5G network.
              </p>
              <p>
                  <b>How 5G will benefit us ?</b>
              </p>
              <p>
              Video buffering during a streaming session should virtually disappear as data transmission would happen at lightening speeds. Your 3 hour HD films can be downloaded in few seconds.  We will enable smart homes that help us be more energy efficient save time on housekeeping and shopping and enjoy safer and more efficient public and private transportation.
              </p>
              <p>
              5G is great news for the IOT markets. This is primarily due to the fact that 5G networks will go along the way towards improving the performance and reliability of these devices. It will enable enhanced traffic management by supporting a massive number of IOT connections .
              </p>
          </div>
          
          <div className="blog_credits">
            This article was contributed by <b>{blogCredits[0]}</b> (<b>{blogCredits[1]}</b>), Roll Number : <b>{blogCredits[2]}</b>
          </div>   
         
        </div>
        <img className="waveDown" src={waveDown} alt="not found"/>
      </div>
    )
  }
  
  export default Blog6;