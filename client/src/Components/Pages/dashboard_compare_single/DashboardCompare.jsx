import React from "react";

// Image
import Image2 from "./Frame 15.png";

// Custom Components
import DashboardNav from "../../Static-components/DashboardNav/DashboardNav";
import DashsideNav from "../../Static-components/DashsideNav/DashsideNav";

//  CSS
import "./dashboard_compare.css";

// Dasboard Compare 

const DashboardCompare = () => {
  return (
    <>
      <DashboardNav />
      <DashsideNav />
      <main className="cmmain">
        <div className="cmcontainer">
          <div className="cmframer">
            <img src={Image2} alt="sheet1" />
          </div>
          <p className="btmp"> Timetable.xls</p>
          <div className="btns">
            <button className="btn1">Analyze File</button>
            <button className="btn2">Add File</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default DashboardCompare;
