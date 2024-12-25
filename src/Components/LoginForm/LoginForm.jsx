import React, { useState } from "react";
import "./LoginForm.css";
import { InputField } from "../InputField/InputField";
import { useNavigate } from "react-router-dom";
import { useNotification } from "../../Context/NotificationContext";
import { validate } from "../Assets/validate";

export const LoginForm = () => {
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    username: "",
    password: "",
    email: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.lastName && activeIndex === 0) {
      newErrors.lastName = " Please enter your last name.";
    }
    if (!formData.firstName && activeIndex === 0) {
      newErrors.firstName = " Please enter your first name.";
    }
    if (!formData.username) {
      newErrors.username = " Please enter your username.";
    }
    if (!formData.email) {
      newErrors.email = "Please enter your email address.";
    } else if (!validate("email", formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.password) {
      newErrors.password = " Please enter your password.";
    } else if (!validate("password", formData.password)) {
      newErrors.password = "Invalid password format.";
    }
    if (!formData.phoneNumber && activeIndex === 0) {
      newErrors.phoneNumber = "Please enter your contact number.";
    } else if (!validate("phone", formData.phoneNumber) && activeIndex === 0) {
      newErrors.phoneNumber = "Invalid phone number. Must be 10 digits.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data Submitted:", formData);
      handleLogin();
      navigate("/SweetLife");
    } else {
      console.log("Form validation failed.");
    }
  };

  const { addNotification } = useNotification();

  const handleLogin = () => {
    if (activeIndex === 0) {
      addNotification(`Welcome to SweetLife`);
    } else {
      addNotification(`Welcome back ${formData.username}`);
    }
  };

  return (
    <div className="login-signup">
      <form className="form" onSubmit={handleSubmit}>
        <h3>Welcome to SweetLife</h3>
        <p>Tell us a little about yourself</p>

        {activeIndex === 0 && (
          <div className="form-group">
            <InputField
              name="lastName"
              label="Last Name"
              value={formData.lastName}
              placeholder="Enter your last name"
              onChange={handleChange}
              error={errors.lastName}
            />
            <InputField
              name="firstName"
              label="First Name"
              value={formData.firstName}
              placeholder="Enter your first name"
              onChange={handleChange}
              error={errors.firstName}
            />
          </div>
        )}

        <InputField
          name="username"
          label="Username"
          value={formData.username}
          placeholder="Enter your username"
          onChange={handleChange}
          error={errors.username}
        />
        <InputField
          name="email"
          type="email"
          label="Email Address"
          value={formData.email}
          placeholder="Enter your email"
          onChange={handleChange}
          error={errors.email}
        />
        <InputField
          name="password"
          type="password"
          label="Password"
          value={formData.password}
          placeholder="Enter your password"
          onChange={handleChange}
          error={errors.password}
        />
        {activeIndex === 0 && (
          <p className="form-password">
            Your password must be at least 8 characters long, contain at least
            one uppercase letter, one lowercase letter, and one number.
          </p>
        )}
        {activeIndex === 0 && (
          <InputField
            name="phoneNumber"
            label="Phone Number"
            value={formData.phoneNumber}
            placeholder="Enter your phone number"
            onChange={handleChange}
            error={errors.phoneNumber}
          />
        )}

        <button type="submit" className="form-submit">
          {activeIndex === 0 ? "Sign Up" : "Log In"}
        </button>

        <p className="form-toggle">
          {activeIndex === 0
            ? "Already have an account? "
            : "Don't have an account? "}
          <span onClick={() => setActiveIndex(activeIndex === 0 ? 1 : 0)}>
            {activeIndex === 0 ? "Log in" : "Sign up"}
          </span>
        </p>
      </form>
    </div>
  );
};
