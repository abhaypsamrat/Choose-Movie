import React from "react";
import "../src/card.css";

function Card(props) {
  return (
    <div className="card">
      <img className="card_img" src={props.imgsrc} alt="mypic" />
      <div className="card_info">
        <p className="card_description">{props.description}</p>
        <h4 className="card_title">{props.title}</h4>
        <a href={props.link} target="blank">
          <button className="button">Watch Now</button>
        </a>
      </div>
    </div>
  );
}

export default Card;
