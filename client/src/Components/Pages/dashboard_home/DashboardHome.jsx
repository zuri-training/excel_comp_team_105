import React from "react";
import Sheet1 from "./Sheet1.png";
import Sheet2 from "./Sheet2.png";
import Sheet3 from "./Sheet3.png";
import Sheet4 from "./Sheet4.png";

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
      </main>
    </>
  );
};

export default DashboardHome;
