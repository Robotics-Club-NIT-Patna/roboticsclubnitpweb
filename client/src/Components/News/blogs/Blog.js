import React, { useState, useEffect } from "react";
import waveUp from "../../../SVGs/wave-8.svg";
import waveDown from "../../../SVGs/wave-5.svg";
import Sharex from "../ShareNews/Share";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./blog.css";
import { useParams, Link } from "react-router-dom";
import { urlFor } from "../../../client";
import { client } from "../../../client";

const Blog = () => {
  const { topicSlug } = useParams("");
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getNews() {
    const query = '*[_type == "blogs"]';
    await client.fetch(query).then((data) => {
      setNews(data);
      console.log(data);
      setLoading(false);
    });
  }

  useEffect(() => {
    getNews();
  }, []);

  const [showSharex, setShowSharex] = useState(false);
  const handleSharex = () => {
    setShowSharex(!showSharex);
  };

  return (
    <div className="blog_parent">
      <img className="waveUp" alt="" src={waveUp} />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Sharex
            show={showSharex}
            title={
              "\n Read this amazing blog *" +
              news[parseInt(topicSlug)].name +
              "* on \n"
            }
            shortInfo={news[parseInt(topicSlug)].body[0]}
            shareUrl={`https://roboticsnitp.co.in/news/${topicSlug}`}
          />
          <span
            className={
              showSharex
                ? "toggle_sharex_btn fa fa-close"
                : "toggle_sharex_btn fa fa-share"
            }
            onClick={() => {
              handleSharex();
            }}
            title="Share this Blog"
          />

          <div
            className={showSharex ? "blog_me blurbg" : "blog_me"}
            style={{ transition: "0.8ms" }}
          >
            <h1 className="blog_title"> {news[parseInt(topicSlug)].name} </h1>
            <div className="blog_image">
              <img
                src={urlFor(news[parseInt(topicSlug)].image)}
                alt="blog"
                className="blog_img"
              ></img>
            </div>
            <div className="blog_content">
              {news[parseInt(topicSlug)].body.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>
            <div className="blog_credits">
              This article was contributed by{" "}
              <b>{news[parseInt(topicSlug)].writer}</b> (
              <b>{news[parseInt(topicSlug)].branch}</b>), Roll Number :{" "}
              <b>{news[parseInt(topicSlug)].roll}</b>
              <Link to="/news">
                <span className="back-btn">
                  <KeyboardBackspaceIcon /> Go back
                </span>
              </Link>
            </div>
          </div>
        </>
      )}

      <img className="waveDown" alt="" src={waveDown} />
    </div>
  );
};

export default Blog;
