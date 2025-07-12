import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/ProductsZodha.css";

const titles = [
  "Agentic AI/LLM - Led Data Visualization Platform",
  "Agentic AI/LLM - Led Textile 3D Product Portfolio Management",
  "Gen AI – led Health Records Management Platform",
  "Gen AI / LLM – Led Document Information Intelligence",
  "Gen AI – led Social Media Analytics",
  "Multi–domain/Agentic AI Conversational Platform",
  "Multi–lingual Agentic AI led Administrative Operational Platform",
  "Multi–lingual Agentic AI led Business Development Platform",
  "Multi–lingual Agentic AI led HR Conversational Platform",
  "Multi–lingual Agentic AI led PSCM Conversational Platform",
  "Multi–lingual Agentic AI led Legal Conversational Platform",
  "Multi–lingual Agentic AI led Corporate Communications Conversational Platform",
  "Multi–lingual Agentic AI led Public Policy Conversational Platform",
];

const title = titles.sort();
console.log(titles);
const ProductsZodha = () => {
  const navigate = useNavigate();

  const handleTitleClick = (title) => {
    navigate("/zodhagpt", { state: { selectedTitle: title } });
  };

  return (
    <div className="products-container">
      <h2 className="products-heading">ZodhaGPT Product Pages List</h2>
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
        ⬅ Back to Login Page
      </button>

      <button
        onClick={() => navigate("/mainproduct")}
        style={{
          position: "absolute",
          top: "200px",
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
        Go to Landing Screen
      </button>
    </div>
  );
};

export default ProductsZodha;
