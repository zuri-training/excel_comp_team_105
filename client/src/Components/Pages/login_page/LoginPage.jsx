import React from "react";

// CSS
import "./login_page.css";

// Firebase
import { signIn } from "../../../Firebase/firebase.utils";

// React router
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [error, setError] = React.useState(false);

  const emailRef = React.createRef();
  const passwordRef = React.createRef();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    try {
      const userCreds = await signIn(email, password);

      // Define profile route
      setError(false);
      navigate("profile");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;

      // Show error message
      setError(true);
    }
  };
  return (
    <div id="body">
      <div className="loginContainer">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>

          <label htmlFor="name">
            Email
            <div className="inputbox">
              <input
                type="email"
                placeholder="shearlywilson@address.company"
                id="name"
                ref={emailRef}
              />
            </div>
          </label>

          <label htmlFor="password">
            Password
            <div className="inputbox">
              <input
                type="Password"
                placeholder="*********"
                id="password"
                ref={passwordRef}
              />
            </div>
          </label>

          <label className="checkbox" htmlFor="remember">
            <input type="checkbox" id="remember" name="remember" />
            <span>Remember me</span>
          </label>

          <div className="button">
            <button>Log In</button>
          </div>

          <div className="forgotReset">
            Forgot Password?
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
