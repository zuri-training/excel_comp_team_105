import React from "react";
import Input from "../../Reuseable components/Input/Input";
import Button from "../../Reuseable components/Button/Button";
import "./DashBoardSf.css"
import Logo from "../../Reuseable components/Logo/Logo"

import {FiSearch} from "react-icons/fi";
import {AiOutlineFolderOpen} from "react-icons/ai";
import Ellipse1 from "./Ellipse 1.png";
import Frame15a from "./Frame15a.png";
import Frame15b from "./Frame15b.png";
import Frame15c from "./Frame15c.png";
import Frame15d from "./Frame15d.png";

const DashBoardSf = () => {
    return (
    <div>
       {/* BELOW IS THE HEADER CODE  */}

      <div className="header">
         <div className="logo-image">
           <Logo/>
          </div>

          <div className="search-bar">
          <FiSearch className="search-icon"/>
             <input type="search" placeholder="Search" className="inputbox"/>
          </div>

          <div className="userDP">
          <img src= {Ellipse1} alt="Shearly Wilsonge1" className="image1"/>
          <p className="the-user">Shearly Wilson</p>
          </div>
      </div>

      {/* BELOW IS THE SIDE BAR CODE  */}

      <div className="side-bar">

        <div className="saved-files">
        <AiOutlineFolderOpen className="saved-file-icon"/>
        <p className="saved-file-name">Saved Files</p>
        </div>
        
        <ul className="saved-file-list">
          <li><a>Timetable.xls</a></li>
          <li><a>Ranks.xls</a></li>
          <li><a>Road Signs.xls</a></li>
          <li><a>Timetable Data.xls</a></li>
        </ul>
      </div>

       {/* CONTENT CODE STARTS HERE */}

       <div className="main">
       <h4 className="file-headline">All files</h4>
         <div className="main-content">
           <div className="column1">
             <img src= {Frame15a} alt="Timetabel.xls" className="column-image"/>
              <p className="file-name">Timetabel.xls</p>
            </div>

            <div className="column2">
              <img src= {Frame15b} alt="Ranks.xls" className="column-image"/>
              <p className="file-name">Ranks.xls</p>
            </div>
            
            <div className="column3">
            <img src= {Frame15c} alt="Road Signs.xls" className="column-image"/>
              <p className="file-name">Road Signs.xls</p>
            </div>

            <div className="column4">
              <img src= {Frame15d} alt="Timetable Data.xls" className="column-image"/>
              <p className="file-name">Timetable Data.xls</p>
            </div>

          </div>
       </div>
  
    </div>
  )
}
export default DashBoardSf;