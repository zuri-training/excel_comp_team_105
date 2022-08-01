import React from "react";
import "./App.css";
import LoginPage from "./Components/Pages/login_page/LoginPage";

import SignUp from "./Components/Pages/sign-up page/SignUp";
import Navbar from "./Components/Static-components/Navbar/Navbar";
import LandingPage from "./Components/Pages/landing-page/LandingPage";
import DashboardHome from "./Components/Pages/dashboard_home/DashboardHome";
import DashboardNpsf from "./Components/Pages/dashboard-new project_single file/DashboardNpsf";
import DashboardCompare from "./Components/Pages/dashboard_compare_single/DashboardCompare";
import DashboardCompare2Files from "./Components/Pages/dashboard_compare2files/DashboardCompare2Files";

//import SignUp from "./Components/Pages/sign-up page/SignUp";
// import Navbar from "./Components/Static-components/Navbar/Navbar";
// import Footer from "./Components/Pages/Footer/footer";


function App() {
  return (
    <>
      <DashboardCompare2Files />

    </>
  );
}

export default App;
