import React from "react";
import {Star} from '../utils/icons'

function DoctorCard(props) {
  return (
    <div className="dt-card">
      <img
        src={props.img}
        alt={props.name}
        className="dt-card-img"
        loading="lazy"
      />
      <h4 className="dt-card-name">{props.name}</h4>
      <h5 className="dt-card-title">{props.title}</h5>
      <p className="dt-card-stars">
        <Star className="dt-card-icon-star" />
        {props.stars}
        <span className="dt-card-reviews"> ({props.reviews}+ Reviews)</span>
      </p>
    </div>
  );
}

export default DoctorCard;
