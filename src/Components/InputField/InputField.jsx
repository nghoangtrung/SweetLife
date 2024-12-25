import React from "react";
import "./InputField.css";

export const InputField = ({
  type = "text",
  id,
  name,
  value = "",
  placeholder = "",
  label,
  onChange,
  error,
}) => {
  return (
    <div className={`inputfield ${type === "radio" ? "inputfield-radio" : ""}`}>
      {label && (
        <label htmlFor={id} className="inputfield-label">
          {label}
        </label>
      )}

      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />

      {error && (
        <div className="inputfield-error">
          <i className="fa-solid fa-circle-exclamation"></i> {error}
        </div>
      )}
    </div>
  );
};
