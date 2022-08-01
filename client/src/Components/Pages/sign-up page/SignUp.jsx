import React from "react";

import Input from "../../Reuseable components/Input/Input";
import Button from "../../Reuseable components/Button/Button";

import "./sign-up.css";

// Icons
import { AiFillGoogleCircle } from "react-icons/ai";
import { SiFacebook } from "react-icons/si";

const SignUp = () => {
  return (
    <>
      <div className="container_login">
        <form>
          <div className="welcome-text">
            <h1>Welcome</h1>
            <p>Create Account</p>
          </div>
          <div className="inputs">
            <Input name="Full Name" type="text" placeholder="Shearly Wilson" />
            <Input
              name="Email"
              type="email"
              placeholder="name@address.company"
            />
            <Input name="Password" type="password" placeholder="************" />
          </div>
          <div className="checkbox">
            <input type="checkbox" id="Terms" name="Terms" />
            <label htmlFor="Terms">Terms of Service</label>
          </div>
          <div className="button">
            <Button>Sign Up</Button>
          </div>
          <div className="account-login">
            <span>
              Already have an account?
              <a href="/login">Log in</a>
            </span>
          </div>
          <div className="socials">
            <AiFillGoogleCircle className="google" />
            <SiFacebook />
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
