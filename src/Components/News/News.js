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

    <div className="news">
      <img className="waveUp" src={waveUp}/>
      <h3>Single Page</h3>
      <div className="news__singlePageContainer">
        <SinglePagePDFViewer pdf={samplePDF} />
      </div>

      <hr />

      <h3>All Pages</h3>
      <div className="news__allPageContainer-parent">
        <div className="news__allPageContainer-children">
          <AllPagesPDFViewer pdf={samplePDF} />
        </div>
        <div className="news__allPageContainer-children">
          <AllPagesPDFViewer pdf={samplePDF} />
        </div>
      </div>

      <hr />

      <img className="waveDown" src={waveDown}/>
    </div>
  );
}

export default News
