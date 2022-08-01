import React from "react";
import Sheet1 from "./Sheet1.png";
import Sheet2 from "./Sheet2.png";
import Sheet3 from "./Sheet3.png";
import Sheet4 from "./Sheet4.png";

// Custom Components
import DashsideNav from "../../Static-components/DashsideNav/DashsideNav";
import DashboardNav from "../../Static-components/DashboardNav/DashboardNav";

import { CgAddR } from "react-icons/cg";

// CSS
import "./dashboard_home.css";

const DashboardHome = () => {
  return (
    <>
      <DashboardNav />
      <DashsideNav />
      <div className="main-content">
        <main>
          <p className="mainp"> New Project</p>
          <div>
            <button className="mainbtn">
              <p className="mainpbtn">Add New Project</p>
              <CgAddR className="iconbtn" />
            </button>
          </div>

          <div>
            <p className="recent">Recent Files</p>
            <ul className="grid">
              <div className="frame">
                <li>
                  <img src={Sheet1} alt="sheet1" className="sheet1" />
                  <p className="gridp">Timetable.xls</p>
                </li>
              </div>
              <div className="frame">
                <li>
                  <img src={Sheet2} alt="sheet2" className="sheet1" />
                  <p className="gridp">Ranks.xls</p>
                </li>
              </div>
              <div className="frame">
                <li>
                  <img src={Sheet3} alt="sheet3" className="sheet1" />
                  <p className="gridp">Road Signs.xls</p>
                </li>
              </div>
              <div className="frame">
                <li>
                  <img src={Sheet4} alt="sheet4" className="sheet1" />
                  <p className="gridp">Timetable Data Comparison.xls</p>
                </li>
              </div>
            </ul>
          </div>
        </main>
      </div>
    </>
  );
};

export default DashboardHome;
