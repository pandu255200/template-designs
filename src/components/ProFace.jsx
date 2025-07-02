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
  "Person Fall or Trip Detection"
];

const ProFace = () => {
  const navigate = useNavigate();

  const handleTitleClick = (title) => {
    navigate("/prototype", { state: { selectedTitle: title } });
  };

  return (
    <div className="products-container">
      <h2 className="products-heading">FaceGenie Products Pages List</h2>
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

export default ProFace;
