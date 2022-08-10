import React from "react";
import Input from "../../Reuseable components/Input/Input";
import Button from "../../Reuseable components/Button/Button";
import "./DashBprofile.css"
import Logo from "../../Reuseable components/Logo/Logo"

import {BiEditAlt} from "react-icons/bi";
import {BiHide} from "react-icons/bi";
import {BiLogOut} from "react-icons/bi";
import {FiSettings} from "react-icons/fi";
import Ellipse1 from "./Ellipse 1.png";
import {TbLayoutDashboard} from "react-icons/tb";
import {RiArrowDropDownLine} from "react-icons/ri";
// import Frame118 from "./Frame118.png";

const DashBprofile = () => {
    return (
    <div>
       {/* BELOW IS THE HEADER CODE  */}

      <div className="header">
         <div className="logo-image">
           <Logo/>
          </div>

          <div className="userDP">
              <img src= {Ellipse1} alt="Shearly Wilsonge1" className="image1"/>
          <p className="the-user">Shearly Wilson</p>
          <RiArrowDropDownLine className="drop-down-icon"/>
          </div>
          
      </div>

      {/* BELOW IS THE SIDE BAR CODE  */}

      <div className="side-bar">

          <div className="savedfi">
              
              <div className="side-tabs">
                  <TbLayoutDashboard className="Dashboard"/>
                  <p className="saved-file-name">Dashboard</p>
                </div>
                
                <div className="side-tabs">
                    <FiSettings className="settings"/>
                    <p className="saved-file-name">Settings</p>
                </div>

                <div className="log-out-tab">
                    <BiLogOut className="log-out"/>
                    <p className="log-out-text">Log Out</p>
                </div>
                
          </div>

      </div>

       {/* CONTENT CODE STARTS HERE */}

       <div className="main">
           <h1 className="file-headline">Settings</h1>
           
           <div className="main-content">
               <div className="profile">
                   <h3>Profile Details</h3>
                   <img src= {Ellipse1} alt="Shearly Wilsonge1" className="profile-img"/>
               </div>

               <div className="uploadTab">
                   <div className="tabDetails">
                       <button  className="uploadPic">Upload New Profile Picture</button>
                       <button  className="DeletePic">Delete Picture</button>
                   </div>
                   <p className="uploadNote">Picture must not be larger than 100kb. Both png and .jpg files are allowed</p>
               </div>

               
            </div>

            <div className="userDetails">
                   <div className="username-section">
                       <h4>Username</h4>
                       <div className="userInput">
                           <input type="text" placeholder="Shearly Wilson"/>
                           <BiEditAlt className="edit-icon"/>
                       </div>
                   </div>

                   <div className="email-section">
                       <h4>Email</h4>
                       <div className="userInput">
                           <input type="text" placeholder="shearlywilson!@gmail.com"/>
                           <BiEditAlt className="edit-icon"/>
                       </div>
                   </div>
                   
             </div>

             <div className="changePassword">
                 <h4>Channge Password</h4>
                 <p className="uploadNote">Your new password must be different from your old password.</p>
             </div>

             <div className="create-password-section">
                 <div className="new-password-section">
                     <p>Enter New Password</p>
                     
                    <div className="new-password-Input">
                     <input type="password" placeholder="** ** ** ** * *"/>
                     <BiHide className="edit-icon"/>
                    </div>
                </div>

                <div className="Cnew-password-section">
                    <p>Confirm New Password</p> 
                     <div className="new-password-Input">
                      <input type="password" placeholder="** ** ** ** **"/>
                      <BiHide className="edit-icon"/>
                     </div>
                </div>
             </div>
             
             <div className="save-btn">
                <button>Save Changes</button>
             </div>
             
        </div>

  
    </div>
  )
}
export default DashBprofile;