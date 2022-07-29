import React from "react";
import Navbar from "../../Static-components/Navbar/Navbar";
import "./error-page.css";

const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <div className="error-page">
        <h1>Looks like this webpage <br/> is missing or moved.</h1>
        <a href="/goback">Go back</a>
      </div>
    </>
  );
};

export default ErrorPage;
