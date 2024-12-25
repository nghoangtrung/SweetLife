import React from "react";
import banner_img from "../Assets/banner.jpeg";
import "./Banner.css";

export const Banner = () => {
  return (
    <div className="banner">
      <img src={banner_img} alt="Banner Image" />
    </div>
  );
};
