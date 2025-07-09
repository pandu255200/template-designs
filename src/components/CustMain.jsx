import React from "react";
import "./styles/MainTemplate.css";
import logo from "./assets/resoluteai.png"; 
import clientlogo from "./assets/clientlogo.png";
import { useNavigate } from "react-router-dom";

const CustMain = () => {
  const navigate = useNavigate();

  return (
    <div className="main-template-container">
      <button
        onClick={() => navigate("/")}
        style={{
          position: "absolute",
          bottom: "100px",
          left: "35%",
          transform: "translateX(-50%)",
          padding: "10px 20px",
          backgroundColor: "#ff4d4d",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        ⬅ Back
      </button>
      <h4
        style={{
          display: "flex",
          position: "absolute",
          bottom: "400px",
          left: "35%",
          transform: "translateX(-50%)",
          // padding: "10px 20px",
          // backgroundColor: "#ff4d4d",
          // color: "#fff",
          border: "none",
          // borderRadius: "6px",
          // cursor: "pointer"
        }}
      >
        Note : &nbsp;
        <p
          style={{
            fontSize: "17px",
            fontWeight: "normal",
          }}
        >
          All changes on this page will be made based on the client's guidance
          and suggestions.
        </p>
      </h4>

      <div className="template-content-box">
        <h4>Client's Products and Images</h4>
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
          <img
            src={clientlogo}
            alt="ResoluteAI Software"
            className="template-dash"
            style={{
              marginTop: "20px",
              width: "100px", 
              height: "auto",
              maxHeight: "50px", 
              objectFit: "contain",
              marginRight: "0",
            }}
          />
        </div>

        <form className="template-form">
          <label>Email Id</label>
          <input type="email" placeholder="you@example.com" />

          <label>Password</label>
          <input type="password" placeholder="Enter Your Password" />

          <button type="submit">Sign In</button>
        </form>

        <div className="template-powered-by">
          <p
            style={{
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            Powered By
          </p>
          <img src={logo} alt="ResoluteAI Software" className="template-dash" />
        </div>
      </div>

      <a
        href="/code/CustomLogin.zip"
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

export default CustMain;
