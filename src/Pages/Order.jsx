import React, { useContext, useState } from "react";
import "./CSS/Order.css";
import { OrderItem } from "../Components/OrderItem/OrderItem";
import { OrderForm } from "../Components/OrderForm/OrderForm";
import { OrderSum } from "../Components/OrderSum/OrderSum";
import { EmptyCart } from "../Components/EmptyCart/EmptyCart";
import { ShopContext } from "../Context/ShopContext";
import { validate } from "../Components/Assets/validate";
import { useNavigate } from "react-router-dom";
import { useNotification } from "../Context/NotificationContext";

export const Order = () => {
  const { getTotalCartItems } = useContext(ShopContext);
  const navigate = useNavigate();
   const { addNotification } = useNotification();

  const [formData, setFormData] = useState({
    deliveryAddress: "",
    billingAddress: "",
    contactNumber: "",
    postcode: "",
    email: "",
    pickupLocation: "",
    paymentMethod: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.deliveryAddress) {
      newErrors.deliveryAddress = "Please enter your delivery address.";
    }
    if (!formData.billingAddress) {
      newErrors.billingAddress = "Please enter your billing address.";
    }
    if (!formData.contactNumber) {
      newErrors.contactNumber = "Please enter your contact number.";
    } else if (!validate("phone", formData.contactNumber)) {
      newErrors.contactNumber = "Invalid phone number. Must be 10 digits.";
    }
    if (!formData.postcode) {
      newErrors.postcode = "Please enter your postcode.";
    } else if (!validate("postcode", formData.postcode)) {
      newErrors.postcode = "Postcode must be 4 digits.";
    }
    if (!formData.email) {
      newErrors.email = "Please enter your email address.";
    } else if (!validate("email", formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Form is valid if no errors
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Form Data Submitted:", formData);
      addNotification(`Your order has been successfully placed`);
      navigate("/SweetLife");
    } else {
      console.log("Form validation failed.");
    }
  };

  return (
    <div className="order">
      <div className="order-content">
        <h2>My Order</h2>
        <div className="order-content-box">
          <div className="order-list">
            <h3>Products Detail</h3>
            {getTotalCartItems() === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <OrderItem />
            )}
          </div>
          <hr />
          <div className="order-form">
            <OrderForm
              formData={formData}
              setFormData={setFormData}
              errors={errors}
            />
          </div>
        </div>
      </div>
      <div className="order-summary">
        <OrderSum formData={formData} handleSubmit={handleSubmit}/>
      </div>
      {getTotalCartItems() === 0 ? <EmptyCart /> : <></>}
    </div>
  );
};
