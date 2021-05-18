import { Avatar } from "@material-ui/core";
import React from "react";
import "./ChanelRow.css";

const ChanelRow = ({ Image, Name, Subscribers, Videos, Description }) => {
  return (
    <div className="chanel__row">
      <div className="chanel__row__image">
        <Avatar className="Chanel__row__banner" src={Image} alt={Name} />
      </div>
      <div className="chanel__info">
        <h4>{Name}</h4>
        <p className="chanel__subscrib">
          {Subscribers} . {Videos}
        </p>
        <p>{Description}</p>
      </div>
    </div>
  );
};

export default ChanelRow;
