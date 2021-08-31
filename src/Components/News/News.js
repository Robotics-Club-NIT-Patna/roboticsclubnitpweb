import React from "react";

import SinglePagePDFViewer from "./single-page";
import AllPagesPDFViewer from "./all-pages";

/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import samplePDF from "./sample.pdf";

import "./styles.css";

const News = () => {
  return (

    <div className="news">
      <h4>Single Page</h4>
      <SinglePagePDFViewer pdf={samplePDF} />

      <hr />

      <h4>All Pages</h4>
      <div className="all-page-container">
        <AllPagesPDFViewer pdf={samplePDF} />
      </div>

      <hr />
    </div>
  );
}

export default News
