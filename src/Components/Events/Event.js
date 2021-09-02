import React from 'react'
import "./Event.css"
import RewardList from "./RewardList"
function Event(props) {
    const { id, image, description, heading, rewards } = props
    return (
        <div>
            <div className="heading">
                <h3>{heading}</h3>
                <div className="event-card">
                    <div className="event-card__image flex">
                        <img
                            className="event-card__image-img skeleton"
                            src={image}
                            alt="event thumbnail"
                        />
                    </div>

                    <div className="event-card__details flex">
                        <div className="event-card__details-paragraph">
                            <div>{description}</div>
                        </div>

                        <div className="event-card__details-reward">
                            <p>Rewards</p>
                            <ul className="event-card__details-reward-list">
                                {     
                                    <RewardList rewards={rewards}/>  
                                }
                                
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
