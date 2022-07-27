import React from "react";
import Button from "../../Reuseable components/Button/Button";
import Input from "../../Reuseable components/Input/Input";
import "./login_page.css";

const LoginPage = () => {
  return (
    <div>
      <form>
        <div>
          <h1>Login</h1>
        </div>
        <div>
          <Input name="Username" type="text" />
          <Input name="Password" type="password" />
          <div>
            <input type="checkbox" name="Remember-me" />
            <label className="remember-me" htmlFor="Remember-me">
              Remember Me
            </label>
          </div>
        </div>
        <div>
          <Button>Log In</Button>
          <div>
            Forgot Password? <span>Reset</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
