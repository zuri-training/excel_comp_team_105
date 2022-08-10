import React from "react";
import "./card.css";

const Card = ({ head, text, image }) => {
  return (
    <div className="card-container">
      <div className="icon">
        <img src={image} alt="Icon" />
      </div>
      <h1>{head}</h1>
      <p>{text}</p>
    </div>
  );
};

export default Card;
