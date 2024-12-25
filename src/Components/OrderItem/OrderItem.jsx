import React from "react";
import "./OrderItem.css";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { useNotification } from "../../Context/NotificationContext";

export const OrderItem = () => {
  const {
    all_product,
    cartItems,
    removeFromCart,
    addToCart,
    removeAllFromCart,
    getTotalCartItems,
  } = useContext(ShopContext);

  const { addNotification } = useNotification();

  const handleLogin = () => {
    const totalItems = getTotalCartItems();
    if (totalItems === 10) {
      addNotification("Your cart is full");
    }
  };

  return (
    <div className="orderitem">
      {all_product.map((e, index) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={index}>
              <div className="orderitem-item">
                <div className="orderitem-item-image">
                  <img src={e.image} alt="" />
                </div>
                <div className="cart-item-text">
                  <h4>{e.name}</h4>
                  <p>${e.price}</p>
                  <div className="orderitem-item-quantity">
                    <i
                      className="fa-solid fa-minus"
                      onClick={() => {
                        removeFromCart(e.id);
                      }}
                    ></i>
                    <p>{cartItems[e.id]}</p>
                    <i
                      className="fa-solid fa-plus"
                      onClick={() => {
                        addToCart(e.id);
                        handleLogin();
                      }}
                    ></i>
                  </div>
                </div>
                <div className="orderitem-item-remove">
                  <i
                    className="fa-solid fa-x"
                    onClick={() => {
                      removeAllFromCart(e.id);
                    }}
                  ></i>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};
