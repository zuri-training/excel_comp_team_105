import React from "react";
import Logo from "../../Reuseable components/Logo/Logo"
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Logo />
      </div>
      <ul className="nav-links">
        <li>
          <a className="feat" href="/features">Features</a>
        </li>
        <li>
          <a className="prod" href="/product">Product</a>
        </li>
        <li>
          <a className="cont" href="/contact-us">Contact Us</a>
        </li>
        <div className="login"><li>
          <a href="/login">Login</a>
        </li></div>
        <button>Get Started</button>
      </ul>   
    </div>
  );
};

export default Navbar;
