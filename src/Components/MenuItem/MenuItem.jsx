import React, { useContext } from "react";
import "./MenuItem.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { useNotification } from "../../Context/NotificationContext";

export const MenuItem = (props) => {
  const { addToCart, getTotalCartItems } = useContext(ShopContext);
  const { addNotification } = useNotification();

  const handleLogin = () => {
    const totalItems = getTotalCartItems();
    if (totalItems === 10) {
      addNotification("Your cart is full");
    } else {
      addNotification(`You added ${props.name} to the cart`);
    }
  };

  return (
    <div className="menuitem">
      <Link to={`/SweetLife/product/${props.id}`}>
        <img src={props.image} alt="" />
      </Link>
      <div className="menuitem-content">
        <div className="menuitem-text">
          <p>{props.name}</p>
          <div className="item-price">${props.price}</div>
        </div>
        <div className="menuitem-btn">
          <button
            onClick={() => {
              addToCart(props.id);
              handleLogin();
            }}
          >
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
