import React from "react";
import { ButtonProps } from "../../constants/types";

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
