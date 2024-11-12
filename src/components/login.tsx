import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./button";
import "./login.css";
import successIcon from "../assets/done.png";
import errorIcon from "../assets/error.png";

import { login, getUser } from "./hsiapi/API";

function LogIn() {
  const navigate = useNavigate();

  const [Email, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!Email || !Password) {
      setErrorMessage(true);
      return;
    }

    const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!EmailRegex.test(Email)) {
      setErrorMessage(true);
      return;
    }

		const login_response = await login(Email, Password);

		if(login_response.status === 200) {

			const getUser_response = await getUser();

			if(getUser_response === 200) {
				
				setSuccessMessage(true);
				setTimeout(() => {
					navigate("/HomePage");
				}, 2000); // Redirect after 2 seconds

			}
			else {
				alert('Fetching User Data Unsuccessful')
			}

		}
		else {
			alert('Login Unsuccessful')
		}

  };

  return (
    <div className="background">
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <div className="header">
            <div className="login">Login on Engage</div>
          </div>

          <h4 className="input-titles">Email</h4>
          <div className="input">
            <input
              type="text"
              placeholder=""
              required
              value={Email}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <h4 className="input-titles">Password</h4>
          <div className="input password-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder=""
              required
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="button-container">
            <Button
              className="LoginButton"
              label="LOGIN"
              onClick={handleSubmit}
            />
          </div>

          <div className="already-login">
            <p className="black-text">
              <span className="forgot-password"> Forgot Password?</span>
            </p>
          </div>
        </div>
      </form>

      {successMessage && (
        <div className="toast-container success">
          <div className="toast-icon-container success">
            <img src={successIcon} alt="Success Icon" />
          </div>
          <div className="toast-content">
            <strong>Success!</strong>
            <span className="success-message">
              {" "}
              Login successful, please wait.
            </span>
          </div>
        </div>
      )}

      {errorMessage && (
        <div className="toast-container error">
          <div className="toast-icon-container error">
            <img src={errorIcon} alt="Error Icon" />
          </div>
          <div className="toast-content">
            <strong>Unsuccessful!</strong>
            <span className="error-message">
              {" "}
              Something went wrong, please try again.
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default LogIn;
