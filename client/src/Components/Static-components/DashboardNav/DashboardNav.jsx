import React from "react";

// Custom Components
import Logo from "../../Reuseable components/Logo/Logo";

// Image
import DashImg from "./dashimage1.png";

// React Icon
import { BsChevronDown } from "react-icons/bs";

// CSS
import "./dashboard-nav.css";

// User Context
import { UserContext } from "../../../Contexts/userContext";

const DashboardNav = () => {
  const {
    currentUser: { displayName, photoURL },
  } = React.useContext(UserContext);
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
          <img src={photoURL} alt="Dashboard Img" />
          <p>{displayName}</p>
          <BsChevronDown className="chevron" />
        </div>
      </div>
    </>
  );
};

export default DashboardNav;
