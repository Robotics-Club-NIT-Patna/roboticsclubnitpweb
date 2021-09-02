import React from 'react'
import Event from './Event'

function EventList({sampleEvents}) {
    const sampleEventList = sampleEvents.map(event=>{
        return <Event key = {event.id} {...event}/>
    })
    return (
        <div>
            {sampleEventList}
        </div>
    )
}



export default EventList
