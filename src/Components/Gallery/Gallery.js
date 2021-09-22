import React,{useState,useEffect} from 'react'
import img1 from './1.jpg'
import img2 from './2.jpg'
import img3 from './3.jpg'
import img4 from './4.jpg'
import img5 from './5.jpg'
import img6 from './6.JPG'
import img7 from './7.JPG'
import img8 from './8.JPG'
import img9 from './9.JPG'
import img10 from './10.JPG'
import img11 from './11.JPG'
import img12 from './12.JPG'
import img13 from './13.JPG'
import img14 from './14.JPG'
import img15 from './15.JPG'
import img16 from './16.JPG'
import img17 from './17.JPG'
import img18 from './18.JPG'
import img19 from './19.JPG'
import img20 from './20.JPG'
import img21 from './21.JPG'
import img22 from './22.JPG'
import img23 from './23.JPG'
import img24 from './24.JPG'
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
            contSrc: "dia, and it has directly or indirectly affected many of my classmates. Some of my batchmates were suffering while some are still suffering from this disease. I've also learned that some students are experiencing mental stress and anxiety as a result of their family being affected, and in some cases, unbearable losses as a result of the death of family members. As a result, its shadow has been cast on our online classes. At the moment, education feels like a formality because students are unable to concentrate and classes are becoming meaningless. Because the new strain of virus has gripped us with fear and concern, attending online classes has become a herculean task. Many of us come from small towns where health-care facilities haven't grown much, leaving us at the mercy of small dispensaries and clinics Keeping in mind all of the foregoing, I would humbly request that you grant the entire batch a leave of at least 10 days so that we can care for ourselves and our loved ones. This will also relieve us of the mental stress and anxiety that has developed as a result of the continuous classes, as well as assist those who have missed some classes in completing the catch-up work.",
        },
        {
            id: 3,
            imgSrc: img3,
            contSrc: "dia, and it has directly or indirectly affected many of my classmates. Some of my batchmates were suffering while some are still suffering from this disease. I've also learned that some students are experiencing mental stress and anxiety as a result of their family being affected, and in some cases, unbearable losses as a result of the death of family members. As a result, its shadow has been cast on our online classes. At the moment, education feels like a formality because students are unable to concentrate and classes are becoming meaningless. Because the new strain of virus has gripped us with fear and concern, attending online classes has become a herculean task. Many of us come from small towns where health-care facilities haven't grown much, leaving us at the mercy of small dispensaries and clinics Keeping in mind all of the foregoing, I would humbly request that you grant the entire batch a leave of at least 10 days so that we can care for ourselves and our loved ones. This will also relieve us of the mental stress and anxiety that has developed as a result of the continuous classes, as well as assist those who have missed some classes in completing the catch-up work.",
        },
        {
            id: 4,
            imgSrc: img4,
            contSrc: "dia, and it has directly or indirectly affected many of my classmates. Some of my batchmates were suffering while some are still suffering from this disease. I've also learned that some students are experiencing mental stress and anxiety as a result of their family being affected, and in some cases, unbearable losses as a result of the death of family members. As a result, its shadow has been cast on our online classes. At the moment, education feels like a formality because students are unable to concentrate and classes are becoming meaningless. Because the new strain of virus has gripped us with fear and concern, attending online classes has become a herculean task. Many of us come from small towns where health-care facilities haven't grown much, leaving us at the mercy of small dispensaries and clinics Keeping in mind all of the foregoing, I would humbly request that you grant the entire batch a leave of at least 10 days so that we can care for ourselves and our loved ones. This will also relieve us of the mental stress and anxiety that has developed as a result of the continuous classes, as well as assist those who have missed some classes in completing the catch-up work.",
        },
        {
            id: 5,
            imgSrc: img5,
            contSrc: "dia, and it has directly or indirectly affected many of my classmates. Some of my batchmates were suffering while some are still suffering from this disease. I've also learned that some students are experiencing mental stress and anxiety as a result of their family being affected, and in some cases, unbearable losses as a result of the death of family members. As a result, its shadow has been cast on our online classes. At the moment, education feels like a formality because students are unable to concentrate and classes are becoming meaningless. Because the new strain of virus has gripped us with fear and concern, attending online classes has become a herculean task. Many of us come from small towns where health-care facilities haven't grown much, leaving us at the mercy of small dispensaries and clinics Keeping in mind all of the foregoing, I would humbly request that you grant the entire batch a leave of at least 10 days so that we can care for ourselves and our loved ones. This will also relieve us of the mental stress and anxiety that has developed as a result of the continuous classes, as well as assist those who have missed some classes in completing the catch-up work.",
        },
        {
            id: 6,
            imgSrc: img6,
            contSrc: "dia, and it has directly or indirectly affected many of my classmates. Some of my batchmates were suffering while some are still suffering from this disease. I've also learned that some students are experiencing mental stress and anxiety as a result of their family being affected, and in some cases, unbearable losses as a result of the death of family members. As a result, its shadow has been cast on our online classes. At the moment, education feels like a formality because students are unable to concentrate and classes are becoming meaningless. Because the new strain of virus has gripped us with fear and concern, attending online classes has become a herculean task. Many of us come from small towns where health-care facilities haven't grown much, leaving us at the mercy of small dispensaries and clinics Keeping in mind all of the foregoing, I would humbly request that you grant the entire batch a leave of at least 10 days so that we can care for ourselves and our loved ones. This will also relieve us of the mental stress and anxiety that has developed as a result of the continuous classes, as well as assist those who have missed some classes in completing the catch-up work.",
        },
        {
            id: 7,
            imgSrc: img7,
            contSrc: "dia, and it has directly or indirectly affected many of my classmates. Some of my batchmates were suffering while some are still suffering from this disease. I've also learned that some students are experiencing mental stress and anxiety as a result of their family being affected, and in some cases, unbearable losses as a result of the death of family members. As a result, its shadow has been cast on our online classes. At the moment, education feels like a formality because students are unable to concentrate and classes are becoming meaningless. Because the new strain of virus has gripped us with fear and concern, attending online classes has become a herculean task. Many of us come from small towns where health-care facilities haven't grown much, leaving us at the mercy of small dispensaries and clinics Keeping in mind all of the foregoing, I would humbly request that you grant the entire batch a leave of at least 10 days so that we can care for ourselves and our loved ones. This will also relieve us of the mental stress and anxiety that has developed as a result of the continuous classes, as well as assist those who have missed some classes in completing the catch-up work.",
        },
        {
            id: 8,
            imgSrc: img8,
            contSrc: "dia, and it has directly or indirectly affected many of my classmates. Some of my batchmates were suffering while some are still suffering from this disease. I've also learned that some students are experiencing mental stress and anxiety as a result of their family being affected, and in some cases, unbearable losses as a result of the death of family members. As a result, its shadow has been cast on our online classes. At the moment, education feels like a formality because students are unable to concentrate and classes are becoming meaningless. Because the new strain of virus has gripped us with fear and concern, attending online classes has become a herculean task. Many of us come from small towns where health-care facilities haven't grown much, leaving us at the mercy of small dispensaries and clinics Keeping in mind all of the foregoing, I would humbly request that you grant the entire batch a leave of at least 10 days so that we can care for ourselves and our loved ones. This will also relieve us of the mental stress and anxiety that has developed as a result of the continuous classes, as well as assist those who have missed some classes in completing the catch-up work.",
        },
        {
            id: 9,
            imgSrc: img9,
            contSrc: "dia, and it has directly or indirectly affected many of my classmates. Some of my batchmates were suffering while some are still suffering from this disease. I've also learned that some students are experiencing mental stress and anxiety as a result of their family being affected, and in some cases, unbearable losses as a result of the death of family members. As a result, its shadow has been cast on our online classes. At the moment, education feels like a formality because students are unable to concentrate and classes are becoming meaningless. Because the new strain of virus has gripped us with fear and concern, attending online classes has become a herculean task. Many of us come from small towns where health-care facilities haven't grown much, leaving us at the mercy of small dispensaries and clinics Keeping in mind all of the foregoing, I would humbly request that you grant the entire batch a leave of at least 10 days so that we can care for ourselves and our loved ones. This will also relieve us of the mental stress and anxiety that has developed as a result of the continuous classes, as well as assist those who have missed some classes in completing the catch-up work.",
        },
        {
            id: 10,
            imgSrc: img10,
            contSrc: "dia, and it has directly or indirectly affected many of my classmates. Some of my batchmates were suffering while some are still suffering from this disease. I've also learned that some students are experiencing mental stress and anxiety as a result of their family being affected, and in some cases, unbearable losses as a result of the death of family members. As a result, its shadow has been cast on our online classes. At the moment, education feels like a formality because students are unable to concentrate and classes are becoming meaningless. Because the new strain of virus has gripped us with fear and concern, attending online classes has become a herculean task. Many of us come from small towns where health-care facilities haven't grown much, leaving us at the mercy of small dispensaries and clinics Keeping in mind all of the foregoing, I would humbly request that you grant the entire batch a leave of at least 10 days so that we can care for ourselves and our loved ones. This will also relieve us of the mental stress and anxiety that has developed as a result of the continuous classes, as well as assist those who have missed some classes in completing the catch-up work.",
        },
        {
            id: 11,
            imgSrc: img11,
            contSrc: "dia, and it has directly or indirectly affected many of my classmates. Some of my batchmates were suffering while some are still suffering from this disease. I've also learned that some students are experiencing mental stress and anxiety as a result of their family being affected, and in some cases, unbearable losses as a result of the death of family members. As a result, its shadow has been cast on our online classes. At the moment, education feels like a formality because students are unable to concentrate and classes are becoming meaningless. Because the new strain of virus has gripped us with fear and concern, attending online classes has become a herculean task. Many of us come from small towns where health-care facilities haven't grown much, leaving us at the mercy of small dispensaries and clinics Keeping in mind all of the foregoing, I would humbly request that you grant the entire batch a leave of at least 10 days so that we can care for ourselves and our loved ones. This will also relieve us of the mental stress and anxiety that has developed as a result of the continuous classes, as well as assist those who have missed some classes in completing the catch-up work.",
        },
        {
            id: 12,
            imgSrc: img12,
            contSrc: "dia, and it has directly or indirectly affected many of my classmates. Some of my batchmates were suffering while some are still suffering from this disease. I've also learned that some students are experiencing mental stress and anxiety as a result of their family being affected, and in some cases, unbearable losses as a result of the death of family members. As a result, its shadow has been cast on our online classes. At the moment, education feels like a formality because students are unable to concentrate and classes are becoming meaningless. Because the new strain of virus has gripped us with fear and concern, attending online classes has become a herculean task. Many of us come from small towns where health-care facilities haven't grown much, leaving us at the mercy of small dispensaries and clinics Keeping in mind all of the foregoing, I would humbly request that you grant the entire batch a leave of at least 10 days so that we can care for ourselves and our loved ones. This will also relieve us of the mental stress and anxiety that has developed as a result of the continuous classes, as well as assist those who have missed some classes in completing the catch-up work.",
        },
        {
            id: 13,
            imgSrc: img13,
            contSrc: "dia, and it has directly or indirectly affected many of my classmates. Some of my batchmates were suffering while some are still suffering from this disease. I've also learned that some students are experiencing mental stress and anxiety as a result of their family being affected, and in some cases, unbearable losses as a result of the death of family members. As a result, its shadow has been cast on our online classes. At the moment, education feels like a formality because students are unable to concentrate and classes are becoming meaningless. Because the new strain of virus has gripped us with fear and concern, attending online classes has become a herculean task. Many of us come from small towns where health-care facilities haven't grown much, leaving us at the mercy of small dispensaries and clinics Keeping in mind all of the foregoing, I would humbly request that you grant the entire batch a leave of at least 10 days so that we can care for ourselves and our loved ones. This will also relieve us of the mental stress and anxiety that has developed as a result of the continuous classes, as well as assist those who have missed some classes in completing the catch-up work.",
        },
        {
            id: 14,
            imgSrc: img14,
            contSrc: "dia, and it has directly or indirectly affected many of my classmates. Some of my batchmates were suffering while some are still suffering from this disease. I've also learned that some students are experiencing mental stress and anxiety as a result of their family being affected, and in some cases, unbearable losses as a result of the death of family members. As a result, its shadow has been cast on our online classes. At the moment, education feels like a formality because students are unable to concentrate and classes are becoming meaningless. Because the new strain of virus has gripped us with fear and concern, attending online classes has become a herculean task. Many of us come from small towns where health-care facilities haven't grown much, leaving us at the mercy of small dispensaries and clinics Keeping in mind all of the foregoing, I would humbly request that you grant the entire batch a leave of at least 10 days so that we can care for ourselves and our loved ones. This will also relieve us of the mental stress and anxiety that has developed as a result of the continuous classes, as well as assist those who have missed some classes in completing the catch-up work.",
        },
        {
            id: 15,
            imgSrc: img15,
            contSrc: "dia, and it has directly or indirectly affected many of my classmates. Some of my batchmates were suffering while some are still suffering from this disease. I've also learned that some students are experiencing mental stress and anxiety as a result of their family being affected, and in some cases, unbearable losses as a result of the death of family members. As a result, its shadow has been cast on our online classes. At the moment, education feels like a formality because students are unable to concentrate and classes are becoming meaningless. Because the new strain of virus has gripped us with fear and concern, attending online classes has become a herculean task. Many of us come from small towns where health-care facilities haven't grown much, leaving us at the mercy of small dispensaries and clinics Keeping in mind all of the foregoing, I would humbly request that you grant the entire batch a leave of at least 10 days so that we can care for ourselves and our loved ones. This will also relieve us of the mental stress and anxiety that has developed as a result of the continuous classes, as well as assist those who have missed some classes in completing the catch-up work.",
        },
        {
            id: 16,
            imgSrc: img16,
            contSrc: "dia, and it has directly or indirectly affected many of my classmates. Some of my batchmates were suffering while some are still suffering from this disease. I've also learned that some students are experiencing mental stress and anxiety as a result of their family being affected, and in some cases, unbearable losses as a result of the death of family members. As a result, its shadow has been cast on our online classes. At the moment, education feels like a formality because students are unable to concentrate and classes are becoming meaningless. Because the new strain of virus has gripped us with fear and concern, attending online classes has become a herculean task. Many of us come from small towns where health-care facilities haven't grown much, leaving us at the mercy of small dispensaries and clinics Keeping in mind all of the foregoing, I would humbly request that you grant the entire batch a leave of at least 10 days so that we can care for ourselves and our loved ones. This will also relieve us of the mental stress and anxiety that has developed as a result of the continuous classes, as well as assist those who have missed some classes in completing the catch-up work.",
        },
        {
            id: 17,
            imgSrc: img17,
            contSrc: "dia, and it has directly or indirectly affected many of my classmates. Some of my batchmates were suffering while some are still suffering from this disease. I've also learned that some students are experiencing mental stress and anxiety as a result of their family being affected, and in some cases, unbearable losses as a result of the death of family members. As a result, its shadow has been cast on our online classes. At the moment, education feels like a formality because students are unable to concentrate and classes are becoming meaningless. Because the new strain of virus has gripped us with fear and concern, attending online classes has become a herculean task. Many of us come from small towns where health-care facilities haven't grown much, leaving us at the mercy of small dispensaries and clinics Keeping in mind all of the foregoing, I would humbly request that you grant the entire batch a leave of at least 10 days so that we can care for ourselves and our loved ones. This will also relieve us of the mental stress and anxiety that has developed as a result of the continuous classes, as well as assist those who have missed some classes in completing the catch-up work.",
        },
        {
            id: 18,
            imgSrc: img18,
            contSrc: "dia, and it has directly or indirectly affected many of my classmates. Some of my batchmates were suffering while some are still suffering from this disease. I've also learned that some students are experiencing mental stress and anxiety as a result of their family being affected, and in some cases, unbearable losses as a result of the death of family members. As a result, its shadow has been cast on our online classes. At the moment, education feels like a formality because students are unable to concentrate and classes are becoming meaningless. Because the new strain of virus has gripped us with fear and concern, attending online classes has become a herculean task. Many of us come from small towns where health-care facilities haven't grown much, leaving us at the mercy of small dispensaries and clinics Keeping in mind all of the foregoing, I would humbly request that you grant the entire batch a leave of at least 10 days so that we can care for ourselves and our loved ones. This will also relieve us of the mental stress and anxiety that has developed as a result of the continuous classes, as well as assist those who have missed some classes in completing the catch-up work.",
        },
        {
            id: 19,
            imgSrc: img19,
            contSrc: "dia, and it has directly or indirectly affected many of my classmates. Some of my batchmates were suffering while some are still suffering from this disease. I've also learned that some students are experiencing mental stress and anxiety as a result of their family being affected, and in some cases, unbearable losses as a result of the death of family members. As a result, its shadow has been cast on our online classes. At the moment, education feels like a formality because students are unable to concentrate and classes are becoming meaningless. Because the new strain of virus has gripped us with fear and concern, attending online classes has become a herculean task. Many of us come from small towns where health-care facilities haven't grown much, leaving us at the mercy of small dispensaries and clinics Keeping in mind all of the foregoing, I would humbly request that you grant the entire batch a leave of at least 10 days so that we can care for ourselves and our loved ones. This will also relieve us of the mental stress and anxiety that has developed as a result of the continuous classes, as well as assist those who have missed some classes in completing the catch-up work.",
        },
        {
            id: 20,
            imgSrc: img20,
            contSrc: "dia, and it has directly or indirectly affected many of my classmates. Some of my batchmates were suffering while some are still suffering from this disease. I've also learned that some students are experiencing mental stress and anxiety as a result of their family being affected, and in some cases, unbearable losses as a result of the death of family members. As a result, its shadow has been cast on our online classes. At the moment, education feels like a formality because students are unable to concentrate and classes are becoming meaningless. Because the new strain of virus has gripped us with fear and concern, attending online classes has become a herculean task. Many of us come from small towns where health-care facilities haven't grown much, leaving us at the mercy of small dispensaries and clinics Keeping in mind all of the foregoing, I would humbly request that you grant the entire batch a leave of at least 10 days so that we can care for ourselves and our loved ones. This will also relieve us of the mental stress and anxiety that has developed as a result of the continuous classes, as well as assist those who have missed some classes in completing the catch-up work.",
        },
        {
            id: 21,
            imgSrc: img21,
            contSrc: "dia, and it has directly or indirectly affected many of my classmates. Some of my batchmates were suffering while some are still suffering from this disease. I've also learned that some students are experiencing mental stress and anxiety as a result of their family being affected, and in some cases, unbearable losses as a result of the death of family members. As a result, its shadow has been cast on our online classes. At the moment, education feels like a formality because students are unable to concentrate and classes are becoming meaningless. Because the new strain of virus has gripped us with fear and concern, attending online classes has become a herculean task. Many of us come from small towns where health-care facilities haven't grown much, leaving us at the mercy of small dispensaries and clinics Keeping in mind all of the foregoing, I would humbly request that you grant the entire batch a leave of at least 10 days so that we can care for ourselves and our loved ones. This will also relieve us of the mental stress and anxiety that has developed as a result of the continuous classes, as well as assist those who have missed some classes in completing the catch-up work.",
        },
        {
            id: 22,
            imgSrc: img22,
            contSrc: "dia, and it has directly or indirectly affected many of my classmates. Some of my batchmates were suffering while some are still suffering from this disease. I've also learned that some students are experiencing mental stress and anxiety as a result of their family being affected, and in some cases, unbearable losses as a result of the death of family members. As a result, its shadow has been cast on our online classes. At the moment, education feels like a formality because students are unable to concentrate and classes are becoming meaningless. Because the new strain of virus has gripped us with fear and concern, attending online classes has become a herculean task. Many of us come from small towns where health-care facilities haven't grown much, leaving us at the mercy of small dispensaries and clinics Keeping in mind all of the foregoing, I would humbly request that you grant the entire batch a leave of at least 10 days so that we can care for ourselves and our loved ones. This will also relieve us of the mental stress and anxiety that has developed as a result of the continuous classes, as well as assist those who have missed some classes in completing the catch-up work.",
        },
        {
            id: 23,
            imgSrc: img23,
            contSrc: "dia, and it has directly or indirectly affected many of my classmates. Some of my batchmates were suffering while some are still suffering from this disease. I've also learned that some students are experiencing mental stress and anxiety as a result of their family being affected, and in some cases, unbearable losses as a result of the death of family members. As a result, its shadow has been cast on our online classes. At the moment, education feels like a formality because students are unable to concentrate and classes are becoming meaningless. Because the new strain of virus has gripped us with fear and concern, attending online classes has become a herculean task. Many of us come from small towns where health-care facilities haven't grown much, leaving us at the mercy of small dispensaries and clinics Keeping in mind all of the foregoing, I would humbly request that you grant the entire batch a leave of at least 10 days so that we can care for ourselves and our loved ones. This will also relieve us of the mental stress and anxiety that has developed as a result of the continuous classes, as well as assist those who have missed some classes in completing the catch-up work.",
        },
        {
            id: 24,
            imgSrc: img24,
            contSrc: "dia, and it has directly or indirectly affected many of my classmates. Some of my batchmates were suffering while some are still suffering from this disease. I've also learned that some students are experiencing mental stress and anxiety as a result of their family being affected, and in some cases, unbearable losses as a result of the death of family members. As a result, its shadow has been cast on our online classes. At the moment, education feels like a formality because students are unable to concentrate and classes are becoming meaningless. Because the new strain of virus has gripped us with fear and concern, attending online classes has become a herculean task. Many of us come from small towns where health-care facilities haven't grown much, leaving us at the mercy of small dispensaries and clinics Keeping in mind all of the foregoing, I would humbly request that you grant the entire batch a leave of at least 10 days so that we can care for ourselves and our loved ones. This will also relieve us of the mental stress and anxiety that has developed as a result of the continuous classes, as well as assist those who have missed some classes in completing the catch-up work.",
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
                <img src={tempimgSrc}  className = "clickImg"/>
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
            {/* <img className="waveDown" src={waveDown}/> */}

        </div>
    )
}

export default Gallery
