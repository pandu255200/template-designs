import React from "react";
import "./styles/MainTemplate.css";
import logo from "./assets/resoluteai.png"; // replace with your AK or FG logo
import ZodhaGpt from "./assets/ZodhaGpt.png"; // replace with your "Powered By" logo
import { useNavigate } from "react-router-dom";

const MainTemplate = () => {
  const navigate = useNavigate();
  const handleCustomsChange = (e) => {
    const selected = e.target.value;

    if (selected === "customspage") {
      navigate("/customs");
    } else if (selected === "mainpage") {
      navigate("/main");
    } 
  };

const handleProductsChange = (e) => {
  const selected = e.target.value;

  if (selected === "zodhagpt") {
    navigate("/product/zodhagpt");
  } else if (selected === "facegenie") {
    navigate("/product/facegenie");
  } else if (selected === "analytics") {
    navigate("/product/analytics");
  } else if (selected === "mainpage") {
    navigate("/product/main");
  }
};


  return (
    <div className="main-template-container">
      <div className="template-content-box">
        <div className="template-section">
          <h3>Custom Solutions</h3>
          {/* <label htmlFor="customs-select">Select Custom Template:</label> */}
          <select
            id="customs-select"
            className="template-dropdown"
            onChange={handleCustomsChange}
          >
            <option value="">-- Choose an option --</option>
            <option value="mainpage">Login Screen</option>
            <option value="customspage">Landing Page</option>
          </select>
        </div>

        <div className="template-section">
          <h3>Products</h3>
          {/* <label htmlFor="customs-select">Select Product Template:</label> */}
          <select
            id="customs-select"
            className="template-dropdown"
            onChange={handleProductsChange}
          >
            <option value="">-- Choose an option --</option>
            <option value="mainpage">Login Screen</option>
            <option value="analytics">
              <span>A</span>
              <p>nalytics</p>
              <span>Kart</span>
            </option>
            <option value="facegenie">facegenie</option>
            <option value="zodhagpt">
              <span>Z</span>
              <p>odha</p>
              <span>GPT</span>
            </option>
          </select>
        </div>
      </div>
      <div className="template-login-box">
        <div className="template-logo">
          
          <img src={ZodhaGpt} alt="ResoluteAI Software" style={{
             margin:'30px 10px 0 100px'
           }} />

        </div>

        <form className="template-form">
          <label>Email Id</label>
          <input type="email" placeholder="you@example.com" />

          <label>Password</label>
          <input type="password" placeholder="Enter Your Password" />

          <button type="submit">Sign In</button>
        </form>

        <div className="template-powered-by">
          <p style={{
            fontWeight: 'bold',
            margin: '0 0 3px 0',
            fontSize:'14px'
          }}>Powered By</p>
          <img src={logo} alt="ResoluteAI Software" className="template-dash" />
        </div>
      </div>
    </div>
  );
};

export default MainTemplate;
