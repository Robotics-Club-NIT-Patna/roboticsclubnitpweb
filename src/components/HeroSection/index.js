import React,{useState} from 'react';
import Video from '../../videos/Video2.mp4';
import { Button } from '../ButtonElement';
import { HeroContainer, 
    HeroBg ,
    VideoBg,
    HeroContent,
    HeroBtnWrapper,
    HeroH1,
    HeroP,
    ArrowForeward,
    ArrowRight,
    HeroFull,
    HeroContactDet,
    HeroFacebook,
    HeroInstagram,
    HeroLinkedIn,
    HeroRight,
    HeroPage,
    HeroBar
    
} from "./HeroElements";

const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () =>{
        setHover(!hover);
    };


    return (
        <HeroContainer>
           <HeroBg>
               <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
           </HeroBg>

           <HeroFull>
               <HeroContactDet>
                   <HeroFacebook/>
                   <HeroInstagram/>
                   <HeroLinkedIn/>
              </HeroContactDet>

            <HeroContent>
                <HeroBar/>
                <HeroH1> Robotics Club<br/> NIT, Patna</HeroH1>
                <HeroP>
                   Lorem, Cumque doloribus repellendus tempore, omnis ipsa corporis rem? 
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
                      MOE ABOUT US {hover?<ArrowForeward/>:<ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>

            <HeroRight>
                 <HeroPage to='home' style={{opacity:'100%'}}/>
                 <HeroPage to="about" style={{opacity:'30%'}}/>
                 <HeroPage to="about" style={{opacity:'30%'}}/>
                 <HeroPage to="about" style={{opacity:'30%'}}/>
                 <HeroPage to="about" style={{opacity:'30%'}}/>
            </HeroRight>

            </HeroFull>
        </HeroContainer>
    )
}

export default HeroSection
