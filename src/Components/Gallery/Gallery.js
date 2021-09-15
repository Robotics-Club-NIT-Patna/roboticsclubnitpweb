import React,{useState,useEffect} from 'react'
import img1 from './1.jpeg'
import img2 from './2.jpeg'
import img3 from './3.jpeg'
import img4 from './4.jpeg'
import img5 from './5.jpeg'
import img6 from './6.jpeg'
import img7 from './7.jpeg'
import img8 from './8.jpeg'
import img9 from './9.jpeg'
import img10 from './10.jpeg'
import Bg from './Background_Img.png'
import CloseIcon from '@material-ui/icons/Close';

import './Gallery.css'
import waveUp from '../../SVGs/wave-8.svg'
import waveDown from '../../SVGs/wave-5.svg'
import AOS from "aos";
import { getQueriesForElement } from '@testing-library/react'

const Gallery =() => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])
    let data = [
        {
            id: 1,
            imgSrc: img1,
            contSrc: "dia, and it has directly or indirectly affected many of my classmates. Some of my batchmates were suffering while some are still suffering from this disease. I've also learned that some students are experiencing mental stress and anxiety as a result of their family being affected, and in some cases, unbearable losses as a result of the death of family members. As a result, its shadow has been cast on our online classes. At the moment, education feels like a formality because students are unable to concentrate and classes are becoming meaningless. Because the new strain of virus has gripped us with fear and concern, attending online classes has become a herculean task. Many of us come from small towns where health-care facilities haven't grown much, leaving us at the mercy of small dispensaries and clinics Keeping in mind all of the foregoing, I would humbly request that you grant the entire batch a leave of at least 10 days so that we can care for ourselves and our loved ones. This will also relieve us of the mental stress and anxiety that has developed as a result of the continuous classes, as well as assist those who have missed some classes in completing the catch-up work.",
        },
        {
            id: 2,
            imgSrc: img2,
            contSrc: "hey guysdknjsfbhdsbhbfcsn hjbhwdbjhkhbd jchb cghkvccvtchkakgahcvaagchwwhybcdjhsajbjbwhwhdbhevhhbc",
        },
        {
            id: 3,
            imgSrc: img3,
            contSrc: "hey guys dvdhasxbasxnnwdbeewyvdwvctwdgajsbhsavddhdvwdbweydwevydvfwvfhjdsajka",
        },
        {
            id: 4,
            imgSrc: img4,
            contSrc: "hey guys",
        },

        {
            id:6 ,
            imgSrc: img6,
            contSrc: "hey guys",
        },
        {
            id: 5,
            imgSrc: img5,
            contSrc: "hey guys",
        },
        {
            id: 7,
            imgSrc: img7,
            contSrc: "hey guys",
        },
        
      
        {
            id: 9,
            imgSrc: img9,
            contSrc: "hey guys",
        },
        {
            id: 10,
            imgSrc: img10,
            contSrc: "hey guys",
        },
        {
            id: 8,
            imgSrc: img8,
            contSrc: "hey guys",
        },
        {
            id: 8,
            imgSrc: img8,
        },{
            id: 8,
            imgSrc: img8,
        },{
            id: 8,
            imgSrc: img8,
        },
     
    ]
    const [model, setModel]= useState(false);
    const [tempimgSrc,setTempImageSrc] = useState('');
    const [tempimgContSrc,setTempContSrc] = useState('');
    const getImg = (imgSrc,contSrc) => {
        setTempImageSrc(imgSrc);
        setTempContSrc(contSrc);
        setModel(true);
    }
    return (
        <div className = "parent" >
            
            <img className="waveUp" src={waveUp}/>
            <div className = {"title"}>
                Our Gallery
            </div>
            <div className={model? "model open" : "model"} >
                <img src={tempimgSrc} className = "clickImg"/>
                <div className="detail">
                    <div>{tempimgContSrc}</div>
                </div>
                <CloseIcon onClick={() => setModel(false)}/>
            </div>
            <div className = "gallery">
                {data.map((item, index)=>{
                    return(
                        <div className = "pics" key ={index} onClick={()=>getImg(item.imgSrc,item.contSrc) }>
                            <img src={item.imgSrc} style={{ width: '100%' }} data-aos="zoom-in" data-aos-anchor-placement="left-bottom" /> 
                        </div> 
                    )
                })}
            </div>
            <img className="waveDown" src={waveDown}/>

        </div>
    )
}

export default Gallery
