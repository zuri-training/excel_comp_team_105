import React from "react";

// Image
import Image2 from "./dashremdsf.png";

// Custom Components
import DashboardNav from "../../Static-components/DashboardNav/DashboardNav";
import DashsideNavFull from "../../Static-components/DashsideNavFull/DashsideNavFull";

// CSS
import "./dashboard_remdsf.css";
// Dashboard Remove Duplicates in a single file and Highlight duplicate in a single file

// note: This components will also be used for highlight duplicates in a single file,
// it will receive the image prop to render what needs to be shown

const DashboardRemoveDupSingle = ({ image }) => {
  return (
    <>
      <DashboardNav />
      <DashsideNavFull />
      <main className="cmmaint">
        <div>
          <div className="cmframers">
            <img src={Image2} alt="sheet1" className="cmframeimg" />
            <p className="btmp"> Timetable.xls</p>
          </div>
          <div className="btns">
            <button className="btn1">Save File</button>
            <button className="btn2">Export File</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default DashboardRemoveDupSingle;
