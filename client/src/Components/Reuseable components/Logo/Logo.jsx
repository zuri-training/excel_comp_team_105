import React from "react";
import OfficialLogo from "./Logo.png";
import "./logo.css";

const Logo = () => {
  return (
    <div className="logo">
      <img src={OfficialLogo} alt="Logo" srcSet="" />
    </div>
  );
};

export default Logo;
