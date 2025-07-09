import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./styles/MainTemplate.css";

import logo from "./assets/resoluteai.png";
import zodhaLogo from "./assets/ZodhaGpt.png";
import analyticsKartLogo from "./assets/image.png";
import facegenieLogo from "./assets/facegenie.png";

const ProMain = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { selectedTitle } = location.state || {};


  const getClientLogo = () => {
    switch (selectedTitle) {
      case "ZodhaGpt MainPage":
        return "zodhaLogo";
      case "AnalyticsKart MainPage":
        return analyticsKartLogo;
      case "Facegenie MainPage":
        return facegenieLogo;
      default:
        return logo; // fallback
    }
  };

  const productLogo = getClientLogo();

  return (
    <div className="main-template-container">
      <button
        onClick={() => navigate("/")}
        style={{
          position: "absolute",
          bottom: "100px",
          right: "37.5%",
          transform: "translateX(-50%)",
          padding: "10px 20px",
          backgroundColor: "#ff4d4d",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        ⬅ Back to Login Screen
      </button>
      <button
        onClick={() => navigate("/product/main")}
        style={{
          position: "absolute",
          bottom: "100px",
          left: "20%",
          transform: "translateX(-50%)",
          padding: "10px 20px",
          backgroundColor: "#ff4d4d",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        ⬅ Back to Product Pages List
      </button>

      <div className="template-content-box">
        <h4>{"Landing Screen"}</h4>
      </div>

      <div className="template-login-box">
        <div
          className="template-logo"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* USE PRODUCT TITLE OR PRODUCT LOGO */}
          <h5
            style={{
              marginTop: "30px",
              fontSize: "25px",
              color: "red",
              // border: '2px solid red',
              //  padding:'20px 20px'
            }}
          >
            {" "}
            Product Title
          </h5>
          {/* <img 
            src={productLogo} 
            alt="productLogo" 
            className="template-dash" 
            style={{
              marginTop: '20px',
              width: "100px",
              height: "auto",
              maxHeight: "50px",
              objectFit: "contain"
            }} 
          /> */}
        </div>

        <form className="template-form">
          <label>Email Id</label>
          <input type="email" placeholder="you@example.com" />
          <label>Password</label>
          <input type="password" placeholder="Enter Your Password" />
          <button type="submit">Sign In</button>
        </form>

        <div className="template-powered-by">
          <p className="powered">Powered By</p>
          <img src={logo} alt="ResoluteAI Software" className="template-dash" />
        </div>
      </div>

      <a
        href="/code/ProMain.zip"
        download
        style={{
          position: "absolute",
          bottom: "200px",
          left: "35%",
          transform: "translateX(-50%)",
          padding: "10px 20px",
          backgroundColor: "#ff4d4d",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          textDecoration: "none",
        }}
      >
        ⬇ Download Full Project
      </a>
    </div>
  );
};

export default ProMain;
