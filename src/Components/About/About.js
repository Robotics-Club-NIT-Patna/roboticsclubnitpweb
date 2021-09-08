import React from 'react'
import './About.css'

const About = () => {
    return (
        <div>
       <div class="night">
        <div class="night1">
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
    
        </div>
    
        <div class="night2 ">
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
    
        </div>
    
        <div class="night3">
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
        </div>
    

{/* <!-- heading --> */}
        {/* <div class = "heading"> */}
           <div class = "typewriter">
               <h1 data-text="about us"></h1>
            </div> 
        {/* </div> */}
{/* <!-- quote --> */}
        <div class = "quote">
            <blockquote>Robotics and other combinations will make the world pretty fantastic compared with today</blockquote>
            
            <cite>__Bill Gates__</cite>
        </div>
{/* <!-- paragraph --> */}
        <div class="paragraph">
            <p>
                Robotics club has been embodiment of innovation at NIT Patna.
             Being formed in year 2015-16 by Nripendra Saroj Sir ,our club boasts a glorious legacy.
              With our members ranging from seasoned coders to brilliant designers to hardware scientists,
               Our members have also represented our college at Smart India hackathon headed by our current Captain Dheeraj Kumar Sir.
             We have been constantly working to enhance the students’ technical skills and making them aware of the fascinating world of automation,
             robotics and electronics which surrounds us.Boasting of a huge roster of exciting and engaging events, This year’s 
            techno-cultural fest was nothing less than a rollercoaster ride for us.</p>
            
        </div>

{/* <!-- Features --> */}

  <section id="features">
      <div class = " box row">
            <div class="feature-box col-lg-4">
                <i class="icon fas fa-users fa-4x"></i>
                <h3>30+ Members</h3>  
            </div>
            <div class="feature-box col-lg-4 ">
                <i class="icon far fa-calendar-check fa-4x"></i>
                <h3>20+ Events</h3>   
            </div>
            <div class="feature-box col-lg-4 ">
                <i class=" icon fas fa-mail-bulk fa-4x"></i>
                <h3>100+ Newsletters</h3>    
            </div>
      </div>
  </section>
</div>
        </div>
    )
}

export default About
