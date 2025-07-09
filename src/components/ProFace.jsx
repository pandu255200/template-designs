import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/ProductsZodha.css";

const titles = [
  "Visitor Management System",
  "Shrinkage Analytics",
  "Defect Detection",
  "Retail Store Analytics",
  "Customer Behavior Analytics",
  "Store Operations & Layout Optimization",
  "Android & iOS App for Counting items",
  "Time & Motion Analysis",
  "Label Print Verification",
  "Smart Parking Solutions for Airports & other sectors",
  "Face Recognition and Voice Based Access Control",
  "Face ID, Name, Age and Gender detection",
  "Defect Detection & Counting on high-speed conveyors",
  "Volumetric Box Analysis",
  "Entry and Exit Movement Detection",
  "Clean Room Analytics for Pharma Industry",
  "Geofencing and Perimeter Safety",
  "Crowd Detection",
  "Shelf Occupancy Analytics",
  "Worker Efficiency and Productivity Tracking",
  "Barrel Verification during Oil change",
  "Fire and Violence Detection",
  "Truck Dock Utilization",
  "Freezer Occupancy Analytics",
  "Object Detection",
  "Vehicle Layout Monitoring",
  "Workplace Monitoring",
  "Person Fall or Trip Detection",
];

const title = titles.sort();

const ProFace = () => {
  const navigate = useNavigate();

  const handleTitleClick = (title) => {
    navigate("/prototype", { state: { selectedTitle: title } });
  };

  return (
    <div className="products-container">
      <h2 className="products-heading">FaceGenie Product Pages List</h2>
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
          cursor: "pointer",
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
          cursor: "pointer",
        }}
      >
        Go to Landing Screen
      </button>
    </div>
  );
};

export default ProFace;
