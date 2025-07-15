// // src/components/loginForm/LoginForm.tsx

// import React from "react";
// import InputField from "../inputField/InputField";
// import { ErrorMessage } from "../errorMessage/ErrorMessage";
// import Button from "../button/Button";

// export interface FormField {
//   type: string;
//   id: string;
//   placeholder: string;
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }

// interface FormProps {
//   fields: FormField[];
//   onSubmit: (e: React.FormEvent) => void;
//   buttonText: string;
//   loading?: boolean;
//   error?: string;
//   success?: string;
//   children?: React.ReactNode;
//   buttonLoadingText?: string;
//   header?: React.ReactNode;
// }

// const Form: React.FC<FormProps> = ({
//   fields,
//   onSubmit,
//   buttonText,
//   loading = false,
//   error,
//   success,
//   children,
//   buttonLoadingText,
//   header,
// }) => {
//   return (
//     <div>
//       {header}
//       {error && <ErrorMessage message={error} />}
//       {success && <div className="text-green-600 text-sm">{success}</div>}
//       {children}
//       <form onSubmit={onSubmit} className="space-y-4">
//         {fields.map((field) => (
//           <InputField key={field.id} {...field} />
//         ))}
//         <Button
//           type="submit"
//           className="w-full py-2 bg-blue-600 text-white rounded-md"
//           disabled={loading}
//         >
//           {loading && buttonLoadingText ? buttonLoadingText : buttonText}
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default Form;

import React from "react";
import InputField from "../inputField/InputField";
import { ErrorMessage } from "../errorMessage/ErrorMessage";
import Button from "../button/Button";

export interface FormField {
  type: string;
  id: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface FormProps {
  fields: FormField[];
  onSubmit: (e: React.FormEvent) => void;
  buttonText: string;
  loading?: boolean;
  error?: string;
  success?: string;
  children?: React.ReactNode;
  buttonLoadingText?: string;
  header?: React.ReactNode;
  extra?: React.ReactNode; // <-- Add this line
}

const Form: React.FC<FormProps> = ({
  fields,
  onSubmit,
  buttonText,
  loading = false,
  error,
  success,
  children,
  buttonLoadingText,
  header,
  extra, // <-- Add this line
}) => {
  return (
    <div className="space-y-6 w-full max-w-sm mx-auto">
      {header}
      {error && <ErrorMessage message={error} />}
      {success && <div className="text-green-600 text-sm">{success}</div>}
      {children}
      <form onSubmit={onSubmit} className="space-y-4">
        {fields.map((field) => (
          <InputField key={field.id} {...field} />
        ))}
        {extra && extra} {/* <-- Render extra content above the button */}
        <Button
          type="submit"
          className="w-full py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-all"
          disabled={loading}
        >
          {loading && buttonLoadingText ? buttonLoadingText : buttonText}
        </Button>
      </form>
    </div>
  );
};

export default Form;
