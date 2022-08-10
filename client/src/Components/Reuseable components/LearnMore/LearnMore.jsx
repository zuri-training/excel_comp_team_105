import React from "react";
import Image5 from "./image 5.png";
import { BiRightArrowAlt } from "react-icons/bi";
import "./learn-more.css";

const LearnMore = ({ head, reverse }) => {
  return (
    <div className={`learnmore-container ${reverse ? "column-reverse" : ""}`}>
      <div className="learnmore-text">
        <h1>{head}</h1>
        <p>
          With just a click, we help you highlight the differences on your Excel
          sheets. You don’t have to do it yourself
        </p>
      </div>
      <div className="learnmore-image">
        <img src={Image5} alt="Image5" className="image-5" />
      </div>
    </div>
  );
};

export default LearnMore;
