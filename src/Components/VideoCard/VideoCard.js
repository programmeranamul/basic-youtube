import { Avatar } from "@material-ui/core";
import React from "react";
import './VideoCard.css'

const VideoCard = ({
  titile,
  channelName,
  ChenelImage,
  BannerImage,
  views,
  timeStamp,
}) => {
  return (
    <div className="video__card">
      <img className="video__thumbnile" src={BannerImage} alt={titile} />
      <div  className="video__info">
        <Avatar className="chanel__image" src={ChenelImage} alt={channelName} />
        <div className="video__info__text">
          <h4>{titile}</h4>
          <p>{channelName}</p>
          <p>
            {views} . {timeStamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
