import React from "react";

// Custom Components
import Input from "../../Reuseable components/Input/Input";
import Button from "../../Reuseable components/Button/Button";

// CSS
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
  createUserProfileDocument,
} from "../../../Firebase/firebase.utils";

// React router
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [user, setUser] = React.useState({ name: "", email: "", password: "" });
  const [error, setError] = React.useState(false);
  const navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    const { name, email, password } = user;
    event.preventDefault();
    createUser(email, password)
      .then((userObj) => {
        if (userObj) {
          // Perform actions
          setError(false);
          createUserProfileDocument(userObj.user, name);
          navigate("/dashboard-home");
        }
      })
      .catch((err) => {
        setError(true);
        console.error(err);
      });
  };
  const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithGoogle();
      const credential = GoogleAuthProvider.credentialFromResult(result);
      if (result) {
        console.log(result, result.user);
        createUserProfileDocument(result.user);
        navigate("/dashboard-home");
      }
    } catch (error) {
      // const email = error.customData.email;
      // const credential = GoogleAuthProvider.credentialFromError(error);
    }
  };
  return (
    <>
      <div className="container_login">
        <form onSubmit={handleSubmit}>
          <div className="welcome-text">
            <h1>Welcome</h1>
            <p>Create Account</p>
          </div>
          <div className="inputs">
            <Input
              name="name"
              type="text"
              placeholder="Shearly Wilson"
              handleChange={handleChange}
            />
            <Input
              name="email"
              type="email"
              placeholder="name@address.company"
              handleChange={handleChange}
            />
            <Input
              name="password"
              type="password"
              placeholder="************"
              handleChange={handleChange}
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
              <Link to="/log-in">Log in</Link>
            </span>
          </div>
          <p className="socials-para">Or create account with</p>
          <div className="socials">
            <AiFillGoogleCircle
              className="google"
              onClick={handleGoogleSignUp}
            />
            <SiFacebook />
          </div>
        </form>
      </div>
    </>
  );
};
export default SignUp;
