import React from "react";
import { XInput } from "./Global";

const Input = ({ type, name, placeholder, value, onChange, className }) => {
  return (
    <XInput
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`outline-none ${className}`}
    />
  );
};

export default Input;
