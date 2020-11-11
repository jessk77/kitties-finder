import React from "react";
import "./card.styles.css";

export const Card = props => (
  <div className="card-container">
    <img
      alt="kittie"
      src={`https://robohash.org/${props.kittie.id}?set=set4&size=180x180`}
    />
    <h2> {props.kittie.username} </h2>
    <p> {props.kittie.email} </p>
  </div>
);
