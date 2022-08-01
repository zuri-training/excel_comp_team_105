import React from "react";
import Logo from "../../Reuseable components/Logo/Logo";
import DashImg from "./dashimage1.png";
import { BsChevronDown } from "react-icons/bs";
import "./dashboard-nav.css";

const DashboardNav = () => {
  return (
    <>
      <div className="dash-nav">
        <div className="logo">
          <Logo />
        </div>
        <div className="nav-input">
          <input type="text" placeholder="🔎 Search" />
        </div>
        <div className="profile-section">
          <img src={DashImg} alt="Dashboard Img" />
          <p>Shearly Wilson</p>
          <BsChevronDown className="chevron" />
        </div>
      </div>
    </>
  );
};

export default DashboardNav;
