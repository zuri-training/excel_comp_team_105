import React from "react";

import "./RemovDuplicate2.css"
import Logo from "../../Reuseable components/Logo/Logo"
import {BsFolder2Open} from "react-icons/bs";
import {HiOutlineDocumentDuplicate} from "react-icons/hi";
import {TbLayersDifference} from "react-icons/tb";
import {CgFileRemove} from "react-icons/cg";
import {AiOutlineMergeCells} from "react-icons/ai";
import {FiEdit} from "react-icons/fi";
import {BiCommentError} from "react-icons/bi";
import {HiOutlineSave} from "react-icons/hi";
import Ellipse1 from "./Ellipse 1.png";
import xceldoc from "./xceldoc.png";




const RemovDuplicate2 = () => {
    return (
    <div>
       {/* BELOW IS THE HEADER CODE  */}
       
       <div className="head">
           <div className="xelcomp-logo">
                    <Logo/>
                </div>

                <div className="profile-pic">
                    <img src= {Ellipse1} alt="Shearly Wilsonge1" className="img1"/>
                    <p className="usersName">Shearly Wilson</p>
                </div>
          </div>

      {/* BELOW IS THE SIDE BAR CODE  */}

      <div className="ThesideBar">

                <div className="TheUser">
                    <BsFolder2Open className="savedFile-icon"/>
                    <a className="File-name">Current Project</a>
                </div>

                <div className="sideBarNav">
                    <a className="File-name">Compare Options</a>
                </div>

                <div className="sideBarNav">
                    <HiOutlineDocumentDuplicate className="savedFile-icon"/>
                    <a className="File-name">Highlight Duplicates</a>
                </div>

                <div className="sideBarNav">
                    <TbLayersDifference className="savedFile-icon"/>
                    <a className="File-name">Highlight Differences</a>
                </div>

                <div className="sideBarNav">
                    <CgFileRemove className="savedFile-icon"/>
                    <a className="File-name">Remove Duplicates</a>
                </div>

                <div className="sideBarNav">
                    <AiOutlineMergeCells className="savedFile-icon"/>
                    <a className="File-name">Merge Files</a>
                </div>
                
                <div className="sideBarNav">
                    <FiEdit className="savedFile-icon"/>
                    <a className="File-name">Edit properties</a>
                </div>

                <div className="sideBarNav">
                    <BiCommentError className="savedFile-icon"/>
                    <a className="File-name">Correct errors</a>
                </div>

                <div className="sideBarNav">
                    <HiOutlineSave className="savedFile-icon"/>
                    <a className="File-name">Saved Files</a>
                </div>

            </div>

       {/* CONTENT CODE STARTS HERE */}

        <div className="page-content">

          <div className="page-doc">
            <div className="page-images">
               <img src= {xceldoc} alt="Timetable.xls" className="img-doc"/>
               <p className="doc-name">Timetable.xls</p>
            </div>
            
            <div page-images>
                <img src= {xceldoc} alt="Timetable.xls" className="img-doc"/>
                <p className="doc-name">Timetable.xls</p>
            </div>
          </div>
          
          
          <div className="call-to-action-btns">
            <button className="save-files-btn">Save Files</button>
            <button className="export-btn">Export Files</button>
          </div>

        </div>

  
    </div>
  )
}
export default RemovDuplicate2;