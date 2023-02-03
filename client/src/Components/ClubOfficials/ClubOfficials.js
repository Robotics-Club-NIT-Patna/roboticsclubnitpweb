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
            link="https://cdn.sanity.io/images/58siqeyu/production/4b0b4ef30723cedef42eb5babb7d52258db4339e-161x161.png"
            name="Darshan Jain"
            position="Captain"
          />
        </div>
        <div data-aos="zoom-in" className="Column">
          <Card
            link="https://cdn.sanity.io/images/58siqeyu/production/c46728beb9abb7fe05e77d153081d440d4719d3d-161x161.png"
            name="Divya Bhardwaj"
            position="Secretary"
          />
          <Card
            link="https://cdn.sanity.io/images/58siqeyu/production/edca40780d62cf8ae1617c791b5aa4875200ec56-900x1200.jpg?rect=0,197,900,909"
            name="Sudhanshu Ranjan"
            position="Joint Secretary"
          />
        </div>
        <div data-aos="zoom-in" className="Column">
          <Card
            link="https://cdn.sanity.io/images/58siqeyu/production/69f0b817e54fae71b5c472cad3480880ebb8b37e-161x161.png"
            name="Shubhi Singh"
            position="Treasurer"
          />
        </div>
      </div>
    </div>
  );
};

export default ClubOfficials;
