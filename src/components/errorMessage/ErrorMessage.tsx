// src/components/ErrorMessage/ErrorMessage.tsx

import React from "react";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <div className="text-red-600 text-sm">{message}</div>
);

export { ErrorMessage };
