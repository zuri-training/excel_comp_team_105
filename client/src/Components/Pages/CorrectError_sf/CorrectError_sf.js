import React from 'react';
import "./CorrectError_sf.css";
//import CloseButton from 'react-bootstrap/CloseButton';
//import Button from "../../Reuseable components/Button/Button";
import ProfilePic from "./ProfilePic.png"
import Logo from '../../Reuseable components/Logo/Logo'
import { IoIosLogOut } from "react-icons/io"
import { TbFiles } from "react-icons/tb";
//import { VscFile } from "react-icons/vsc";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsGrid1X2 } from "react-icons/bs"
import { BsFolder } from "react-icons/bs";
import { CgCheckR, CgCloseR } from "react-icons/cg";
import { GrCheckbox,} from "react-icons/gr";
import Frame15 from "./Frame15.png";

const CorrectError_sf = () => {
  return (
    <div>
      
      <div className='head'>
        <div className='logo'>
          <Logo />
        </div>
        
        <div className="displaypic">
            <img src={ProfilePic} alt="ProfilePic" className="imagepic"/>
            <p className="display">Shearly Wilson</p>
            <RiArrowDropDownLine className='dropdownarrow'/>
        </div>
      </div>

      <div className='navsider'>
    
      <div className='sidenavbar'>
      <p><BsGrid1X2 className='Ricon'/>
      <a href="/Dashboard">Dashboard</a></p>
      </div>

      <div className='sidenavbar'>
      <p><TbFiles className='Ricon'/>
      <a href="/Saved Files"> Saved Files</a>
      <RiArrowDropDownLine className='dropdownside'/></p>
      </div>

      <div className='currentsidebar'>
      <p><BsFolder className='Ricon'/>
      <a href="/Current Project"> Current Project</a>
      </p>
      </div>
      
      <div className='sidenavbar'>
        <p><GrCheckbox className='Ricon'/>
        <a href="/Highlight Duplicates"> Highlight Duplicates</a></p>
      </div>

      <div className='sidenavbar'>
        <p><CgCloseR className='Ricon'/>
        <a href="/Highlight Differences"> Highlight Differences</a></p>
      </div>

      <div className='sidenavbar'>
        <p><CgCloseR className='Ricon'/>
        <a href="/Remove Duplicates"> Remove Duplicates</a></p>
      </div>

      <div className='sidenavbar'>
        <p><CgCloseR className='Ricon'/>
        <a href="/Merge Files"> Merge Files</a></p>
      </div>
      <div className='sidenavbar'>
        <p><GrCheckbox className='Ricon'/>
        <a href="/Edit Properties"> Edit Properties</a></p>
      </div>

      <div className='sidenavbar'>
        <p><CgCheckR className='Ricon'/>
        <a href="/Correct Errors"> Correct Errors</a></p>
      </div>

      <div className='logout'>
      <IoIosLogOut className='Ricon'/>
      <p > <a href="/logout"> Log Out</a></p>
      </div>
      
    
      </div>
     
 
     
        <div className='colmain'>
          
          <div className='mainrow'>
           
            <img src={Frame15} alt="frame15" className="frame"/>
            <p>Timetable_v1.xls</p>
            
          </div>
          
        </div>
         
      <div class='submit_button'>
                <button type="submit" class='save'>Save File</button>
                <button type="submit" class='export'>Export FIles</button>
          </div>
          
      </div>
  );
};
 
export default CorrectError_sf;
