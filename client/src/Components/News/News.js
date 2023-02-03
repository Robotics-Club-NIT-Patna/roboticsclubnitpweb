import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import waveUp from "../../SVGs/wave-8.svg";
import waveDown from "../../SVGs/wave-5.svg";
import Sharex from "./ShareNews/Share";
import "./News.css";
import newblog from "./blogs/newblog.png";
import { urlFor } from "./../../client";
import RoboContext from "../../context/RoboContext";
import { Loader1 } from "../Loader/Loader";

const News = () => {
  const [blogShareId, setblogShareId] = useState(-1);
  const handleSharex = (id) => {
    setblogShareId(id);
  };

  const { news, newsLoading } = useContext(RoboContext);

  let data = [];

  const GetData = () => {
    // for (let i = 0; i < news.length; i++) {
    //   news[i].date = new Date(news[i].date);
    // }
    data = news.sort((a, b) => Number(b.date) - Number(a.date));
    return data;
  };

  return (
    <div className="news_parent">
      <img className="waveUp" src={waveUp} alt="" />
      <h1>Blogs</h1>
      <div className="blogs_container">
        <ul id="blog_content">
          {newsLoading ? (
            <Loader1/>
          ) : (
            GetData().map((obj, i) => {
              return (
                <li key={i}>
                  <Link to={`/news/${i}`}>
                    <div className="blog_thumb">
                      <img
                        src={obj && urlFor(obj.image)}
                        alt="Blog"
                        title={obj && obj.blogTitle}
                      />
                      <span>Robotica</span>
                    </div>
                  </Link>
                  <article>
                    {i === 0 ? (
                      <img
                        alt=""
                        src={obj && newblog}
                        style={{
                          width: "30%",
                          position: "absolute",
                          zIndex: "30",
                          left: "-10px",
                          top: "-230px",
                        }}
                      />
                    ) : (
                      ""
                    )}
                    <Link to={`/news/${i}`}>
                      <h3>{obj.name}</h3>
                      <p>{obj.body[0].slice(0, 230)}...</p>
                    </Link>
                    <div className="share_date">
                      {obj.date}
                      <span
                        title="Share this blog"
                        onClick={() => handleSharex(i)}
                        style={{ cursor: "pointer" }}
                      >
                        <span className="share_dev">
                          Share <i className="fa fa-share"></i>
                        </span>
                      </span>
                    </div>
                    <Sharex
                      show={blogShareId === i}
                      title={
                        "\n Read this amazing blog *" + obj.name + "* on \n"
                      }
                      shortInfo={obj && obj.body[0].slice(0, 150) + "..."}
                      shareUrl={`https://roboticsnitp.co.in/news/${i}`}
                      style={{ right: "17px" }}
                    />
                    <div
                      style={
                        blogShareId === i
                          ? {
                              transform: "scale(1)",
                              position: "absolute",
                              right: "0px",
                              bottom: "-7px",
                              fontSize: "20px",
                              color: "red",
                              zIndex: "105",
                              cursor: "pointer",
                              transition: "0.8s",
                              background: "black",
                              padding: "0px 5px",
                              width: "40px",
                              borderRadius: "0px 0px 50% 50%",
                              borderBottom: "2px solid #f9224b",
                              borderLeft: "2px solid #f9224b",
                              borderRight: "2px solid #f9224b",
                            }
                          : { transform: "scale(0)" }
                      }
                      onClick={() => {
                        handleSharex(-1);
                      }}
                      title="Close this Sharex"
                    >
                      <span
                        className={blogShareId === i ? "fa fa-close" : ""}
                      />
                    </div>
                  </article>
                </li>
              );
            })
          )}
        </ul>
      </div>
      <img className="waveDown" src={waveDown} alt="" />
    </div>
  );
};

export default News;
