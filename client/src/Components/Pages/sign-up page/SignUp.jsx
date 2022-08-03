import React from "react";

// Custom Components
import Input from "../../Reuseable components/Input/Input";
import Button from "../../Reuseable components/Button/Button";
import "./sign-up.css";

// Icon
// Icons
import { AiFillGoogleCircle } from "react-icons/ai";
import { SiFacebook } from "react-icons/si";

// Firebase
import {
  createUser,
  signInWithGoogle,
  GoogleAuthProvider,
} from "../../../Firebase/firebase.utils";

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
    createUser(email, password).then((user) => {
      console.log(user);
      alert("Account Created");
    });
  };
  handleGoogleSignUp = async () => {
    try {
      const result = await signInWithGoogle();
      const credential = GoogleAuthProvider.credentialFromResult(result);
    } catch (error) {
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    }
  };
  render() {
    return (
      <>
        <div className="container_login">
          <form onSubmit={this.handleSubmit}>
            <div className="welcome-text">
              <h1>Welcome</h1>
              <p>Create Account</p>
            </div>
            <div className="inputs">
              <Input
                name="name"
                type="text"
                placeholder="Shearly Wilson"
                handleChange={this.handleChange}
              />
              <Input
                name="email"
                type="email"
                placeholder="name@address.company"
                handleChange={this.handleChange}
              />
              <Input
                name="password"
                type="password"
                placeholder="************"
                handleChange={this.handleChange}
              />
            </div>
            <div className="checkbox">
              <input type="checkbox" id="Terms" name="Terms" />
              <label htmlFor="Terms">Terms of Service</label>
            </div>
            <div className="button">
              <Button>Create Account</Button>
            </div>
            <div className="account-login">
              <span>
                Already have an account?
                <a href="/login">Log in</a>
              </span>
            </div>
            <p className="socials-para" >Or create account with</p>
            <div className="socials">
              <AiFillGoogleCircle
                className="google"
                onClick={this.handleGoogleSignUp}
              />
              <SiFacebook />
            </div>
          </form>
        </div>
      </>
    );
  }
}
export default SignUp;
