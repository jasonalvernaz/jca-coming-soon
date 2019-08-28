import React from "react";
import "../css/Links.css";

export const Links = ({ links }) => {
  return (
    <div className="social-links">
      {links.map((link, i) => {
        return (
          <a
            className="social-link"
            key={i}
            target="_blank"
            rel="noopener noreferrer"
            href={link.url}
          >
            <svg className="social-logo" viewBox="0 0 300 300">
              <use href={link.logo + "#icon"} />
            </svg>
            <span className="social-text">{link.text}</span>
          </a>
        );
      })}
    </div>
  );
};
