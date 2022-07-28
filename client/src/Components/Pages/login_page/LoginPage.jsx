import React from "react";
import "./login_page.css";

const LoginPage = () => {
  return (
    <div id="body">
      <div className="loginContainer">
        <form>
          <h2>Login</h2>

          <label>
            Username
            <div className="inputbox">
              <input type="username" placeholder="Shearly Wilson" />
            </div>
          </label>

          <label>
            Password
            <div className="inputbox">
              <input type="Password" placeholder="*********" />
            </div>
          </label>

          <label className="checkbox">
            <input type="checkbox" id="Remember me" name="Remember me" />
            <span>Remember me</span>
          </label>

          <div className="button">
            <button>Log In</button>
          </div>

          <div className="forgotReset">
            <a href="/forgot">Forgot Password?</a>
            <a href="/forgot">
              <span>Reset</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
