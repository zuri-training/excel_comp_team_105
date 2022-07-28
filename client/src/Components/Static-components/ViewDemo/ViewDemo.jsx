import React from "react";
import "./view-demo.css";

import Button from "../../Reuseable components/Button/Button";
import viewDemo from "./Frame 189.png";

const ViewDemo = () => {
  return (
    <div className="view-container">
      <div>
        <img src={viewDemo} alt="View Demo" />
      </div>
      <div>
        <Button>View Demo</Button>
      </div>
    </div>
  );
};

export default ViewDemo;
