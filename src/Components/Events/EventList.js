import React from 'react'
import Event from './Event'
import Footer from '../Footer/Footer';

function EventList({sampleEvents}) {
    const sampleEventList = sampleEvents.map(event=>{
        return <Event key = {event.id} {...event}/>
    })
    return (
        <>    
        <div className="event-list">
            {sampleEventList}
        </div>
     <div className="events-footer"> <Footer/></div>   
     </>
    )
}



export default EventList
