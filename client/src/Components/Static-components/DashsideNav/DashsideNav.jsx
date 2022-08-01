import React from "react";
import "./dashside-nav.css";

// Icons
import { IoIosLogOut } from "react-icons/io";
import { TbFiles } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsGrid1X2 } from "react-icons/bs";

const DashsideNav = () => {
  return (
    <>
      <div className="dashboard-sidenav">
        <div className="nav-container">
          <div className="nav-item">
            <BsGrid1X2 />
            <p>Dashboard</p>
          </div>
          <div className="nav-item">
            <TbFiles className="big" />
            <p>Saved Files</p>
            <RiArrowDropDownLine className="bigger" />
          </div>
          <div className="nav-item">
            <TbFiles className="big" />
            <p>Current Project</p>
          </div>
          <div className="nav-item flex-end">
            <IoIosLogOut className="big" />
            <p>Log Out</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashsideNav;
