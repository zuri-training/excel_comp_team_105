import React from "react";
import "./input.css";

const Input = ({ name, type, placeholder, handleChange }) => {
  let capitalized = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <div className="input-container">
      <label htmlFor={name}>{capitalized}</label>
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
