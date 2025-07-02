import React, { useState, useEffect } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { FaHome, FaUserCog, FaCog } from "react-icons/fa";
import { MdSensors } from "react-icons/md";

import "./styles/analytics.css";
import image from "./assets/ZodhaGpt.png";
import ing from "./assets/ing.webp";
import client from './assets/client.webp'
import clientlogo from './assets/clientlogo.png'


const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
 const location = useLocation();
const [selectedTitle, setSelectedTitle] = useState(
  location.state?.selectedTitle || localStorage.getItem("selectedTitle")
);

useEffect(() => {
  if (location.state?.selectedTitle) {
    localStorage.setItem("selectedTitle", location.state.selectedTitle);
  }
}, [location.state]);


  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const handlePageDownload = () => {
    window.print();     
  };
  

const handleTitleClick = () => {
    navigate("/product/zodhagpt");
  };


  return (
    <div className="app-container">
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
        <div className="logo">
          <img src={image} alt="AnalyticsKart Logo" />
        </div>

        <nav className="nav-links">
          <button
            className={`nav-button ${
              location.pathname === "/analytics/home" ? "active" : ""
            }`}
            onClick={() => navigate("/analytics/home")}
          >
            <FaHome />
            <span>Home</span>
          </button>

          <button
            className={`nav-button ${
              location.pathname === "/analytics/sensors" ? "active" : ""
            }`}
            onClick={() => navigate("/analytics/sensors")}
          >
            <MdSensors />
            <span>Sensor's Health</span>
          </button>

          <button
            className={`nav-button ${
              location.pathname === "/analytics/config" ? "active" : ""
            }`}
            onClick={() => navigate("/analytics/config")}
          >
            <FaCog />
            <span>Configuration</span>
          </button>

          <button
            className={`nav-button ${
              location.pathname === "/analytics/users" ? "active" : ""
            }`}
            onClick={() => navigate("/analytics/users")}
          >
            <FaUserCog />
            <span>User Management</span>
          </button>
          <button
                      className={`nav-button ${
                        location.pathname === "/analytics/users" ? "active" : ""
                      }`}
                      onClick={() => navigate("/")}
                    >
                      <FaUserCog />
                      <span>Back to MainPage</span>
                    </button>
        </nav>

        <div className="footer-logo">
          <p>Powered by</p>
          <img src={ing} alt="ResoluteAI" />
        </div>
      </div>

      {/* Main Area */}
      <div className="main-content">
       <header className="app-header">
         {/* Left - Sidebar Toggle */}
         <button className="sidebar-toggle" onClick={toggleSidebar}>
           <div className="toggle-icon"></div>
         </button>
       
         {/* Center - Title */}
          {selectedTitle && (
  <h1 
    className="header-title" 
    onClick={() => navigate("/product/zodhagpt")} 
    style={{ cursor: "pointer" }} // Optional: make it look clickable
  >
    {selectedTitle}
  </h1>
)}
 <div className="app-client">
           <img src={clientlogo} alt="Client Logo" />
          </div>
        
       
         {/* Right - Logo */}
         <div className="app-logo">
            <img src={client} alt="Client Logo" />
            
          </div>
          
       </header>

        <div className="content-body">
        
          <h2 className="dash-workspace-title">Work Space</h2>
           
        <a 
  href="/code/ZodhaAnalytics.zip" 
  download 
  style={{
    display: "inline-block",
    marginTop: "10px",
    padding: "8px 16px",
    backgroundColor: "#ff4d4d",
    color: "#fff",
    borderRadius: "4px",
    textDecoration: "none"
  }}
>
  ⬇ Download Full Project
</a>

          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
