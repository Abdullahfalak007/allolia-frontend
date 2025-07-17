import React from "react";
import { FormHeaderProps } from "../../constants/types";

const FormHeader: React.FC<FormHeaderProps> = ({
  title,
  subtitle,
  className = "",
}) => (
  <div className={`mb-6 text-left ${className}`}>
    <h2 className="text-3xl font-bold text-gray-800 mb-2">{title}</h2>
    {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
  </div>
);

export default FormHeader;
