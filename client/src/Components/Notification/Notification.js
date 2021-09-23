import React from 'react'
import './Notification.css'
import SliderNews from '../News/SliderNews/SliderNews'
import NotificationSVG from '../../SVGs/notification.svg'

const Notification = () => {
    return (
        <div className="newsNotification">
            <div className="newsContainer" 
                data-aos="fade-right" 
                data-aos-offset="150">
                    <div className="newsSVG"><img className="imgSection" src={NotificationSVG}/></div>
                    <div><SliderNews/></div>   
            </div>

            <div className="newsPhoneView"><SliderNews/></div>
        </div>

    )
}

export default Notification
