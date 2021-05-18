import React from "react";
import SidebarRow from "../SidebarRow/SidebarRow";
import "./SideBar.css";
import HomeIcon from "@material-ui/icons/Home";
import Whatshot from "@material-ui/icons/Whatshot";
import Subscriptions from "@material-ui/icons/Subscriptions";
import VideoLibrary from "@material-ui/icons/VideoLibrary";
import History from "@material-ui/icons/History";
import OndemandVideo from "@material-ui/icons/OndemandVideo";
import WatchLater from "@material-ui/icons/WatchLater";
import ThumbUpAlt from "@material-ui/icons/ThumbUpAlt";
import ExpandMore from "@material-ui/icons/ExpandMore";

const SideBar = () => {
  return (
    <div className="sidebar">
      <SidebarRow Icon={HomeIcon} title="Home" selected />
      <SidebarRow Icon={Whatshot} title="Trending" />
      <SidebarRow Icon={Subscriptions} title="Subscription" />
      <hr />
      <SidebarRow Icon={VideoLibrary} title="Library" />
      <SidebarRow Icon={History} title="History" />
      <SidebarRow Icon={OndemandVideo} title="Your Videos" />
      <SidebarRow Icon={WatchLater} title="Watch Later" />
      <SidebarRow Icon={ThumbUpAlt} title="Like Video" />
      <SidebarRow Icon={ExpandMore} title="Show More" />
      <hr />

    </div>
  );
};

export default SideBar;
