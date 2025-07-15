// import React from "react";

// interface FormHeaderProps {
//   title: string;
//   subtitle?: string;
//   className?: string;
// }

// const FormHeader: React.FC<FormHeaderProps> = ({
//   title,
//   subtitle,
//   className = "",
// }) => (
//   <div className={`mb-6 text-center ${className}`}>
//     <h2 className="text-2xl font-bold mb-1">{title}</h2>
//     {subtitle && <p className="text-gray-600 text-sm">{subtitle}</p>}
//   </div>
// );

// export default FormHeader;

import React from "react";

interface FormHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const FormHeader: React.FC<FormHeaderProps> = ({
  title,
  subtitle,
  className = "",
}) => (
  <div className={`mb-6 text-center ${className}`}>
    <h2 className="text-3xl font-bold text-gray-800 mb-2">{title}</h2>
    {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
  </div>
);

export default FormHeader;
