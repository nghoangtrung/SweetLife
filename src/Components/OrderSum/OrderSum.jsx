import React, { useContext } from "react";
import "./OrderSum.css";
import { ShopContext } from "../../Context/ShopContext";
import { Link } from "react-router-dom";

export const OrderSum = ({ handleSubmit, formData }) => {
  const { getTotalCartItems, getTotalCartAmount, removeAllItemFormCart } =
    useContext(ShopContext);

  return (
    <div className="ordersum">
      <h3>Order Summary</h3>
      <h4>
        Delivering Items (
        <span className="ordersum-quanity">{getTotalCartItems()}</span>)
      </h4>
      <div className="ordersum-calculation">
        <div className="ordersum-calculation-box">
          <div className="ordersum-calculation-subtotal">
            <p>Sub-total:</p>
            <p>${(getTotalCartAmount() / 1.08).toFixed(2)}</p>
          </div>
          <hr className="hr-subtotal" />
          <div className="ordersum-calculation-subtotal">
            <p>VAT :</p>
            <p>8%</p>
          </div>
        </div>

        <hr className="hr-total" />
        <div className="ordersum-calculation-total">
          <strong>Total:</strong>
          <p>${getTotalCartAmount()}</p>
        </div>
      </div>
      <div className="ordersum-location">
        <p>
          <strong>Delivering to:</strong> &nbsp;
          {formData.deliveryAddress}
        </p>
      </div>
      <div className="ordersum-button">
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
            removeAllItemFormCart();
          }}
        >
          Place Order
        </button>
        <Link to="/SweetLife">
          <button
            type="button"
            onClick={() => {
              removeAllItemFormCart();
            }}
          >
            Cancel
          </button>
        </Link>
      </div>
    </div>
  );
};
