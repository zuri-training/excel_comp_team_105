import React from 'react'
import Logo from '../../Reuseable components/Logo/Logo'
import "./dashboard_compare2files.css"
import Image1 from "./dashimage1.png"
import sheet15 from "./sheet15.png"
import sheet16 from "./sheet16.png"
import { IoIosLogOut } from "react-icons/io"
import { TbFiles } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri"
import { BsGrid1X2 } from "react-icons/bs"

const DashboardCompare2Files = () => {
  return (
    <div>
        <div className='cmhead'>
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
      <div className='cmsidep4'>
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

  <main className='cmmaint'>
    <div className='framecont'>
    <div className='cmframe'>
    <img src={sheet15} alt="sheet1" className="cmframeimg"/>
    </div>
    <div className='cmframe'>
    <img src={sheet16} alt="sheet2" className="cmframeimg"/>
    </div>
    </div>
    <div className='time'>
    <p className='btmpt'> Timetable.xls</p>
    <p className='btmpn'> Timetable.xls</p>
    </div>
    
    <div className='btnconte'>
    {/* <ul className='btnn'> */}
    <button className='btnne'>Compare Files</button>
    {/* </ul> */}
    </div>
    
    
    
    
  </main>
    </div>
  )
}

export default DashboardCompare2Files