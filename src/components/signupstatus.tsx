import React from "react";
import { Link } from "react-router-dom";
import "./signupstatus.css";
import FormImage from "../assets/success green.png";

interface SignupStatusProps {
  setActiveTab: (tab: string) => void;
}

function SignupStatus({ setActiveTab }: SignupStatusProps) {
  const handleLoginClick = () => {
    setActiveTab("login");
    window.location.href = "/";
  };
  
  return (
    <div>
      <img src={FormImage} alt="Signup Success" className="img1"/> 
      <h1>Signup Successful!</h1>
      <p>You may login now.</p>
      <button onClick={handleLoginClick} className="login-button">LOGIN</button>
    </div>
  );
}

export default SignupStatus;
