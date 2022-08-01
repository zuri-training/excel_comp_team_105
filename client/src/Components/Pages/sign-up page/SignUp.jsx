import React from "react";

// Custom Components
import Input from "../../Reuseable components/Input/Input";
import Button from "../../Reuseable components/Button/Button";
import "./sign-up.css";

// Icon
import { FcGoogle } from "react-icons/fc";

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
              type="email"
              placeholder="shearlywilson@address.com"
              handleChange={this.handleChange}
            />
            <Input
              name="password"
              type="password"
              placeholder="*********"
              handleChange={this.handleChange}
            />
            <div className="checkbox-container">
              <input type="checkbox" name="remember" id="remember" />
              <label className="remember-me" htmlFor="remember">
                I have read and agreed to the Terms
              </label>
            </div>
          </div>
          <div>
            <Button>Create Account</Button>
            <div>
              Already have an account? <span>Log in</span>
            </div>
            <div onClick={this.handleGoogleSignUp}>
              <FcGoogle />
              <p>Sign in with Google</p>
            </div>
          </div>
        </form>
      </>
    );
  }
}
export default SignUp;
