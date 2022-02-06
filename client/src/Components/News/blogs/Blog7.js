import React, { useState } from "react";
import waveUp from '../../../SVGs/wave-8.svg'
import waveDown from '../../../SVGs/wave-5.svg'
import Sharex from '../ShareNews/Share'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import './blog.css'
const Blog7 = () => {

    const [showSharex, setShowSharex] = useState(false);
    const handleSharex = () => {
      setShowSharex(!showSharex);
    }
    var blogTitle = "Green Computing";
     var blogCredits = ["Subhi Singh", "Electronics And Communication Engineering", "2004073"];
  
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
   
            <img src="https://sciencenode.org/feature/Greencomputer.jpg" alt="blog"></img>
          </div>
          <div className="blog_content">
            <p>
            In this developing world, we can not deny the fact that information technology has drastically improved our work and life but upto some extent it is contributing to certain environmental problems that are left unnoticed.
            </p>
            <p>
            Green computing is a sustainable approach in the design, manufacture, use, and disposal of IT resources (monitors, printers, storage systems, networking equipment, etc.) in an efficient manner so that it has minimal impact on the environment.
            </p>
            <p>
            In the early 90s era when computers were big, there was no energy management, sleep, or hibernation mode which could allow power saving in computing devices.The parts of computing equipment are made from certain toxic components such as lead, mercury, and Polychlorinated Biphenyls (PCBs).These are non-biodegradable and their inefficient packing & disposal methods pose a serious threat to the environment.
            </p>
            <p>
            Considering these problems, the U.S. Environmental Protection Agency (EPA) came up with an innovative labeling program in the year 1992 called Energy Star which is the basic foundation of GREEN COMPUTERS.
            </p>
            <p>
            It has several advantages , like reduced energy consumption that leads to reduced GHG emissions and fossil fuel usage. Also it is cost-effective due to less energy usage and cooling requirements, and a lesser number of electronic wastes are released. It uses non-toxic components which do not pose any health hazard to the end-users.
            </p>
            <p>
            The very few drawbacks are: Frequent change in technology. Somehow it causes more burden to an individual and the disparity in the level of understanding across various companies and professionals.There are fewer courses and publications related to green computing.
            </p>
            <p>
            Various IT organizations in the world started adopting green computing practices. In India IT giant Wipro has launched its eco-friendly project called greenware. Likewise, Apple,. Samsung and few others have their own programs of recycling.
            </p>
            <p>
            We can make small changes at our end also by using energy star-labeled products, screensavers
and purchasing hardware that is less energy-intensive.
            </p>
            <p>
            Finally, we all should participate in electronic recycling programs to reduce the burden on the environment.
            </p>
          </div>
          
            <div className="blog_credits">
            This article was contributed by <b>{blogCredits[0]}</b> (<b>{blogCredits[1]}</b>), Roll Number : <b>{blogCredits[2]}</b>
            <a href="/news" className="back-btn"><KeyboardBackspaceIcon/>{" "}Go back</a>
          </div>     
         
        </div>
        <img className="waveDown" src={waveDown} alt="not found"/>
      </div>
    )
  }
  
  export default Blog7;