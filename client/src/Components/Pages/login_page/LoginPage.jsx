import React from "react";
import "./login_page.css";

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-logo">
        <p>XcelComp</p>
      </div>
      <div className="form-container" >
        <form className="login-form">
          <div className="login-text">
            <h1>Login</h1>
          </div>
          <div className="login-input">
            <label htmlFor="Username">Username</label>
            <input type="text" name="Username" placeholder="Shearly Wilson" />
          </div>
          <div className="login-input">
            <label htmlFor="Password">Password</label>
            <input type="text" name="Password" placeholder="************" />
          </div>
          <div className="login-form-checkbox">
            <input type="checkbox" name="" id="" />
            <span>Remember Me</span>
          </div>
          <div>
            <button type="submit">Log In</button>
          </div>
          <div>
            Forgot Password?<span>Reset</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
