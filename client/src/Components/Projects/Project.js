import React from 'react';
import ProjectCard from './ProjectCard';
import image from '../Gallery/18.JPG'
import './Project.css'
import waveUp from '../../SVGs/wave-8.svg'
import waveDown from '../../SVGs/wave-5.svg'
import plutox from './PlutoX.png'
import hexapod from './hexapod.png'
import automatedbot from './automatedbot.png'
import airqualitydrone from './Airqualitydrone.png'
import printing from './3Dprinting.png'
import Radar from './Radar.png'
import linefollower from './linefollower.png'
import selfbalancing from './selfbalancing.png'
import mark from './mark.png'
const projects = [
      {
        name : "PlutoX",
        imgUrl:plutox,
        description:`PlutoX is an open-source programmable nano drone, by an IIT Bombay based Indian company Drona Aviation.
        It comes with a 720p 1MP wifi camera that can do ROS based image processing.
        
        The scope of application of the drone is limitless.
        It can be used to make image-processing based projects like traffic monitoring drone, or a trespasser detection drone. Also it can be used to collect data from places beyond human reach like mines.
        
        The drone can be controlled manually using the pluto controller application and can be operated in either tilt mode or joystick mode.
        It can also be controlled automatically by a script running on ROS which uses live data from camera.
        `
      },
      {
        name : "HexaPod",
        imgUrl:hexapod,
        description:`Hexapods are used for moving and precision positioning, aligning and displacing loads in all six degrees of freedom, i.e., three linear and three rotational axes.

        components used:
        microcontroller board Arduino nano,
        servo motor SG90, servo driver PCA9685, 3D printed body and moving components.`
      },
      {
        name : "Automated Bot",
        imgUrl:automatedbot,
        description:`An automated bot that moves in the vicinity of a wall maintaining a constant distance from it, and keeping a count of the number of laps covered and the number of boxes found.

        It uses two sharp laser sensors to find the distance from the wall and implements a closed-loop feedback mechanism to correct the alignment and its distance from the wall. The same sensor is used to sense any box(parcel) on either side of it. The finishing end of a lap is marked by a black strip on the ground, which the bot senses using IR sensors and subsequently marks the lap complete and increments its count. The lap count and the box count is then displayed on a 16x2 LCD installed at the rear of the bot. The microcontroller used is Arduino uno.
        DM for source code/ schematic.`
      },
      {
        name : "Drone",
        imgUrl:airqualitydrone,
        description:`Air quality monitoring drone.
        It is a manually controlled drone that acquires data about the concentration of various gases in the atmosphere and reflects the same on google firebase. It can be used to monitor the pollution level across the city sitting from the control room or can be even used to detect the presence of toxic gases at unreachable places like mines.
        The aviation unit of the project consists of KK 2.1.5 Multirotor Flight Control Board, 4 1000 KV Brushless Motor (BLDC) and propellers, 4 Electronic Speed Controllers (ESC), a 6-channel tansmitter+receiver, and the 3D printed frame.
        The flight controlled board takes signals from the radio controller(Tx) (via the receiver(Rx)) and data of current state from the onboard accelerometer/ gyroscope sensor and passes both of them to the Atmega324PA processor, which processes and instructs the Electronic Speed Controllers (ESCs) to adjust the rotational speed of each motor to control flight orientation (up, down, backward, forward, left, right, rotation about the vertical axis).
        The MQ2 gas sensor detects the concentration of gasses like LPG, Alcohol, Propane, Hydrogen, CO, and methane. This data is pushed into Firebase using an ESP8266 NodeMCU which is connected to a secure wi-fi network(if available) or we can attach a portable hotspot on the drone.`
      },
      {
        name : "3D Printing",
        imgUrl:printing,
        description:`3D printing is a process of making three dimensional solid objects from a digital file.

        The creation of a 3D printed object is achieved using additive processes. In an additive process an object is created by laying down successive layers of material until the object is created. Each of these layers can be seen as a thinly sliced cross-section of the object.
        
        3D printing is the opposite of subtractive manufacturing which is cutting out / hollowing out a piece of metal or plastic with for instance a milling machine.`
      },
      {
        name : "Radar Navigation",
        imgUrl:Radar,
        description:`The Radar Navigation is used in identifying, tracking (with integrated ARPA) and positioning of vessels (including one’s own vessel) among other things in order to adhere to the COLREGs so as to safely navigate a ship from one point to another.

        The marine radar is classified under the x-band (10 GHz) or S-band (3GHz) frequencies. The x-band, being of higher frequency is used for a sharper image and better resolution whereas the S-band is used especially when in rain or fog as well as for identification and tracking.
        
        `
      },
      {
        name : "Line Follower Bot",
        imgUrl:linefollower,
        description:`The line follower robot is a mobile machine that can detect and follow the line drawn on the floor. Generally, the path is predefined and can be either visible like a black line on a white surface with a high contrasted color or it can be invisible like a magnetic filed. Definitely, this kind of robot should sense the line with its infrared ray (IR) sensors that installed under the robot. After that, the data is transmitted to the processor by specific transition buses. Hence, the processor is going to decide the proper commends and then it sends them to the driver and thus the path will be followed by the line follower robot. In this Paper, we have illustrated the process of design, implementation and testing TABAR, a small line follower robot designed for the line follower robots competition.`
      },
      {
        name : "Self Balancing Bot",
        imgUrl:selfbalancing,
        description:`The self-balancing robot is similar to an upside down pendulum. Unlike a normal pendulum which keeps on swinging once given a nudge, this inverted pendulum cannot stay balanced on its own. It will simply fall over. Then how do we balance it? Consider balancing a broomstick on our index finger which is a classic example of balancing an inverted pendulum. We move our finger in the direction in which the stick is falling. Similar is the case with a self-balancing robot, only that the robot will fall either forward or backward. Just like how we balance a stick on our finger, we balance the robot by driving its wheels in the direction in which it is falling. What we are trying to do here is to keep the center of gravity of the robot exactly above the pivot point.

        To drive the motors we need some information on the state of the robot. We need to know the direction in which the robot is falling, how much the robot has tilted and the speed with which it is falling. All these information can be deduced from the readings obtained from MPU6050. We combine all these inputs and generate a signal which drives the motors and keeps the robot balanced.`
      },
      {
        name : "Mark 1.6",
        imgUrl:mark,
        description:`Mark 1.6 is basically a fully wireless bluetooth controlled robotic arm which is mounted on a 4WD chassis in this the arm is made using 3D printer and used NRF modules`
      },
]


const Project = () => {

  function getProjects() {
    return (
      <div className="project-grid">
        {projects.map((project, id) => {
          return (
            <ProjectCard
              className="cardColumn"
              heading={project.name}
              imageUrl={project.imgUrl}
              discription={project.description}
            ></ProjectCard>
          );
        })}
      </div>
    );
  }


  return <div className="project_back">
       <img src={waveUp} alt=""/>
     <div className = {"title"}>
                Our Projects
            </div>
      {getProjects()}
    <img className="waveDown"  alt="" src={waveDown} />
  </div>
};

export default Project;
