import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import LogIn from "./components/login";
import Title from "./components/title";
import Register from "./components/register";
import SignupStatus from "./components/signupstatus";
import Tab from "./components/tab";
import Homepage from "./components/homepage";

const App = () => {
  const location = useLocation();
  const title = location.pathname === "/signupstatus" ? "Signup Status" : "Login/Signup"; // For signup status
  const isSignupStatusPage = location.pathname === "/signupStatus"; // For signup status

  // Define state for active tab in the App component
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className={`app-bg ${isSignupStatusPage ? 'signup-bg' : ''}`}>
      <Navbar />
      <Title title={title} />
      <Routes>
        <Route path="/" element={<Tab activeTab={activeTab} setActiveTab={setActiveTab} />} />
        <Route path="/signupStatus" element={<SignupStatus setActiveTab={setActiveTab} />} /> 
        <Route path="/" element={<Homepage />} /> {/* Default route to Homepage */}
        <Route path="/homepage" element={<Homepage />} /> {/* Route for /homepage */}
      </Routes>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);