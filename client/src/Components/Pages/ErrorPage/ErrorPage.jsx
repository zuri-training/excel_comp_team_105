import React from "react";

// CSS
import "./error-page.css";

// React router
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="error-page">
        <h1>
          Looks like this webpage <br /> is missing or moved.
        </h1>
        <div className="links-container">
          <p onClick={() => navigate(-1)}>Go to Previous page</p>
          <h5>Or</h5>
          <Link to="/">Go to Homepage</Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
