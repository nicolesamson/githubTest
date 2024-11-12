import React from "react";
import { useLocation } from "react-router-dom";
import "./title.css"; // Make sure to import the correct CSS file
import navImage from "../assets/navbarLogo.png"; // Adjust the path to point to your image

interface TitleProps {
  title: string; // Add a prop for the title
}

function Title({ title }: TitleProps) {
  return (
    <div className="login-title-container">
      <div className="login-title">{title}</div>
      <div className="border-line"></div>
    </div>
  );
}

export default Title;
