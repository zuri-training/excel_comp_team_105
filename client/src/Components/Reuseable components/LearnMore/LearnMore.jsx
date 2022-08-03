import React from "react";
import Image5 from "./image 5.png";
import { BiRightArrowAlt } from "react-icons/bi";
import "./learn-more.css";

const LearnMore = () => {
  return (
    <div className="learnmore-container" >
      <div className="learnmore-text" >
        <h1>Highlight differences on Excel worksheet</h1>
        <p>
          With just a click, we help you highlight the differences on your Excel
          sheets. You don’t have to do it yourself
        </p>
        <a href="/learn" className="learnmore-link" >
          Learn More
          <span>
            <BiRightArrowAlt className="arrow-right" />
          </span>
        </a>
      </div>
      <div className="learnmore-image" >
        <img src={Image5} alt="Image5" className="image-5" />
      </div>
    </div>
  );
};

export default LearnMore;
