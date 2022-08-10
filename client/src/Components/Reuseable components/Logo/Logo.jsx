import React from "react";

// Image
import XLogo from "./Logo.png";

// CSS
import "./logo.css";

// React router
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img src={XLogo} alt="Logo" srcSet="" />
      </Link>
    </div>
  );
};

export default Logo;
