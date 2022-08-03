import React from "react";

// Custom Component
import Navbar from "../../Static-components/Navbar/Navbar";

// CSS
import "./error-page.css";

// React router
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="error-page">
        <h1>
          Looks like this webpage <br /> is missing or moved.
        </h1>
        <a onClick={() => navigate(-1)}>Go back</a>
        <Link to="/">Go Home</Link>
      </div>
    </>
  );
};

export default ErrorPage;
