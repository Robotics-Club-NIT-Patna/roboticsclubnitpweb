import React from 'react'
import { css } from '@emotion/core'
import { RingLoader} from 'react-spinners'
import './Loader.css'


function Loader () {
  return (
    <div className="container">
  
        <RingLoader  className='Loader' size={48} color='orange' loading />
       <h2>Some cool startup  styling and animation</h2>
      </div>
    
  )
}

export default Loader