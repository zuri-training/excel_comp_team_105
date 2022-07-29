import React from 'react'
import Logo from '../../Reuseable components/Logo/Logo';
import "./dashboard_home.css";
import Image1 from "./dashimage1.png"
import Sheet1 from "./Sheet1.png"
import Sheet2 from "./Sheet2.png"
import Sheet3 from "./Sheet3.png"
import Sheet4 from "./Sheet4.png"

const DashboardHome = () => {
  return (
    <div>
    <div className="head">
        <div className="logodash">
            <Logo />
        </div>
        <ul className="head-list">
            <button className="dashbtn"> Search</button>
        <div className="dash-image">
            <img src={Image1} alt="Image1" className="image1"/>
            <p className="image1p">Shearly Wilson</p>
        </div>
        </ul>
    </div>
    <div className="sidebar">
        <p className='sidebarp'>Saved Files</p>
    </div>
    <main>
        <p className='mainp'> New Project</p>
        <button className='mainbtn'></button>

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

export default DashboardHome

