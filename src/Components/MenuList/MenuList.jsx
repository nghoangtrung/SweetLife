import React from "react";
import "./MenuList.css";
import { Link } from "react-router-dom";

export const MenuList = () => {
  return (
    <div className="menulist">
      <ul>
        <Link to="/SweetLife/menu/signature_sundaes">
          <li>Signature Sundaes</li>
        </Link>
        <Link to="/SweetLife/menu/cable_carfait">
          <li>Cable Carfait™</li>
        </Link>
        <Link to="/SweetLife/menu/bake_shoppe">
          <li>Bake Shoppe</li>
        </Link>
        <Link to="/SweetLife/menu/shakin_frezin">
          <li>Shakin'n Freezin'</li>
        </Link>
        <Link to="/SweetLife/menu/ice_cream_scoops">
          <li>Ice Cream Scoops</li>
        </Link>
        <Link to="/SweetLife/menu/toppings">
          <li>Toppings</li>
        </Link>
        <Link to="/SweetLife/menu/kids_menu">
          <li>Kids Menu</li>
        </Link>
      </ul>
    </div>
  );
};
