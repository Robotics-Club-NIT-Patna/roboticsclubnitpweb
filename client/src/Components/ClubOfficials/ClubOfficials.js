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
            link="https://media.licdn.com/dms/image/D4D03AQERPGJWLKxDhQ/profile-displayphoto-shrink_400_400/0/1665385412123?e=1680739200&v=beta&t=-e5STYst0OYb0GbMNcpgryyGoDfUM75bF4B2P1MwybM"
            name="Dr. Gagandeep Meena"
            position="PI"
          />
          <Card
            link="./bharat.png"
            name="Dr. Bharat Gupta"
            position="Faculty Advisor"
          />
          <Card
            link="./DarshanJain.jpg"
            name="Darshan Jain"
            position="President"
          />
        </div>
        <div data-aos="zoom-in" className="Column">
          <Card
            link="./NiharikaRathode.jpg"
            name="Nihariks Rathode"
            position="Secretary"
          />
          <Card
            link="./DeepuGupta.jpg"
            name="Deepu Gupta"
            position="Captain"
          />
        </div>
        <div data-aos="zoom-in" className="Column">
          <Card
            link="./KapishVarshnay.jpeg"
            name="Kapish Varshnay"
            position="Vice Captain"
          />
        </div>
      </div>
    </div>
  );
};

export default ClubOfficials;
