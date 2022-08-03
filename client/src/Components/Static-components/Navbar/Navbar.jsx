import React from "react";

// Custom Components
import Logo from "../../Reuseable components/Logo/Logo";

// CSS
import "./navbar.css";

// React router
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="logo">
        <Logo />
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/features">Home</Link>
        </li>
        <li>
          <Link to="/features">Features</Link>
        </li>
        <li>
          <Link to="/product">Products</Link>
        </li>
        <li>
          <Link to="/about-us">About us</Link>
        </li>
      </ul>
      <ul className="nav-links__cta">
        <li>
          <Link to="/log-in">Login</Link>
        </li>
        <li className="sign-up">
          <Link to="/sign-up">Signup</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
