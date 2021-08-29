import React from 'react'
import './Teams.css'
import img from './pawan.png'

const Teams = () => {
    return (
        <>
        <div class = 'space'>
            <h1>Teams</h1>
        </div>
             <div class="container">
               <div class="card">
               <div class="circle">
                <h2 class='text'>Pawan</h2>
                <h3 class='text'>(Captain)</h3>
                <h3 class='text'>Electronics and Communication 3rd year</h3>
               </div>
                 <div class="content">
                    <p>  </p>
                    <div class="photos">
                    <div class="sketch">
                    <p><img src={img} class ='hover-img' alt="img"/></p>
                 
               </div>
             </div>
            
           </div>
         </div>
         </div>
         </>

    )
}

export default Teams