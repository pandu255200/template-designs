import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/styles/history.css";

const History = () => {
  const navigate = useNavigate();
  const [recordings, setRecordings] = useState([]);

  useEffect(() => {
    const savedRecordings = JSON.parse(localStorage.getItem("recordings")) || [];
    setRecordings(savedRecordings);
  }, []);

 
  const deleteRecording = (index) => {
    const updatedRecordings = recordings.filter((_, i) => i !== index);
    setRecordings(updatedRecordings);
    localStorage.setItem("recordings", JSON.stringify(updatedRecordings));
  };

  return (
    <div className="history-container">
      <h2 className="history-heading">Recording History</h2>

      {recordings.length === 0 ? (
        <p>No recordings found.</p>
      ) : (
        <ul className="history-list">
          {recordings.map((rec, index) => (
            <li key={index} className="history-item">
              <span>{rec.name}</span>
              <video src={rec.url} controls className="history-video" />
              <div className="action-buttons">
                <a href={rec.url} download={`recording_${index + 1}.webm`} className="download-link">
                  Download
                </a>
                <button className="delete-button" onClick={() => deleteRecording(index)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <button className="back-button" onClick={() => navigate(-1)}>
        ⬅ Back
      </button>
    </div>
  );
};

export default History;
