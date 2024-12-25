import React from "react";
import "./EmptyCart.css";
import { Link } from "react-router-dom";
import empty_cart from "../Assets/Empty Cart.jpeg";

export const EmptyCart = () => {
  return (
    <div className="emptycart">
      <div className="emptycart-box">
        <h2>Your cart is empty</h2>
        <img src={empty_cart} alt="" />
        <p>Please add items to your cart to proceed</p>
        <Link to="/SweetLife">
          <button>Back to Home</button>
        </Link>
      </div>
    </div>
  );
};
