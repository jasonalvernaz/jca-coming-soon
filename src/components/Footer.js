import React from "react";
import "../css/Footer.css";

export const Footer = ({ heartImage, heartText, cityImage, cityText }) => {
  return (
    <div className="footer">
      <p className="footer-text">
        Made with <img className="heart" src={heartImage} alt={heartText} /> in{" "}
        <img className="city" src={cityImage} alt={cityText} />
      </p>
    </div>
  );
};
