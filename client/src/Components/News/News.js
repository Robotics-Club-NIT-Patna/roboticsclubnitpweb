import React, { useState } from "react";
import waveUp from '../../SVGs/wave-8.svg'
import waveDown from '../../SVGs/wave-5.svg'
import Sharex from './ShareNews/Share'
import "./News.css";
import newblog from './blogs/newblog.png'
const blogsdata = [
  {
    blogid: 7,
    blogTitle: "Green Computing",
    bloglink: "/news/blog7",
    blogThumbLink: "https://sciencenode.org/feature/Greencomputer.jpg",
    tempContent: "In this developing world, we can not deny the fact that information technology has drastically improved our work and life but",
    blogDate: "15 September, 2021 ",
    blogShareUrl: "https://roboticsnitp.co.in/news"
  },
  {
    blogid: 6,
    blogTitle: "5G Technology",
    bloglink: "/news/blog6",
    blogThumbLink: "https://i2.wp.com/krazytech.com/wp-content/uploads/5G-Wireless-Technology.jpg?fit=624%2C350&ssl=1",
    tempContent: "The introduction of the first 5G network was developed by 3GPP by South Korea. Wireless Technologies have been growing actively",
    blogDate: "1 September, 2021 ",
    blogShareUrl: "https://roboticsnitp.co.in/news"
  },
  {
    blogid: 5,
    blogTitle: "Data Privacy and Data Breach",
    bloglink: "/news/blog5",
    blogThumbLink: "https://www.ibm.com/blogs/blockchain/wp-content/uploads/2018/05/Retina-Display-168621112.jpg",
    tempContent: "As Data Privacy continuous to occupy the international spotlight, what Andy Grove said years ago has certainly started to make",
    blogDate: "16 August, 2021 ",
    blogShareUrl: "https://roboticsnitp.co.in/news"
  },
  {
    blogid: 4,
    blogTitle: "Intro to BlockChain",
    bloglink: "/news/blog4",
    blogThumbLink: "https://img.freepik.com/free-photo/cryptocurrency-coding-digital-black-background-open-source-blockchain-concept_53876-124641.jpg?size=626&ext=jpg",
    tempContent: "From the year 2017, Bitcoin and blockchain were all the rage, But the two things are not synonyms and blockchain has uses far beyond bitcoin and cryp",
    blogDate: "09 February, 2021 ",
    blogShareUrl: "https://roboticsnitp.co.in/news/fourth"
  },
  {
    blogid: 3,
    blogTitle: "How useful have robots been during this Pandemic?",
    bloglink: "/news/blog3",
    blogThumbLink: "https://images.news18.com/ibnlive/uploads/2021/01/1611812585_untitled-design-2021-01-28t111232.738.jpg?impolicy=website&width=0&height=0",
    tempContent: "We all know that its COVID time. Nobody can touch each other. Think of a thing, even when it touches we don't have risk, but",
    blogDate: "11 January, 2021 ",
    blogShareUrl: "https://roboticsnitp.co.in/news/third"
  },
  {
    blogid: 2,
    blogTitle: "Will Automation Lead To Mass Unemployment ?",
    bloglink: "/news/blog2",
    blogThumbLink: "https://www.techsolcorp.com/wp-content/uploads/2021/06/Techsol-Pharmacovigilance-Automation.jpg",
    tempContent: "Regular reports warn us that automation apocalypse is nigh. In January 2017, a McKinsey & Company study found that",
    blogDate: "16 December, 2020 ",
    blogShareUrl: "https://roboticsnitp.co.in/news/second"
  },
  {
    blogid: 1,
    blogTitle: "3D Printing",
    bloglink: "/news/blog1",
    blogThumbLink: "https://www.gizmodo.com.au/content/uploads/sites/2/2013/05/02/18lg2imc93o0kjpg.jpg",
    tempContent: "For once, 3D printing might seem surreal to a lot of people. All you need to do is to feed the dimensions of the structure which you wish to produce",
    blogDate: "01 December, 2020 ",
    blogShareUrl: "https://roboticsnitp.co.in/news/first"
  },

]

const News = () => {

  const [blogShareId, setblogShareId] = useState(-1);
  const handleSharex = (id) => {
    setblogShareId(id);
  }
  var updatedBlogsData = [].concat(blogsdata) ;
  return (
    <div className="news_parent">
      <img className="waveUp" src={waveUp} alt="" />
      <h1>Blogs</h1>
      <div className="blogs_container">
        <ul id="blog_content">
          {updatedBlogsData.map((obj, i) => {
            return (
              <li>
                <a href={obj.bloglink}>
                  <div className="blog_thumb">
                    <img src={obj.blogThumbLink} alt="Blog" title={obj.blogTitle} />
                    <span>Robotica</span>
                  </div>
                </a>
                <article>{i===0 ? <img alt="" src={newblog} style={{width : "45%" , position : "absolute", zIndex : "30", left : "-10px", top : "-230px"}} /> : ""}
                  <a href={obj.bloglink}>
                    <h3>{obj.blogTitle}</h3>
                    <p>{obj.tempContent}...</p>
                  </a>
                  <div className="share_date">{obj.blogDate}
                    <a title="Share this blog" onClick={() => handleSharex(i)} style={{ cursor: "pointer" }}><span  className="share_dev">Share <i className="fa fa-share"></i></span></a>
                    
                  </div>
                  <Sharex
                      show={blogShareId == i}
                      title={"\n Read this amazing blog *" + obj.blogTitle + "* on \n"}
                      shortInfo={obj.tempContent}
                      shareUrl={obj.blogShareUrl}
                      style={{right : "17px"}}
                    />
                    <div
                      style={blogShareId == i ? { transform: "scale(1)", position: "absolute", right: "0px", bottom: "-7px", fontSize: "20px", color: "red", zIndex: "105", cursor: "pointer", transition: "0.8s", background : "black", padding : "0px 5px", width : "40px", borderRadius : "0px 0px 50% 50%", borderBottom: "2px solid #f9224b", borderLeft: "2px solid #f9224b",borderRight: "2px solid #f9224b" } : { transform: "scale(0)" }}
                      onClick={() => { handleSharex(-1) }}
                      title="Close this Sharex" ><span className={blogShareId == i ? "fa fa-close" : ""}/></div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      <img className="waveDown" src={waveDown} alt="" />
    </div>
  );
}

export default News