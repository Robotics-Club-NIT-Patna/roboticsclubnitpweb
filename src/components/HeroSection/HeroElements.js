import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import { Link as LinkR} from 'react-router-dom'
import { Link  as LinkS} from 'react-scroll'
import {FaFacebook, FaInstagram, FaLinkedinIn} from 'react-icons/fa';

export const HeroContainer = styled.div`
   background: #0c0c0c;
   display:flex;
   justify-content:center;
   align-items:center;
   padding:230px 0px;
   position:relative;
   z-index:1;
   /*   Add: before styles */
   
`

export const HeroBg = styled.div`
   position:absolute;
   top:0;
   right:0;
   bottom:0;
   left:0;
   width:100%;
   height: 100%;
   overflow:hidden;
`

export const VideoBg = styled.video`
    width:100%;
    height:100%;
    -o-object-fit:cover;
    object-fit:cover;
    background: #232a34;
    
`
export const HeroContent = styled.div`
    z-index:3;
    max-width:1200px;
    position:absolute;
    top:8rem;
    left:38rem;
    padding:8px 24px;
    display: flex;
    flex-direction: column;
    align-items:left;
    animation-name:example;
    animation-duration:0.6s;
    animation-delay:0.3s;
    translation: 0.6s all ease;
    @keyframes example{
     100% {top:8rem}
     0% {top:9.5rem}
    }
    @media screen and (max-width: 1100px){
        position:relative;
        top:-6rem;
        left:-1rem; 
    }
`
export const HeroBar = styled.div`
    height:0.3rem;
    width:8rem;
    background-color:red;
    margin-bottom:-3rem;
    padding:0;
    position:relative;

    @media screen and (max-width: 760px){
        margin-bottom:-2rem;
    }
    @media screen and (max-width: 500px){
        margin-bottom:-1.5rem;
    }
    
`

export const HeroH1 = styled.h1`
    color:#fff;
    font-size:4rem;
    text-align:left;

    @media screen and (max-width: 760px){
        font-size:3.3rem;
    }
    @media screen and (max-width: 510px){
        font-size:2.7rem;
    }

`
export const HeroP = styled.p`
   margin-top: 1rem;
   color:#fff;
   font-size: 1.7rem;
   text-align:left;
   max-width:500px;
   
  @media screen and (max-width: 700px){
    font-size:1.55rem;
}
@media screen and (max-width: 400px){
    font-size:1.4rem;
}
`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display:flex;
    flex-direction:column;
    align-items:center;

`
export const ArrowForeward = styled(MdArrowForward)`
   margin-left:8px;
   font-size:20px;


`
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left:8px;
    font-size:20px;

`
export const HeroFull = styled.div`
    z-index:3;
    display:flex;
    justify-content: space-between;

`
export const HeroContactDet = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    height:12rem;
    width:5rem;
    position:relative;
    top:12rem;
    left:-42rem;
    animation-name:example;
    animation-duration:0.6s;
    animation-delay:0.3s;
    translation: 0.6s all ease;
    @keyframes example{
     100% {top:12rem}
     0% {top:13rem}

     @media screen and (max-width: 1000px){
        display:none;
     }
`
export const HeroFacebook = styled(FaFacebook)`
    height:3rem;
    width:3rem;
    color:white;
    margin:0.5rem 0.2rem;
`
export const  HeroInstagram = styled(FaInstagram)`
    height:3rem;
    width:3rem;
    color:white;
    margin:0.5rem 0.2rem;
`

export const  HeroLinkedIn = styled(FaLinkedinIn)`
    height:3rem;
    width:3rem;
    color:white;
    margin:0.5rem 0.2rem;
`

export const HeroRight = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    height:11rem;
    width:2.5rem;
    border-radius:0.4rem;
    background-color: rgb(58, 52, 52);
    opacity:80;
    position:fixed;
    top:16rem;
    left:87rem;
    align-items:center;
    @media screen and (max-width: 1000px){
        display:none;
    
    }
`
export const HeroPage = styled(LinkS)`
    height:1rem;
    width:1rem;
    border-radius:50%;
    background-color:white;
    margin:0.6rem 0.5rem;
    cursor:pointer;
`