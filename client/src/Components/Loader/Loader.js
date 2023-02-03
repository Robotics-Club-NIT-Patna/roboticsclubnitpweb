import React from "react";
import "./Loader.css";
import Lottie from "react-lottie-player";
import lottieJson from "./NitpRobo.json";

export function Loader1() {
  return (
    <div className="loader-cont">
      <div className="loader"></div>
    </div>
  );
}

function Loader() {
  return (
    <div className="loader-container">
      <div>
        <Lottie
          loop
          animationData={lottieJson}
          play
          style={{ width: 280, height: 280 }}
        />
      </div>
    </div>
  );
}

export default Loader;
