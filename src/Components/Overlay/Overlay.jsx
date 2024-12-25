import React from "react";
import "./Overlay.css";
import { Link } from "react-router-dom";

export const Overlay = ({ toggleOverlay, overlayVisible }) => {
  const getMenuClass = (path) => {
    if (path === "/SweetLife") {
      return location.pathname === "/SweetLife" ? "active" : "";
    }
    return location.pathname.startsWith(path) ? "active" : "";
  };

  return (
    <div className={`overlay ${overlayVisible ? "show" : ""}`}>
      <div className="overlay-content">
        <button className="overlay-close" onClick={toggleOverlay}>
          <i className="fa-solid fa-x"></i>
        </button>
        <ul className="overlay-menu">
          <li>
            <Link
              to="/SweetLife"
              className={getMenuClass("/")}
              onClick={toggleOverlay}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/SweetLife/menu"
              className={getMenuClass("/menu")}
              onClick={toggleOverlay}
            >
              MENU
            </Link>
          </li>
          <li>
            <Link
              to="/SweetLife/order"
              className={getMenuClass("/order")}
              onClick={toggleOverlay}
            >
              ORDER
            </Link>
          </li>
          <li>
            <Link
              to="/SweetLife/franchise"
              className={getMenuClass("/franchise")}
              onClick={toggleOverlay}
            >
              FRANCHISE
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
