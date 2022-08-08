import React from "react";
import "./dashside-nav.css";

// Icons
import { IoIosLogOut } from "react-icons/io";
import { TbFiles } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsGrid1X2 } from "react-icons/bs";

// Firebase
import { auth } from "../../../Firebase/firebase.utils";
import { signOut } from "firebase/auth";

// User Context
import { UserContext } from "../../../Contexts/userContext";
import { useNavigate } from "react-router-dom";

const DashsideNav = () => {
  const { setCurrentUser } = React.useContext(UserContext);
  const navigate = useNavigate();
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
          <div
            className="nav-item flex-end"
            onClick={() => {
              signOut(auth)
                .then(() => setCurrentUser(null))
                .then(() => {
                  navigate("/");
                });
            }}
          >
            <IoIosLogOut />
            <p>Log Out</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashsideNav;
