import React, { useState, useEffect } from "react";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.JPG";
import img7 from "./7.JPG";
import img8 from "./8.JPG";
import img9 from "./9.JPG";
import img10 from "./10.JPG";
import img11 from "./11.JPG";
import img12 from "./12.JPG";
import img13 from "./13.JPG";
import img14 from "./14.JPG";
import img15 from "./15.JPG";
import img16 from "./16.JPG";
import img17 from "./17.JPG";
import img18 from "./18.JPG";
import img19 from "./19.JPG";
import img20 from "./20.JPG";
import img21 from "./21.JPG";
import img22 from "./22.JPG";
import img23 from "./23.JPG";
import img24 from "./24.JPG";
import CloseIcon from "@material-ui/icons/Close";
import waveUp from "../../SVGs/wave-8.svg";
import "./Gallery.css";
import AOS from "aos";

const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  let data = [
    {
      id: 1,
      imgSrc: img1,
    },
    {
      id: 2,
      imgSrc: img2,
    },
    {
      id: 3,
      imgSrc: img3,
    },
    {
      id: 4,
      imgSrc: img4,
    },
    {
      id: 5,
      imgSrc: img5,
    },
    {
      id: 6,
      imgSrc: img6,
    },
    {
      id: 7,
      imgSrc: img7,
    },
    {
      id: 8,
      imgSrc: img8,
    },
    {
      id: 9,
      imgSrc: img9,
    },
    {
      id: 10,
      imgSrc: img10,
    },
    {
      id: 11,
      imgSrc: img11,
    },
    {
      id: 12,
      imgSrc: img12,
    },
    {
      id: 13,
      imgSrc: img13,
    },
    {
      id: 14,
      imgSrc: img14,
    },
    {
      id: 15,
      imgSrc: img15,
    },
    {
      id: 16,
      imgSrc: img16,
    },
    {
      id: 17,
      imgSrc: img17,
    },
    {
      id: 18,
      imgSrc: img18,
    },
    {
      id: 19,
      imgSrc: img19,
    },
    {
      id: 20,
      imgSrc: img20,
    },
    {
      id: 21,
      imgSrc: img21,
    },
    {
      id: 22,
      imgSrc: img22,
    },
    {
      id: 23,
      imgSrc: img23,
    },
    {
      id: 24,
      imgSrc: img24,
    },
  ];
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
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc, item.contSrc)}
            >
              <img
                src={item.imgSrc}
                style={{ width: "100%" }}
                data-aos="zoom-in"
                data-aos-anchor-placement="left-bottom"
                alt=""
              />
            </div>
          );
        })}
      </div>
      {/* <img className="waveDown" src={waveDown}/> */}
    </div>
  );
};

export default Gallery;
