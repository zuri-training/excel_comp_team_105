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
  const [file, setFile] = React.useState(null);
  const [error, setError] = React.useState(null);

  const handleFileUpload = (event) => {
    const fileList = event.target.files;
    if (!fileList) {
      setError("Error uploading File, pls try again");
    }
    setError(null);
    setFile(fileList);
  };

  return (
    <>
      <DashboardNav />
      <DashsideNav />
      <main className="main-content">
        <p> New Project</p>
        <label htmlFor="excel">
          <div className="new-project">
            <p>Add New Project</p>
            <CgAddR />
            <input
              type="file"
              name="excel"
              id="excel"
              accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
              onChange={handleFileUpload}
            />
          </div>
        </label>
        <p>Recent Files</p>
        <div className="project-grid">
          <div>
            <img src={Sheet1} alt="sheet1" className="sheet1" />
            <p className="gridp">{file ? file.name : "Timestable.xlsx"}</p>
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
