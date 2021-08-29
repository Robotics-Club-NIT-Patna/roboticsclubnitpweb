import React from 'react'
import "./Event.css"

function Event() {
    return (
        <div className="event-card">
            <div className="event-card__image flex">
                <img
                    className="event-card__image-img"
                    src="https://roboticsnitp.co.in/assets/d3.png"
                    alt="event image"
                />
            </div>

            <div className="event-card__details flex">
                <div className="event-card__details-paragraph">
                    <p>It is basically a treasure hunt type event, but not the usual one, as it will have a technical kick.</p>
                    <p>A 24 hours event full of mind wobbling passcode encrypted Riddles.This way the participant would have to solve some riddles and the one who would be able to crack all the riddles the fastest, would be our winner.</p>
                </div>

                <div className="event-card__details-reward">
                    <p>Rewards</p>
                    <ul className="event-card__details-reward-list">
                        <li>Swag Kits containing Tech-Stickers and Key-chains</li>
                        <li>Egghead Io’s free 1-year codes</li>
                        <li>Code for Cause Discount Coupons</li>
                    </ul>
                </div>

                <div className="event-card__details-register">
                    To know more and register, <span><a href="/events">click here</a></span>
                </div>
            </div>



        </div>
    )
}

export default Event
