import React, { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../components/styles/Prototype.css";
import { FaHome, FaHistory } from "react-icons/fa";

import clientlogo from "../components/assets/clientlogo.png";
import ing from "./assets/resoluteai.png";
import { FaUserCog } from "react-icons/fa";
import { MdSensors } from "react-icons/md";
import { FaCog } from "react-icons/fa";
// import client from "./assets/client.webp";
import adminlogo from "./assets/adminlogo.png";
function CustomsPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const location = useLocation();

  const [selectedTitle, setSelectedTitle] = useState(
    location.state?.selectedTitle || localStorage.getItem("analyticsTitle")
  );

  useEffect(() => {
    if (location.state?.selectedTitle) {
      localStorage.setItem("analyticsTitle", location.state.selectedTitle);
    }
  }, [location.state]);

  return (
    <div className="app-container">
      <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
        <div className="logo">
          <img src={ing} alt="Facegenie Logo" />
        </div>
        <nav className="nav-links">
          <button
            className={`nav-button ${
              location.pathname === "/analytics/home" ? "active" : ""
            }`}
            //  onClick={() => navigate("/analytics/home")}
          >
            <FaHome />
            <span>Home</span>
          </button>

          <button
            className={`nav-button ${
              location.pathname === "/analytics/sensors" ? "active" : ""
            }`}
            //  onClick={() => navigate("/analytics/sensors")}
          >
            <MdSensors />
            <span>Sensor's Health</span>
          </button>

          <button
            className={`nav-button ${
              location.pathname === "/analytics/config" ? "active" : ""
            }`}
            //  onClick={() => navigate("/analytics/config")}
          >
            <FaCog />
            <span>Configuration</span>
          </button>

          <button
            className={`nav-button ${
              location.pathname === "/analytics/users" ? "active" : ""
            }`}
            //  onClick={() => navigate("/analytics/users")}
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
      </div>

      <div className="main-content">
        <header className="app-header">
          {/* Left - Sidebar Toggle */}
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            <div className="toggle-icon"></div>
          </button>
           <div className="hamburger-hover-wrapper">
           <button className="hamburger-toggle">
             <div className="bar"></div>
             <div className="bar"></div>
             <div className="bar"></div>
           </button>
         
           <div className="hover-nav-card">
             <button className="nav-button" >
               <FaHome /> <span>Home</span>
             </button>
             <button className="nav-button" >
               <MdSensors /> <span>Sensor's Health</span>
             </button>
             <button className="nav-button" >
               <FaCog /> <span>Configuration</span>
             </button>
             <button className="nav-button" >
               <FaUserCog /> <span>User Management</span>
             </button>
             <button className="nav-button" onClick={() => navigate("/")}>
               <FaUserCog /> <span>Back to MainPage</span>
             </button>
           </div>
         </div>
          {/* Center - Title */}
          <h1 className="header-title">Title of the Application</h1>
          <div className="app-client">
            <img src={clientlogo} alt="Client Logo" />
          </div>

          {/* Right - Logo */}
          <div className="app-logo">
            <img src={adminlogo} alt="admin Logo" />
          </div>
        </header>

        <div className="content-body">
          <h2 className="dash-workspace-title">Work Space</h2>
          <br />
          <br />
          <h4
            style={{
              display: "flex",
            }}
          >
            Note : &nbsp;
            <p
              style={{
                fontSize: "17px",
                fontWeight: "normal",
              }}
            >
              All changes on this page will be made based on the client's
              guidance and suggestions.
            </p>
          </h4>
          <br />
          <br />

          <div className="download-actions"></div>
          <a
            href="/code/custompage.zip"
            download
            style={{
              display: "inline-block",
              marginTop: "10px",
              padding: "8px 16px",
              backgroundColor: "#ff4d4d",
              color: "#fff",
              borderRadius: "4px",
              textDecoration: "none",
            }}
          >
            ⬇ Download Full Project
          </a>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default CustomsPage;
