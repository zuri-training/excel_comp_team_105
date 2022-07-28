import React from "react";
import { ReactComponent as Icon } from "./icon.svg";
import "./card.css";

const Card = () => {
  return (
    <div className="card-container">
      <div className="icon">
        <Icon />
      </div>
      <h1>Fast and Reliable</h1>
      <p>
        Get your Excel workbooks compared faster. You can olways rely on our
        built-in comparison algorithm.
      </p>
    </div>
  );
};

export default Card;
