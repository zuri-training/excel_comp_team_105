import React from "react";
import Logo from "../../Reuseable components/Logo/Logo";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="logo">
        <Logo />
      </div>
      <ul className="nav-links">
        <li>
          <a href="/features">Home</a>
        </li>
        <li>
          <a href="/features">Features</a>
        </li>
        <li>
          <a href="/product">Products</a>
        </li>
        <li>
          <a href="/contact-us">About us</a>
        </li>
      </ul>
      <ul className="nav-links__cta">
        <li>
          <a href="/login">Login</a>
        </li>
        <li className="sign-up">
          <a href="/get-started">Signup</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
