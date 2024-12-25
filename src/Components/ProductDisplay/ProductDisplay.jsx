import React, { useContext } from "react";
import "./ProductDisplay.css";
import { ShopContext } from "../../Context/ShopContext";
import { useNotification } from "../../Context/NotificationContext";

export const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart, getTotalCartItems } = useContext(ShopContext);
  const { addNotification } = useNotification();

  const handleLogin = () => {
    const totalItems = getTotalCartItems();
    if (totalItems === 10) {
      addNotification("Your cart is full");
    } else {
      addNotification(`You added ${product.name} to the cart`);
    }
  };

  return (
    <div className="product-display">
      <div className="product-display-left">
        <img src={product.image} alt="" />
      </div>
      <div className="product-display-right">
        <h3>{product.name}</h3>
        <div className="product-display-detail">
          <h4>Details</h4>
          <hr />
          <p>{product.description}</p>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
            handleLogin();
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};
