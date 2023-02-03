import React, { useEffect, useContext } from "react";
import Card from "./Card";
import "./Teams.css";
import waveUp from "../../SVGs/wave-8.svg";
import waveDown from "../../SVGs/wave-5.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { urlFor } from "../../client";
import RoboContext from "../../context/RoboContext";
import { Loader1 } from "../Loader/Loader";

const Teams = () => {
  const { members, membersLoading } = useContext(RoboContext);

  let data = [];

  const GetData = () => {
    data = members.sort((a, b) => a.rank - b.rank);
    return data;
  };

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="Teams">
      <img className="waveUp" alt="waveup" src={waveUp} />
      <h1 id="teamName">Our Team</h1>
      <div className="cardContainer">
        {membersLoading ? (
          <Loader1/>
        ) : (
          GetData().map((member, id) => (
            <div key={id} data-aos="flip-left" data-aos-easing="ease-out">
              <Card
                img={urlFor(member.image)}
                name={member.name}
                designation={member.post}
                link={member.linkedin}
              />
            </div>
          ))
        )}
      </div>
      <img className="waveDown" alt="wavedown" src={waveDown} />
    </div>
  );
};

export default Teams;
