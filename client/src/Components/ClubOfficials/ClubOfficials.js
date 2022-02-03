import React, { useEffect } from "react";
import "./ClubOfficials.css";
import Card from "./ClubOfficialsCard/Card";
import AOS from "aos";
import "aos/dist/aos.css";

const ClubOfficials = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="ClubOfficials">
      <div className="OfcBearersHeading">
        <h1>Office Bearers</h1>
      </div>
      <div className="ClubOfficialsContainer">
        <div data-aos="zoom-in" className="Column">
          <Card
            link="./prakash.jpeg"
            name="Dr. Prakash Chandra"
            position="PI"
          />
          <Card
            link="./bharat.png"
            name="Dr. Bharat Gupta"
            position="Faculty Advisor"
          />
          <Card
            link="./PAWAN SINGH.png"
            name="Pawan Singh"
            position="Captain"
          />
        </div>
        <div data-aos="zoom-in" className="Column">
          <Card
            link="./SHAGUFTA IQBAL.png"
            name="Shagufta Iqbal"
            position="Secretary"
          />
          <Card
            link="./Srijan Jha.png"
            name="Kumar Srijan"
            position="Joint Secretary"
          />
        </div>
        <div data-aos="zoom-in" className="Column">
          <Card
            link="./shivam tyagi.png"
            name="Shivam Tyagi"
            position="Treasurer"
          />
        </div>
      </div>
    </div>
  );
};

export default ClubOfficials;
