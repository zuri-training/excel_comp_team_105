import React from "react";

// Custom Component
import Logo from "../../Reuseable components/Logo/Logo";

// CSS
import "./footer.css";

// React router
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="image">
          <Logo />
        </div>
        <div className="grid-container">
          <div className="row1">
            <ul>
              <h4>Product</h4>
              <li>
                <a href="/close">Why XelComp?</a>
              </li>
              <li>
                <a href="/close">Support</a>
              </li>
            </ul>
          </div>
          <div className="row2">
            <ul>
              <h4>Company</h4>
              <li>
                <a href="/close">About Us</a>
              </li>
              <li>
                <a href="/close">Team</a>
              </li>
              <li>
                <a href="/close">Contact</a>
              </li>
              <li>
                <a href="/close">Blog</a>
              </li>
              <li>
                <a href="/close">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="row3">
            <ul>
              <h4>Get Started</h4>
              <li>
                <a href="/close">Pricing</a>
              </li>
              <li>
                <a href="/close">Book a Demo</a>
              </li>
              <li>
                <a href="/close">Contact</a>
              </li>
            </ul>
          </div>

          <div className="row4">
            <ul>
              <h4>Follow Us</h4>
              <li>
                <a href="/close">Facebook</a>
              </li>
              <li>
                <a href="/close">LinkedIn</a>
              </li>
              <li>
                <a href="/close">Twitter</a>
              </li>
              <li>
                <a href="/close">GitHub</a>
              </li>
            </ul>
          </div>
        </div>
        <p>
          Copyright @ 2022-2022
          <Link to="/">
            <span>Xelcomp</span>
          </Link>
        </p>
      </footer>
    </>
  );
};

export default Footer;
