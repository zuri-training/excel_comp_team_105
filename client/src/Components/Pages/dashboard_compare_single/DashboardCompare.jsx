import React from 'react'
import Logo from '../../Reuseable components/Logo/Logo'
import "./dashboard_compare.css"
import Image1 from "./dashimage1.png"
import Image2 from "./Frame 15.png"
import { IoIosLogOut } from "react-icons/io"
import { TbFiles } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri"
import { BsGrid1X2 } from "react-icons/bs"

const DashboardCompare = () => {
  return (
    <div> <div className='cmhead'>
    <div className='cmlogo'>
      <Logo />
    </div>
    <ul className='cmlist'>
    <div className="dash-cm">
        <img src={Image1} alt="Image1" className="image1"/>
        <p className="cmimage1p">Shearly Wilson</p>
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
      <TbFiles className='tb'/>
      <p >Current Project</p>
      </div>
      <div className='cmsidep4c'>
      <IoIosLogOut className='tb'/>
      <p >Log Out</p>
      </div>
      {/* <div className='sidefoot'>
        <footer>
          dsjnbdnbfuidnfd
        </footer>
      </div> */}
    </div> 
  </div>

  <main className='cmmain'>
    <div className='cmframer'>
    <img src={Image2} alt="sheet1" className="cmframeimg"/>
    </div>
    <p className='btmp'> Timetable.xls</p>
    <div className='btncon'>
    <ul className='btn'>
    <button className='btn1'>Analyze File</button>
    <button className='btn2'>Add File</button>
    </ul>
    </div>
    
    
    
    
  </main>
  </div>
  )
}

export default DashboardCompare