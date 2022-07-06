import React from "react";
import star from "../images/star.png";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img className="card--image" src={props.card.img} alt="logo" />
      <div className="card--stats">
        <img src={star} alt="" className="card--star" />
        <span>{props.card.rating}</span>
        <span className="gray">({props.card.reviewCount}) . </span>
        <span className="gray">{props.card.country}</span>
      </div>
      <p>{props.card.title}</p>
      <p>
        <span className="bold">From ${props.card.price}</span> / person
      </p>
    </div>
  );
}
