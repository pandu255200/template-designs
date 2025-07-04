import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/ProductsZodha.css"; 

const titles = [
  "AnalyticsKart Landing Screen",
  "facegenie Landing Screen",
   "ZodhaGPT Landing Screen",
 
 
];

const ProductMain = () => {
  const navigate = useNavigate();

  const handleTitleClick = (title) => {
    navigate("/mainproduct", { state: { selectedTitle: title } });
  };

  return (
    <div className="products-container">
      <h2 className="products-heading">Product Main Pages List</h2>
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
    </div>
  );
};

export default ProductMain;
