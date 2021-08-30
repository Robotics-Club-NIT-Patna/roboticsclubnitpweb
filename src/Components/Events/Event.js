import React from 'react'
import "./Event.css"
import Reward from './Reward'

function Event(props) {
    const { sampleEvent } = props
    return (
        <div>
            <div className="heading">
                <h3>{sampleEvent.heading}</h3>
                <div className="event-card">
                    <div className="event-card__image flex">
                        <img
                            className="event-card__image-img skeleton"
                            src={sampleEvent.image}
                            alt="event thumbnail"
                        />
                    </div>

                    <div className="event-card__details flex">
                        <div className="event-card__details-paragraph">
                            <div>{sampleEvent.description}</div>
                        </div>

                        <div className="event-card__details-reward">
                            <p>Rewards</p>
                            <ul className="event-card__details-reward-list">
                                <Reward reward="Swag Kits containing Tech-Stickers and Key-chains" />
                                <Reward reward="Egghead Io’s free 1-year codes" />
                                <Reward reward="Code for Cause Discount Coupons" />
                            </ul>
                        </div>

                        <div className="event-card__details-register">
                            To know more and register, <span><a href="/events">click here</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event
