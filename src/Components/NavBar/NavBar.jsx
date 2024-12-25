import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Logo-2.png";
import "./NavBar.css";
import { ShopContext } from "../../Context/ShopContext";

export const NavBar = ({ toggleOverlay }) => {
  const location = useLocation();
  const { getTotalCartItems } = useContext(ShopContext);

  const getMenuClass = (path) => {
    if (path === "/SweetLife") {
      return location.pathname === "/SweetLife" ? "active" : "";
    }
    return location.pathname.startsWith(path) ? "active" : "";
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="SweetLife Logo" />
      </div>
      <ul className="nav-menu">
        <li>
          <Link to="/SweetLife" className={getMenuClass("/SweetLife")}>
            Home
            <hr />
          </Link>
        </li>
        <li>
          <Link
            to="/SweetLife/menu"
            className={getMenuClass("/SweetLife/menu")}
          >
            Menu
            <hr />
          </Link>
        </li>
        <li>
          <Link
            to="/SweetLife/order"
            className={getMenuClass("/SweetLife/order")}
          >
            Order
            <hr />
          </Link>
        </li>
        <li>
          <Link
            to="/SweetLife/franchise"
            className={getMenuClass("/SweetLife/franchise")}
          >
            Franchise
            <hr />
          </Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <div className="nav-check nav-container" onClick={toggleOverlay}>
          <i className="fa-solid fa-bars"></i>
        </div>
        <Link
          to="/SweetLife/login"
          className={getMenuClass("/SweetLife/login")}
        >
          <div className="nav-login nav-container">
            <i className="fa-regular fa-user"></i>
          </div>
        </Link>
        {location.pathname === "/SweetLife/order" ? (
          <></>
        ) : (
          <Link
            to="/SweetLife/order"
            className={getMenuClass("/SweetLife/order")}
          >
            <div className="nav-cart nav-container">
              <i className="fa-solid fa-cart-shopping"></i>
              <p>{getTotalCartItems()}</p>
            </div>
          </Link>
        )}
      </div>
      <hr />
    </div>
  );
};
