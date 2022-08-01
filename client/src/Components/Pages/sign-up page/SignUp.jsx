import React from "react";

// Custom Components
import Input from "../../Reuseable components/Input/Input";
import Button from "../../Reuseable components/Button/Button";
import "./sign-up.css";

// Icon
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";

// Firebase
import { createUser } from "../../../Firebase/firebase.utils";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (event) => {
    const { email, password } = this.state;
    event.preventDefault();
    // createUser(email, password);
    console.log(email, password);
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <h1>Welcome</h1>
            <p>Create Account</p>
          </div>
          <div>
            <Input
              name="name"
              type="text"
              placeholder="Shearly Wilson"
              handleChange={this.handleChange}
            />
            <Input
              name="email"
              type="password"
              placeholder="shearltwilson@address.com"
              handleChange={this.handleChange}
            />
            <Input
              name="password"
              type="password"
              placeholder="*********"
              handleChange={this.handleChange}
            />
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
              <p>Sign in with Google</p>
            </div>
            <div>
              <SiFacebook />
              <p>Sign in with Facebook</p>
            </div>
          </div>
        </form>
      </>
    );
  }
}
export default SignUp;
