import React, { useEffect, useContext } from "react";
import "./EventHeading.css";
import waveDown from "../../SVGs/wave-5.svg";
import AI from "../../SVGs/ai.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import RoboContext from "../../context/RoboContext";
import { urlFor } from "../../client";
import Event from "./Event";
import { Loader1 } from "../Loader/Loader";

function Events() {
  const { events, eventsLoading } = useContext(RoboContext);

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="events-main" style={{ backgroundColor: "black" }}>
      <div className="EventsMainPage">
        <div className="quotesContainer">
          <h1 data-aos="zoom-in" className="quote-text">
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
        <div className="event-list">
          {eventsLoading ? (
            <Loader1/>
          ) : (
            events.map((event, id) => (
              <Event
                key={id}
                link={event.link ? event.link : "https://www.google.com"}
                heading={event.name}
                rewards={event.rewards}
                image={urlFor(event.image)}
                description={event.detail}
              />
            ))
          )}
        </div>
      </div>

      <h1 className="past-events">Past Events</h1>
      <div className="sampleEventsList">
        <div className="event-list">
          {eventsLoading ? (
            <Loader1/>
          ) : (
            events.map((event, id) => (
              <Event
                key={id}
                link={event.link ? event.link : "https://www.google.com"}
                heading={event.name}
                rewards={event.rewards}
                image={urlFor(event.image)}
                description={event.detail}
              />
            ))
          )}
        </div>
      </div>

      <img className="waveDown" src={waveDown} alt="" />
    </div>
  );
}

export default Events;
