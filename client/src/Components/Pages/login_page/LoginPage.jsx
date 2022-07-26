import React from "react";
import "./login_page.css";

const LoginPage = () => {
  return (
    <div className="login-container" >
      <div>
        <p>XcelComp</p>
      </div>
      <div>
        <h1>Login</h1>
        <form action="">
          <div>
            <label htmlFor="Username">Username</label>
            <input type="text" name="Username" placeholder="Shearly Wilson" />
          </div>
          <div>
            <label htmlFor="Password">Password</label>
            <input type="text" name="Password" placeholder="************" />
          </div>
          <div>
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
