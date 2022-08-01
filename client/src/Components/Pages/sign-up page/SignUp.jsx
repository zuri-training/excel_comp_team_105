import React from "react";

// Custom Components
import Input from "../../Reuseable components/Input/Input";
import Button from "../../Reuseable components/Button/Button";
import "./sign-up.css";

// Icon
import { FcGoogle } from "react-icons/fc";

// Firebase
import { createUser } from "../../../Firebase/firebase.utils";

const SignUp = () => {
  return (
    <>
      <form>
        <div>
          <h1>Welcome</h1>
          <p>Create Account</p>
        </div>
        <div>
          <Input name="Full Name" type="text" placeholder="Shearly Wilson" />
          <Input
            name="Email Address"
            type="password"
            placeholder="shearltwilson@address.com"
          />
          <Input name="Password" type="password" placeholder="*********" />
          <div className="checkbox-container">
            <input type="checkbox" name="Remember-me" />
            <label className="remember-me" htmlFor="Remember-me">
              Yes I have read and agreed to the Terms of Service and Privacy
              Policy.
            </label>
          </div>
        </div>
        <div>
          <Button>Create Account</Button>
          <div>
            Already have an account? <span>Log in</span>
          </div>
          <div>
            <FcGoogle />
            <p>sign in with Google</p>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignUp;
