import React,{useState} from 'react'
import "./Event.css"
import RewardList from "./RewardList"
function Event(props) {
    const { id, image, description, heading, rewards } = props
    const [imagecss, setImageCss]= useState(true)
    const showImage = ()=> setImageCss(!imagecss)
    return (
        
            <div onClick={()=>showImage()} className={imagecss ? "event__card-parent" : "event__card-parent-overlay"}>
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
