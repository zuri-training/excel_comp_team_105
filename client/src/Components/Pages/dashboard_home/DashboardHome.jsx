import React from "react";
<<<<<<< HEAD
import Sheet1 from "./Sheet1.png";
import Sheet2 from "./Sheet2.png";
import Sheet3 from "./Sheet3.png";
import Sheet4 from "./Sheet4.png";
=======
import Logo from "../../Reuseable components/Logo/Logo";
import "./dashboard_home.css";
import Image1 from "./dashimage1.png"
import Sheet1 from "./Sheet1.png"
import Sheet2 from "./Sheet2.png"
import Sheet3 from "./Sheet3.png"
import Sheet4 from "./Sheet4.png"
import {BiLogOut} from "react-icons/bi"
import { IoIosSearch } from "react-icons/io"
import { CgAddR } from "react-icons/cg"
import { TbFiles } from "react-icons/tb"
import { BsGrid1X2 } from "react-icons/bs"
import { RiArrowDropDownLine } from "react-icons/ri"
>>>>>>> c3c0e74a86dfb3e80ea2360cad876180663c04ff

// Custom Components
import DashboardNav from "../../Static-components/DashboardNav/DashboardNav";
import DashsideNav from "../../Static-components/DashsideNav/DashsideNav";

import { CgAddR } from "react-icons/cg";

// CSS
import "./dashboard_home.css";

const DashboardHome = () => {
  return (
    <>
      <DashboardNav />
      <DashsideNav />
      <main className="main-content">
        <p> New Project</p>
        <div className="new-project">
          <p>Add New Project</p>
          <CgAddR />
        </div>
        <p>Recent Files</p>
        <div className="project-grid" >
          <div>
            <img src={Sheet1} alt="sheet1" className="sheet1" />
            <p className="gridp">Timetable.xls</p>
          </div>
          <div>
            <img src={Sheet2} alt="sheet2" className="sheet1" />
            <p className="gridp">Ranks.xls</p>
          </div>
          <div>
            <img src={Sheet3} alt="sheet3" className="sheet1" />
            <p className="gridp">Road Signs.xls</p>
          </div>
          <div>
            <img src={Sheet4} alt="sheet4" className="sheet1" />
            <p className="gridp">Timetable Data Comparison.xls</p>
          </div>
        </div>
<<<<<<< HEAD
      </main>
    </>
  );
};
=======
        </ul>
    </div>
    <div className="cmside">
    <div className='cmsideptags'>
      <div className='cmsidep3'>
      <BsGrid1X2 className='tb'/>
      <p>Dashboard</p>
      </div>
      <div className='cmsidepp'>
      <TbFiles className='tb'/>
      <p>Saved Files</p>
      <RiArrowDropDownLine className='dropdownsideh'/>
      </div>
      <div className='cmsidep4d'>
      <BiLogOut className='tb'/>
      <p >Log Out</p>
      </div>
    </div> 
    </div>
    <main>
        <p className='mainp'> New Project</p>
        <div>
        <button className='mainbtn'>
            <p className='mainpbtn'>Add New Project</p>
            <CgAddR  className='iconbtn'/> 
        </button>
        </div>

        <div>
            <p className='recent'>Recent Files</p>
            <ul className="grid">
                <div className="frame"><li><img src={Sheet1} alt="sheet1" className="sheet1"/>
                <p className='gridp'>Timetable.xls</p></li></div> 
                <div className="frame"><li><img src={Sheet2} alt="sheet2" className="sheet1"/>
                <p className='gridp'>Ranks.xls</p></li></div>
                <div className="frame"><li><img src={Sheet3} alt="sheet3" className="sheet1"/>
                <p className='gridp'>Road Signs.xls</p></li></div>
                <div className="frame"><li><img src={Sheet4} alt="sheet4" className="sheet1"/>
                <p className='gridp'>Timetable Data Comparison.xls</p></li></div>
                
            </ul>
        </div>
    </main>
    
    
    </div>
  )
}


>>>>>>> c3c0e74a86dfb3e80ea2360cad876180663c04ff

export default DashboardHome;
