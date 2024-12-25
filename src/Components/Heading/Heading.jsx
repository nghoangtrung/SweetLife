import React from "react";
import "./Heading.css";
import { Link } from "react-router-dom";
import heading_brown from "../Assets/heading-chocolate.png";
import heading_blue from "../Assets/heading-blue.png";
import heading_green from "../Assets/heading-matcha.png";
import heading_pink from "../Assets/heading-pink.png";
import blue_button from "../Assets/Blue-btn.png";
import green_button from "../Assets/Matcha-btn.png";
import pink_button from "../Assets/Strawberry-btn.png";
import brown_button from "../Assets/Choco-btn.png";

export const Heading = ({ currentTheme, setTheme }) => {
  const themes = {
    blue: { button: blue_button, heading: heading_blue },
    green: { button: green_button, heading: heading_green },
    pink: { button: pink_button, heading: heading_pink },
    brown: { button: brown_button, heading: heading_brown },
  };

  const otherThemes = Object.keys(themes).filter(
    (theme) => theme !== currentTheme
  );
  return (
    <div className="heading">
      <div className="heading-left">
        <div className="left-up">
          <h1>Welcome to SweetLife</h1>
          <p>
            where every visit is a delightful journey through layers of
            sweetness and joy.
          </p>
        </div>
        <div className="left-down">
          {otherThemes.map((theme) => (
            <button key={theme} onClick={() => setTheme(theme)}>
              <img src={themes[theme].button} alt={`${theme} button`} />
            </button>
          ))}
        </div>
      </div>
      <div className="heading-center">
        <img
          src={themes[currentTheme].heading}
          alt={`${currentTheme} heading`}
        />
      </div>
      <div className="heading-right">
        <div className="right-up">
          <div className="right-up-header">
            <h2>100%</h2>
          </div>
          <p>
            Our ice cream is masterfully crafted in small batches, ensuring
            meticulous attention to detail and exceptional quality.
          </p>
        </div>

        <hr />

        <div className="right-down">
          <div className="right-up-header">
            <h2>10+</h2>
          </div>
          <p>We have different amazing flavour's to satisfy every craving.</p>
        </div>
        <div className="right-button">
          <Link to="/SweetLife/menu">
            <button>Order Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
