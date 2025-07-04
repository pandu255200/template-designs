import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/ProductsZodha.css"; // 👈 Optional: separate CSS file for styling

const titles = [
   "Warehouse Management System",
  "Employee Tracking System",
  "Control Tower – A real time centralized dashboard",
  "Predictive Maintenance",
  "Asset Management (Using RFID, BLE, etc)",
  "Sentiment Analysis",
  "Primary and Secondary sales – Prediction and Forecasting",
  "Document Information Intelligence",
  "Commodity Price Prediction",
  "Recommendation Engine",
];
const title = titles.sort()

const ProAnalytics = () => {
  const navigate = useNavigate();

  const handleTitleClick = (title) => {
    navigate("/analytics", { state: { selectedTitle: title } });
  };

  return (
    <div className="products-container">
      <h2 className="products-heading">AnalyticsKart Product Pages List</h2>
      <table className="products-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {title.map((t, index) => (
            <tr
              key={index}
              onClick={() => handleTitleClick(t)}
              className="clickable-row"
            >
              <td>{index + 1}</td>
              <td>{t}</td>
            </tr>
          ))}
        </tbody>
      </table>
 <button 
        onClick={() => navigate("/")}
        style={{
          position: "absolute",
          top: "100px",
          right: "0%",
          transform: "translateX(-50%)",
          padding: "8px 15px",
          backgroundColor: "#ff4d4d",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        ⬅ Back to Login Screen
      </button>
       <button 
        onClick={() => navigate("/mainproduct")}
        style={{
          position: "absolute",
          top: "200px",
          right: "1.2%",
          transform: "translateX(-50%)",
          padding: "8px 15px",
          backgroundColor: "#ff4d4d",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
         Go to Landing Screen
      </button>
    </div>
  );
};

export default ProAnalytics;
