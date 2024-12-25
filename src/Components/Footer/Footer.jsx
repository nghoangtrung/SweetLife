import React, { useState } from "react";
import "./Footer.css";
import logo from "../Assets/Logo.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="" />
      </div>
      <div className="footer-container">
        <div>
          <ul className="footer-menu">
            <li
              onClick={() => {
                setMenu("home");
                window.scrollTo({
                  top: 0,
                });
              }}
            >
              <Link to="/SweetLife">Home</Link>
            </li>
            <li
              onClick={() => {
                setMenu("menu");
                window.scrollTo({
                  top: 0,
                });
              }}
            >
              <Link to="/SweetLife/menu">Menu</Link>
            </li>
            <li
              onClick={() => {
                setMenu("order");
                window.scrollTo({
                  top: 0,
                });
              }}
            >
              <Link to="/SweetLife/order">Order</Link>
            </li>
            <li
              onClick={() => {
                setMenu("contact");
                window.scrollTo({
                  top: 0,
                });
              }}
            >
              <Link to="/SweetLife/franchise">Franchise</Link>
            </li>
          </ul>
        </div>
        <div className="footer-social-icons">
          <a
            href="https://www.facebook.com/profile.php?id=100010594336098"
            aria-label="Facebook"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://github.com/ngtrungg" aria-label="Instagram">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.instagram.com/_.nghtrung/" aria-label="Twiiter">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://www.youtube.com/channel/UCMtocow1FhB8wIwhf-7Wx6w"
            aria-label="Youtube"
          >
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>
      <hr />
      <div className="footer-text">
        <div className="footer-text-left">
          <p>Privacy Policy</p>
          <p>Terms And Condition</p>
          <p>Cookie Settings</p>
        </div>
        <div className="footer-text-right">
          <p>Copyright &copy;2024</p>
        </div>
      </div>
    </div>
  );
};
