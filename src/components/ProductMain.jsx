import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/ProductsZodha.css"; 

const titles = [
   "ZodhaGpt MainPage",
   "AnalyticsKart MainPage",
   "Facegenie MainPage",
 
 
];

const ProductMain = () => {
  const navigate = useNavigate();

  const handleTitleClick = (title) => {
    navigate("/mainproduct", { state: { selectedTitle: title } });
  };

  return (
    <div className="products-container">
      <h2 className="products-heading">Products main Pages List</h2>
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

export default ProductMain;
