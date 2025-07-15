import React, { useState, useEffect } from "react";
import "../../styles/MainTemplate.css";
import logo from "../../assets/resoluteai.png";
import ZodhaGpt from "../../assets/ZodhaGpt.png";
import { useNavigate } from "react-router-dom";
import { FaLock, FaRocket } from "react-icons/fa";

const MainTemplate = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("green");
  const [showBooster, setShowBooster] = useState(false);
  const [boosterDirection, setBoosterDirection] = useState("up");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loggedIn");
    if (isLoggedIn === "true") {
      setLoggedIn(true);
    }
  }, []);
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
  const handleSubmit = (e) => {
    e.preventDefault();

    const defaultEmail = "admin@example.com";
    const defaultPassword = "admin123";

    if (email === defaultEmail && password === defaultPassword) {
      setLoggedIn(true);
      localStorage.setItem("loggedIn", "true");
      setMessage("Login successful! Dropdowns are now unlocked.");
      setMessageColor("green");
      setEmail("");
      setPassword("");
      setShowBooster(true);
      setBoosterDirection("up");
      setTimeout(() => setShowBooster(false), 3000);

      setTimeout(() => setShowBooster(false), 3000);
    } else {
      setMessage("Invalid credentials");
      setMessageColor("red");
    }

    setTimeout(() => setMessage(""), 3000);
  };

  const handleLockAgain = () => {
    setLoggedIn(false);
    localStorage.removeItem("loggedIn");
    setEmail("");
    setPassword("");
    setMessage("Dropdowns locked again. Please login.");
    setMessageColor("red");
    setShowBooster(true);
    setBoosterDirection("down");
    setLoggedIn(false);

    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="main-template-container">
      {showBooster && (
        <div
          className={`booster-animation ${
            boosterDirection === "up" ? "booster-up" : "booster-down"
          }`}
        >
          <FaRocket size={40} color="orange" />
        </div>
      )}

      <div className="template-content-box">
        <div className="template-section">
          <h3>AI Engineering Solutions</h3>
          <h3>(Custom Solutions)</h3>
          <select
            className="template-dropdown"
            onChange={handleCustomsChange}
            disabled={!loggedIn}
          >
            <option value="">-- Choose an option --</option>
            <option value="mainpage">Login Screen</option>
            <option value="customspage">Landing Page</option>
          </select>
        </div>

        <div className="template-sections">
          <h3>Products</h3>
          <select
            className="template-dropdown"
            onChange={handleProductsChange}
            disabled={!loggedIn}
          >
            <option value="">-- Choose an option --</option>
            <option value="mainpage">Login Screen</option>
            <option value="analytics">Analytics Kart</option>
            <option value="facegenie">FaceGenie</option>
            <option value="zodhagpt">Zodha GPT</option>
          </select>
        </div>
      </div>

      <div className="template-login-box">
        <div className="template-logo">
          <img
            src={ZodhaGpt}
            alt="ResoluteAI Software"
            style={{ margin: "30px 10px 0 100px" }}
          />
        </div>

        {!loggedIn ? (
          <form className="template-form" onSubmit={handleSubmit}>
            <label>Email Id</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Sign In</button>
            <p
              style={{
                fontWeight: "bold",
                color: messageColor,
                marginLeft: "100px",
              }}
            >
              {message}
            </p>

            <p
              style={{
                marginTop: "20px",
                fontSize: "12px",
                color: "gray",
                textAlign: "center",
              }}
            >
              Demo: admin@example.com / admin123
            </p>
          </form>
        ) : (
          <div style={{ textAlign: "center" }}>
            <p style={{ fontWeight: "bold", color: "green" }}>
              ✅ You are logged in.
            </p>
            <button
              onClick={handleLockAgain}
              style={{
                marginTop: "20px",
                backgroundColor: "#e32a24ff",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                padding: "6px 12px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                cursor: "pointer",
                marginLeft: "120px",
              }}
            >
              <FaLock /> Lock & Logout
            </button>
          </div>
        )}

        <div className="template-powered-by">
          <p
            style={{
              fontWeight: "bold",
              margin: "0 0 3px 0",
              fontSize: "14px",
            }}
          >
            Powered By
          </p>
          <img src={logo} alt="ResoluteAI Software" className="template-dash" />
        </div>
      </div>
    </div>
  );
};

export default MainTemplate;
