import React from 'react';
import Lii from '@mui/icons-material/LinkedIn';
import Wai from '@mui/icons-material/WhatsApp';
import Ti from '@mui/icons-material/Twitter';
import Ei from '@mui/icons-material/Email';
import {

  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton
} from '../../../node_modules/react-share';
import "./share.css";

const Sharex = (props) => {

  var title = props.title !== undefined ? props.title : "Robotics Club NITP";
  var shareUrl = props.shareUrl !== undefined ? props.shareUrl : "http://localhost:3000/";
  var shortInfo = props.shortInfo !== undefined ? props.shortInfo : "Does robots fascinates you and have you ever fantasized to build one for yourself? The Robotics club NIT Patna is the place! The Robotics club at NIT Patna strives to stimulate interest in robotics among the students of the institute.";
  var hashTag = props.hashTag !== undefined ? props.hashTag : "roboticsclubnitp"

  return (
    <div className={props.show ? "share_parent" : "share_parent dont_show"}>
      <div className="share_me">
        <FacebookShareButton
          url={shareUrl}
          quote={shortInfo + title}
          className="Demo__some-network__share-button"
        >
          <i className="fa fa-facebook share_social_icon"></i>
        </FacebookShareButton>
        <LinkedinShareButton
          url={shareUrl}
          className="Demo__some-network__share-button"
        >
          <Lii className="share_social_icon" />
        </LinkedinShareButton>
        <TwitterShareButton
          url={shareUrl}
          title={shortInfo + title}
          hashtags={[hashTag,"robotica"]}
          className="Demo__some-network__share-button"
        >
          <Ti className="share_social_icon" />
        </TwitterShareButton>
        <WhatsappShareButton
          url={"_" + shortInfo + "_" + title + shareUrl}
          className="Demo__some-network__share-button"
        >
          <Wai className="share_social_icon" />
        </WhatsappShareButton>
        <EmailShareButton
          url={shareUrl}
          subject={title}
          body={shortInfo}
          className="Demo__some-network__share-button"
        >
          <Ei className="share_social_icon" />
        </EmailShareButton>
      </div>
    </div>
  )

}

export default Sharex;