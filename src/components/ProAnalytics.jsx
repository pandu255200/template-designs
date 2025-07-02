import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/ProductsZodha.css"; // 👈 Optional: separate CSS file for styling

const titles = [
   "Warehouse Management System",
  "Employee Tracking System (Using BLE-LORA)",
  "Control Tower – A real time centralized dashboard",
  "Predictive Maintenance",
  "Asset Management (Using RFID, BLE, etc)",
  "Sentiment Analysis",
  "Primary and Secondary sales – Prediction and Forecasting",
  "Document Information Intelligence",
  "Commodity Price Prediction",
  "Recommendation Engine",
];

const ProAnalytics = () => {
  const navigate = useNavigate();

  const handleTitleClick = (title) => {
    navigate("/analytics", { state: { selectedTitle: title } });
  };

  return (
    <div className="products-container">
      <h2 className="products-heading">AnalyticsKart Products Pages List</h2>
      <table className="products-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {titles.map((title, index) => (
            <tr
              key={index}
              onClick={() => handleTitleClick(title)}
              className="clickable-row"
            >
              <td>{index + 1}</td>
              <td>{title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProAnalytics;
