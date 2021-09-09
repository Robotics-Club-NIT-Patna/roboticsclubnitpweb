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
import CloseIcon from '@material-ui/icons/Close';

import './Gallery.css'
import waveUp from '../../SVGs/wave-8.svg'
import waveDown from '../../SVGs/wave-5.svg'
import AOS from "aos";

const Gallery =() => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])
    let data = [
        {
            id: 1,
            imgSrc: img1,
        },
        {
            id: 2,
            imgSrc: img2,
        },
        {
            id: 3,
            imgSrc: img3,
        },
        {
            id: 4,
            imgSrc: img4,
        },

        {
            id:6 ,
            imgSrc: img6,
        },
        {
            id: 5,
            imgSrc: img5,
        },
        {
            id: 7,
            imgSrc: img7,
        },
        
      
        {
            id: 9,
            imgSrc: img9,
        },
        {
            id: 10,
            imgSrc: img10,
        },
        {
            id: 8,
            imgSrc: img8,
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
    const getImg = (imgSrc) => {
        setTempImageSrc(imgSrc);
        setModel(true);
    }
    return (
        <div className = "parent">
            
            
            <div className = {"title"}>
                Our Gallery
            </div>
            <div className={model? "model open" : "model"}>
                <img src={tempimgSrc}/>
                
                <CloseIcon onClick={() => setModel(false)}/>
            </div>
            <div className = "gallery">
                {data.map((item, index)=>{
                    return(
                        <div className = "pics" key ={index} onClick={()=>getImg(item.imgSrc)}>
                            <img src={item.imgSrc} style={{ width: '100%' }} data-aos="zoom-in" data-aos-anchor-placement="center-bottom" />
                        </div>
                    )
                })}
            </div>
            


        </div>
    )
}

export default Gallery
