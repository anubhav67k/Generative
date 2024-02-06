import React, { useState } from "react";
import "./Login.css";
import logo from "../../../assets/cognizantLogo.png";
const Login = () => {
  const [isRightPanelActive, setRightPanelActive] = useState(false);
  const signUpButton = () => {
    setRightPanelActive(true);
  };
  const signInButton = () => {
    setRightPanelActive(false);
  };
  const handleSignUp = () => {
    alert("success");
  };
  return (
    <div className="signin">
      <div
        className={`container ${
          isRightPanelActive ? "right-panel-active" : ""
        }`}
      >
        <div className="form-container sign-up-container">
          <form className="formDesign">
            <h1>Create Account</h1>
            <p>or use your email for registration</p>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button onClick={handleSignUp}>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <img src={logo} alt=""></img>
          <form className="formDesign">
            <h1>Sign in</h1>
            <p> use your account</p>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button>Sign In</button>
            <span>Or</span>
            <button>Continue With Google</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Hello,User!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="overlaybtn" onClick={signUpButton}>
                Sign Up
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="overlaybtn1" onClick={signInButton}>
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
