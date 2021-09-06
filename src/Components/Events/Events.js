import React from 'react'
import EventList from './EventList'
import './EventHeading.css'

function Events() {
    return (
      <>
          
          <div className="events-grandParent">   
            <div className="Event-heading">
              <div className="Event-heading-div">
                <h1>Welcome to Events</h1> 
              </div>
                <div className="Event-heading_slider"></div>  
            </div>  

              <EventList sampleEvents={sampleEvents}/>
          </div>
      </>
    )
}

const sampleEvents =[
    {
        id: 1,
        image : "https://roboticsnitp.co.in/assets/d3.png",
        description : "It is basically a treasure hunt type event, but not the usual one, as it will have a technical kick.\nA 24 hours event full of mind wobbling passcode encrypted Riddles.This way the participant would have to solve some riddles and the one who would be able to crack all the riddles the fastest, would be our winner.",
        heading : "Digital Detective",
        rewards : ["Swag Kits containing Tech-Stickers and Key-chains","Egghead Io’s free 1-year codes","Code for Cause Discount Coupons"]
      },
    {
    id: 2,
    image : "https://roboticsnitp.co.in/assets/d3.png",
    description : "It is basically a treasure hunt type event, but not the usual one, as it will have a technical kick.\nA 24 hours event full of mind wobbling passcode encrypted Riddles.This way the participant would have to solve some riddles and the one who would be able to crack all the riddles the fastest, would be our winner.",
    heading : "Digital Detective",
    rewards : ["Swag Kits containing Tech-Stickers and Key-chains","Egghead Io’s free 1-year codes","Code for Cause Discount Coupons"]
    },
    {
        id: 3,
        image : "https://roboticsnitp.co.in/assets/d3.png",
        description : "It is basically a treasure hunt type event, but not the usual one, as it will have a technical kick.\nA 24 hours event full of mind wobbling passcode encrypted Riddles.This way the participant would have to solve some riddles and the one who would be able to crack all the riddles the fastest, would be our winner.",
        heading : "Digital Detective",
        rewards : ["Swag Kits containing Tech-Stickers and Key-chains","Egghead Io’s free 1-year codes","Code for Cause Discount Coupons"]
      },
    {
        id: 4,
        image : "https://roboticsnitp.co.in/assets/d3.png",
        description : "It is basically a treasure hunt type event, but not the usual one, as it will have a technical kick.\nA 24 hours event full of mind wobbling passcode encrypted Riddles.This way the participant would have to solve some riddles and the one who would be able to crack all the riddles the fastest, would be our winner.",
        heading : "Digital Detective",
        rewards : ["Swag Kits containing Tech-Stickers and Key-chains","Egghead Io’s free 1-year codes","Code for Cause Discount Coupons"]
      }
  
  ] 
export default Events
