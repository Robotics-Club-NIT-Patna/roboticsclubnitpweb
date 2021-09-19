import React from 'react'
import EventList from './EventList'
import './EventHeading.css'
import waveUp from '../../SVGs/wave-8.svg'
import waveDown from '../../SVGs/wave-5.svg'

function Events() {
    return (
      <div className="events-main" style={{backgroundColor: "black"}}> 
          <img className="waveUp" src={waveUp}/>

          <div className="Event-heading">
              <div className="Event-heading-div">
                <h1>Welcome to Events</h1> 
              </div>
              <div className="Event-heading_slider"></div>  
          </div> 

          <div className="participation-quote">
              <blockquote className="callout quote EN">
              No experience in this world has ever been cathartic without the willing participation of the individual. Life does not automatically bestow wisdom or growth on anyone just for showing up.<cite>  – Elizabeth Gilbert</cite>
              </blockquote>
          </div>

          <h1 className="past-events">Past Events</h1>
          <div className="sampleEventsList">
              <EventList sampleEvents={sampleEvents}/>
          </div>

          <h1 className="upcoming-events">Upcoming Events</h1>
          <div className="sampleEventsList">
              <EventList sampleEvents={sampleEvents}/>
          </div>



          {/* <div className="events-grandParent">   
            

            

            
          </div> */}

          <img className="waveDown" src={waveDown}/>
          
      </div>
    )
}

export const sampleEvents =[
    {
        id: 1,
        clicked: false,
        image : "https://roboticsnitp.co.in/assets/d3.png",
        description : "It is basically a treasure hunt type event, but not the usual one, as it will have a technical kick.\nA 24 hours event full of mind wobbling passcode encrypted Riddles.This way the participant would have to solve some riddles and the one who would be able to crack all the riddles the fastest, would be our winner.",
        heading : "Digital Detective",
        rewards : ["Swag Kits containing Tech-Stickers and Key-chains","Egghead Io’s free 1-year codes","Code for Cause Discount Coupons"]
      },
    {
    id: 2,
    clicked: false,
    image : "https://roboticsnitp.co.in/assets/d3.png",
    description : "It is basically a treasure hunt type event, but not the usual one, as it will have a technical kick.\nA 24 hours event full of mind wobbling passcode encrypted Riddles.This way the participant would have to solve some riddles and the one who would be able to crack all the riddles the fastest, would be our winner.",
    heading : "Digital Detective",
    rewards : ["Swag Kits containing Tech-Stickers and Key-chains","Egghead Io’s free 1-year codes","Code for Cause Discount Coupons"]
    },
    {
        id: 3,
        clicked: false,
        image : "https://roboticsnitp.co.in/assets/d3.png",
        description : "It is basically a treasure hunt type event, but not the usual one, as it will have a technical kick.\nA 24 hours event full of mind wobbling passcode encrypted Riddles.This way the participant would have to solve some riddles and the one who would be able to crack all the riddles the fastest, would be our winner.",
        heading : "Digital Detective",
        rewards : ["Swag Kits containing Tech-Stickers and Key-chains","Egghead Io’s free 1-year codes","Code for Cause Discount Coupons"]
      },
    {
        id: 4,
        clicked: false,
        image : "https://roboticsnitp.co.in/assets/d3.png",
        description : "It is basically a treasure hunt type event, but not the usual one, as it will have a technical kick.\nA 24 hours event full of mind wobbling passcode encrypted Riddles.This way the participant would have to solve some riddles and the one who would be able to crack all the riddles the fastest, would be our winner.",
        heading : "Digital Detective",
        rewards : ["Swag Kits containing Tech-Stickers and Key-chains","Egghead Io’s free 1-year codes","Code for Cause Discount Coupons"]
      }
  
  ] 
export default Events
