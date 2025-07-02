import React from "react";
import "./styles/MainTemplate.css";
import logo from "./assets/resoluteai.png"; // replace with your AK or FG logo
import clientlogo from './assets/clientlogo.png'
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
          cursor: "pointer"
        }}
      >
        ⬅ Back
        </button>
         
      <div className="template-content-box">
       
      <h4>Client's Products and Images</h4>
      
      </div>
      <div className="template-login-box" >
       <div className="template-logo"   style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
 
  <img 
    src={clientlogo} 
    alt="ResoluteAI Software" 
    className="template-dash" 
    style={{
        marginTop:'50px', 
      width: "150px",    // Set desired width
      height: "auto",    // Maintain aspect ratio
      maxHeight: "70px", // Optional cap on height
        objectFit: "contain",
      marginRight:'0'
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
          <p>Powered By</p>
          <img src={logo} alt="ResoluteAI Software" className="template-dash" />
              </div>
              
              
          </div>
        
    <a 
  href="/code/ZodhaAnalytics.zip" 
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
          textDecoration:'none'
  }}
>
  ⬇ Download Full Project
</a>
    

      </div>
      
  );
};

export default CustMain;
