import React from "react";
import "../css/Bio.css";

export const Bio = ({ title, text }) => {
  return (
    <div className="bio">
      <h2 className="bio-title">{title}</h2>
      <p className="bio-text">{text}</p>
    </div>
  );
};
