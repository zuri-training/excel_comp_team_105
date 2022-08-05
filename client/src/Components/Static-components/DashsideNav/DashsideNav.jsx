import React from "react";
import "./dashside-nav.css";

// Icons
import { IoIosLogOut } from "react-icons/io";
import { TbFiles } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsGrid1X2 } from "react-icons/bs";

// Context
import { UserContext } from "../../../Contexts/userContext";

const DashsideNav = () => {
  const { currentUser } = React.useContext(UserContext);
  console.log(currentUser);
  return (
    <>
      <div className="dashboard-sidenav">
        <div className="snav-container">
          <div className="nav-item">
            <BsGrid1X2 />
            <p>Dashboard</p>
          </div>
          <div className="nav-item">
            <TbFiles />
            <p>Saved Files</p>
            <RiArrowDropDownLine className="chevron-down" />
          </div>
          <div className="nav-item">
            <TbFiles />
            <p>Current Project</p>
          </div>
          <div className="nav-item flex-end">
            <IoIosLogOut />
            <p>Log Out</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashsideNav;
