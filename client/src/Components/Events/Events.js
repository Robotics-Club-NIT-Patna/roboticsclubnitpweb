import React, { useEffect } from "react";
import EventList from "./EventList";
import "./EventHeading.css";
import waveDown from "../../SVGs/wave-5.svg";
import AI from "../../SVGs/ai.svg";
import AOS from "aos";
import "aos/dist/aos.css";

function Events() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="events-main" style={{ backgroundColor: "black" }}>
      <div className="EventsMainPage">
        <div className="quotesContainer">
          <h1 data-aos="zoom-in" class="quote-text">
            Creating the next generation of innovators and change makers.
          </h1>
          <img data-aos="fade-up-right" className="aiSVG" src={AI} alt="" />
        </div>

        <div data-aos="zoom-in" className="participation-quote">
          <blockquote className="callout quote EN">
            No experience in this world has ever been cathartic without the
            willing participation of the individual. Life does not automatically
            bestow wisdom or growth on anyone just for showing up.
            <cite> – Elizabeth Gilbert</cite>
          </blockquote>
        </div>
      </div>

      <h1 className="upcoming-events">Upcoming Events</h1>
      <div className="sampleEventsList">
        <EventList sampleEvents={upcomingEvents} />
      </div>

      <h1 className="past-events">Past Events</h1>
      <div className="sampleEventsList">
        <EventList sampleEvents={pastEvents} />
      </div>

      <img className="waveDown" src={waveDown} alt="" />
    </div>
  );
}

export const pastEvents = [
  {
    id: 1,
    clicked: false,
    image: "/Codejuring.jpg",
    description: "It is an online Aptitude test followed by a coding test.",
    heading: "Codejuring",
    rewards: [
      "Swag Kits containing Tech-Stickers and Key-chains",
      "Egghead Io’s free 1-year codes",
      "Code for Cause Discount Coupons",
    ],
    link:""
  },
  {
    id: 2,
    clicked: false,
    image: "/abhiyutthan.jpeg",
    description:
      "A mega event of 4 subevents, stimulated interest in the participants for the Robotics field and club.\nThis event's sole aim was to give a fun break to students from these disturbing situations and academic overloads in the most technical way possible.",
    heading: "Abhiyutthan",
    rewards: [
      "Swag Kits containing Tech-Stickers and Key-chains",
      "Egghead Io’s free 1-year codes",
      "Code for Cause Discount Coupons",
    ],
    link:""
  },
  {
    id: 3,
    clicked: false,
    image: "/HackoHeist.png",
    description:
      "An online hackathon based on the theme of Money Heist.\nA 36 hours event full hacking and building projects which can solve social and ecological daily life problems.",
    heading: "Digital Detective",
    rewards: [
      "Swag Kits containing Tech-Stickers and Key-chains",
      "Egghead Io’s free 1-year codes",
      "Code for Cause Discount Coupons",
    ],
    link:""
  },
  {
    id: 4,
    clicked: false,
    image: "/digitaldetective.jpeg",
    description:
      "It is basically a treasure hunt type event, but not the usual one, as it will have a technical kick.\nA 24 hours event full of mind wobbling passcode encrypted Riddles.This way the participant would have to solve some riddles and the one who would be able to crack all the riddles the fastest, would be our winner.",
    heading: "Digital Detective",
    rewards: [
      "Swag Kits containing Tech-Stickers and Key-chains",
      "Egghead Io’s free 1-year codes",
      "Code for Cause Discount Coupons",
    ],
    link:""
  },
];

export const upcomingEvents = [
  {
    id: 1,
    clicked: false,
    image: "/orientation.jpeg",
    description: "Robotics Club NIT Patna is organizing an orientaion session on 5th February 2022 , full of interactive and fun activities for Freshers.",
    heading: "Fresher's Orientation",
    rewards: [
      "Chance to get featured on our Instagram Handle.",
    ],
    link:"https://chat.whatsapp.com/DLLY5Z8ks7l7MJz6hCGBZZ"
  },
  {
    id: 2,
    clicked: false,
    image: "https://static4.arrow.com/-/media/arrow/images/820-x-410/u/uno-vs-mega-vs-micro.jpg",
    description:
      "An amazing learning session for students on Arduino.\nIntroduction to Arduino, setting up the software and working with Arduino ide, and a brief intro on sensors and their working.\nStudents will also get a proper training how they can design and simulate circuits on their own.",
    heading: "Arduino Jam",
    rewards: [
      "Chance to win Swag Kits",
      "Chance to get featured on our Instagram Handle.",
    ],
    link:""
  }
];
export default Events;
