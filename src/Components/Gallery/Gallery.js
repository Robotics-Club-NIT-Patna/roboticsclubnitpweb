import React, { Component } from 'react';
import './Gallery.css'
import waveUp from '../../SVGs/wave-8.svg'
import waveDown from '../../SVGs/wave-5.svg'


class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            screen : "none",
            image_id : 1
        };
        this.handleCloseBtn = this.handleCloseBtn.bind(this);
        this.handleImage = this.handleImage.bind(this);
    }

    handleCloseBtn(){
        this.setState({
            screen : "none" 
        });
    }

    handleImage(id){
        this.setState({
            image_id : id,
            screen : "flex"
        })
    }

    render() { 
        var id = this.state.image_id; 
        let idata = [
            "https://source.unsplash.com/random/200x200",
            "https://source.unsplash.com/random/200x200",
            "https://source.unsplash.com/random/200x200",
            "https://source.unsplash.com/random/200x200",
            "https://source.unsplash.com/random/200x200",
            "https://source.unsplash.com/random/200x200",
            "https://source.unsplash.com/random/200x200",
            "https://source.unsplash.com/random/200x200",
            "https://source.unsplash.com/random/200x200",
            "https://source.unsplash.com/random/200x200",
            "https://source.unsplash.com/random/200x200",
            "https://source.unsplash.com/random/200x200",
            "https://source.unsplash.com/random/400x200",
            "https://source.unsplash.com/random/400x200",
            "https://source.unsplash.com/random/200x400",
            "https://source.unsplash.com/random/200x400",
            "https://source.unsplash.com/random/600x600"];
        var image = idata[id];
        return (  
<div className="gallery-main">
    <img className="waveUp" src={waveUp}/>
    <div className ="heading">
        Our <span style={{color: "#ff5050"}}>G</span>allery
    </div>
    <div className="gallery-screen" style={{display : this.state.screen}}>

        <div className="left">
            <img src={image} alt="image" ></img>
        </div>
        <div className="right">
            A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place.
        </div>       
        <div className="screen-close">
            <span onClick={this.handleCloseBtn}>&times;</span>
        </div>
    </div>
    <div className="gallery-body">
        {
            idata.map((e,i)=>{

                var id= "img" + (i+1);

                if(i>=0 && i<12){
                    return(
                    <div id={id} className="image-box i1" onClick={(e)=>this.handleImage(i)} >
                        <img  src="https://source.unsplash.com/random/200x200" className="i1"></img>
                        <div class="image-details"><span>im an image</span></div>
                    </div>)
                }
                else if(i>=12 && i<14){
                    return(
                        <div id={id} className="image-box i2x" onClick={(e)=>this.handleImage(i)} >
                            <img  src="https://source.unsplash.com/random/400x200" className="i2x"></img>
                            <div class="image-details"><span>im an image</span></div>
                        </div>)
                }
                else if(i>=14 && i<16){
                    return(
                        <div id={id} className="image-box i2y" onClick={(e)=>this.handleImage(i)} >
                            <img  src="https://source.unsplash.com/random/200x400" className="i2y"></img>
                            <div class="image-details"><span>im an image</span></div>
                        </div>)
                }
                else if(i==16){
                    return(
                        <div id={id} className="image-box i4" onClick={(e)=>this.handleImage(i)} >
                            <img  src="https://source.unsplash.com/random/600x600" className="i4"></img>
                            <div class="image-details"><span>im an image</span></div>
                        </div>)
                }
            })
        }
    </div>
    <img className="waveDown" src={waveDown}/>
</div>
        );
    }
}

export default Gallery;
