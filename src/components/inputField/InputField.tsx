// src/components/InputField/InputField.tsx

import React from "react";
import { InputFieldProps } from "../../constants/types";

const InputField: React.FC<InputFieldProps> = ({
  type,
  id,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {placeholder}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
