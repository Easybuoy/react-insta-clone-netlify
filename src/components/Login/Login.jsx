import React, { useState } from "react";

import StyledLogin from "./StyledLogin";

import appStoreImg from "../../assets/astore.png";
import googlePlayStoreImg from "../../assets/gplay.png";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = e => setUsername(e.target.value);
  const handlePasswordChange = e => setPassword(e.target.value);

  const handleLogin = () => {
    if (username !== "" && password !== "") {
      localStorage.setItem("token", username);
      window.location.reload();
    }
  };

  return (
    <StyledLogin>
      <div className="login">
        <h2>Instagram</h2>
        <div className="login-form">
          <form onSubmit={handleLogin}>
            <input
              onChange={handleUsernameChange}
              type="text"
              placeholder="Username"
              required
            />
            <input
              onChange={handlePasswordChange}
              type="password"
              placeholder="Password"
              required
            />
            <button onClick={handleLogin}>Log In</button>
          </form>

          <h6>
            <a href="##">Forgot Password?</a>
          </h6>
        </div>
      </div>

      <div className="signup">
        <p>Don't have an account? </p>
        <a href="##">Sign Up</a>
      </div>

      <div className="login-footer">
        <p>Get the app</p>
        <a href="##">
          <img src={appStoreImg} alt="App Store" />
        </a>
        <a href="##">
          <img src={googlePlayStoreImg} alt="Google PlayStore Store" />
        </a>
      </div>
    </StyledLogin>
  );
}
