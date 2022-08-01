import React from 'react'
import Logo from '../../Reuseable components/Logo/Logo'
import "./dashboard-npsf.css"
import Image1 from "./dashimage1.png"
import {BiLogOut} from "react-icons/bi"
import {BiFolder} from "react-icons/bi"
import { TbFiles } from "react-icons/tb";
import { VscFile } from "react-icons/vsc";
import { RiArrowDropDownLine } from "react-icons/ri"
import { BsGrid1X2 } from "react-icons/bs"

// Dashboard- New project single file 

const DashboardNpsf = () => {
  return (
    <div>
      <div className='npsfhead'>
        <div className='npsflogo'>
          <Logo />
        </div>
        <ul className='npsflist'>
        <div className="dash-image">
            <img src={Image1} alt="Image1" className="image1"/>
            <p className="nimage1p">Shearly Wilson</p>
            <RiArrowDropDownLine className='dropdowndash'/>
        </div>
        </ul>
      </div>
      <div className='cmside'>
      <div className='cmsideptags'>
      <div className='cmsidepp'>
      <BsGrid1X2 className='tb'/>
      <p>Dashboard</p>
      </div>
      <div className='cmsidepp'>
      <TbFiles className='tb'/>
      <p>Saved Files</p>
      <RiArrowDropDownLine className='dropdownside'/>
      </div>
      <div className='cmsidep3'>
      <BiFolder className='tb'/>
      <p >Current Project</p>
      </div>
      <div className='cmsidep4n'>
      <BiLogOut className='tb'/>
      <p >Log Out</p>
      </div>
      {/* <div className='sidefoot'>
        <footer>
          dsjnbdnbfuidnfd
        </footer>
      </div> */}
    </div> 
      </div>
      

      <main className='nspfmain'>
        <div className='npsfframe'>
          <div className='mainpp'>
            <VscFile className='fileicon'/>
            <p>Open a file</p>
            <p>or</p>
            <p>Drag and drop a file here</p>
          </div>
        </div>
        <p className='file'>File 1</p>
        
      </main>
    </div>
  )
}

export default DashboardNpsf