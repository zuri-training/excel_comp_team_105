import React from "react";
// Icon
import { VscFile } from "react-icons/vsc";
// Custom Components
import DashboardNav from "../../Static-components/DashboardNav/DashboardNav";
import DashsideNav from "../../Static-components/DashsideNav/DashsideNav";
// CSS
import "./dashboard-npsf.css";

const DashboardNpsf = () => {
  return (
    <>
      <DashboardNav />
      <DashsideNav />
      <main className="upload-main">
        <div className="box">
          <div>
            <VscFile className="file-icon" />
            <p>Open a file</p>
            <p>or</p>
            <p>Drag and drop a file here</p>
          </div>
        </div>
        <p>File 1</p>
      </main>
    </>
  );
};

export default DashboardNpsf;
