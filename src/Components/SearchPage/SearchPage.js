import React from "react";
import "./SearchPage.css";
import FilterIcon from "@material-ui/icons/Tune";
import ChanelRow from "../ChanelRow/ChanelRow";
import freeCodeCamp from "./../../Images/freeCodeCamp.jpg"

const SearchPage = () => {
  return (
    <div className="search__page">
      <div className="filter">
        <FilterIcon className="filter_icon" />
        <h3>Filter</h3>
      </div>
      <hr />
      <div>
        <ChanelRow
          Image={freeCodeCamp}
          Name="freeCodeCamp.org"
          Subscribers="3.54M subscribers"
          Videos="1,258 videos"
          Description="Learn to code for free."
        />
      </div>
      <hr />
    </div>
  );
};

export default SearchPage;
