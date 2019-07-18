import React from "react";
import "../css/Bio.css";

export const Bio = ({ title, text, src, alt, phoneNumber, displayNumber }) => {
  return (
    <div className="bio">
      <h2 className="bio-title">{title}</h2>
      <p className="bio-text">{text}</p>
      <img className="bio-image" src={src} alt={alt} />
      <a className="bio-phone" href={`tel:${phoneNumber}`}>
        {displayNumber}
      </a>
    </div>
  );
};
