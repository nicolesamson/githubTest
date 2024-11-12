import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css"; // Make sure to import the correct CSS file
import "./Button.css"; // Make sure to import the correct CSS file
import navImage from "../assets/navbarLogo.png"; // Adjust the path to point to your image
import { logout, hasAccessToken } from './hsiapi/API';

function Navbar() {
  const location = useLocation(); // Get the current location
	const navigate = useNavigate();

	const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

		const logout_request = await logout();

		if(logout_request.status === 200) {
			alert('Logout Successful');
			navigate("/");
		}
		else {
			alert('Logout Unsuccessful');
		}
	}

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={navImage} alt="HSI Logo" className="navbar-logo" />
      </div>
      {(hasAccessToken()) && (
        <ul className="navbar-links">
          <li>
            <a className="logout-button" onClick={handleSubmit}>Log Out</a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
