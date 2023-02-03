import React, { useState, useEffect, useContext } from "react";
import { urlFor } from "../../client";
import RoboContext from "../../context/RoboContext";
import CloseIcon from "@material-ui/icons/Close";
import waveUp from "../../SVGs/wave-8.svg";
import "./Gallery.css";
import AOS from "aos";
import { Loader1 } from "../Loader/Loader";

const Gallery = () => {
  const { photos, photosLoading } = useContext(RoboContext);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImageSrc] = useState("");
  const getImg = (imgSrc, contSrc) => {
    setTempImageSrc(imgSrc);
    setModel(true);
  };

  useEffect(() => {
    model
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [model]);

  return (
    <div className="parent">
      <img className="waveUp" src={waveUp} alt="" />
      <div className={"title"}>Our Gallery</div>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} className="clickImg" alt="" />
        <CloseIcon onClick={() => setModel(false)} />
      </div>

      {photosLoading ? (
        <Loader1 />
      ) : (
        <div className="gallery">
          {photos.map((item, index) => {
            return (
              <div
                className="pics"
                key={index}
                onClick={() => getImg(urlFor(item.image), item.contSrc)}
              >
                <img
                  src={urlFor(item.image)}
                  style={{ width: "100%" }}
                  data-aos="zoom-in"
                  data-aos-anchor-placement="left-bottom"
                  alt=""
                />
              </div>
            );
          })}
        </div>
      )}
      {/* <img className="waveDown" src={waveDown}/> */}
    </div>
  );
};

export default Gallery;
