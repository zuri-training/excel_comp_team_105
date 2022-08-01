import React from "react";
import "./App.css";


import DashboardHome from "./Components/Pages/dashboard_home/DashboardHome";
import DashboardNpsf from "./Components/Pages/dashboard-new project_single file/DashboardNpsf";
import DashboardCompare from "./Components/Pages/dashboard_compare_single/DashboardCompare";
import DashboardCompare2Files from "./Components/Pages/dashboard_compare2files/DashboardCompare2Files";
import DashboardHighlightSingle from "./Components/Pages/dashboard_highlight_duplicates_single_file/DashboardHighlightSingle";
import DashboardRemoveDupSingle from "./Components/Pages/dashboard_remove_dupl_single/DashboardRemoveDupSingle";

function App() {
  return (
    <>
      <DashboardRemoveDupSingle />

    </>
  );
}

export default App;
