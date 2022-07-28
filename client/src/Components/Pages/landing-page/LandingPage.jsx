import React from "react";
import Navbar from "../../Static-components/Navbar/Navbar";
import Image1 from "./image 1.png";
import Image2 from "./image 2.png";
import "./landing-page.css";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="landing-cta">
        <div className="cta-text">
          <h1>
            Make real work <br /> happen without <br /> hassle.
          </h1>
          <p>
            The easiest and quickest way to compare the content of your Excel
            and CSV files, highlight differences and spot errors.
          </p>
          <button>Get Started</button>
        </div>
        <div className="cta-images">
          <img src={Image1} alt="Image1" className="image-1" />
          <img src={Image2} alt="Image2" className="image-2" />
        </div>
      </div>
      <div className="landing-hero">
        <h1>A productivity tool built for you</h1>
        <p>
          Individuals and businesses around the world trust XelComp to compare
          their files
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
