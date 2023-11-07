import React from "react";
import { XInput } from "./Global";

const Input = ({ style,type, name, placeholder, value, onChange, className,onBlur }) => {
  return (
    <XInput
    style={style}
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
