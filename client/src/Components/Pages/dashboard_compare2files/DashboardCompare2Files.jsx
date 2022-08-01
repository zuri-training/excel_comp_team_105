import React from "react";

// Images
import sheet15 from "./sheet15.png";
import sheet16 from "./sheet16.png";

// Custom Components
import DashboardNav from "../../Static-components/DashboardNav/DashboardNav";
import DashsideNav from "../../Static-components/DashsideNav/DashsideNav";

// CSS
import "./dashboard_compare2files.css";

const DashboardCompare2Files = () => {
  return (
    <>
      <DashboardNav />
      <DashsideNav />
      <main className="cmmain">
        <div className="framecont">
          <div>
            <div className="cmframe">
              <img src={sheet15} alt="sheet1" className="cmframeimg" />
            </div>
            <p className="btmpt"> Timetable.xls</p>
          </div>
          <div>
            <div className="cmframe">
              <img src={sheet16} alt="sheet2" className="cmframeimg" />
            </div>
            <p className="btmpt"> Timetable.xls</p>
          </div>
        </div>
        <div className="btn-container">
          <button className="btn">Compare Files</button>
        </div>
      </main>
    </>
  );
};

export default DashboardCompare2Files;
