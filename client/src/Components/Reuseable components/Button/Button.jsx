import React from "react";
import "./button.css";

const Button = ({ type, children }) => {
  return (
    <div className="reuseable-button">
      <button type={type}>{children}</button>
    </div>
  );
};

export default Button;
