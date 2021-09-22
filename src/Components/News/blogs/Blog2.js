import React, { useState } from "react";
import waveUp from '../../../SVGs/wave-8.svg'
import waveDown from '../../../SVGs/wave-5.svg'
import Sharex from '../ShareNews/Share'
import './blog.css'
const Blog2 = () => {

    const [showSharex, setShowSharex] = useState(false);
    const handleSharex = () => {
        setShowSharex(!showSharex);
    }
    var blogTitle = "Will Automation Lead To Mass Unemployment ?";
    var blogCredits = ["Name", "Branch", "RollNo"];

    return (
        <div className="blog_parent">
            {/* <img className="waveUp" src={waveUp} /> */}

            <Sharex
                show={showSharex}
                title={"\n Read this amazing blog *" + blogTitle + "* on \n"}
                shortInfo={"Regular reports warn us that automation apocalypse is nigh. In January 2017, a McKinsey & Company study found that about 30% of tasks in 60% of..."}
                shareUrl="https://roboticsnitp.co.in/news/second"
            />
            <span
                className={showSharex ? "toggle_sharex_btn fa fa-close" : "toggle_sharex_btn fa fa-share"}
                onClick={() => { handleSharex() }}
                title="Share this Blog" />

            <div className={showSharex ? "blog_me blurbg" : "blog_me"} style={{ transition: "0.8ms" }}>
                <h1 className="blog_title"> {blogTitle} </h1>
                <div className="blog_image">
                    <img src="https://roboticsnitp.co.in/assets/news/Month2.jpg" alt="blog image"></img>
                </div>
                <div className="blog_content">
                    <p>
                        "Automation is good, so as long as you know exactly where to put the machine." - Eliyahu Goldratt</p>
                    <p>
                        Regular reports warn us that automation apocalypse is nigh. In January 2017, a McKinsey & Company study found that about 30% of tasks in 60% of occupation could be computerized and last year, the Bank of England's chief economist said that 80m US and 15m UK jobs might be taken over by robots. Ofcourse not all jobs are created equally. In 2013 a highly cited study by Oxford University academics called The Future of Employment examined 702 common occupation and found that some jobs - telemarketers, tax preparers and sport refrees - are at more risk than other including recreational psychologists, dentists and physicians.</p>
                    <p>
                        Automation and technological progress as a whole will not only bring benefits to labour but also to personal life quality. As consumers, we will increasingly fill our needs faster and most effectively giving us space to spend more time and money on dicretionary goods and services. Thus, many activities that workers carry out today will probably be automated. The jobs most susceptible to automation are the ones that are highly predictable and structured.</p>
                    <p>
                        Moreover, the most affected sectors will be manufacture, hospitality, retail and food, since its where this type of jobs are more common. Furthermore due to developments on artificial intelligence, computer systems are increasingly gaining cognitve capabilities so they will eventually also be able to substitute high- skilled work activities.</p>
                    <p>

                        <ul>Thus, in next 20 years some activities will drastically change and might disappear such as:
                            <li>Telemarketer</li>
                            <li>Loan officer</li>
                            <li>Cashier</li>
                            <li>Paralegal and legal assistant</li>
                            <li>Taxi driver</li>
                            <li>Fast food cook</li>
                            <li>Travel agents</li>
                            <li>Farmers</li>
                            <li>Publishers and print related jobs</li>
                            <li>Lawyers</li>
                        </ul></p>
                </div>
                <div className="blog_credits">
                    This article is contributed by <b>{blogCredits[0]}</b> {blogCredits[1]}, Roll Number: {blogCredits[2]}
                </div>
            </div>
            <img className="waveDown" src={waveDown} />
        </div>
    )
}

export default Blog2;