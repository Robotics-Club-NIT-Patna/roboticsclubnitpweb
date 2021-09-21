import React, { useState } from "react";
import waveUp from '../../SVGs/wave-8.svg'
import waveDown from '../../SVGs/wave-5.svg'
import Sharex from './Share'
import "./styles.css";
import SliderNews from "./SliderNews";

const blogsdata = [
  {
    blogid: 1,
    blogTitle: "3D Printing",
    bloglink: "/news/blog1",
    blogThumbLink: "https://www.gizmodo.com.au/content/uploads/sites/2/2013/05/02/18lg2imc93o0kjpg.jpg",
    tempContent: "For once, 3D printing might seem surreal to a lot of people. All you need to do is to feed the dimensions of the structure which you wish to produce",
    blogDate: "01 December, 2020 ",
    blogShareUrl: "https://roboticsnitp.co.in/news/first"
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
    blogid: 3,
    title: "How useful have robots been during this Pandemic ?",
    bloglink: "/news/blog3",
    blogThumbLink: "https://images.news18.com/ibnlive/uploads/2021/01/1611812585_untitled-design-2021-01-28t111232.738.jpg?impolicy=website&width=0&height=0",
    tempContent: "We all know that its COVID time. Nobody can touch each other. Think of a thing, even when it touches we don't have risk, but",
    blogDate: "11 January, 2021 ",
    blogShareUrl: "https://roboticsnitp.co.in/news/third"
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
    blogid: 5,
    blogTitle: "Data Privacy and Data Breach",
    bloglink: "",
    blogThumbLink: "https://www.ibm.com/blogs/blockchain/wp-content/uploads/2018/05/Retina-Display-168621112.jpg",
    tempContent: "As Data Privacy continuous to occupy the international spotlight, what Andy Grove said years ago has certainly started to make",
    blogDate: "16 August, 2021 ",
    blogShareUrl: "https://roboticsnitp.co.in/news"
  },
  {
    blogid: 6,
    blogTitle: "5G Technology",
    bloglink: "",
    blogThumbLink: "https://i2.wp.com/krazytech.com/wp-content/uploads/5G-Wireless-Technology.jpg?fit=624%2C350&ssl=1",
    tempContent: "The introduction of the first 5G network was developed by 3GPP by South Korea. Wireless Technologies have been growing actively",
    blogDate: "1 September, 2021 ",
    blogShareUrl: "https://roboticsnitp.co.in/news"
  },
  {
    blogid: 7,
    blogTitle: "Green Computing",
    bloglink: "",
    blogThumbLink: "https://sciencenode.org/feature/Greencomputer.jpg",
    tempContent: "In this developing world, we can not deny the fact that information technology has drastically improved our work and life but",
    blogDate: "15 September, 2021 ",
    blogShareUrl: "https://roboticsnitp.co.in/news"
  }


]

const News = () => {

  const [showSharex, setShowSharex] = useState(false);
  const [blogShareId, setblogShareId] = useState(0);
  const handleSharex = (id) => {
    setblogShareId(id);
    setShowSharex(!showSharex);
  }

  return (

    <div className="news_parent">
      <img className="waveUp" src={waveUp} />

      <Sharex
        show={showSharex}
        title={"\n Read this amazing blog *" + blogsdata[blogShareId].blogTitle + "* on \n"}
        shortInfo={blogsdata[blogShareId].tempContent}
        shareUrl={blogsdata[blogShareId].blogShareUrl}
      />
      <span
        className={showSharex ? "fa fa-close" : ""}
        style={showSharex ? { transform : "scale(1)", position : "absolute", right : "45px", bottom : "20px", fontSize : "35px", color : "red", zIndex : "30", cursor : "pointer", transition : "0.8s"}:{ transform : "scale(0)"}}
        onClick={() => { setShowSharex(false) }}
        title="Close this Sharex" />

      <h1>Blogs</h1>
      <div className="blogs_container">
        <ul id="blog_content">
          {blogsdata.map((obj, i) => {
            return (
              <li>
                <a href={obj.bloglink}>
                  <div className="blog_thumb">
                    <img src={obj.blogThumbLink} alt="Blog Image" title={obj.blogTitle} />
                    <span>Robotica</span>
                  </div>
                </a>
                <article>
                  <a href={obj.bloglink}>
                    <h3>{obj.blogTitle}</h3>
                    <p>{obj.tempContent}...</p>
                  </a>
                  <div className="share_date">{obj.blogDate}
                    <a title="Share this blog" onClick={() => handleSharex(i)} style={{ cursor: "pointer" }}>
                      <span className="share_dev">Share <i className="fa fa-share"></i></span></a>
                  </div>
                </article>
              </li>
            )
          })}


        </ul>
      </div>
      <h1>News</h1>
      <hr />
      <SliderNews />
      <hr />

      {/* <div className="blogs_parent">
        <h3>Single Page</h3>
        <div className="news__singlePageContainer">
          <SinglePagePDFViewer pdf={samplePDF} />
        </div>


        <h3>All Pages</h3>
        <div className="news__allPageContainer-parent">
          <div className="news__allPageContainer-children">
            <AllPagesPDFViewer pdf={samplePDF} />
          </div>
        </div>
      </div> */}



      <img className="waveDown" src={waveDown} />

    </div>


  );
}

export default News
