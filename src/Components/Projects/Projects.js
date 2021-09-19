import React, { useState } from 'react'
import './Projects.css'
import img1 from './Images/Hexa.jpg'

import waveUp from '../../SVGs/wave-8.svg'
import waveDown from '../../SVGs/wave-5.svg'

export const Projects = () => {
    return (
        <div className="parent" >
            <img className="waveUp" src={waveUp} />
            <div className={"title"}>
                Welcome to our Projects
            </div>

            <div>

                <tbody className="tbody"><tr>
                    <td className="cards">
                        <a href="#" className="card">
                            <img src={img1} className="card_image" />
                            <div className="card_overlay">
                                <div className="card_header">
                                    <svg className="card_arc" xmlns="http://www.w3.org/2000/svg">
                                        <path />
                                    </svg>
                                    <div className="card_header">
                                        <h3 className="card_title">Hexapod</h3>
                                    </div>
                                </div>
                                <p className="card_des">Have you ever heard about a spider which can easily move on irregular surfaces even on very rocky terrains with higher precise in its task .It is very flexible and can survive in any environmental conditions. It can perform dexterous task and can walk even if its legs become disabled. We have prepared this for you Have a look and learn many more intresting features of this spider robot</p>
                            </div>
                        </a>
                    </td>
                    <td className="cards">
                        <a href="#" className="card">
                            <img src={img1} className="card_image" />
                            <div className="card_overlay">
                                <div className="card_header">
                                    <svg className="card_arc" xmlns="http://www.w3.org/2000/svg">
                                        <path />
                                    </svg>
                                    <div className="card_header">
                                        <h3 className="card_title">3 -DOF ROBOTIC ARM</h3>
                                    </div>
                                </div>
                                <p className="card_des">The rapid development in technology is making human life very simple and more comfortable. We have prepared an arm which has human like dexterity in a variety of fields . This arm can be used for multiple industrial purposes like welding, material handling , thermal spraying ,painting, drilling and so on.</p>
                            </div>
                        </a>
                    </td>
                </tr>
                    <tr>
                        <td className="cards">
                            <a href="#" className="card">
                                <img src={img1} className="card_image" />
                                <div className="card_overlay">
                                    <div className="card_header">
                                        <svg className="card_arc" xmlns="http://www.w3.org/2000/svg">
                                            <path />
                                        </svg>
                                        <div className="card_header">
                                            <h3 className="card_title">Hexapod</h3>
                                        </div>
                                    </div>
                                    <p className="card_des">Have you ever heard about a spider which can easily move on irregular surfaces even on very rocky terrains with higher precise in its task .It is very flexible and can survive in any environmental conditions. It can perform dexterous task and can walk even if its legs become disabled. We have prepared this for you Have a look and learn many more intresting features of this spider robot</p>
                                </div>
                            </a>
                        </td>
                        <td className="cards">
                            <a href="#"  className="card">
                           
                                <img src={img1} className="card_image" />
                                <div className="card_overlay">
                                    <div className="card_header">
                                        <svg className="card_arc" xmlns="http://www.w3.org/2000/svg">
                                            <path />
                                        </svg>
                                        <div className="card_header">
                                            <h3 className="card_title">Hexapod</h3>
                                        </div>
                                    </div>
                                    <p className="card_des">The rapid development in technology is making human life very simple and more comfortable. We have prepared an arm which has human like dexterity in a variety of fields . This arm can be used for multiple industrial purposes like welding, material handling , thermal spraying ,painting, drilling and so on.</p>
                                </div>
                                </a>
                        </td>
                    </tr></tbody>
            </div>

            <img className="waveDown" src={waveDown} />
        </div>
    )
}
export default Projects