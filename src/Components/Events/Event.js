import React,{useState,useEffect} from 'react'
import "./Event.css"
import RewardList from "./RewardList"
import AOS from "aos"
function Event(props) {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])
    const { id, image, description, heading, rewards, clicked } = props
    return (
        
            <div 
                className="event__card-parent" data-aos="zoom-in" data-aos-anchor-placement="top-bottom"
            >
                <div className="card">
                    <div className="img8x_normal">
                        <img src={image}  alt="image" />
                    </div>
                    <div className="content">
                        <h3>{heading}</h3>
                        <div className="event-card__details flex">
                            <div className="event-card__details-paragraph">
                                <div>{description}</div>
                            </div>

                            <div className="event-card__details-reward">
                                <h5>Rewards</h5>
                                <ul className="event-card__details-reward-list">
                                    {     
                                        <RewardList rewards={rewards}/>  
                                    }
                                    
                                </ul>
                            </div>
                            <div className="know-more-event__button-div">
                                <button className="know-more-event">Register</button>
                            </div>
                            
                        
                        </div>
                    </div>
                </div>
            </div>
       
    )
}

export default Event
