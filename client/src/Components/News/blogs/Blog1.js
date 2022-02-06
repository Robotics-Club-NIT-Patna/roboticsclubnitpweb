import React, { useState } from "react";
import waveUp from '../../../SVGs/wave-8.svg'
import waveDown from '../../../SVGs/wave-5.svg'
import Sharex from '../ShareNews/Share'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import './blog.css'
const Blog1 = () => {

    const [showSharex, setShowSharex] = useState(false);
    const handleSharex = () => {
        setShowSharex(!showSharex);
    }
    var blogTitle = "3D Printing";
    var blogCredits = ["Srijan jha", "Electronics And Communication Engineering", "1904021"];

    return (
        <div className="blog_parent">
         <img className="waveUp" alt="" src={waveUp} /> 

            <Sharex
                show={showSharex}
                title={"\n Read this amazing blog *" + blogTitle + "* on \n"}
                shortInfo={"For once, 3D printing might seem surreal to a lot of people. All you need to do is to feed the dimensions of the structure which you wish to produce and the printer will produce..."}
                shareUrl="https://roboticsnitp.co.in/news/first"
            />
            <span
                className={showSharex ? "toggle_sharex_btn fa fa-close" : "toggle_sharex_btn fa fa-share"}
                onClick={() => { handleSharex() }}
                title="Share this Blog" />

            <div className={showSharex ? "blog_me blurbg" : "blog_me"} style={{ transition: "0.8ms" }}>

                <h1 className="blog_title"> {blogTitle} </h1>
                <div className="blog_image">
                    <img src="https://www.gizmodo.com.au/content/uploads/sites/2/2013/05/02/18lg2imc93o0kjpg.jpg" alt="blog" className="blog_img"></img>
                </div>
                <div className="blog_content">
                    <p>
                        For once, 3D printing might seem surreal to a lot of people. All you need to do is to feed the dimensions of the structure which you wish to produce and the printer will produce the same . 90’s kids might even compare it with the shaka laka boom boom pencil – or an elementary version of it.You know that a technology is worth noticing when the president of united states mentions it! In his 2013 state of the union address, Obama praises 3D printing as having ”the potential to revolutionize the way we make almost everything.”</p>
                    <p>
                        Now, you might be wondering what 3D printing actually is. And why is so much fuss surrounding it. Well, the technology isn’t any rocket science and is quite straight forward .What is being done is that the machine is putting down layers in a definite way and those layers add up to form the required object.Each of these layers can be seen as a part of horizontal cross section of the object.</p>
                    <p>
                        Despite working on such a basic principle, 3D printing is one the most promising technologies which can change the world upside down. It has enormous applications in medical sector, from surgeries to medications to prosthetics.
                        3D printing can also play a major role in manufacturing sector. Production will take a turn towards the local. As the prices will drop and its applications will increase, more goods will be manufactured close to their point of purchase in small plants. It will eliminate the shipping cost resulting in cost cutting. This might also boost the household
                        industries. Also, customized goods would become the new trend as alteration of goods would be easier. This might even alter the economy of one of our neighbouring countries as china’s economy depends on being able to provide a cheap labor pool for manufacturing.</p>
                    <p>
                        Don’t know what lies in the future as 3D printing is reaching to a big audience now.</p>
                </div>
                <div className="blog_credits">
            This article was contributed by <b>{blogCredits[0]}</b> (<b>{blogCredits[1]}</b>), Roll Number : <b>{blogCredits[2]}</b>
            <a href="/news" className="back-btn"><KeyboardBackspaceIcon/>{" "}Go back</a>
          </div>     
            </div>

            <img className="waveDown"  alt="" src={waveDown} />
        </div>
    )
}

export default Blog1;