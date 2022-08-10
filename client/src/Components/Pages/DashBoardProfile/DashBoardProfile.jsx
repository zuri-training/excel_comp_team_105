import React from "react";

import "./DashBoardProfile.css"
import Logo from "../../Reuseable components/Logo/Logo"

import {AiOutlineFolderOpen} from "react-icons/ai";
import {FiSettings} from "react-icons/fi";
import {GrContact} from "react-icons/gr";
import {BiLogOut} from "react-icons/bi";
import Ellipse1 from "./Ellipse 1.png";
// import Frame15a from "./Frame15a.png";
// import Frame15b from "./Frame15b.png";
// import Frame15c from "./Frame15c.png";
// import Frame15d from "./Frame15d.png";


const DashBoardProfile = () => {
    return(
        <div>
            {/* BELOW IS THE HEADER CODE  */}

            <div className="TheHeader">
                <div className="xelcomp-logo">
                    <Logo/>
                </div>

                <div className="UsersDP">
                    <img src= {Ellipse1} alt="Shearly Wilson" className="DP"/>
                    <p className="users-Name">Shearly Wilson</p>
                </div>
            </div>

            {/* BELOW IS THE SIDE BAR CODE  */}

            <div className="ThesideBar">

                <div className="TheUser">
                    <AiOutlineFolderOpen className="savedFile-icon"/>
                    <a className="savedFile-name">Shearly Wilson</a>
                </div>

                <div className="sideBarNav">
                    <AiOutlineFolderOpen className="savedFile-icon"/>
                    <a className="savedFile-name">Saved Files</a>
                </div>

                <div className="sideBarNav">
                    <FiSettings className="savedFile-icon"/>
                    <a className="savedFile-name">Settings</a>
                </div>

                <div className="sideBarNav">
                    <GrContact className="savedFile-icon"/>
                    <a className="savedFile-name">Contact Support</a>
                </div>

                <div className="sideBarNav">
                    <BiLogOut className="savedFile-icon"/>
                    <a className="savedFile-name">Sign Out</a>
                </div>
                
            </div>

            <div className="page-content">
                <p className="profile">Profile</p>

                <p className="photo">Photo</p>

                <div className="edit-DP-btn">
                    <img src= {Ellipse1} alt="Shearly Wilson" className="DP"/>
                    <button className="change-btn">change</button><button className="remove-btn">Remove</button>
                </div>


                <div className="inputName">
                    <input type="Password" placeholder="First Name" />
                    <input type="Password" placeholder="Last Name" />
                 </div>

                <div className="inputEmail">
                    <input type="email" placeholder="shearlywilson@gmail.com" />
                </div>
            </div>

        </div>
    )
}
export default DashBoardProfile;