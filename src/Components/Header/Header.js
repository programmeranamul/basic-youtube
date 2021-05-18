import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import youtubeLogo from "./../../Images/youtube_logo.png";
import { Avatar } from "@material-ui/core";
import SearchButton from "@material-ui/icons/Search";
import VedioIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationIcon from "@material-ui/icons/Notifications";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <header className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img className="header__logo" src={youtubeLogo} alt="Youtube Logo" />
        </Link>
      </div>
      <div className="header__center">
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          placeholder="Search"
        />
        <Link to={`/search/${searchText}`}>
          <SearchButton className="search__icon" />
        </Link>
      </div>
      <div className="header__right">
        <VedioIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationIcon className="header__icon" />
        <Avatar src="" className="header__icon" />
      </div>
    </header>
  );
};

export default Header;
