import React from "react";
import Logo from "../../Reuseable components/Logo/Logo"
import "./navbar.css";

const Navbar = () => {
  return (
<<<<<<< HEAD
    <nav className="nav-container">
=======
    <div className="nav-container">
>>>>>>> 359a5613213aec70eee3f660566fcb0e62e110ac
      <div className="logo">
        <Logo />
      </div>
      <ul className="nav-links">
        <li>
<<<<<<< HEAD
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
=======
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
        <button className="navbtn">Get Started</button>
      </ul>   
    </div>
>>>>>>> 359a5613213aec70eee3f660566fcb0e62e110ac
  );
};

export default Navbar;
