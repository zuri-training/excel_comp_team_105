import React from 'react';
import "./differences_2file.css";
import ProfilePic from "./ProfilePic.png"
import Logo from '../../Reuseable components/Logo/Logo'
import { IoIosLogOut } from "react-icons/io"
import { TbFiles } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri"
import { BsGrid1X2 } from "react-icons/bs"
import { BsFolder } from "react-icons/bs";
import { CgCheckR} from "react-icons/cg";
import { GrCheckbox,} from "react-icons/gr";
import Differences1 from "./Differences1.png";
import Differences2 from "./Differences2.png";

const CorrectError_tf = () => {
  return (
    <div>
      
      <div className='header'>
        <div className='logo'>
          <Logo />
        </div>
        
        <div className="profile_image">
            <img src={ProfilePic} alt="ProfilePic" className="image"/>
            <p className="profiledp">Shearly Wilson</p>
            <RiArrowDropDownLine className='dropdown'/>
        </div>
      </div>

      <div className='sidebar'>
    
      <div className='sidenav'>
      <p><BsGrid1X2 className='icons'/>
      <a href="/Dashboard">Dashboard</a></p>
      </div>

      <div className='sidenav'>
      <p><TbFiles className='icons'/>
      <a href="/Saved Files"> Saved Files</a>
      <RiArrowDropDownLine className='dropdownside'/></p>
      </div>

      <div className='navcurrent'>
      <p><BsFolder className='icons'/>
      <a href="/Current Project"> Current Project</a>
      </p>
      </div>
      
      <div className='sidenav'>
        <p><GrCheckbox className='icons'/>
        <a href="/Highlight Duplicates"> Highlight Duplicates</a></p>
      </div>

      <div className='sidenav'>
      <p><CgCheckR className='icons'/>
        <a href="/Highlight Differences"> Highlight Differences</a></p>
      </div>

      <div className='sidenav'>
      <p><GrCheckbox className='icons'/>
        <a href="/Remove Duplicates"> Remove Duplicates</a></p>
      </div>

      <div className='sidenav'>
      <p><GrCheckbox className='icons'/>
        <a href="/Merge Files"> Merge Files</a></p>
      </div>
      <div className='sidenav'>
        <p><GrCheckbox className='icons'/>
        <a href="/Edit Properties"> Edit Properties</a></p>
      </div>

      <div className='sidenav'>
        <p><GrCheckbox className='icons'/>
        <a href="/Correct Errors"> Correct Errors</a></p>
      </div>

      <div className='logbar'>
      <IoIosLogOut className='icons'/>
      <p > <a href="/logout"> Log Out</a></p>
      </div>
      
    </div>
     
 
      <main className='mainrow'>

        <div className='col1'>
          
        <img src={Differences1} alt="differences" className="differences1"/>
            <p>Timetable_v1.xls</p>
          </div>

           <div className='col2'>
            <img src={Differences2} alt="differences" className="differences2"/>
            <p>Timetable_v2.xls</p>
           </div>                  
    </main>

    <div class='submit_button'>
                <button type="submit" class='save'>Save File</button>
                <button type="submit" class='export'>Export FIles</button>
            </div>
      
          
      </div>
  );
};
 
export default CorrectError_tf;
