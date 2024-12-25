import React from "react";
import "./SpeicalThank.css";
import logo_4p from "../Assets/Logo-4ps.png";
import logo_swensens from "../Assets/Swensens-Logo.png";

export const SpeicalThank = () => {
  return (
    <div className="specialthank">
      <h2>Speical Thanks To</h2>
      <div className="specialthank-images">
        <img src={logo_swensens} alt="" />
        <img src={logo_4p} alt="" />
      </div>
    </div>
  );
};
