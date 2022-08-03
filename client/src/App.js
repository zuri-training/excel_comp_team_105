import React from "react";
import "./App.css";

import SigUp from "./Components/Pages/sign-up page/SignUp";
import LoginPage from "./Components/Pages/login_page/LoginPage";
import ContactUs from "./Components/Pages/ContactUs/ContactUs";
import ErrorPage from "./Components/Pages/ErrorPage/ErrorPage";
import Footer from "./Components/Pages/Footer/Footer";
import DashboardNpsf from "./Components/Pages/dashboard-new project_single file/DashboardNpsf";
import DashboardCompare2Files from "./Components/Pages/dashboard_compare2files/DashboardCompare2Files";
import DashboardCompare from "./Components/Pages/dashboard_compare_single/DashboardCompare";
import DashboardHome from "./Components/Pages/dashboard_home/DashboardHome";
import DashboardRemoveDupSingle from "./Components/Pages/dashboard_remove_dupl_single/DashboardRemoveDupSingle";
import LandingPage from "./Components/Pages/landing-page/LandingPage";

function App() {
  return (
    <>
      <LandingPage />
    </>
  );
}

export default App;
