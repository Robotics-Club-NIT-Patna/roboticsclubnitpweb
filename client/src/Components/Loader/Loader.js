import React from 'react'
import { css } from '@emotion/core'
import { RingLoader} from 'react-spinners'
import './Loader.css'
import Lottie from 'react-lottie-player'
import lottieJson from './NitpRobo.json'


function Loader () {
  
  return (
    <div className="loader-container">
     <div>
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: 280, height: 280 , }}
    />
        </div>
      </div>
  )
}

export default Loader;