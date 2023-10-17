import React from "react";
import { XInput } from "./Global";

const Input = ({ type, name, placeholder, value, onChange, className,onBlur }) => {
  return (
    <XInput
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className={`outline-none ${className}`}
    />
  );
};

export default Input;
