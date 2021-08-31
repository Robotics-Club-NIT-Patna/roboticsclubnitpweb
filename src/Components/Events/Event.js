import React from 'react'
import "./Event.css"
import Reward from './Reward'

function Event(props) {
    const { sampleEvent } = props
    return (
        <div class = "back">
            <div class = "space">EVENTS</div>
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
                                {     
                                        sampleEvent.rewards.map(reward => {
                                            return <Reward 
                                            key={sampleEvent.id} 
                                            reward={reward} />
                                        })  
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
