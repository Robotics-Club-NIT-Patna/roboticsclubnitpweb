import React from "react";

import SinglePagePDFViewer from "./single-page";
import AllPagesPDFViewer from "./all-pages";
import waveUp from '../../SVGs/wave-8.svg'
import waveDown from '../../SVGs/wave-5.svg'

/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import samplePDF from "./sample.pdf";

import "./styles.css";

const News = () => {
  return (

    <div className="news-bg">
      <img className="waveUp" src={waveUp}/>
      <h2>News</h2>

      <div className="slider">
        <div className="slide-track">

        

           <div className="slide">
             <p className="news news1">The href attribute requires a valid value to be accessible. Provide a valid,</p>
           </div>

           <div className="slide">
             <p className="news news1">img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</p>
           </div>

           <div className="slide">
             <p className="news news1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, provident.</p>
           </div>

           <div className="slide">
             <p className="news news1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta inventore, mollitia hic odit praesentium possimus.</p>
           </div>

           <div className="slide">
             <p className="news news1">The href attribute requires a valid value to be accessible</p>
           </div>

           <div className="slide">
             <p className="news news1">e to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use</p>
           </div>

           <div className="slide">
             <p className="news news1"> Line 16:21:  The href attribute requires a valid value to be accessible. Provide a valid,</p>
           </div>

           <div className="slide">
             <p className="news news1">use a button and change it with appropriate styles. Learn more </p>
           </div>


           

           <div className="slide">
             <p className="news news1">The href attribute requires a valid value to be accessible. Provide a valid,</p>
           </div>

           <div className="slide">
             <p className="news news1">img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</p>
           </div>

           <div className="slide">
             <p className="news news1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, provident.</p>
           </div>

           <div className="slide">
             <p className="news news1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta inventore, mollitia hic odit praesentium possimus.</p>
           </div>

           <div className="slide">
             <p className="news news1">The href attribute requires a valid value to be accessible</p>
           </div>

           <div className="slide">
             <p className="news news1">e to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use</p>
           </div>

           <div className="slide">
             <p className="news news1"> Line 16:21:  The href attribute requires a valid value to be accessible. Provide a valid,</p>
           </div>

           <div className="slide">
             <p className="news news1">use a button and change it with appropriate styles. Learn more </p>
           </div>

           

        </div>
      </div>

      <img className="waveDown" src={waveDown}/>
    </div>
  );
}

export default News
