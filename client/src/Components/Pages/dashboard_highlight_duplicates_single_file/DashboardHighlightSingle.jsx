import React from 'react'
import Logo from '../../Reuseable components/Logo/Logo'
import "./dashboard_hdsf.css"
import Image1 from "./dashimage1.png"
import Image2 from "./dashhdsf.png"
import { IoIosLogOut } from "react-icons/io"
import { TbFiles } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri"
import { BsGrid1X2 } from "react-icons/bs"
import { IoCheckboxOutline } from "react-icons/io5"
import { MdCancelPresentation } from "react-icons/md"
import { MdCheckBoxOutlineBlank } from "react-icons/md"

const DashboardHighlightSingle = () => {
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
    <div className='cmsideptagss'>
      <div className='cmsidept'>
      <BsGrid1X2 className='tbt'/>
      <p>Dashboard</p>
      </div>
      <div className='cmsidept'>
      <TbFiles className='tbt'/>
      <p>Saved Files</p>
      <RiArrowDropDownLine className='dropdownsidet'/>
      </div>
      <div className='cmsidep3st'>
      <TbFiles className='tbt'/>
      <p >Current Project</p>
      </div>
      <div className='cmsidept'>
      <IoCheckboxOutline className='tbt'/>
      <p>Highlight Duplicates</p>
      </div>
      <div className='cmsidept'>
      <MdCancelPresentation className='tbt'/>
      <p>Highlight Differences</p>
      </div>
      <div className='cmsidept'>
      <MdCheckBoxOutlineBlank className='tbt'/>
      <p>Remove Duplicates</p>
      </div>
      <div className='cmsidept'>
      <MdCancelPresentation className='tbt'/>
      <p>Merge Files</p>
      </div>
      <div className='cmsidept'>
      <MdCheckBoxOutlineBlank className='tbt'/>
      <p>Edit Properties</p>
      </div>
      <div className='cmsidept'>
      <MdCheckBoxOutlineBlank className='tbt'/>
      <p>Correct Errors</p>
      </div>
      <div className='cmsidep4st'>
      <IoIosLogOut className='tbt'/>
      <p >Log Out</p>
      </div>
    </div> 
  </div>

  <main className='cmmaint'>
    <div className='cmframers'>
    <img src={Image2} alt="sheet1" className="cmframeimg"/>
    </div>
    <p className='btmp'> Timetable.xls</p>
    <div className='btncon'>
    <ul className='btn'>
    <button className='bttn1'>Save File</button>
    <button className='bttn2'>Export File</button>
    </ul>
    </div>
    
  </main>
    </div>
  )
}

export default DashboardHighlightSingle