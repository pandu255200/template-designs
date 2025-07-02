import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/ProductsZodha.css"; // 👈 Optional: separate CSS file for styling

const titles = [
  "Multi–lingual Agentic AI led HR Conversational Platform",
  "Multi–lingual Agentic AI led PSCM Conversational Platform",
  "Multi–lingual Agentic AI led Legal Conversational Platform",
  "Multi–lingual Agentic AI led Corporate Communications Conversational Platform",
  "Multi–lingual Agentic AI led Public Policy Conversational Platform",
  "Multi–lingual Agentic AI led Business Development Platform",
  "Multi–lingual Agentic AI led Administrative Operational Platform",
  "Multi–domain/Agentic AI Conversational Platform",
  "Agentic AI/LLM - Led Data Visualization Platform",
  "Agentic AI/LLM - Led Textile 3D Product Portfolio Management",
  "Gen AI – led Health Records Management Platform",
  "Gen AI / LLM – Led Document Information Intelligence",
  "Gen AI – led Social Media Analytics",
];

const ProductsZodha = () => {
  const navigate = useNavigate();

  const handleTitleClick = (title) => {
    navigate("/zodhagpt", { state: { selectedTitle: title } });
  };

  return (
    <div className="products-container">
      <h2 className="products-heading">ZodhaGpt Products Pages List</h2>
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

export default ProductsZodha;
