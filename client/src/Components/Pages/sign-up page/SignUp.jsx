import React from "react";

import Input from "../../Reuseable components/Input/Input";
import Button from "../../Reuseable components/Button/Button";

import "./sign-up.css";

// Icon
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  return (
    <>
      <div className="container_login" >
        <form>
          <div className="welcome-text" >
            <h1>Welcome</h1>
            <p>Create Account</p>
          </div>
          <div className="inputs" >
            <Input name="Full Name" type="text" placeholder="Shearly Wilson" />
            <Input
              name="Email"
              type="email"
              placeholder="name@address.company"
            />
            <Input name="Password" type="password" placeholder="************" />
          </div>
          <div>
            <label className="checkbox" htmlFor="Terms">
              <input type="checkbox" id="Terms" name="Terms" />
              <span>
                Yes I have read and agreed to the terms service and privacy
                policy
              </span>
            </label>
          </div>
          <div>
            <Button>Create Account</Button>
            <div>
              <span>
                Already have an account?
                <a href="/login">Log in</a>
              </span>
            </div>
            <div>
              <FcGoogle/>
              <p>Sign Up With Google</p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
