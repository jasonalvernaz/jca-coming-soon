import React from "react";
import "../css/Bio.css";

export const Bio = ({ title, text }) => {
  return (
    <div className="bio">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};
