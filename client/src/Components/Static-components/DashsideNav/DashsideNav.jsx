import React from "react";
import { BsChevronDown, BsClipboardData } from "react-icons/bs";
import "./dashside-nav.css";

const DashsideNav = () => {
  return (
    <div className="grid">
      <div className="first">
        <div>
          <BsClipboardData />
          <p>DashBoard</p>
        </div>
        <div>
          <BsClipboardData />
          <p>Saved Files</p>
          <BsChevronDown />
        </div>
        <div className="log-out" >
          <BsClipboardData />
          <p>Logout</p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default DashsideNav;
