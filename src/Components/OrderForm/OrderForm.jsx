import React from "react";
import "./OrderForm.css";
import { InputField } from "../InputField/InputField";

export const OrderForm = ({ formData, setFormData, errors }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="orderform">
      <form className="orderform-form">
        <div>
          <InputField
            name="deliveryAddress"
            label="Delivery Address"
            value={formData.deliveryAddress}
            placeholder="Enter your delivery address"
            onChange={handleInputChange}
            error={errors.deliveryAddress}
          />
          <InputField
            name="billingAddress"
            label="Billing Address"
            value={formData.billingAddress}
            placeholder="Enter your billing address"
            onChange={handleInputChange}
            error={errors.billingAddress}
          />
          <div className="form-group">
            <InputField
              name="contactNumber"
              label="Contact Number"
              value={formData.contactNumber}
              placeholder="Enter your contact number"
              onChange={handleInputChange}
              error={errors.contactNumber}
            />
            <InputField
              name="postcode"
              label="Postcode"
              value={formData.postcode}
              placeholder="Enter your postcode"
              onChange={handleInputChange}
              error={errors.postcode}
            />
          </div>
          <InputField
            name="email"
            label="Email for Receipt"
            value={formData.email}
            placeholder="Enter your email"
            onChange={handleInputChange}
            error={errors.email}
          />
        </div>
      </form>
    </div>
  );
};
