import React, { useState } from "react";
import waveUp from '../../../SVGs/wave-8.svg'
import waveDown from '../../../SVGs/wave-5.svg'
import Sharex from '../ShareNews/Share'
import './blog.css'
const Blog5 = () => {

    const [showSharex, setShowSharex] = useState(false);
    const handleSharex = () => {
      setShowSharex(!showSharex);
    }
    var blogTitle = "Data Privacy and Data Breach";
     var blogCredits = ["Divya Bhardwaj", "Electronics And Communication Engineering", "2004041"];
  
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
   
            <img src="https://www.ibm.com/blogs/blockchain/wp-content/uploads/2018/05/Retina-Display-168621112.jpg" alt="blog"></img>
          </div>
          <div className="blog_content">
            <p>
                <b>“Privacy is one of the biggest problems in this new electronic age"      <p>-Andy Grove</p></b>
                
            </p>
            <p>
            As Data Privacy continues to occupy the international spotlight, what Andy Grove said years ago has certainly started to make more sense. Internet users are dangerously ignorant and hence prone to exploitation. They are unaware of up to what extent the information is being collected, watched, and used.
            </p>
            <p>
            Data Privacy is the fundamental right of a citizen to have control over how personal information is collected and used. This was affirmed by a nine-judge bench of the Supreme Court in its historic judgment dated 24th August 2017 wherein they declared ‘the right to privacy as an integral part of Part III of the Constitution of India. Unfortunately at present, there are no such data protection acts in India. The only existing act is 2000 (IT Act), which gives grieved individuals a right to compensation for improper disclosure of personal information.
            </p>
            <p><b>How does our data get leaked?</b></p>
            <p>When you visit a website by clicking on a search result, the website sends your IP address, browser information, and search query phrases to the website you're viewing. As a result, the website learns a lot about you. Search engines will be able to trace and profile your online activities. </p>
            <p>
            What's worrying is how your data and search history are shared with third parties.A search engine may share your data with others on purpose to make money, or it may be infiltrated or stolen by hackers. All of this can be carried out without your knowledge. The loss of such information, which is deeply personal, can be upsetting and result in disastrous consequences for everyone involved.
            </p>
            <p>
            <p><b>Precautions we can take as users-</b></p>
Clearing out cookie caches and browser histories, using an alternative that doesn't collect search history and blocks ad trackers to avoid such data being lost. You can utilize add-on software to improve the privacy and security of your browsing habits. Try using a trustworthy VPN while using a public  Wi-Fi hotspot.
            </p>
            <p>
            As some say privacy is a myth so beware

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
  
  export default Blog5;